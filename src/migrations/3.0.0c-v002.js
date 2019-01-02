module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'dex_mission_mod__mods',
      {
        row: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        priority: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        dex_mission_mod_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mod_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MyISAM',
      },
    ),
      await Promise.all([
        queryInterface.addIndex(
          'dex_mission_mod__mods',
          [
            {
              attribute: 'dex_mission_mod_row',
            },
            {
              attribute: 'mod_row',
            },
          ],
          {
            indexName: 'composite primary_alias',
          },
        ),
        queryInterface.removeIndex('dex_mission_mods', 'index_mods_key'),
        queryInterface.removeColumn('dex_mission_mods', 'mods_key'),
        queryInterface.addColumn('dex_mission_mods', '_mods_cache', {
          allowNull: false,
          type: Sequelize.TEXT,
        }),
      ]);
  },
  down: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.removeColumn('dex_mission_mods', '_mods_cache'),
      queryInterface.addColumn('dex_mission_mods', 'mods_key', {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.addIndex(
        'dex_mission_mods',
        [
          {
            attribute: 'mods_key',
          },
        ],
        {
          indexName: 'index_mods_key',
        },
      ),
      queryInterface.removeIndex(
        'dex_mission_mod__mods',
        'composite primary_alias',
      ),
    ]);
    await queryInterface.dropTable('dex_mission_mod__mods');
  },
};
