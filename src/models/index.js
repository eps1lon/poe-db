const { baseModelFiles } = require('./util');

const base = require('./base/');

module.exports = {
  baseModelFiles,
  init: sequelize => {
    const models = base(sequelize);

    // TODO add scopes

    return models;
  },
};
