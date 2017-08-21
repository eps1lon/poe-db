module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'chest__encounter__achievement_items',
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
        chest_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        achievement_item_row: {
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
    );
    await queryInterface.createTable(
      'labyrinth_trinket__labyrinth_secrets',
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
        labyrinth_trinket_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        labyrinth_secret_row: {
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
    );
    await queryInterface.addIndex(
      'chest__encounter__achievement_items',
      [
        {
          attribute: 'chest_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.removeIndex(
      'chests',
      'index_encounter_achievement_items_key',
    );
    await queryInterface.addIndex(
      'labyrinth_trinket__labyrinth_secrets',
      [
        {
          attribute: 'labyrinth_trinket_row',
        },
        {
          attribute: 'labyrinth_secret_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.removeIndex(
      'labyrinth_trinkets',
      'index_labyrinth_secrets_key',
    );
    await queryInterface.removeColumn(
      'chests',
      'encounter_achievement_items_key',
    );
    await queryInterface.addColumn(
      'chests',
      '_encounter_achievement_items_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('harbingers', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'labyrinth_trinkets',
      'labyrinth_secrets_key',
    );
    await queryInterface.addColumn(
      'labyrinth_trinkets',
      '_labyrinth_secrets_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('maps', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('shop_items', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('shop_payment_packages', 'unknown7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('supporter_pack_sets', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('supporter_pack_sets', 'unknown0');
    await queryInterface.removeColumn('shop_payment_packages', 'unknown7');
    await queryInterface.removeColumn('shop_items', 'flag1');
    await queryInterface.removeColumn('maps', 'unknown0');
    await queryInterface.removeColumn(
      'labyrinth_trinkets',
      '_labyrinth_secrets_cache',
    );
    await queryInterface.addColumn(
      'labyrinth_trinkets',
      'labyrinth_secrets_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.removeColumn('harbingers', 'unknown3');
    await queryInterface.removeColumn(
      'chests',
      '_encounter_achievement_items_cache',
    );
    await queryInterface.addColumn(
      'chests',
      'encounter_achievement_items_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addIndex(
      'labyrinth_trinkets',
      [
        {
          attribute: 'labyrinth_secrets_key',
        },
      ],
      {
        indexName: 'index_labyrinth_secrets_key',
      },
    );
    await queryInterface.removeIndex(
      'labyrinth_trinket__labyrinth_secrets',
      'composite primary_alias',
    );
    await queryInterface.addIndex(
      'chests',
      [
        {
          attribute: 'encounter_achievement_items_key',
        },
      ],
      {
        indexName: 'index_encounter_achievement_items_key',
      },
    );
    await queryInterface.removeIndex(
      'chest__encounter__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.dropTable('labyrinth_trinket__labyrinth_secrets');
    await queryInterface.dropTable('chest__encounter__achievement_items');
  },
};
