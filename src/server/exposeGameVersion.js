const poe_version = require('../models/version');

module.exports = (req, res, next) => {
  // FIXME res.locals not defined http://expressjs.com/en/api.html#res.locals
  //res.locals.poe_version = poe_version;

  res.setHeader('Game-Client-Version', poe_version);

  next();
};
