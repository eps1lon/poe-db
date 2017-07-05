const S = require('string');

class Record {
  static isKeyCandidate(name) {
    return name === 'Id' || Record.isHasOne(name);
  }

  static isHasOne(type) {
    return type.endsWith('Key');
  }

  static isHasMany(type) {
    return type.endsWith('Keys');
  }

  static isExtendedHasMany(type) {
    // sometimes we have additional values for the relation so
    // the cols are prefixed with a common keyword followed by an
    // underscore
    return type.indexOf('_') !== -1;
  }

  static relationalTable(type, records) {
    if (Record.isExtendedHasMany(type)) {
      return type.substr(0, type.lastIndexOf('_'));
    } else if (Record.isHasOne(type)) {
      return type.replace(/Key$/, '');
    } else if (Record.isHasMany(type)) {
      const actual_key = type.replace(/Keys$/, '');

      for (const { $: { file } } of records) {
        if (actual_key === file) {
          return file;
        }
      }

      throw new Error(
        `could not find other record for '${type}' with ${actual_key}`,
      );
    } else {
      return undefined;
    }
  }

  static colName(field) {
    if (Record.isExtendedHasMany(field)) {
      return Record.colNameForExtendedHasMany(field);
    } else if (Record.isHasMany(field)) {
      return Record.colNameForHasMany(field);
    } else if (Record.isHasOne(field)) {
      return Record.colNameForHasOne(field);
    } else {
      return Record.colNameCasing(field);
    }
  }

  static colNameForExtendedHasMany(field) {
    return Record.colName(field.substr(field.indexOf('_') + 1));
  }

  static colNameForHasMany(field) {
    return Record.colNameCasing(field.replace(/Keys$/, 'ID'));
  }

  static colNameForHasOne(field) {
    return Record.colNameCasing(field.replace(/Key$/, 'ID'));
  }

  static colNameCasing(name) {
    return S(name).underscore().s;
  }

  static tableName(file) {
    return S(file).underscore().s;
  }

  constructor(props, records) {
    this.props = props;
    this.records = records;
  }

  tableProps() {
    throw new Error('not implemented');
  }

  relationalTablesProps() {
    throw new Error('not implemented');
  }

  createQueryWithRelations() {
    throw new Error('not implemented');
  }

  tableName() {
    return Record.tableName(this.props['$']['file']);
  }

  get fields() {
    return this.props['field'].map(field => field.$);
  }
}

module.exports = Record;
