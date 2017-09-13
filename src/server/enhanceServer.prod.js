const morgan = require('morgan');
const path = require('path');
const restify = require('restify');

const createAccessKeyMiddleware = require('./auth/createAccessKeyMiddleware');
const { withFile } = require('./auth/allowKey');

const enhanceServer = server => {
  server.use(restify.plugins.throttle({ burst: 10, rate: 1, ip: true }));

  const logger = morgan('common');
  server.use(logger);

  server.use(
    createAccessKeyMiddleware(
      withFile(path.join(__dirname, './auth/keys.prod')),
    ),
  );
};

module.exports = enhanceServer;
