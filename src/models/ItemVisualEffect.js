const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ItemVisualEffect',
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
      dagger_epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      bow_epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      one_handed_mace_epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      one_handed_sword_epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      index5: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      two_handed_sword_epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      two_handed_staff_epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      two_handed_mace_epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      one_handed_axe_epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      two_handed_axe_epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      claw_epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      pet_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag1: {
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

  return model;
};
