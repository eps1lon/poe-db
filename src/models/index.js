const fs = require('fs');
const path = require('path');

const modelFiles = () =>
  fs
    .readdirSync(__dirname)
    .filter(name => name !== 'index.js')
    .map(file => path.join(__dirname, file));

module.exports = {
  modelFiles,
  init: sequelize => {
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
  },
};
