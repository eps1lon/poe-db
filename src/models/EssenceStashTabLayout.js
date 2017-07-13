const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EssenceStashTabLayout',
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
      x: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      y: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      int_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      slot_width: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      slot_height: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_upgradable_essence_slot: {
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

  model.associate = models => {
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
