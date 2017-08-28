const path = require('path');

const { modelFiles } = require('../util');

module.exports = models => {
  for (const prototype_file of modelFiles(__dirname)) {
    const model_name = path.basename(prototype_file, '.js');
    const model = models[model_name];

    if (model !== undefined) {
      const expansion = require(prototype_file);

      expansion(model, models);
    }
  }

  return models;
};
