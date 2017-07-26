const { singularize } = require('inflection');
const { NotFoundError, InternalServerError } = require('restify-errors');

const { prepareAssociationsForInclude, safeOrder } = require('../model/util');

const intOrUndefined = val => {
  const number = parseInt(val, 10);

  if (Number.isNaN(number)) {
    return undefined;
  } else {
    return number;
  }
};

const intOrDefault = (val, otherwise) => {
  const number = intOrUndefined(val);
  if (number === undefined) {
    return otherwise;
  } else {
    return number;
  }
};

const findAll = (where = {}) => ({
  model,
  attributes,
  offset,
  limit,
  order,
}) => {
  return model.findAndCountAll({
    attributes,
    where,
    include: prepareAssociationsForInclude(model),
    offset,
    limit,
    order: safeOrder(order),
  });
};

const findOne = id => ({ model, attributes, offset, limit }) => {
  return (
    model
      .findById(id, {
        attributes,
        include: prepareAssociationsForInclude(model),
        offset,
        limit,
      })
      // imitate the returnval of findAndCountAll
      .then(result => Promise.resolve({ count: 1, rows: result }))
  );
};

module.exports = models => async (req, res, next) => {
  const { params: { model_name, id } } = req;
  const singular = singularize(model_name);

  if (models[singular] === undefined) {
    next(new NotFoundError(`no model found for ${model_name}`));
  } else {
    const model = models[singular];

    const { attributes, where, page, page_size, order } = req.query;

    let find;
    // /Model/:id
    if (singular === model_name) {
      find = findOne(id);
    } else {
      // /Models?params
      find = findAll(where);
    }

    // prevent user from accidentally requesting large ressources
    // if he wants everything he should tell us explicitly
    const normalized_arguments = {
      model,
      where,
      attributes,
      offset: (intOrDefault(page, 1) - 1) * intOrDefault(page_size, 20),
      limit: intOrDefault(page_size, 20),
      order,
    };

    find(normalized_arguments)
      .then(({ rows, count }) => {
        res.json({
          pages: Math.ceil(count / normalized_arguments.limit),
          result: rows,
        });

        next();
      })
      .catch(() => {
        next(new InternalServerError('sam went into the forbidden library'));
      });
  }
};
