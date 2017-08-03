const morgan = require('morgan');
const restify = require('restify');

const enhanceServer = server => {
  server.use(restify.plugins.throttle({ burst: 10, rate: 1, ip: true }));

  const logger = morgan('common');
  server.use(logger);
};

module.exports = enhanceServer;
