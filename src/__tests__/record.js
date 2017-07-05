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

    it('should use `ID` as key identifiers', () => {
      expect(Record.colName('SomeForeignKey')).toBe('some_foreign_id');
      expect(Record.colName('SomeForeignKeys')).toBe('some_foreign_id');
      expect(Record.colName('SomePluralsKey')).toBe('some_plurals_id');
    });

    it('should ignore the prefix for extended props', () => {
      expect(Record.colName('ExtendedProp_TagsKey')).toBe('tags_id');
      expect(Record.colName('EventMore_ExtendedProp_TagsKey')).toBe('tags_id');
    });

    it('should use snake case for tables', () => {
      expect(Record.tableName('AnotherCamelCase')).toBe('another_camel_case');
      expect(Record.tableName('Another Title')).toBe('another_title');
      expect(Record.tableName('another-slug')).toBe('another_slug');
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
