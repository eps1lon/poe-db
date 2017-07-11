const fs = require('fs');
const path = require('path');

const { throwOnError } = require('../../src/util');
const MysqlSchema = require('../../src/MysqlSchema');
const specification = require('../../data/spec.json');

const schema = new MysqlSchema(specification);

fs.writeFile(
  path.join(__dirname, '../../data/schema.sql'),
  schema.createAllQuery(),
  throwOnError(),
);
