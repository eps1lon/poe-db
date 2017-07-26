const restify = require('restify');

const cors = () => {
  return (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');

    next();
  };
};

const createServer = () => {
  const server = restify.createServer({
    name: 'mypoedb',
    version: '1.0.0',
    handleUncaughtExceptions: true,
  });

  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.bodyParser());
  server.use(restify.plugins.throttle({ burst: 10, rate: 1, ip: true }));
  server.use(cors());

  return server;
};

module.exports = createServer;
