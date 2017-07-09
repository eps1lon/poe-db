const fs = require('fs');
const path = require('path');

const MysqlSchema = require('../src/MysqlSchema');

const specification_file = fs.readFileSync(
  path.join(__dirname, '../data/dat.specification.json'),
);

const specification = JSON.parse(specification_file);
const schema = new MysqlSchema(specification.dats);

process.stdout.write(schema.createAllQuery());
