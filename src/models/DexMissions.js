const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexMissions',
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
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      magic_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      rare_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unique_monster_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      rare_monster_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      magic_monster_pack_count: {
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
