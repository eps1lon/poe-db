const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DefaultMonsterStats',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      display_level: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      damage: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: false,
      },
      evasion: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      accuracy: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      life: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      experience: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      ally_life: {
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
    model.belongsTo(models.Difficulties, {
      foreignKey: 'difficulty_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DefaultMonsterStats.dat';
  return model;
};
