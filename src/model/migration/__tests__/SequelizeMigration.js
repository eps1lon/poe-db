const SequelizeMigration = require('../SequelizeMigration');
const invertAction = require('../invertAction');

const prev_schema = require('./__fixtures__/prev-schema.json');
const schema = require('./__fixtures__/schema.json');

const migration = new SequelizeMigration(prev_schema, schema);

it('should recognize new tables', () => {
  const up = migration.createTable();

  expect(up[0]).toMatchObject({
    type: 'create-table',
    name: 'achievement_items',
    attributes: {
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
  });
});
it('should recognize invert new tables', () => {
  const up = migration.createTable();

  expect(invertAction(up[0])).toMatchObject({
    type: 'drop-table',
    name: 'achievement_items',
  });
});
it('should recognize dropped tables', () => {
  const up = migration.dropTable();

  expect(up[0]).toMatchObject({
    type: 'drop-table',
    name: 'achievement_sets',
  });
});
it('should recognize invert dropped tables', () => {
  const up = migration.dropTable();

  expect(invertAction(up[0])).toMatchObject({
    type: 'create-table',
    name: 'achievement_sets',
    attributes: {
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
  });
});
