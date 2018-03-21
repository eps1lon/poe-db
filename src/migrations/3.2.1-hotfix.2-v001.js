module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('bestiary_nets', 'unknown2', 'unknown0');
    await queryInterface.addColumn('bestiary_nets', 'capture_max_level', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('bestiary_nets', 'capture_min_level', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('bestiary_nets', 'drop_max_level', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('bestiary_nets', 'drop_min_level', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('bestiary_nets', 'is_enabled', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('bestiary_nets', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('bestiary_recipe_components', 'key3');
    await queryInterface.removeColumn('bestiary_recipe_components', 'unknown9');
    await queryInterface.addColumn(
      'bestiary_recipe_components',
      'bestiary_capturable_monsters_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('bestiary_recipe_components', 'rarity_key', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('bestiary_recipes', 'data1');
    await queryInterface.addColumn('bestiary_recipes', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('bestiary_recipes', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn(
      'currency_items',
      'unknown17',
      'unknown0',
    );
    await queryInterface.addColumn('currency_items', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn('quest_rewards', 'rarity', 'rarity_key');
    await queryInterface.addColumn('tutorials', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addIndex(
      'bestiary_recipe_components',
      [
        {
          attribute: 'bestiary_capturable_monsters_key',
        },
      ],
      {
        indexName: 'index_bestiary_capturable_monsters_key',
      },
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(
      'bestiary_recipe_components',
      'index_bestiary_capturable_monsters_key',
    );
    await queryInterface.removeColumn('tutorials', 'flag0');
    await queryInterface.renameColumn('quest_rewards', 'rarity_key', 'rarity');
    await queryInterface.removeColumn('currency_items', 'unknown1');
    await queryInterface.renameColumn(
      'currency_items',
      'unknown0',
      'unknown17',
    );
    await queryInterface.removeColumn('bestiary_recipes', 'unknown1');
    await queryInterface.removeColumn('bestiary_recipes', 'flag1');
    await queryInterface.addColumn('bestiary_recipes', 'data1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'bestiary_recipe_components',
      'rarity_key',
    );
    await queryInterface.removeColumn(
      'bestiary_recipe_components',
      'bestiary_capturable_monsters_key',
    );
    await queryInterface.addColumn('bestiary_recipe_components', 'unknown9', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('bestiary_recipe_components', 'key3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('bestiary_nets', 'unknown1');
    await queryInterface.removeColumn('bestiary_nets', 'is_enabled');
    await queryInterface.removeColumn('bestiary_nets', 'drop_min_level');
    await queryInterface.removeColumn('bestiary_nets', 'drop_max_level');
    await queryInterface.removeColumn('bestiary_nets', 'capture_min_level');
    await queryInterface.removeColumn('bestiary_nets', 'capture_max_level');
    await queryInterface.renameColumn('bestiary_nets', 'unknown0', 'unknown2');
  },
};
