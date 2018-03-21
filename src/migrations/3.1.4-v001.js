module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('stats', 'unknown2', {
      type: Sequelize.TEXT,
      allowNull: false,
      primaryKey: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('stats', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
  },
};
