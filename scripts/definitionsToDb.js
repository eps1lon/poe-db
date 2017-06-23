const fs = require('fs');
const path = require('path');

const factory = require('../src/MysqlFactory');

const definitions_file = fs.readFileSync(
  path.join(__dirname, '../data/definitions.json'),
);

const definitions = JSON.parse(definitions_file);

for (const definition of definitions) {
  // pass
}
