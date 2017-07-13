const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexIntMissionMaps',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
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
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldAreas, {
      foreignKey: 'world_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'map_boss_monster_varieties',
      through: 'MapBossMonsterVarieties',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrDexIntMissionMaps.dat';
  return model;
};
