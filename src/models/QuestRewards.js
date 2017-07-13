const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestRewards',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      item_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      rarity: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown9: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      socket_gems: {
        type: DataTypes.TEXT,
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
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown2: {
        type: DataTypes.BOOLEAN,
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
    model.belongsTo(models.Quest, {
      foreignKey: 'quest_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Characters, {
      foreignKey: 'characters_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'QuestRewards.dat';
  return model;
};
