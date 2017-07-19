const _ = require('lodash');

const { findAssociations, foreignKeys } = require('../model/util');

const usage = (req, res) => {
  res.json({
    usage: {
      url: '/:model_name',
      params: {
        model_name: 'the name of the model in singular',
      },
    },
  });
};

module.exports = models => async (req, res) => {
  const { params: { model_name } } = req;

  if (model_name === undefined || models[model_name] === undefined) {
    usage(req, res);
  } else {
    const model = models[model_name];

    const description = {};

    // build attribute_name => type
    const attributes = _.mapValues(model.attributes, ({ type }) =>
      type.toString(),
    );

    // and remove foreignkeys
    const foreign_keys = foreignKeys(model);
    const attributes_without_foreign_keys = _.omitBy(
      attributes,
      (attribute, name) => foreign_keys.includes(name),
    );

    description.attributes = attributes_without_foreign_keys;

    // assoc
    description.belongsTo = findAssociations(model, 'BelongsTo');
    description.hasMany = findAssociations(model, 'HasMany');
    description.belongsToMany = findAssociations(model, 'BelongsToMany');

    // remove foreignKeys
    for (const assoc of findAssociations(model, 'BelongsTo')) {
      console.log(model.associations[assoc].foreignKey);
    }
    res.json({ description });
  }
};
