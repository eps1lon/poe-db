const filterAssociations = (model, fn) =>
  Object.entries(model.associations)
    .filter(([name, props]) => fn(name, props))
    .map(([name]) => name);

const findAssociations = (model, ...types) =>
  filterAssociations(
    model,
    (name, props) => types.indexOf(props.associationType) !== -1,
  );

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

    attributes[assoc_name] = targets.map(target => [row, target]);

    return attributes;
  }, {});

module.exports = {
  buildAssocKeys,
  buildAttrObj,
  nonCircularAssociations,
};
