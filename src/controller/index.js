const { singularize } = require('inflection');

const { usage } = require('../routes');
const { prepareAssociationsForInclude } = require('../model/util');

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
