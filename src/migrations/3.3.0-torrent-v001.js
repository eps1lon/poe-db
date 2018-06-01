module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
      'base_item_types',
      'unknown3',
      'unknown0',
    );
    await queryInterface.addColumn('granted_effects_per_levels', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('granted_effects_per_levels', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_classes', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('mods', 'flag0');
    await queryInterface.addColumn('mods', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('mods', 'unknown67', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('skill_gems', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('skill_gems', 'key0');
    await queryInterface.removeColumn('mods', 'unknown67');
    await queryInterface.removeColumn('mods', 'unknown1');
    await queryInterface.addColumn('mods', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('item_classes', 'flag0');
    await queryInterface.removeColumn('granted_effects_per_levels', 'unknown1');
    await queryInterface.removeColumn('granted_effects_per_levels', 'key0');
    await queryInterface.renameColumn(
      'base_item_types',
      'unknown0',
      'unknown3',
    );
  },
};
