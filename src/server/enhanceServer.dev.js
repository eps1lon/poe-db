const morgan = require('morgan');
const path = require('path');

const createAccessKeyMiddleware = require('./access/createAccessKeyMiddleware');
const { withFile } = require('./access/allowKey');

const enhanceServer = server => {
  const logger = morgan('dev');
  server.use(logger);

  server.use(
    createAccessKeyMiddleware(
      withFile(path.join(__dirname, './access/keys.dev')),
    ),
  );
};

module.exports = enhanceServer;
