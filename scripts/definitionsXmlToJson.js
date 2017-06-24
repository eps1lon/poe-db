const fs = require('fs');
const path = require('path');

const xmlToJs = require('xml2js');

const DAT_FILE = path.join(__dirname, '../data/DatDefinitions.xml');
const OUT_FILE = path.join(__dirname, '../data/records.json');

const definitions_file = fs.readFileSync(DAT_FILE);

const parser = new xmlToJs.Parser();

parser.parseString(definitions_file, (e, root) => {
  if (e) {
    throw e;
  }

  fs.writeFileSync(
    OUT_FILE,
    JSON.stringify(root.definitions.records[0].record, null, 2),
  );
});
