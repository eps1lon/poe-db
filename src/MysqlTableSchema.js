const S = require('string');

const PRIMARY = 'Row';

class MysqlTableSchema {
  static name(dat_file) {
    return dat_file.replace(/\.dat$/, '');
  }

  static tableName(dat_file) {
    return S(MysqlTableSchema.name(dat_file)).underscore().s;
  }

  static colCasing(col) {
    return S(col).underscore().s;
  }

  constructor(file, props) {
    this.file = file;
    this.props = props;
  }

  createQuery() {
    return (
      'CREATE TABLE `' +
      this.tableName() +
      '` ' +
      this.createDefinitions() +
      ';'
    );
  }

  createQueryRelations() {
    return this.relations()
      .map(field => this.createQueryRelation(field))
      .join('\n\n');
  }

  createQueryRelation(field) {
    return (
      'CREATE TABLE `' +
      MysqlTableSchema.tableName(this.relationName(field)) +
      '` ' +
      this.createDefinitionsRelation(field) +
      ';'
    );
  }

  relationName(field) {
    this.assertFieldExists(field);
    this.assertIsHasMany(field);

    return this.name() + field.replace(/Keys([0-9]*)$/, '$1');
  }

  createDefinitionsRelation(field) {
    this.assertFieldExists(field);
    this.assertIsHasMany(field);

    const extended_props = this.extendedProps(field).map(other => {
      return {
        // strip the prefix
        name: this.colName(other.substr(field.lastIndexOf('_') + 1)),
        type: this.dataType(other, { is_atomic: true }),
      };
    });

    return (
      '(' +
      [
        {
          name: this.colName(this.tableName() + PRIMARY),
          type: this.dataType(PRIMARY),
        },
        {
          name: this.colName(
            MysqlTableSchema.name(this.fields[field].key) +
              (this.fields[field].key_id || PRIMARY),
          ),
          type: this.dataType(PRIMARY),
        },
        ...extended_props,
      ]
        .map(definition => definition.name + ' ' + definition.type)
        .join(',\n') +
      ')'
    );
  }

  extendedProps(field) {
    if (this.isExtendedProp(field)) {
      return (
        Object.values(this.virtual_fields)
          .map(({ fields }) => {
            if (fields.indexOf(field) !== -1) {
              return fields.filter(other => other !== field);
            } else {
              return [];
            }
          })
          .find(fields => fields.length > 0) || []
      );
    } else {
      return [];
    }
  }

  tableName() {
    return MysqlTableSchema.tableName(this.file);
  }

  name() {
    return MysqlTableSchema.name(this.file);
  }

  createDefinitions() {
    return (
      '(' + this.cols().map(col => this.createDefinition(col)).join(',\n') + ')'
    );
  }

  createDefinition(col) {
    return this.colName(col) + ' ' + this.columnDefinition(col);
  }

  colName(field) {
    if (this.isForeignKey(field)) {
      let cleaned_name = field;

      if (this.isExtendedProp(field)) {
        cleaned_name = field.substr(field.indexOf('_') + 1);
      }

      const key_id = this.hasField(field) ? this.fields[field].key_id : null;

      return MysqlTableSchema.colCasing(
        cleaned_name.replace(/Key(s)?([0-9]*)$/, '$2') + (key_id || PRIMARY),
      );
    } else {
      return MysqlTableSchema.colCasing(field);
    }
  }

  columnDefinition(col) {
    let definition = this.dataType(col) + ' NULL';

    if (col === PRIMARY || this.isHasMany(col)) {
      definition += ' PRIMARY KEY';
    } else if (this.isForeignKey(col)) {
      definition += ' KEY';
    }

    return definition;
  }

  dataType(col, passed_options) {
    const options = Object.assign(
      {},
      {
        is_atomic: false,
      },
      passed_options,
    );
    const { is_atomic } = options;
    const props = this.fields[col];

    if (this.isKeyCandidate(col)) {
      return 'BIGINT UNSIGNED';
    } else {
      let { type } = props;

      if (type.startsWith('ref|list')) {
        if (is_atomic) {
          type = type.replace('ref|list|', '');
        } else {
          return 'TEXT';
        }
      }

      switch (type) {
        case 'short':
          return 'SMALLINT';
        case 'int':
          return 'INT';
        case 'uint':
          return 'INT UNSIGNED';
        case 'long':
          return 'BIGINT';
        case 'ulong':
          return 'BIGINT UNSIGNED';
        case 'float':
          return 'FLOAT';
        case 'double':
          return 'DOUBLE';
        case 'ref|string':
          return 'TEXT';
        case 'bool':
          return 'BOOLEAN';
        case 'byte':
          return 'BIT(8)';
        case 'ref|int':
          return 'INT';
        case 'ubyte':
          // @TODO what actually are unsigned bytes? whats the point?
          return 'BIT(16)';
        default:
          throw new Error(`unrecognized type '${props.type}'`);
      }
    }
  }

  cols() {
    return [
      PRIMARY,
      ...Object.keys(this.fields).filter(
        field => !this.isHasMany(field) && !this.isExtendedProp(field),
      ),
    ];
  }

  relations() {
    return Object.keys(this.fields).filter(field => this.isHasMany(field));
  }

  isKeyCandidate(field) {
    return field === PRIMARY || this.isForeignKey(field);
  }

  isForeignKey(field) {
    if (field === PRIMARY) {
      return false;
    } else {
      return /Key(s)?[0-9]*$/.test(field);
    }
  }

  isHasMany(field) {
    return /Keys[0-9]*$/.test(field);
  }

  isExtendedProp(field) {
    const prefix_length = field.lastIndexOf('_');
    const prefix = field.substr(0, prefix_length);

    // sometimes the fields are just prefixed but dont have a hasMany relation
    // we can include those in the schema
    if (prefix_length !== -1) {
      if (this.isHasMany(field)) {
        return true;
      } else {
        return (
          Object.keys(this.fields).find(
            field => field.startsWith(prefix) && this.isHasMany(field),
          ) !== undefined
        );
      }
    } else {
      return false;
    }
  }

  isExtendedHasMany(field) {
    return this.isHasMany(field) && this.isExtendedProp(field);
  }

  get fields() {
    return this.props.fields;
  }

  get virtual_fields() {
    return this.props.virtual_fields || [];
  }

  assertFieldExists(field) {
    if (!this.hasField(field)) {
      throw new Error(`field '${field}' does not exist`);
    }
  }

  assertIsHasMany(field) {
    if (!this.isHasMany(field)) {
      throw new Error(`field '${field}' is no hasMany relation`);
    }
  }

  hasField(field) {
    return this.fields[field] !== undefined;
  }
}

module.exports = MysqlTableSchema;
