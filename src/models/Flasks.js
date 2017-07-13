const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Flasks',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      group: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      life_per_use: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      mana_per_use: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      recovery_time: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      buff_stat_values: {
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

  model.associate = models => {
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinitions, {
      foreignKey: 'buff_definitions_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
