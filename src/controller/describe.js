const _ = require('lodash');
const { NotFoundError } = require('restify-errors');

const { createCache, jsonResponder } = require('../server/cache');

const cache = createCache('describe');

const { describeByName, describe, isJoinModel } = require('../model/util');

// document behavior in README.md
module.exports = models => (req, res, next) => {
  const { params: { model_name } } = req;

  cache.wrap(
    model_name,
    next => {
      const description = describeByName(models, model_name);

      if (model_name === '') {
        next(
          null,
          _.mapValues(models, model => {
            if (isJoinModel(model)) {
              return undefined; // filtered by json parser
            } else {
              return describe(model);
            }
          }),
        );
      } else if (description === undefined) {
        next(
          new NotFoundError(
            `'${model_name}' not found. Be sure to provide the model name as singular.`,
          ),
        );
      } else {
        next(null, { description });
      }
    },
    jsonResponder(req, res, next),
  );
};
