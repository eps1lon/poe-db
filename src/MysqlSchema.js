const S = require('string');

const DbSchema = require('./DbSchema');
const MysqlTableSchema = require('./MysqlTableSchema');

class MysqlSchema extends DbSchema {
  createQueries() {
    return Object.entries(this.spec)
      .reduce((queries, [dat_file, dat]) => {
        const schema = new MysqlTableSchema(dat_file, dat);
        try {
          return queries.concat([
            schema.createQuery(),
            ...schema.createQueriesRelations(),
          ]);
        } catch (error) {
          error.message = [
            'could not build schema for `' + dat_file + '` because of',
            error.message,
          ].join('\n');

          throw error;
        }
      }, [])
      .filter(Boolean);
  }

  createAllQuery() {
    return this.createQueries.join('\n\n');
  }
}

module.exports = MysqlSchema;
