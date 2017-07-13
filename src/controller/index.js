const { usage } = require('../routes');
const { nonCircularAssociations } = require('../model/util');

module.exports = models => async (req, res) => {
  const { params: { model } } = req;

  if (model === undefined) {
    usage(req, res);
  } else {
    if (models[model] === undefined) {
      res.json({ error: `${model} does not exist` });
    } else {
      const non_circular_associations = nonCircularAssociations(models[model]);

      const results = models[model].findAll({
        attributes: JSON.parse(req.query.attributes || 0) || undefined,
        where: JSON.parse(req.query.where || '{}'),
        include: non_circular_associations,
      });

      res.json(await results);
    }
  }
};
