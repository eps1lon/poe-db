const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterResistances',
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
      fire_normal: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      cold_normal: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      lightning_normal: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      chaos_normal: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      fire_cruel: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      cold_cruel: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      lightning_cruel: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      chaos_cruel: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      fire_merciless: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      cold_merciless: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      lightning_merciless: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      chaos_merciless: {
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

  return model;
};
