const _ = require('lodash');

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

const filterAssociations = (model, fn) =>
  Object.entries(model.associations)
    .filter(([name, props]) => fn(name, props))
    .map(([name]) => name);

const findAssociations = (model, ...types) =>
  filterAssociations(
    model,
    (name, props) => types.indexOf(props.associationType) !== -1,
  );

const foreignKeys = model => {
  return findAssociations(model, 'BelongsTo').map(
    assoc => model.associations[assoc].foreignKey,
  );
};

const nonCircularAssociations = model =>
  findAssociations(model, 'BelongsTo', 'BelongsToMany');

const buildAttrObj = (record, model, init = {}) => {
  return Object.entries(
    model.attributes,
  ).reduce((attributes, [attribute, props]) => {
    const index = props['$col_order'];
    // there shouldnt be any index error but for now we will blindly run into one
    // -1 is only used for primary attr
    if (index !== undefined && index !== -1) {
      const value = record[index];

      attributes[attribute] = Array.isArray(value) ? value.join(',') : value;
    }

    return attributes;
  }, init);
};

const buildAssocKeys = (model, record, row) =>
  findAssociations(model, 'BelongsToMany').reduce((attributes, assoc_name) => {
    const index = model.associations[assoc_name].options.$col_order;
    let targets = record[index];

    // this should not happen but i.e. DailyOverrides says Keys but only
    // provides a single error
    if (!Array.isArray(targets)) {
      console.log(
        `in model ${model.name} the record ${row} does not provide an array for ${assoc_name} at index ${index}`,
      );
      targets = [targets];
    }

    // this is now a list of [foreignKey, targetKey] pairs
    attributes[assoc_name] = targets.map(target => [row, target]);

    return attributes;
  }, {});

const assocDescription = (model, type) => {
  return _.fromPairs(
    findAssociations(model, type).map(name => {
      return [
        name,
        {
          target_name: model.associations[name].target.name,
          orig_order: model.associations[name].options.$col_order,
        },
      ];
    }),
  );
};

const describe = (models, model_name) => {
  if (model_name === undefined || models[model_name] === undefined) {
    return undefined;
  } else {
    const model = models[model_name];

    const description = {};

    // build attribute_name => type
    const attributes = _.mapValues(model.attributes, ({ type, $col_order }) => {
      return { type: type.toString(), orig_order: $col_order };
    });

    // and remove foreignkeys
    const foreign_keys = foreignKeys(model);
    const attributes_without_foreign_keys = _.omitBy(
      attributes,
      (attribute, name) => foreign_keys.includes(name),
    );

    description.attributes = attributes_without_foreign_keys;

    // assoc
    description.belongsTo = assocDescription(model, 'BelongsTo');
    description.hasMany = assocDescription(model, 'HasMany');
    description.belongsToMany = assocDescription(model, 'BelongsToMany');

    return description;
  }
};

// see SequelizeThroughModel#name
const isJoinModel = name => name.indexOf('Habtm') !== -1;

module.exports = {
  buildAssocKeys,
  buildAttrObj,
  describe,
  findAssociations,
  foreignKeys,
  isJoinModel,
  nonCircularAssociations,
  prepareAssociationsForInclude,
};
