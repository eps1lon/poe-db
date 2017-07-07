const fs = require('fs');
const path = require('path');

const nearley = require('nearley');
const grammar = require('../data/dat.specification.js');

const { version } = require('yargs').argv;

if (version === undefined) {
  throw new Error(`usage: yarn run script -- --version=VERSION`);
}

const DAT_FILE = path.join(__dirname, '../data/dat.specification.ini');
const OUT_FILE = path.join(__dirname, '../data/dat.specification.json');

const definitions_file = fs.readFileSync(DAT_FILE);

const parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);

parser.feed(definitions_file.toString());

fs.writeFileSync(
  OUT_FILE,
  JSON.stringify({ version, dats: parser.results[0] }, null, 2),
);
