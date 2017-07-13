const fs = require('fs');
const path = require('path');

module.exports = sequelize => {
  // define
  const models = fs
    .readdirSync(__dirname)
    .filter(name => name !== 'index.js')
    .reduce((models, model_file) => {
      const model = sequelize.import(path.join(__dirname, model_file));

      models[model.name] = model;

      return models;
    }, {});

  // link assoc

  for (const model of Object.values(models)) {
    model.associate(models);
  }

  return models;
};
