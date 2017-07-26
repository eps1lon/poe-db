const restify = require('restify');

const createServer = () => {
  const server = restify.createServer({
    name: 'mypoedb',
    version: '1.0.0',
  });

  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.bodyParser());

  return server;
};

module.exports = createServer;
