const { singularize, camelize } = require('inflection');
const _ = require('lodash');

class Model {
  static name(dat_file) {
    return singularize(camelize(dat_file.replace(/\.dat$/, '')));
  }

  constructor(file, props) {
    this.dat_file = file;
    this.props = props;
  }

  ast() {
    throw new Error('not implemented');
  }

  name() {
    return Model.name(this.dat_file);
  }

  // there exists currently inconsistent naming in several fields
  // where the fields are named in a hasMany pattern but do not provide a list of keys
  isBelongsTo(field) {
    return (
      !this.isHasMany(field) &&
      /Key(s)?[0-9]*$/.test(field) &&
      this.fields[field].key
    );
  }

  isHasMany(field) {
    return (
      /Keys[0-9]*$/.test(field) &&
      this.fields[field].key &&
      this.fields[field].type.startsWith('ref|list')
    );
  }

  isExtendedProp(field) {
    const prefix = this.colPrefix(field);

    // sometimes the fields are just prefixed but dont have a hasMany relation
    // we can include those in the schema
    if (prefix !== undefined) {
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

  colPrefix(field) {
    const prefix_length = field.lastIndexOf('_');

    if (prefix_length !== -1) {
      return field.substr(0, prefix_length);
    } else {
      return undefined;
    }
  }

  relatedValues(field) {
    const prefix = this.colPrefix(field);

    if (prefix === undefined) {
      return {};
    } else {
      return _.fromPairs(
        Object.entries(this.fields)
          // map first to keep index
          .map(([other, props]) => {
            if (other.startsWith(`${prefix}_`) && other !== field) {
              return [
                singularize(other.replace(`${prefix}_`, '')),
                Object.assign({}, props, {
                  type: props.type.replace('ref|list|', ''),
                }),
              ];
            } else {
              return undefined;
            }
          })
          .filter(Boolean),
      );
    }
  }
}

module.exports = Model;
