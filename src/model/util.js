const nonCircularAssociations = model =>
  Object.entries(model.associations)
    .filter(
      ([, props]) =>
        ['BelongsTo', 'BelongsToMany'].indexOf(props.associationType) !== -1,
    )
    .map(([name]) => name);

module.exports = { nonCircularAssociations };
