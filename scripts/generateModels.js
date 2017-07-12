const fs = require('fs');
const path = require('path');
const generate = require('babel-core').transformFromAst;

const { entriesToObj, throwOnError } = require('../src/util');
const SequelizeModel = require('../src/model/SequelizeModel');

const spec = require('../data/spec.json');

const writeAst = async model => {
  const ast = model.ast();

  fs.writeFile(
    path.join(__dirname, '../src/models/', model.name() + '.js'),
    generate(ast).code,
    throwOnError(),
  );
};

for (const [name, props] of Object.entries(spec)) {
  const model = new SequelizeModel(name, props);

  writeAst(model);

  break;
}
