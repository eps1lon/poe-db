const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopPaymentPackagePrice',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      price: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopPaymentPackage, {
      foreignKey: {
        name: 'shop_payment_package_key',
        $col_order: 0,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopCountry, {
      foreignKey: {
        name: 'shop_country_key',
        $col_order: 1,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopPaymentPackagePrice.dat';
  return model;
};
