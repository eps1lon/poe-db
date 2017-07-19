const { singularize } = require('inflection');

const { usage } = require('../routes');
const { nonCircularAssociations } = require('../model/util');

const prepareAssociationsForInclude = model => {
  return nonCircularAssociations(model).map(name => {
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
};

const findAll = (model, where = {}, attributes = undefined) => {
  return model.findAll({
    attributes,
    where,
    include: prepareAssociationsForInclude(model),
  });
};

const findOne = (model, id, attributes = undefined) => {
  return model.findById(id, {
    attributes,
    include: prepareAssociationsForInclude(model),
  });
};

module.exports = models => async (req, res) => {
  const { params: { model_name, id } } = req;

  if (model_name === undefined) {
    usage(req, res);
  } else {
    const singular = singularize(model_name);

    if (models[singular] === undefined) {
      res.json({ error: `no model found for ${model_name}` });
    } else {
      const model = models[singular];

      const attributes = JSON.parse(req.query.attributes || 0) || undefined;

      let result = [];
      // /Model/:id
      if (singular === model_name) {
        result = await findOne(model, id, attributes);
      } else {
        // /Models?params
        // default to {} if not where given, passing undefined would throw
        const where = JSON.parse(req.query.where || '{}');
        result = await findAll(model, where, attributes);
      }

      res.json({ result });
    }
  }
};
