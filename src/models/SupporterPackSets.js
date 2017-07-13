const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SupporterPackSets',
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
      format_title: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      background: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      time0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      time1: {
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

  model.associate = models => {};

  return model;
};
