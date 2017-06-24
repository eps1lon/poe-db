const Record = require('./Record');

class MysqlRecord extends Record {
  static typeToDbType(field) {
    if (MysqlRecord.isKeyCandidate(field.id)) {
      return 'BIGINT UNSIGNED';
    } else if (field.type.startsWith('ref|list')) {
      return 'TEXT';
    } else {
      switch (field.type) {
        case 'short':
          return 'SMALLINT';
        case 'int':
          return 'INT';
        case 'uint':
          return 'INT unsigned';
        case 'long':
          return 'BIGINT';
        case 'ulong':
          return 'BIGINT unsigned';
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
          throw new Error(`unrecognized type '${field.type}'`);
      }
    }
  }

  createQueryWithRelations() {}

  tableProps() {}

  relationalTablesProps() {}

  cols() {
    return this.fields
      .map(field => {
        const col_name = MysqlRecord.colName(field.id);

        if (col_name !== undefined) {
          return {
            name: col_name,
            type: MysqlRecord.typeToDbType(field),
          };
        } else {
          return false;
        }
      })
      .filter(Boolean);
  }
}

module.exports = MysqlRecord;
