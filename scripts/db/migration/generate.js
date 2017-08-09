const fs = require('fs');
const path = require('path');
const generate = require('babel-core').transformFromAst;

const { throwOnError } = require('../../../src/util');
const MigrationAst = require('../../../src/model/MigrationAst');

const MIGRATION_PATH = path.join(__dirname, '../../../src/migrations');

const fileNameWithTimestamp = basename => {
  return `${0}-${basename}`;
  return `${Date.now()}-${basename}`;
};

const writeAst = async migration => {
  const ast = migration.ast();

  try {
    fs.writeFile(
      path.join(MIGRATION_PATH, fileNameWithTimestamp('init.js')),
      generate(ast).code,
      throwOnError(),
    );
  } catch (e) {
    fs.writeFile('./.debug.json', JSON.stringify(ast, null, 2), throwOnError());
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

    const migration = new MigrationAst(prev_schema, schema);

    return writeAst(migration);
  })
  .then(() => {
    console.log('wrote ast');
  });
