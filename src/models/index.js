const { baseModelFiles } = require('./util');

const base = require(`./base`);
const addScopes = require(`./scope`);

module.exports = {
  baseModelFiles: baseModelFiles,
  init: sequelize => {
    const models = base(sequelize);

    // add scopes
    addScopes(models);

    return models;
  },
};
