const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestAchievements',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      quest_state: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_hardcore_achievement: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_standard_achievement: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown1: {
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
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Difficulties, {
      foreignKey: 'difficulties_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
