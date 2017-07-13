const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopItem',
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
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      small_art_jpg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      youtube_video: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown11: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      large_art_jpg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      description2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      daily_deal_art_jpg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown15: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_tencent_item: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_tradeable: {
        type: DataTypes.BOOLEAN,
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
    model.belongsToMany(models.ShopItem, {
      through: 'PackageShopItem',
      as: 'package_shop_item',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ShopCategory, {
      through: 'ShopItemShopCategory',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
