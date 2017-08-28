const { baseModelFiles } = require('./util');

const base = require(`./base`);
const expand = require(`./expansion`);
const addScopes = require(`./scope`);

module.exports = {
  baseModelFiles: baseModelFiles,
  init: sequelize => {
    const models = base(sequelize);

    // add scopes
    addScopes(models);

    // expand models
    expand(models);

    return models;
  },
};
