const MysqlSchema = require('../../src/MysqlSchema');
const { connection } = require('../../src/db');

const db = connection({ multipleStatements: true });
const specification = require('../../data/spec.json');

const schema = new MysqlSchema(specification.dats);

db.connect();

for (const [dat_file, dat] in schema.spec) {
  // get csv
  // and import
}

db.end();
