const { camelize, singularize, tableize } = require('inflection');

const Model = require('./Model');
const SequelizeBaseModel = require('./SequelizeBaseModel');
const SequelizeModelAst = require('./SequelizeModelAst');
const { entriesToObj } = require('../util');

const PRIMARY = 'Row';
// saves the original order in which the values were stored
const PRIORITY = 'Priority';

/**
 * Returns a new string in camel case that is not longer than {length} chars
 * This is achieved by truncating each individual word.
 * snakeCasedLength("snake_case", 4) -> "s_ca"
 * snakeCasedLength("snake_case", 5) -> "s_ca"
 * snakeCasedLength("snake_case", 6) -> "sn_cas"
 * @param {string} s 
 * @param {string} length
 * @returns {string} a string with no more than {length} chars 
 */
function snakeCasedLength(s, length) {
  if (s.length <= length) {
    return s;
  }
  // https://stackoverflow.com/a/7888303/3406963
  const words = s.split(/(?=_)/);

  if (words.length < 1) {
    throw new Error(
      'Expected a string in snake case but found no underscore char.',
    );
  }

  const chunk_length = Math.floor(length / words.length);
  if (chunk_length < 1) {
    throw new Error(
      `string has more words than the allowed length. Dont know how to shorten this string below ${length} characters.`,
    );
  }

  return words.map(word => word.substring(0, chunk_length)).join('');
}

class SequelizeThroughModel extends SequelizeBaseModel {
  /**
   * 
   * @param {Model} source 
   * @param {Object} from_field field in spec.x.fields
   * @param {Object[]} attributes additional attributes
   */
  constructor(source, from_field, attributes = {}) {
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

  tableName(max_length = 64) {
    return snakeCasedLength(
      tableize(
        singularize(
          this.sourceModelName() +
            '_' +
            this.from_field.name.replace(/Keys([0-9]*)$/, '$1'),
        ),
      ),
      max_length,
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
    return [PRIMARY, PRIORITY, ...Object.keys(this.fields)];
  }

  hasMany() {
    return [];
  }

  indices() {
    return [
      {
        fields: [this.foreignKey(), this.targetKey()].map(attribute => ({
          attribute,
        })),
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
      tableName: this.tableName(),
      underscored: true,
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
    const $col_order = this.fields[col] ? this.fields[col].rowid : -1;

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
      $col_order,
    };
  }

  _isKeyCandidate(col) {
    return (
      col === PRIMARY ||
      col === PRIORITY ||
      col === this.foreignKey() ||
      col === this.targetKey()
    );
  }
}

SequelizeThroughModel.PRIORITY = PRIORITY;

module.exports = SequelizeThroughModel;
