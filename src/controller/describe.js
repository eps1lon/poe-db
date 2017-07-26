const { NotFoundError } = require('restify-errors');

const { describe } = require('../model/util');

module.exports = models => async (req, res, next) => {
  const { params: { model_name } } = req;

  const description = describe(models, model_name);
  if (description === undefined) {
    next(
      new NotFoundError(
        `'${model_name}' not found. Be sure to provide the model name as singular.`,
      ),
    );
  } else {
    res.json({ description });
  }
};
