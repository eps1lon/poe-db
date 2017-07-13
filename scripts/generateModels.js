const fs = require('fs');
const path = require('path');
const generate = require('babel-core').transformFromAst;

const { entriesToObj, throwOnError } = require('../src/util');
const SequelizeModel = require('../src/model/SequelizeModel');

const spec = require('../data/spec.json');

const writeAst = async model => {
  const ast = model.ast();

  try {
    fs.writeFile(
      path.join(__dirname, '../src/models/', model.name() + '.js'),
      generate(ast).code,
      throwOnError(),
    );
  } catch (e) {
    fs.writeFile('./.debug.json', JSON.stringify(ast, null, 2), throwOnError());
  }
};

// TODO remove example
// remeber to provide all associations in the example
const example = Object.keys(
  spec,
); /*[
  'AchievementItems',
  'Achievements',
  'AchievementSetsDisplay',
].map(name => name + '.dat');//*/

for (const [name, props] of Object.entries(spec).filter(
  ([name]) => example.indexOf(name) !== -1,
)) {
  const model = new SequelizeModel(name, props);

  writeAst(model);
}
