const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Projectiles',
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
      ao_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      loop_animation_id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      impact_animation_id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      projectile_speed: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      index4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      flag2: {
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

  model.DAT_FILE = 'Projectiles.dat';
  return model;
};
