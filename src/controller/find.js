const { singularize } = require('inflection');
const _ = require('lodash');
const { NotFoundError, InternalServerError } = require('restify-errors');

const {
  describeByName,
  prepareAssociationsForInclude,
  findAssociations,
  safeOrder,
} = require('../model/util');

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

const includes = (model, ...types) => {
  return prepareAssociationsForInclude(
    model,
    findAssociations(model, ...types),
  );
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
    include: includes(model, 'BelongsTo'),
    offset,
    limit,
    order: safeOrder(order),
  });
};

const findOne = id => ({ model, attributes }) => {
  return (
    model
      .findById(id, {
        attributes,
        include: includes(model, 'BelongsTo', 'BelongsToMany'),
      })
      // imitate the returnval of findAndCountAll
      .then(result => Promise.resolve({ count: 1, rows: result }))
  );
};

const cachedToHasMany = model => row => {
  const values = row.toJSON();
  // TODO this is not always row!
  const caches = findAssociations(model, 'BelongsToMany').map(assoc => {
    const cache_attr = `_${assoc}_cache`;
    values[assoc] = row[cache_attr].split(',').map(row => ({ row: +row }));

    return cache_attr;
  });

  return _.omit(values, caches);
};

module.exports = models => async (req, res, next) => {
  const { params: { model_name, id } } = req;
  const singular = singularize(model_name);

  if (models[singular] === undefined) {
    next(new NotFoundError(`no model found for ${model_name}`));
  } else {
    const model = models[singular];

    const {
      attributes,
      where,
      page,
      page_size,
      order,
      withDescription,
    } = req.query;

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
        const response = {
          pages: Math.ceil(count / normalized_arguments.limit),
          result: rows,
        };

        if (Array.isArray(response.result)) {
          response.result = response.result.map(cachedToHasMany(model));
        }

        if (withDescription !== undefined) {
          response.description = describeByName(models, singular);
        }

        res.json(response);

        next();
      })
      .catch(e => {
        console.log(e);
        next(new InternalServerError('sam went into the forbidden library'));
      });
  }
};
