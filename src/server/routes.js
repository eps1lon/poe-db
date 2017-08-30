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

  const {
    custom,
    describe,
    find,
    modRepository,
    modelsController,
    scoped,
  } = controller(models);

  // more like an alias for /describe/ and /find/ which corresponds
  // to the index
  server.get('/models', modelsController);

  server.get('/custom/:model_name/:method', custom);

  server.get('/describe/:model_name', describe);

  // model name can be plural => many, or singular => one
  server.get('/find/:model_name/:id?', find);

  server.get('/scoped/:model_name/:scope_name', scoped);

  server.get('/mod-repository/:file', modRepository);

  return server;
};

module.exports = {
  mountRoutes: mountRoutes,
  usage,
};
