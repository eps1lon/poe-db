const fs = require('fs');
const path = require('path');

const { throwOnError } = require('../../src/util');
const SequelizeSchema = require('../../src/model/SequelizeSchema');

const { createOrm } = require('../../src/db');
const { init } = require('../../src/models/');

const MIGRATIONS_PATH = path.join(__dirname, '../../src/migrations');
const SCHEMA_PATH = path.join(MIGRATIONS_PATH, 'schema.json');
const PREV_SCHEMA_PATH = path.join(MIGRATIONS_PATH, 'prev-schema.json');

const backupSchema = () => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(SCHEMA_PATH)) {
      fs
        .createReadStream(SCHEMA_PATH)
        .on('error', () => reject())
        .pipe(
          fs
            .createWriteStream(PREV_SCHEMA_PATH)
            .on('error', () => reject())
            .on('close', () => resolve()),
        );
    } else {
      resolve();
    }
  });
};

// backup old if exists
backupSchema()
  .then(() => {
    const sequelize = createOrm();
    const models = init(sequelize);

    const full_schema = {};

    for (const [model_name, model] of Object.entries(models)) {
      const schema = new SequelizeSchema(model);

      full_schema[model_name] = schema.toJSON();
    }

    fs.writeFileSync(
      path.join(MIGRATIONS_PATH, 'schema.json'),
      JSON.stringify(full_schema, null, 2),
      throwOnError(),
    );
  })
  .catch(err => {
    throw err;
  });
