const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexIntMissionExtraRequirement',
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
      time_limit: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      has_time_bonus_per_kill: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      has_time_bonus_per_object_tagged: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      has_limited_portals: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      time_limit_bonus_from_objective: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      object_count: {
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
    model.belongsTo(models.NPCTalk, {
      foreignKey: 'npc_talk_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
