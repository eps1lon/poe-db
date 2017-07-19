const { modelFiles } = require('../util');

module.exports = sequelize => {
  // define
  const models = modelFiles().reduce((models, model_file) => {
    const model = sequelize.import(model_file);

    models[model.name] = model;

    return models;
  }, {});

  // link assoc

  for (const model of Object.values(models)) {
    model.associate(models);
  }

  return models;
};
