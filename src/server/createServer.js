const restify = require('restify');

const cors = () => {
  return (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Accept-Version');
    res.setHeader('Access-Control-Max-Age', '1000');

    next();
  };
};

const createServer = () => {
  const server = restify.createServer({
    name: 'mypoedb',
    version: '1.0.0',
  });

  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.bodyParser());
  server.use(restify.plugins.throttle({ burst: 10, rate: 1, ip: true }));

  // enable cors, see https://github.com/restify/node-restify/issues/296
  server.use(cors());
  server.opts('/.*/', (req, res, next) => {
    res.send(200);
    return next();
  });

  return server;
};

module.exports = createServer;
