const fs = require('fs');
const path = require('path');
const generate = require('babel-core').transformFromAst;

const { entriesToObj, throwOnError } = require('../src/util');
const Model = require('../src/model/SequelizeModel');

const models = require('../data/sequelize.json');

for (const [name, model_props] of models) {
  const model = new SequelizeModel(name, model_props);

  console.log(generate(model.ast()).code);

  break;
}
