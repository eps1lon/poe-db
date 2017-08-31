const custom = require('./custom');
const describe = require('./describe');
const find = require('./find');
const modelsController = require('./models');
const modRepository = require('./modRepository');
const recraft = require('./recraft');
const scoped = require('./scoped');

module.exports = models => {
  return {
    custom: custom(models),
    describe: describe(models),
    find: find(models),
    modRepository: modRepository(models),
    modelsController: modelsController(models),
    recraft: recraft(models),
    scoped: scoped(models),
  };
};
