const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Environments',
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
      base_ambient_sound_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      base_env_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      corrupted_env_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      keys1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      corrupted_ambient_sound_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      ambient_sound_file: {
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
