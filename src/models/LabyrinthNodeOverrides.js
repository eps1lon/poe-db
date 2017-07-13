const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthNodeOverrides',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      id1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      id2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data2: {
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

  model.DAT_FILE = 'LabyrinthNodeOverrides.dat';
  return model;
};
