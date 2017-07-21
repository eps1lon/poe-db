const { singularize } = require('inflection');

const { usage } = require('../routes');
const { prepareAssociationsForInclude } = require('../model/util');

const intOrUndefined = val => {
  const number = parseInt(val, 10);

  if (Number.isNaN(number)) {
    return undefined;
  } else {
    return number;
  }
};

const findAll = (where = {}) => ({ model, attributes, offset, limit }) => {
  return model.findAll({
    attributes,
    where,
    include: prepareAssociationsForInclude(model),
    offset,
    limit,
  });
};

const findOne = id => ({ model, attributes, offset, limit }) => {
  return model.findById(id, {
    attributes,
    include: prepareAssociationsForInclude(model),
    offset,
    limit,
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

      const { attributes, where, offset, limit } = req.query;

      let find;
      // /Model/:id
      if (singular === model_name) {
        find = findOne(id);
      } else {
        // /Models?params
        find = findAll(where);
      }

      const find_arguments = {
        model,
        attributes,
        offset: intOrUndefined(offset),
        limit: intOrUndefined(limit),
      };

      const warnings = [];
      if (
        find_arguments.offset === undefined &&
        find_arguments.offset !== offset
      ) {
        warnings.push(
          'ignoring offset because we couldnt figure out what number it represents',
        );
      }

      if (
        find_arguments.limit === undefined &&
        find_arguments.limit !== limit
      ) {
        warnings.push(
          'ignoring limit because we couldnt figure out what number it represents',
        );
      }

      const result = await find(find_arguments);

      res.json({ result, warnings });
    }
  }
};
