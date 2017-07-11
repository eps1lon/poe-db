const fs = require('fs');
const path = require('path');

const { entriesToObj, throwOnError } = require('../src/util');

const pypoe_content = path.join(__dirname, '../data/content.json');
const spec_out = path.join(__dirname, '../data/spec.json');
const records_out = path.join(__dirname, '../data/records.json');

const content = require(pypoe_content);

fs.writeFile(
  spec_out,
  JSON.stringify(
    entriesToObj(content.map(row => [row.filename, row.header])),
    null,
    2,
  ),
  throwOnError(),
);

fs.writeFile(
  records_out,
  JSON.stringify(
    entriesToObj(content.map(row => [row.filename, row.data])),
    null,
    2,
  ),
  throwOnError(),
);
