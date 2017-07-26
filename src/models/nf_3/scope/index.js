const path = require('path');

const { modelFiles } = require('../../util');

module.exports = models => {
  for (const scope_file of modelFiles(__dirname)) {
    const model_name = path.basename(scope_file, '.js');
    const model = models[model_name];

    if (model !== undefined) {
      const scopes = require(scope_file)(models);

      for (const [name, scope] of Object.entries(scopes)) {
        model.addScope(name, scope, { overide: false });
      }
    }
  }

  // for chaining, would be nice to have it side-effect free
  // but the sequelize obj also includes a connection, 500+ models
  // so its prob better this way
  return models;
};
