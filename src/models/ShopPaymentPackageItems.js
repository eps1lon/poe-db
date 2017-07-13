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
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
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
      foreignKey: 'shop_payment_package_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopItem, {
      foreignKey: 'shop_item_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopToken, {
      foreignKey: 'shop_token_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopPaymentPackageItems.dat';
  return model;
};
