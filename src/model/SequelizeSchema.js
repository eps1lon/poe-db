const _ = require('lodash');

class SequelizeSchema {
  constructor(model) {
    this.model = model;
  }

  toJSON() {
    return {
      tableName: this.tableName(),
      attributes: this.attributes(),
      indices: this.indices(),
      options: this.options(),
    };
  }

  tableName() {
    return this.model.options.tableName;
  }

  attributes() {
    return _.mapValues(this.model.attributes, attribute => {
      const { primaryKey, allowNull } = attribute;

      return {
        allowNull,
        primaryKey,
        type: String(attribute.type),
      };
    });
  }

  indices() {
    return this.model.options.indexes;
  }

  options() {
    const { charset, collate, engine } = this.model.options;

    return { charset, collate, engine };
  }
}

module.exports = SequelizeSchema;
