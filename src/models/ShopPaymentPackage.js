const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopPaymentPackage',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      coins: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      available_flag: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      contains_beta_key: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      background_image: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown5: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      physical_item_points: {
        type: DataTypes.INTEGER,
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
      foreignKey: 'upgrade_shop_payment_package_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopPaymentPackage.dat';
  return model;
};
