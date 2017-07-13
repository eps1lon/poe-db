const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexIntMissions',
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
      kill_target: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      fail_if_target_killed: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      kill_guards: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      fail_if_guards_killed: {
        type: DataTypes.BOOLEAN,
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
      chest_flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      chest_flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      fail_if_no_guards_left: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      timer: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag7: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
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
      foreignKey: 'hostage_monster_varieties_key',
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
    model.belongsToMany(models.AchievementItems, {
      as: 'achievement_items',
      through: 'DexIntMissionsAchievementItems',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DexIntMissions.dat';
  return model;
};
