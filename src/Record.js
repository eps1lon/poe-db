const S = require('string');

class Record {
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

  static colName(type) {
    if (!Record.isHasMany(type)) {
      let col_name;
      if (Record.isHasOne(type)) {
        col_name = S(Record.relationalTable(type));
      } else {
        col_name = type;
      }

      return S(col_name).underscore().s;
    } else {
      return undefined;
    }
  }

  static tableName(file) {
    return S(file).camelize().s;
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
}

module.exports = Record;
