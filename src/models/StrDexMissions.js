const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexMissions',
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
      time_limit: {
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
      dummy_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      dummy_spawn_timer: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown12: {
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
    model.belongsTo(models.MonsterVarieties, {
      foreignKey: 'dummy_monster_varieties_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCTalk, {
      foreignKey: 'npc_talk_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'allies_monster_varieties',
      through: 'AlliesMonsterVarieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'mods',
      through: 'StrDexMissionsMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'traps_monster_varieties',
      through: 'TrapsMonsterVarieties',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrDexMissions.dat';
  return model;
};
