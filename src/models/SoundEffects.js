const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SoundEffects',
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
      sound_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      sound_file_2_d: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown3: {
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

  model.associate = models => {};

  model.DAT_FILE = 'SoundEffects.dat';
  return model;
};
