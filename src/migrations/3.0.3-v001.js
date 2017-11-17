module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
      'base_item_types',
      'unknown3',
      'inflection',
    );
    await queryInterface.addColumn('crafting_bench_options', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown30', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn(
      'n_p_c_text_audios',
      'unknown0',
      'inflection',
    );
    await queryInterface.renameColumn('words', 'unknown8', 'inflection');
  },
  down: async queryInterface => {
    await queryInterface.renameColumn('words', 'inflection', 'unknown8');
    await queryInterface.renameColumn(
      'n_p_c_text_audios',
      'inflection',
      'unknown0',
    );
    await queryInterface.removeColumn('item_visual_identities', 'unknown30');
    await queryInterface.removeColumn('crafting_bench_options', 'flag0');
    await queryInterface.renameColumn(
      'base_item_types',
      'inflection',
      'unknown3',
    );
  },
};
