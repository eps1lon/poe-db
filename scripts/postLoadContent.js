const fs = require('fs');
const path = require('path');

const { entriesToObj, throwOnError } = require('../src/util');

const pypoe_content = path.join(__dirname, '../data/content.json');
const spec_out = path.join(__dirname, '../data/spec.json');
const records_out = path.join(__dirname, '../data/records.json');

const ignoreDatFiles = new Set([
  // creates name collision since there exists LeagueFlags.dat and LeagueFlag.dat
  // the 1st one has no cols though so we ignore it
  'LeagueFlags.dat',
]);

const content = require(pypoe_content).filter(
  ({ filename }) => !ignoreDatFiles.has(filename),
);

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

for (const [name, props] of Object.entries(spec)) {
  for (const [field_name, field] of Object.entries(props.fields)) {
    if (/.Key(s)?[0-9]?$/.test(field_name) && !field.key) {
      console.warn(
        `${field_name} in ${name} might have a missing key information`,
      );
    } else if (/Key$/.test(field_name) && field.type.startsWith('ref|list|')) {
      console.warn(
        `possible violation of naming convention for ${field_name} in ${name}`,
      );
    }
  }
}

fs.writeFile(
  records_out,
  JSON.stringify(
    entriesToObj(content.map(row => [row.filename, row.data])),
    null,
    2,
  ),
  throwOnError(),
);
