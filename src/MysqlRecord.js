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

  relationalTablesProps() {
    const tables = {};

    for (const field of this.fields) {
      if (MysqlRecord.isHasMany(field)) {
        const table = MysqlRecord.relationalTable(field, this.records);

        const name = MysqlRecord.tableName(this.tableName() + table);
        const cols = [
          { name: MysqlRecord.colName(this.file + 'ID') },
          { name: MysqlRecord.colName(field + 'ID') },
        ];
        const primary = cols.map(col => col.name);
        const keys = [];

        if (MysqlRecord.isExtendedHasMany(field)) {
          cols.push(this.extendedProps(field));
        }

        tables[table] = { name, cols, primary, keys };
      }
    }
  }

  cols() {
    return this.fields
      .map(field => {
        if (MysqlRecord.isAtomic(field.id)) {
          return {
            name: MysqlRecord.colName(field.id),
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
