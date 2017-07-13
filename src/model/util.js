const nonCircularAssociations = model =>
  Object.entries(model.associations)
    .filter(([, props]) => props.associationType === 'BelongsTo')
    .map(([name]) => name);

module.exports = { nonCircularAssociations };
