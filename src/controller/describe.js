const _ = require('lodash');

const { describe } = require('../model/util');

const usage = (req, res) => {
  res.json({
    usage: {
      url: '/:model_name',
      params: {
        model_name: 'the name of the model in singular',
      },
    },
  });
};

module.exports = models => async (req, res) => {
  const { params: { model_name } } = req;

  const description = describe(models, model_name);
  if (description === undefined) {
    usage(req, res);
  } else {
    res.json({ description });
  }
};
