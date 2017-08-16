const _ = require('lodash');
const DataTypes = require('sequelize/lib/data-types');

// attention: inheritance chain! end with most abstract
const sequelize_data_types_paths = [
  'BIGINT',
  'BOOLEAN',
  'FLOAT',
  'DOUBLE',
  'INTEGER',
  'TEXT',
  'DATE',
];

const serializeType = attribute_type => {
  const constructor = sequelize_data_types_paths.find(path => {
    const sequelize_type = _.get(DataTypes, path);
    return attribute_type instanceof sequelize_type;
  });

  return { constructor, options: attribute_type.options };
};

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
      const { primaryKey, allowNull, autoIncrement } = attribute;

      return {
        allowNull,
        autoIncrement,
        primaryKey,
        type: serializeType(attribute.type),
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
