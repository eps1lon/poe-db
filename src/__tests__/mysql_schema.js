const MysqlSchema = require('../MysqlSchema');

const spec = require('./spec.json')[0];

describe('MysqlTableSchema', () => {
  it.skip('should match the db schema', () => {
    expect(new MysqlSchema(spec).createAllQuery()).toMatchSnapshot();
  });
});
