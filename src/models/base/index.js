const { baseModelFiles } = require('../util');
const withBase = require('./base');

module.exports = sequelize => {
  // define
  const models = baseModelFiles().reduce((models, model_file) => {
    const model = sequelize.import(model_file);

    // apply composition
    withBase(model);

    models[model.name] = model;

    return models;
  }, {});

  // link assoc

  for (const model of Object.values(models)) {
    model.associate(models);
  }

  return models;
};
