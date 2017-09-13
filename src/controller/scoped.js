const { singularize } = require('inflection');
const { NotFoundError, InternalServerError } = require('restify-errors');

const { intOrDefault } = require('./util');

// document behavior in README.md
module.exports = models => async (req, res, next) => {
  const { params: { model_name, scope_name = 'defaultScope' } } = req;
  const { where, page, page_size } = req.query;
  const singular = singularize(model_name);

  if (models[singular] === undefined) {
    next(new NotFoundError(`no model found for ${model_name}`));
  } else {
    const model = models[singular];

    let scoped;
    try {
      scoped = model.scope(scope_name);
    } catch (err) {
      scoped = null;

      next(
        new NotFoundError(
          `scope ${scope_name} not found in model ${model_name}`,
        ),
      );
    }

    if (scoped !== null) {
      const normalized_arguments = {
        where,
        offset: (intOrDefault(page, 1) - 1) * intOrDefault(page_size, 20),
        limit: intOrDefault(page_size, 20),
      };

      try {
        const results = await scoped.findAll(normalized_arguments);

        res.json(results);
      } catch (err) {
        console.warn(err);
        next(new InternalServerError('We dun goofed. Sorry about that :('));
      }
    }
  }
};
