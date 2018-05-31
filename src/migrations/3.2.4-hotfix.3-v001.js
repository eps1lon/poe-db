module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('base_item_types', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('mods', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.renameColumn(
      'passive_skills',
      'unknown0',
      'stat5_value',
    );
    await queryInterface.addColumn('str_dex_int_mission_mods', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
  },
  down: async queryInterface => {
    await queryInterface.removeColumn('str_dex_int_mission_mods', 'flag0');
    await queryInterface.renameColumn(
      'passive_skills',
      'stat5_value',
      'unknown0',
    );
    await queryInterface.removeColumn('mods', 'flag0');
    await queryInterface.removeColumn('base_item_types', 'unknown3');
  },
};
