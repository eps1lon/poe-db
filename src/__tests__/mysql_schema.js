const MysqlSchema = require('../MysqlSchema');

const spec = require('./spec.json');

describe('MysqlTableSchema', () => {
  it('should match the db schema', () => {
    expect(new MysqlSchema(spec).createAllQuery()).toMatchSnapshot();
  });
});
