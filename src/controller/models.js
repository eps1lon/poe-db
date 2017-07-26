const { isJoinModel } = require('../model/util');

module.exports = models => (req, res, next) => {
  res.json(Object.keys(models).filter(name => !isJoinModel(name)));

  next();
};
