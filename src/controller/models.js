const { isJoinModel } = require('../model/util');

module.exports = models => (req, res) => {
  res.json(Object.keys(models).filter(name => !isJoinModel(name)));
};
