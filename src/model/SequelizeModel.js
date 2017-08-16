const { pluralize, singularize } = require('inflection');

const Model = require('./Model');
const SequelizeBaseModel = require('./SequelizeBaseModel');
const SequelizeThroughModel = require('./SequelizeThroughModel');
const SequelizeModelAst = require('./SequelizeModelAst');
const { entriesToObj } = require('../util');

const PRIMARY = SequelizeBaseModel.PRIMARY;

class SequelizeModel extends SequelizeBaseModel {
  attributes() {
    return entriesToObj([
      ...this.cols().map(col => [
        SequelizeBaseModel.colCasing(col),
        this._colProps(col),
      ]),
      ...this.belongsToManyCaches(),
    ]);
  }

  ast() {
    return new SequelizeModelAst(this, { through_models_defined: true }).ast();
  }

  cols() {
    return [
      PRIMARY,
      ...Object.keys(this.fields).filter(
        field => !this._isForeignKey(field) && !this.isExtendedProp(field),
      ),
    ];
  }

  belongsTo() {
    return Object.keys(this.fields)
      .filter(field => this.isBelongsTo(field))
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
            // save orig order for consistent ordering
            $col_order: this.fields[field].rowid,
            foreignKey: {
              name: SequelizeModel.colCasing(field),
              // save the type of the column to determine index key length
              $type: this.fields[field].type,
              // save duplicate orig_order to be able to access it in model.attributes[]
              $col_order: this.fields[field].rowid,
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
      .filter(field => this.isHasMany(field))
      .map(field => {
        return {
          as: SequelizeModel.colCasing(field.replace(/Keys([0-9]*)$/, '$1')),
          model: new SequelizeThroughModel(
            this,
            Object.assign({ name: field }, this.fields[field]),
            this.relatedValues(field),
          ),
          field_index: this.fields[field].rowid,
        };
      });
  }

  belongsToManyCaches() {
    return this.belongsToMany().map(([, { as, $col_order }]) => {
      return [
        `_${as}_cache`,
        {
          type: 'TEXT',
          allowNull: false,
          $col_order,
        },
      ];
    });
  }

  options() {
    return {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: this.indices(),
      tableName: SequelizeBaseModel.tableCasing(this.name()),
      underscored: true,
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
      // allowNull only on non primaries
      allowNull: col !== PRIMARY,
      $col_order,
    };
  }

  _isForeignKey(field) {
    if (field === PRIMARY) {
      return false;
    } else {
      return this.isBelongsTo(field) || this.isHasMany(field);
    }
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
