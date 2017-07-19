const router = require('express').Router();

const controller = require('./controller');

const usage = (req, res) =>
  res.json({ usage: { url: '/:model', params: 'JSONB object' } });

module.exports = {
  router: models => {
    router.get('/', usage);

    // model name can be plural => many, or singular => one
    router.get('/:model_name/:id?', controller(models));

    return router;
  },
  usage,
};
