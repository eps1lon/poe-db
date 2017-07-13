const fs = require('fs');
const path = require('path');
const generate = require('babel-core').transformFromAst;

const { entriesToObj, throwOnError } = require('../src/util');
const SequelizeModel = require('../src/model/SequelizeModel');

const spec = require('../data/spec.json');

const writeAst = async model => {
  const ast = model.ast();

  fs.writeFile('./log.json', JSON.stringify(ast, null, 2), throwOnError());

  fs.writeFile(
    path.join(__dirname, '../src/models/', model.name() + '.js'),
    generate(ast).code,
    throwOnError(),
  );
};

// TODO remove example
// remeber to provide all associations in the example
const example = [
  'AchievementItems',
  'Achievements',
  'AchievementSetsDisplay',
].map(name => name + '.dat');

for (const [name, props] of Object.entries(spec).filter(
  ([name]) => example.indexOf(name) !== -1,
)) {
  const model = new SequelizeModel(name, props);

  writeAst(model);
}
