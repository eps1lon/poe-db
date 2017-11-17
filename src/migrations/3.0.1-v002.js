module.exports = {
  up: async queryInterface => {
    await queryInterface.renameColumn('maps', 'unknown0', 'version');
  },
  down: async queryInterface => {
    await queryInterface.renameColumn('maps', 'version', 'unknown0');
  },
};
