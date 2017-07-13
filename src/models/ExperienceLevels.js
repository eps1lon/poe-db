const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ExperienceLevels',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      index0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      experience: {
        type: DataTypes.INTEGER.UNSIGNED,
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

  model.DAT_FILE = 'ExperienceLevels.dat';
  return model;
};
