const fs = require('fs');
const path = require('path');
const format = require('prettier-eslint');
const generate = require('babel-core').transformFromAst;

const Migration = require('../../../src/model/migration/SequelizeMigration');
const MigrationAst = require('../../../src/model/migration/MigrationAst');
const game_version = require('../../../src/models/version');

const MIGRATION_PATH = path.join(__dirname, '../../../src/migrations');

const withUUIDSuffix = (dir, prefix, extension, { pad_length }) => {
  const delim = '-';

  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const versions = files
          .map(filename => {
            const basename = path.basename(filename);
            if (basename.startsWith(prefix) && basename.endsWith(extension)) {
              return basename
                .replace(prefix + delim, '')
                .replace(extension, '')
                .match(/v(\d+)/)[1];
            } else {
              return null;
            }
          })
          .filter(filename => filename !== null && filename !== undefined)
          // numeric sort
          .sort((a, b) => a - b);

        const last_version = parseInt(versions[versions.length - 1] || 0, 10);

        const new_version = last_version + 1;

        resolve(
          [prefix, 'v' + String(new_version).padStart(pad_length, '0')].join(
            delim,
          ) + extension,
        );
      }
    });
  });
};

const writeAst = async astable => {
  const ast = astable.ast();

  try {
    const prefix = `${game_version}`;
    const ext = `.js`;

    const filename = await withUUIDSuffix(MIGRATION_PATH, prefix, ext, {
      pad_length: 3,
    });

    const { code } = generate(ast);

    fs.writeFileSync(
      path.join(MIGRATION_PATH, filename),
      format({ text: code }),
    );

    return filename;
  } catch (err) {
    fs.writeFileSync('./.debug.json', JSON.stringify(ast, null, 2));
    throw err;
  }
};

const loadSchema = file => {
  return new Promise((resolve, reject) => {
    const filename = path.join(MIGRATION_PATH, file + '.json');

    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const schema = JSON.parse(data);
          resolve(schema);
        } catch (err) {
          reject(err);
        }
      }
    });
  });
};

console.log('loading schema');
Promise.all([loadSchema('schema'), loadSchema('prev-schema')])
  .then(([schema, prev_schema]) => {
    console.log('loaded schemas, generating ast');

    const migration = new Migration(prev_schema, schema);
    const ast = new MigrationAst(migration);

    const removed = migration.removeColumn();
    if (removed.length > 0) {
      console.warn(
        'some columns were removed. Please verify if those were not actually just renamed',
        removed.map(({ tableName, attributeName }) => ({
          tableName,
          attributeName,
        })),
      );
    }

    return writeAst(ast);
  })
  .then(() => {
    console.log('wrote ast');
  });
