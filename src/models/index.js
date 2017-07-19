const { modelFiles } = require('./util');

const base = require('./base/');

module.exports = {
  modelFiles,
  init: sequelize => {
    const models = base(sequelize);

    // TODO add scopes

    return models;
  },
};
