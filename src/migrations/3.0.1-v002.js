module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('maps', 'unknown0', 'version');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('maps', 'version', 'unknown0');
  },
};
