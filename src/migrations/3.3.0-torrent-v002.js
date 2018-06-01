module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('essences', 'display_monster_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
  },
  down: async queryInterface => {
    await queryInterface.removeColumn('essences', 'display_monster_mods_key');
  },
};
