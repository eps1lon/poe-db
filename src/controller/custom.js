const { singularize } = require('inflection');
const _ = require('lodash');
const { NotFoundError, InternalServerError } = require('restify-errors');

const whitelist = {
  Mod: ['withZippedSpawnweights'],
};

module.exports = models => async (req, res, next) => {
  const { params: { model_name, method } } = req;
  const singular = singularize(model_name);

  const methodWhitelisted =
    _.isArray(whitelist[singular]) && whitelist[singular].includes(method);

  if (models[singular] === undefined) {
    next(new NotFoundError(`no model found for ${model_name}`));
  } else if (!methodWhitelisted) {
    next(new NotFoundError(`method ${method} not found in ${model_name}`));
  } else {
    const model = models[singular];

    let withMethod;
    try {
      withMethod = model[method]();
    } catch (err) {
      withMethod = null;

      console.warn(err);
      next(new InternalServerError('method is faulty'));
    }

    if (withMethod !== null) {
      res.json(await withMethod);
    }
  }
};
