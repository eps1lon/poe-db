const S = require('string');

const DbSchema = require('./DbSchema');
const MysqlTableSchema = require('./MysqlTableSchema');

class MysqlSchema extends DbSchema {
  createAllQuery() {
    return Object.entries(this.spec)
      .map(([dat_file, dat]) => {
        const schema = new MysqlTableSchema(dat_file, dat);
        try {
          return [schema.createQuery(), schema.createQueryRelations()]
            .filter(Boolean)
            .join('\n\n');
        } catch (error) {
          error.message = [
            'could not build schema for `' + dat_file + '` because of',
            error.message,
          ].join('\n');

          throw error;
        }
      })
      .join('\n\n');
  }
}

module.exports = MysqlSchema;
