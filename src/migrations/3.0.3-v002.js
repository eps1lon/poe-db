module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('shop_payment_packages', 'x_box_id', {
      type: Sequelize.STRING,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.renameColumn('harbingers', 'unknown3', 'unknown2');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('shop_payment_packages', 'x_box_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.renameColumn('harbingers', 'unknown2', 'unknown3');
  },
};
