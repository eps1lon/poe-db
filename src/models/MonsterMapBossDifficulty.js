const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterMapBossDifficulty',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      map_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat1_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat2_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat3_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat4_value: {
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
    model.belongsTo(models.Stats, {
      foreignKey: 'stats_key1',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stats, {
      foreignKey: 'stats_key2',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stats, {
      foreignKey: 'stats_key3',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stats, {
      foreignKey: 'stats_key4',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterMapBossDifficulty.dat';
  return model;
};
