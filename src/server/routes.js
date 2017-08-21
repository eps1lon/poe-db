const controller = require('../controller');

const usage = (req, res) =>
  res.json({
    usage: {
      url: '/(simple|scoped|describe)',
      params: 'JSONB object',
    },
  });

const mountRoutes = models => server => {
  server.get('/', usage);

  const { describe, find, modelsController, scoped } = controller(models);

  // more like an alias for /describe/ and /find/ which corresponds
  // to the index
  server.get('/models', modelsController);

  server.get('/describe/:model_name', describe);

  // model name can be plural => many, or singular => one
  server.get('/find/:model_name/:id?', find);

  server.get('/scoped/:model_name/:scope_name', scoped);

  return server;
};

module.exports = {
  mountRoutes: mountRoutes,
  usage,
};
