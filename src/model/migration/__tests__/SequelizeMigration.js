const SequelizeMigration = require('../SequelizeMigration');
const invertAction = require('../invertAction');

const prev_schema = require('./__fixtures__/prev-schema.json');
const schema = require('./__fixtures__/schema.json');

const migration = new SequelizeMigration(prev_schema, schema);

const attributes = {
  achievement_items: {
    row: {
      allowNull: false,
      primaryKey: true,
      type: { constructor: 'BIGINT', options: { unsigned: true } },
    },
    id: {
      allowNull: false,
      type: { constructor: 'TEXT', options: {} },
    },
    unknown1: {
      allowNull: false,
      type: { constructor: 'INTEGER', options: {} },
    },
    unknown2: {
      allowNull: false,
      type: { constructor: 'INTEGER', options: {} },
    },
    name: {
      allowNull: false,
      type: { constructor: 'TEXT', options: {} },
    },
    completions_required: {
      allowNull: false,
      type: { constructor: 'INTEGER', options: {} },
    },
    flag0: {
      allowNull: false,
      type: { constructor: 'BOOLEAN' },
    },
    created_at: {
      allowNull: false,
      type: { constructor: 'DATE', options: {} },
    },
    updated_at: {
      allowNull: false,
      type: { constructor: 'DATE', options: {} },
    },
    achievements_key: {
      allowNull: true,
      type: { constructor: 'BIGINT', options: { unsigned: true } },
    },
  },
  achievement_sets: {
    row: {
      allowNull: false,
      primaryKey: true,
      type: { constructor: 'BIGINT', options: { unsigned: true } },
    },
    created_at: {
      allowNull: false,
      type: { constructor: 'DATE', options: {} },
    },
    updated_at: {
      allowNull: false,
      type: { constructor: 'DATE', options: {} },
    },
  },
};

it('should recognize new tables', () => {
  const up = migration.createTable();

  expect(up[0]).toMatchObject({
    type: 'create-table',
    name: 'achievement_items',
    attributes: attributes.achievement_items,
  });
});

it('should recognize invert new tables', () => {
  const up = migration.createTable();

  expect(invertAction(up[0])).toMatchObject({
    type: 'drop-table',
    name: 'achievement_items',
    attributes: attributes.achievement_items,
  });
});

it('should recognize dropped tables', () => {
  const up = migration.dropTable();

  expect(up[0]).toMatchObject({
    type: 'drop-table',
    name: 'achievement_sets',
    attributes: attributes.achievement_sets,
  });
});

it('should recognize invert dropped tables', () => {
  const up = migration.dropTable();

  expect(invertAction(up[0])).toMatchObject({
    type: 'create-table',
    name: 'achievement_sets',
    attributes: attributes.achievement_sets,
  });
});

it('should recognize new indices', () => {
  const up = migration.addIndex();

  expect(up[0]).toMatchObject({
    type: 'add-index',
    tableName: 'achievements',
    attributes: ['unknown_key'],
    indexName: 'some_new_index',
  });

  expect(up[1]).toMatchObject({
    type: 'add-index',
    tableName: 'achievement_items',
    attributes: ['achievements_key'],
    indexName: 'index_achievements_key',
  });
});

it('should be able to invert add index', () => {
  const up = migration.addIndex();

  expect(invertAction(up[0])).toMatchObject({
    type: 'remove-index',
    tableName: 'achievements',
    attributes: ['unknown_key'],
    indexName: 'some_new_index',
  });

  expect(invertAction(up[1])).toMatchObject({
    type: 'remove-index',
    tableName: 'achievement_items',
    attributes: ['achievements_key'],
    indexName: 'index_achievements_key',
  });
});

it('should recognize removed indices', () => {
  const up = migration.dropIndex();

  expect(up[0]).toMatchObject({
    type: 'remove-index',
    tableName: 'achievements',
    attributes: ['achievement_sets_display_key'],
    indexName: 'index_achievement_sets_display_key',
  });
});

it('should be able to invert remove indices', () => {
  const up = migration.dropIndex();

  expect(invertAction(up[0])).toMatchObject({
    type: 'add-index',
    tableName: 'achievements',
    attributes: ['achievement_sets_display_key'],
    indexName: 'index_achievement_sets_display_key',
  });
});