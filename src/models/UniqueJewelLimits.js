const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UniqueJewelLimits',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      unique_items_key: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      limit: {
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

  model.DAT_FILE = 'UniqueJewelLimits.dat';
  return model;
};
