const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AtlasQuestItems',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      quest_flags: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      league_quest_flags: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      map_tier: {
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
    model.belongsTo(models.WorldAreas, {
      foreignKey: 'world_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'AtlasQuestItems.dat';
  return model;
};
