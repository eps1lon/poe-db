const _ = require('lodash');
const { NotFoundError } = require('restify-errors');

const { describeByName, describe, isJoinModel } = require('../model/util');

// document behavior in README.md
module.exports = models => async (req, res, next) => {
  const { params: { model_name } } = req;

  const description = describeByName(models, model_name);

  if (model_name === '') {
    res.json(
      _.mapValues(models, model => {
        if (isJoinModel(model)) {
          return undefined; // filtered by json parser
        } else {
          return describe(model);
        }
      }),
    );
    next();
  } else if (description === undefined) {
    next(
      new NotFoundError(
        `'${model_name}' not found. Be sure to provide the model name as singular.`,
      ),
    );
  } else {
    res.json({ description });
    next();
  }
};
