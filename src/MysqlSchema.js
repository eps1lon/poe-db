const DbSchema = require('./DbSchema');
const S = require('string');

class MysqlSchema extends DbSchema {
  createAllQuery() {
    return this.specs.map(dat => this.createQuery(dat)).join('\n');
  }
}

module.exports = MysqlSchema;
