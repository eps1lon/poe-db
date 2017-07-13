const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ItemExperiencePerLevel',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      item_current_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      experience: {
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

  model.DAT_FILE = 'ItemExperiencePerLevel.dat';
  return model;
};
