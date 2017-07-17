const { tableize, underscore } = require('inflection');

const NotImplemented = require('../errors/NotImplemented');
const Model = require('./Model');
const SequelizeModelAst = require('./SequelizeModelAst');

const PRIMARY = 'Row';

class SequelizeBaseModel extends Model {
  // static PRIMARY = 'ROW';
  static get PRIMARY() {
    return PRIMARY;
  }

  static colCasing(col) {
    return underscore(col);
  }

  static tableCasing(model_name) {
    return tableize(model_name);
  }

  ast() {
    return new SequelizeModelAst(this).ast();
  }

  attributes() {
    throw new NotImplemented(this.constructor.name, 'attributes');
  }

  belongsTo() {
    throw new NotImplemented(this.constructor.name, 'belongsTo');
  }

  cols() {
    throw new NotImplemented(this.constructor.name, 'cols');
  }

  belongsToMany() {
    throw new NotImplemented(this.constructor.name, 'belongsToMany');
  }

  indices() {
    throw new NotImplemented(this.constructor.name, 'incidces');
  }

  options() {
    throw new NotImplemented(this.constructor.name, 'options');
  }

  throughModels() {
    throw new NotImplemented(this.constructor.name, 'thoughModels');
  }

  get fields() {
    throw new NotImplemented(this.constructor.name, 'fields');
  }

  // protected
  _dataType(col, passed_options) {
    const options = Object.assign(
      {},
      {
        is_atomic: false,
      },
      passed_options,
    );
    const { is_atomic } = options;
    const props = this.fields[col];

    if (this._isKeyCandidate(col)) {
      return 'BIGINT.UNSIGNED';
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
          return 'INTEGER';
        case 'int':
          return 'INTEGER';
        case 'uint':
          return 'INTEGER.UNSIGNED';
        case 'long':
          return 'BIGINT';
        case 'ulong':
          return 'BIGINT.UNSIGNED';
        case 'float':
          return 'FLOAT';
        case 'double':
          return 'DOUBLE';
        case 'ref|string':
          return 'TEXT';
        case 'bool':
          return 'BOOLEAN';
        case 'byte':
          return 'INTEGER.UNSIGNED'; // TODO bits in sequelize
        case 'ref|int':
          return 'INTEGER';
        case 'ubyte':
          // @TODO what actually are unsigned bytes? whats the point?
          return 'INTEGER.UNSIGNED'; // TODO bits in sequelize
        default:
          throw new Error(`unrecognized type '${props.type}'`);
      }
    }
  }
}

module.exports = SequelizeBaseModel;
