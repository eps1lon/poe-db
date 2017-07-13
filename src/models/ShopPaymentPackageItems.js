const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopPaymentPackageItems',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      unknown0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
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
        $col_order: 1,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopItem, {
      foreignKey: {
        name: 'shop_item_key',
        $col_order: 2,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopToken, {
      foreignKey: {
        name: 'shop_token_key',
        $col_order: 4,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopPaymentPackageItems.dat';
  return model;
};
