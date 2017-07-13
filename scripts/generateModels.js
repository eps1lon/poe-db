const fs = require('fs');
const path = require('path');
const generate = require('babel-core').transformFromAst;
const format = require('prettier-eslint');

const { entriesToObj, throwOnError } = require('../src/util');
const SequelizeModel = require('../src/model/SequelizeModel');

const spec = require('../data/spec.json');

const writeAst = async model => {
  const ast = model.ast();

  fs.writeFile('./log.json', JSON.stringify(ast, null, 2), throwOnError());

  fs.writeFile(
    path.join(__dirname, '../src/models/', model.name() + '.js'),
    format({ text: generate(ast).code }),
    throwOnError(),
  );
};

for (const [name, props] of Object.entries(spec)) {
  const model = new SequelizeModel(name, props);

  writeAst(model);

  break;
}
