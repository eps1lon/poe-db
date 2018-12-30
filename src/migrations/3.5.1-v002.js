module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods_0s',
      'delve_crafting_modifier__mods0s',
    );
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods_1s',
      'delve_crafting_modifier__mods1s',
    );
    await queryInterface.removeColumn(
      'delve_crafting_modifier__mods0s',
      'keys1',
    );
    await queryInterface.removeColumn(
      'delve_crafting_modifier__mods1s',
      'keys0',
    );
    await queryInterface.removeColumn(
      'delve_crafting_modifiers',
      '_mods_0_cache',
    );
    await queryInterface.removeColumn(
      'delve_crafting_modifiers',
      '_mods_1_cache',
    );
    await queryInterface.addColumn('delve_crafting_modifiers', '_mods0_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('delve_crafting_modifiers', '_mods1_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'delve_crafting_modifiers',
      '_mods1_cache',
    );
    await queryInterface.removeColumn(
      'delve_crafting_modifiers',
      '_mods0_cache',
    );
    await queryInterface.addColumn(
      'delve_crafting_modifiers',
      '_mods_1_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'delve_crafting_modifiers',
      '_mods_0_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('delve_crafting_modifier__mods1s', 'keys0', {
      allowNull: false,
      autoIncrement: false,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('delve_crafting_modifier__mods0s', 'keys1', {
      allowNull: false,
      autoIncrement: false,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods1s',
      'delve_crafting_modifier__mods_1s',
    );
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods0s',
      'delve_crafting_modifier__mods_0s',
    );
  },
};
