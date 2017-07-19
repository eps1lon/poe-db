const { camelize, singularize, tableize } = require('inflection');

const Model = require('./Model');
const SequelizeBaseModel = require('./SequelizeBaseModel');
const SequelizeModelAst = require('./SequelizeModelAst');
const { entriesToObj } = require('../util');

const PRIMARY = 'Row';

class SequelizeThroughModel extends SequelizeBaseModel {
  /**
   * 
   * @param {Model} source 
   * @param {Object} from_field field in spec.x.fields
   * @param {Object[]} attributes additional attributes
   */
  constructor(source, from_field, attributes = []) {
    super('ThroughModelAlias', { fields: [] });

    this.source = source;
    this.from_field = from_field;
    this.additional = attributes;
  }

  ast() {
    // since this is only an intermediate model for a through relation
    // we skip the has_many relation
    // it might have some merit to include this but i would hope that
    // the orm does this already internally automatically
    return new SequelizeModelAst(this, { skip_has_many: true }).ast();
  }

  name() {
    return camelize(
      singularize(
        // this should not collide with an actual model name
        // otherwise ensure a different folder structure
        // StrDexMissions e.g. has a field ModsKeys while there exists
        // StrDexMissionsMods. StrDexIntMissions avoids this by naming the field
        // Extra_ModsKey.
        this.sourceModelName() +
          'Habtm' +
          this.from_field.name.replace(/Keys([0-9]*)$/, '$1'),
      ),
    );
  }

  attributes() {
    return entriesToObj(
      this.cols().map(col => [
        SequelizeBaseModel.colCasing(col),
        this._colProps(col),
      ]),
    );
  }

  cols() {
    return [PRIMARY, ...Object.keys(this.fields)];
  }

  hasMany() {
    return [];
  }

  indices() {
    return [
      {
        fields: [this.foreignKey(), this.targetKey()],
        name: 'composite primary_alias',
        unique: true,
      },
      // TODO belongsTo
    ];
  }

  get fields() {
    return this.additional;
  }

  belongsToMany() {
    return [];
  }

  belongsTo() {
    return [
      [
        this.sourceModelName(),
        {
          foreignKey: this.foreignKey(),
          targetKey: SequelizeBaseModel.colCasing(PRIMARY),
        },
      ],
      [
        this.targetModelName(),
        {
          foreignKey: this.targetKey(),
          targetKey: SequelizeBaseModel.colCasing(
            this.from_field.key_id || PRIMARY,
          ),
        },
      ],
    ];
  }

  throughModels() {
    return [];
  }

  foreignKey() {
    let key = '';

    if (this._isSelfAssoc()) {
      key = 'Source' + PRIMARY;
    } else {
      key = this.sourceModelName() + PRIMARY;
    }

    return SequelizeBaseModel.colCasing(key);
  }

  targetKey() {
    let key = '';

    if (this._isSelfAssoc()) {
      key = 'Target' + PRIMARY;
    } else {
      key = this.targetModelName() + PRIMARY;
    }

    return SequelizeBaseModel.colCasing(key);
  }

  options() {
    return {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: this.indices(),
      tableName: tableize(this.name()),
    };
  }

  sourceModelName() {
    return this.source.name();
  }

  targetModelName() {
    return Model.name(this.from_field.key || this.from_field.name);
  }

  _isExtendedModel() {
    return this.additional.length > 0;
  }

  _isSelfAssoc() {
    return this.sourceModelName() === this.targetModelName();
  }

  _colProps(col) {
    return {
      type: this._dataType(col),
      allowNull: false,
      primaryKey: col === PRIMARY,
      // auto increment on primary because it is just an alias for
      // [foreignKey, targetKey]
      // we dont use composite keys because i didnt have a pleasent
      // experience with the those in rails 3. seems like there are either not
      // enough use cases or they are an anti pattern
      autoIncrement: col === PRIMARY,
    };
  }

  _isKeyCandidate(col) {
    return (
      col === PRIMARY || col === this.foreignKey() || col === this.targetKey()
    );
  }
}

module.exports = SequelizeThroughModel;
