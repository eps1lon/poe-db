const fs = require('fs');
const path = require('path');

const MysqlRecord = require('../MysqlRecord');

const records = JSON.parse(
  fs.readFileSync(path.join(__dirname, './records.json')),
);

const props = {};
records.forEach(record => {
  props[record['$']['file']] = record;
});

describe('MysqlRecord', () => {
  describe('Table', () => {
    const ascendancy = new MysqlRecord(props['Ascendancy'], records);

    it('should have lower case underscore table names', () => {
      expect(ascendancy.tableName()).toBe('ascendancy');
    });
  });

  describe('cols', () => {
    it('should build a cols object', () => {
      const ascendancy = new MysqlRecord(props['Ascendancy'], records);

      expect(ascendancy.cols()).toMatchSnapshot();
    });
  });
});
