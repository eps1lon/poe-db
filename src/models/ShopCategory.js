const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopCategory',
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
      client_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      client_jpg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      website_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      website_jpg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown5: {
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

  model.associate = models => {};

  model.DAT_FILE = 'ShopCategory.dat';
  return model;
};
