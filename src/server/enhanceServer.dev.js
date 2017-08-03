const morgan = require('morgan');

const enhanceServer = server => {
  const logger = morgan('dev');
  server.use(logger);
};

module.exports = enhanceServer;
