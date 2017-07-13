const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EventSeasonRewards',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      point: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      reward_command: {
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
    model.belongsTo(models.EventSeason, {
      foreignKey: 'event_season_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
