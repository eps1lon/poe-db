const router = require('express').Router();

const controller = require('./controller');

const usage = (req, res) =>
  res.json({ usage: { url: '/:model', params: 'JSONB object' } });

module.exports = {
  router: models => {
    router.get('/', usage);
    router.get('/:model_name/:where?', controller(models));

    return router;
  },
  usage,
};
