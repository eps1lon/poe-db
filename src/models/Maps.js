const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Maps',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      regular_guild_character: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unique_guild_character: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      shaped_area_level: {
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
      foreignKey: 'regular_world_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldAreas, {
      foreignKey: 'unique_world_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'map_upgrade_base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Maps, {
      foreignKey: 'shaped_base_maps_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Maps, {
      foreignKey: 'maps_key1',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Maps, {
      foreignKey: 'maps_key2',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Maps, {
      foreignKey: 'maps_key3',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterPacks, {
      as: 'monster_packs',
      through: 'MapsMonsterPacks',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'higher_tier_maps_base_item_types',
      through: 'HigherTierMapsBaseItemTypes',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Maps.dat';
  return model;
};
