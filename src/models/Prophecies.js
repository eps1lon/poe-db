const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Prophecies',
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
      prediction_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown_unique: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flavour_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      ogg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      prophecy_chain_position: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_enabled: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      seal_cost_normal: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      seal_cost_cruel: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      seal_cost_merciless: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag1: {
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
    model.belongsTo(models.ProphecyChain, {
      foreignKey: 'prophecy_chain_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ClientStrings, {
      through: 'QuestTrackerClientStrings',
      as: 'quest_tracker_client_strings',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
