module.exports = (Model, models) => {
  /*
   * we are basically extending the sequelize base model via prototype
   * composition
   */

  /**
   * denormalize zipped values into a flat object
   * 
   * @param {string} alias for the belongsToManyAssoc
   * @param {Object[]} attributes
   *  attribute: attribute name in select
   *  as: property name in returned object
   *  through_prop: wether the attributes is access in through model or habtm
   * @param {Promise<Object[]>} results
   */
  Model.denormalizeThrough = (alias, attributes, results) => {
    const association = Model.associations[alias];

    if (association === undefined) {
      throw new Error(`assoc as ${alias} not found in associations`);
    }

    const through_model = association.through.model.name;

    return results.then(results => {
      return results.map(result => {
        // omit the nested alias structure
        const { [alias]: aliased, ...props } = result.toJSON();

        // restore the original order saved in `priority`
        const sorted = aliased.sort((a, b) => {
          return a[through_model].priority - b[through_model].priority;
        });

        // save the provided attributes aliased in a comma separated list
        return attributes.reduce(
          (props, { attribute, as, through_prop = true }) => {
            let values = [];
            if (through_prop) {
              values = sorted.map(
                ({ [through_model]: { [attribute]: value } }) => value,
              );
            } else {
              values = sorted.map(({ [attribute]: value }) => value);
            }

            return {
              ...props,
              [as]: values.join(','),
            };
          },
          props,
        );
      });
    });
  };
};
