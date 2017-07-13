const fs = require('fs');
const path = require('path');

const { entriesToObj, throwOnError } = require('../src/util');

const pypoe_content = path.join(__dirname, '../data/content.json');
const spec_out = path.join(__dirname, '../data/spec.json');
const records_out = path.join(__dirname, '../data/records.json');

const content = require(pypoe_content);

const entriesToObjWithNameAsKey = entries =>
  entriesToObj(
    entries.map(entry => [
      entry.name,
      // copy entry and remove name prop
      Object.assign({}, entry, { name: undefined }),
    ]),
  );

const spec = entriesToObj(
  content.map(row => [
    row.filename,
    {
      fields: entriesToObjWithNameAsKey(row.header),
      virtual_fields: row.virtual_header,
    },
  ]),
);
fs.writeFile(spec_out, JSON.stringify(spec, null, 2), throwOnError());

fs.writeFile(
  records_out,
  JSON.stringify(
    entriesToObj(content.map(row => [row.filename, row.data])),
    null,
    2,
  ),
  throwOnError(),
);
