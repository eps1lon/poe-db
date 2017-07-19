const describe = require('./describe');
const find = require('./find');
const scoped = require('./scoped');

module.exports = models => {
  return {
    describe: describe(models),
    find: find(models),
    scoped: scoped(models),
  };
};
