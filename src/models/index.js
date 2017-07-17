const fs = require('fs');
const path = require('path');

const isModelFile = file => /[A-Z].*\.js$/.test(file);

const modelFiles = () => [
  ...fs
    .readdirSync(__dirname)
    .filter(isModelFile)
    .map(file => path.join(__dirname, file)),
  ...fs
    .readdirSync(path.join(__dirname, 'through'))
    .filter(isModelFile)
    .map(file => path.join(__dirname, 'through', file)),
];

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
