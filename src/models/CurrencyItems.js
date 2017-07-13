const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CurrencyItems',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      stacks: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      currency_use_type: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      action: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      directions: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      cosmetic_type_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown17: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      currency_tab_stack_size: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      abbreviation: {
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
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'full_stack_base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'possession_achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'usage_achievement_items',
      through: 'UsageAchievementItems',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
