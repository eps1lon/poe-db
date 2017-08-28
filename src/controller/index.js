const custom = require('./custom');
const describe = require('./describe');
const find = require('./find');
const modelsController = require('./models');
const scoped = require('./scoped');

module.exports = models => {
  return {
    custom: custom(models),
    describe: describe(models),
    find: find(models),
    modelsController: modelsController(models),
    scoped: scoped(models),
  };
};
