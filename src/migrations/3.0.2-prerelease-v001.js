module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('harbingers', 'unknown2', 'unknown1');
    await queryInterface.renameColumn('maps', 'version', 'map_iteration');
    await queryInterface.renameColumn(
      'passive_skills',
      'unknown0',
      'stat5_value',
    );
    await queryInterface.renameColumn(
      'shop_payment_packages',
      'unknown6',
      'x_box_id',
    );
    await queryInterface.renameColumn(
      'shop_payment_packages',
      'unknown7',
      'shop_package_platform_key',
    );
    await queryInterface.renameColumn(
      'supporter_pack_sets',
      'unknown0',
      'shop_package_platform_key',
    );

    await queryInterface.addColumn('shop_items', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
  },
  down: async queryInterface => {
    await queryInterface.removeColumn('shop_items', 'flag2');
    await queryInterface.renameColumn(
      'supporter_pack_sets',
      'shop_package_platform_key',
      'unknown0',
    );
    await queryInterface.renameColumn(
      'shop_payment_packages',
      'shop_package_platform_key',
      'unknown7',
    );
    await queryInterface.renameColumn(
      'shop_payment_packages',
      'x_box_id',
      'unknown6',
    );
    await queryInterface.renameColumn(
      'passive_skills',
      'stat5_value',
      'unknown0',
    );
    await queryInterface.renameColumn('maps', 'map_iteration', 'version');
    await queryInterface.renameColumn('harbingers', 'unknown1', 'unknown2');
  },
};
