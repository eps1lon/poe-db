const { usage } = require('../routes');
const { nonCircularAssociations } = require('../model/util');

module.exports = models => async (req, res) => {
  const { params: { model_name } } = req;

  if (model_name === undefined) {
    usage(req, res);
  } else {
    if (models[model_name] === undefined) {
      res.json({ error: `${model_name} does not exist` });
    } else {
      const model = models[model_name];
      const non_circular_associations = nonCircularAssociations(
        model,
      ).map(name => {
        const association = model.associations[name];
        const include = {
          model: association.target,
          as: name,
        };

        // exclude the join model, it is after all an implementation detail
        if (association.associationType === 'BelongsToMany') {
          include.through = { attributes: [] };
        }

        return include;
      });

      const results = model.findAll({
        attributes: JSON.parse(req.query.attributes || 0) || undefined,
        where: JSON.parse(req.query.where || '{}'),
        include: non_circular_associations,
      });

      res.json({ results: await results });
    }
  }
};
