const { pluralize, singularize } = require('inflection');

const Model = require('./Model');
const SequelizeBaseModel = require('./SequelizeBaseModel');
const SequelizeThroughModel = require('./SequelizeThroughModel');
const SequelizeModelAst = require('./SequelizeModelAst');
const { entriesToObj } = require('../util');

const PRIMARY = SequelizeBaseModel.PRIMARY;

class SequelizeModel extends SequelizeBaseModel {
  attributes() {
    return entriesToObj(
      this.cols().map(col => [
        SequelizeBaseModel.colCasing(col),
        this._colProps(col),
      ]),
    );
  }

  ast() {
    return new SequelizeModelAst(this, { through_models_defined: true }).ast();
  }

  cols() {
    return [
      PRIMARY,
      ...Object.keys(this.fields).filter(
        field => !this._isForeignKey(field) && !this._isExtendedProp(field),
      ),
    ];
  }

  belongsTo() {
    return Object.keys(this.fields)
      .filter(field => this._isBelongsTo(field))
      .map(field => {
        const number = field.match(/([0-9]*)$/)[1] || '';

        return [
          Model.name(this.fields[field].key),
          {
            as: SequelizeBaseModel.colCasing(
              singularize(field.replace(/Key([0-9]*)/, '$1')),
            ),
            // this is the alias for the has many assoc
            $inverse: SequelizeBaseModel.colCasing(
              pluralize(this.name()) + number,
            ),
            foreignKey: {
              name: SequelizeModel.colCasing(field),
              $col_order: this.fields[field].rowid,
              // save the type of the column to determine index key length
              $type: this.fields[field].type,
            },
            targetKey: SequelizeModel.colCasing(
              this.fields[field].key_id || PRIMARY,
            ),
          },
        ];
      });
  }

  belongsToMany() {
    return this.throughModels().map(({ as, model, field_index }) => {
      // field fallback for generic `KeysX`
      return [
        model.targetModelName(),
        {
          as,
          // dont create the unique key here because sequelize will
          // auto generate a key name which can easily hit the max ident length
          // constrainth given by mysql
          through: { model: model.name(), unique: false },
          foreignKey: model.foreignKey(),
          otherKey: model.targetKey(),
          $col_order: field_index,
        },
      ];
    });
  }

  throughModels() {
    return Object.keys(this.fields)
      .filter(field => this._isHasMany(field))
      .map(field => {
        return {
          as: SequelizeModel.colCasing(field.replace(/Keys([0-9]*)$/, '$1')),
          model: new SequelizeThroughModel(
            this,
            Object.assign({ name: field }, this.fields[field]),
          ),
          field_index: this.fields[field].rowid,
        };
      });
  }

  options() {
    return {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: this.indices(),
      tableName: SequelizeBaseModel.tableCasing(this.name()),
    };
  }

  indices() {
    return this.belongsTo().map(([, { foreignKey: { name, $type } }]) => {
      const index = {
        fields: [{ attribute: name }],
        // use the column name otherwise we hit max identifier length
        name: `index_${name}`,
      };

      const key_length = this._indexKeyLength($type);
      if (key_length !== -1) {
        index.fields[0].length = key_length;
      }

      return index;
    });
  }

  get fields() {
    return this.props.fields || {};
  }

  _colProps(col) {
    // describes the ordering in the content.ggpk file
    // used for inserting records since they are serialized as arrays
    // prefix with `$` to signify that sequelize doesnt use this prop
    const $col_order = this.props.fields[col]
      ? this.props.fields[col].rowid
      : -1;

    return {
      type: this._dataType(col),
      primaryKey: col === PRIMARY,
      allowNull: false,
      $col_order,
    };
  }

  _isForeignKey(field) {
    if (field === PRIMARY) {
      return false;
    } else {
      return this._isBelongsTo(field) || this._isHasMany(field);
    }
  }

  // there exists currently inconsistent naming in several fields
  // where the fields are named in a hasMany pattern but do not provide a list of keys
  _isBelongsTo(field) {
    return (
      !this._isHasMany(field) &&
      /Key(s)?[0-9]*$/.test(field) &&
      this.fields[field].key
    );
  }

  _isHasMany(field) {
    return (
      /Keys[0-9]*$/.test(field) &&
      this.fields[field].key &&
      this.fields[field].type.startsWith('ref|list')
    );
  }

  _isExtendedProp(field) {
    const prefix_length = field.lastIndexOf('_');
    const prefix = field.substr(0, prefix_length);

    // sometimes the fields are just prefixed but dont have a hasMany relation
    // we can include those in the schema
    if (prefix_length !== -1) {
      if (this._isHasMany(field)) {
        return true;
      } else {
        return (
          Object.keys(this.fields).find(
            field => field.startsWith(prefix) && this._isHasMany(field),
          ) !== undefined
        );
      }
    } else {
      return false;
    }
  }

  _isExtendedHasMany(field) {
    return this._isHasMany(field) && this._isExtendedProp(field);
  }

  _isKeyCandidate(field) {
    return field === PRIMARY || this._isForeignKey(field);
  }

  _indexKeyLength(type) {
    if (type === 'ref|string') {
      // 1000 byte max length in mysql, utf8_mb4 => 4 bytes per char
      // 1000 / 4 = 250
      // maybe require more info about the field to
      // determine meaningful key length
      return 250;
    } else {
      return -1;
    }
  }
}

module.exports = SequelizeModel;
