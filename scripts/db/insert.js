const { connection } = require('../../src/db');

const db = connection({ multipleStatements: true });
const specification = require('../../data/dat.specification.json');

const schema = new MysqlSchema(specification.dats);

db.connect();

for (const [dat_file, dat] of schema.spec) {
  // get csv
  // and import
}

db.end();
