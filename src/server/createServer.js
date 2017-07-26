const restify = require('restify');

const createServer = () => {
  const server = restify.createServer({
    name: 'mypoedb',
    version: '1.0.0',
  });

  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.bodyParser());
  server.use(restify.plugins.throttle({ burst: 10, rate: 5, ip: true }));

  return server;
};

module.exports = createServer;
