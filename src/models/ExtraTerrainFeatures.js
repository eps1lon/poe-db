const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ExtraTerrainFeatures',
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
      unknown1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown5: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown7: {
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

  model.DAT_FILE = 'ExtraTerrainFeatures.dat';
  return model;
};
