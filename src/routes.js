const router = require('express').Router();

const controller = require('./controller');

const usage = (req, res) =>
  res.json({
    usage: {
      url: '/(simple|scoped|describe)',
      params: 'JSONB object',
    },
  });

module.exports = {
  router: models => {
    router.get('/', usage);

    const { describe, find, modelsController, scoped } = controller(models);

    // more like an alias for /describe/ and /find/ which corresponds
    // to the index
    router.get('/models', modelsController);

    router.get('/describe/:model_name', describe);

    // model name can be plural => many, or singular => one
    router.get('/find/:model_name/:id?', find);

    router.get('/scoped/:scope_alias', scoped);

    return router;
  },
  usage,
};
