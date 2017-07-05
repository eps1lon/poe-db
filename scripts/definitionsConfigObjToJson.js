const fs = require('fs');
const path = require('path');

const nearley = require('nearley');
const grammar = require('../data/dat.specification.js');

const DAT_FILE = path.join(__dirname, '../data/dat.specification.ini');
const OUT_FILE = path.join(__dirname, '../data/dat.specification.json');

const definitions_file = fs.readFileSync(DAT_FILE);

const parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);

parser.feed(definitions_file.toString());

fs.writeFileSync(OUT_FILE, JSON.stringify(parser.results, null, 2));
