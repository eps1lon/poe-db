const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WeaponTypes',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      critical: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      speed: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      damage_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      damage_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      range_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      null6: {
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
