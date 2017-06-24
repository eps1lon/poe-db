const fs = require('fs');
const path = require('path');

const Record = require('../Record');

const records = JSON.parse(
  fs.readFileSync(path.join(__dirname, './records.json')),
);

describe('Record', () => {
  describe('Naming', () => {
    it('should use snake case for columns', () => {
      expect(Record.colName('SomeCamelCase')).toBe('some_camel_case');
      expect(Record.colName('Some Title')).toBe('some_title');
      expect(Record.colName('some-slug')).toBe('some_slug');
    });

    it('should use snake case for tables', () => {
      expect(Record.colName('AnotherCamelCase')).toBe('another_camel_case');
      expect(Record.colName('Another Title')).toBe('another_title');
      expect(Record.colName('another-slug')).toBe('another_slug');
    });
  });

  describe('Relations', () => {
    it('should detect has one relations with `Key` suffix', () => {
      expect(Record.isHasOne('SomeTableKey')).toBeTruthy();
      expect(Record.isHasOne('AnotherTableKey')).toBeTruthy();
      expect(Record.isHasOne('HasManyOtherKeys')).toBeFalsy();
      expect(Record.isHasOne('NormalAttribute')).toBeFalsy();
      expect(Record.isHasOne('InvalidKey ')).toBeFalsy();
    });

    it('should detect has many relations with `Keys` suffix', () => {
      expect(Record.isHasMany('SomeTableKeys')).toBeTruthy();
      expect(Record.isHasMany('AnotherTableKeys')).toBeTruthy();
      expect(Record.isHasMany('HasManyOtherKey')).toBeFalsy();
      expect(Record.isHasMany('NormalAttribute')).toBeFalsy();
      expect(Record.isHasMany('InvalidKeys ')).toBeFalsy();
    });

    it('should find the relational tables', () => {
      expect(
        Record.relationalTable('NormalAttribute'),
        records,
      ).toBeUndefined();

      expect(Record.relationalTable('SomeTableKey'), records).toBe('SomeTable');

      expect(Record.relationalTable('BaseItemTypesKeys', records)).toBe(
        'BaseItemTypes',
      );

      expect(Record.relationalTable('SpawnWeight_TagsKeys', records)).toBe(
        'SpawnWeight',
      );

      expect(() => Record.relationalTable('NonExistingFileKeys')).toThrow();
    });
  });
});
