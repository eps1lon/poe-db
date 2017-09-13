const restify = require('restify');

const exposeGameVersion = require('./exposeGameVersion');
const { mkdir: createCacheDir } = require('./cache');
const { mountRoutes } = require('./routes');

const cors = () => {
  return (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Accept-Version, Authorization',
    );
    res.setHeader('Access-Control-Max-Age', '1000');

    next();
  };
};

const createServer = models => {
  // mkdirp workaround
  createCacheDir();

  const server = restify.createServer({
    name: 'mypoedb',
    version: '1.0.0',
  });

  // enable cors, see https://github.com/restify/node-restify/issues/296
  server.use(cors());
  server.opts('/.*/', (req, res, next) => {
    res.send(200);
    return next();
  });

  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.bodyParser());

  if (process.env.NODE_ENV === 'production') {
    require('./enhanceServer.prod')(server);
  } else {
    require('./enhanceServer.dev')(server);
  }

  // custom middleware
  server.use(exposeGameVersion);

  mountRoutes(server, models);

  return server;
};

module.exports = createServer;
