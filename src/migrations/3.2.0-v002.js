module.exports = {
  up: async queryInterface => {
    await queryInterface.renameColumn(
      'base_item_types',
      'unknown3',
      'inflection',
    );
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
    await queryInterface.renameColumn(
      'base_item_types',
      'inflection',
      'unknown3',
    );
  },
};
