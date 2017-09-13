const { NotAuthorizedError } = require('restify-errors');

/*
 * this is just a simple middleware to allow only users with api keys
 * this is not designed to be a secure solution with granular access control
 * however I opted for asimple key auth because this api is readonly
 * and I didn't need different priviliges. The local dev environment is enough
 * to gain more access
 */
module.exports = verifyToken => (req, res, next) => {
  const token = req.headers.authorization;
  if (!verifyToken(token)) {
    next(new NotAuthorizedError());
  } else {
    // everything is fine
    next();
  }
};
