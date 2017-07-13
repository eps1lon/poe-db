const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthIzaroChests',
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
      min_labyrinth_tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      max_labyrinth_tier: {
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
    model.belongsTo(models.Chests, {
      foreignKey: 'chests_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthIzaroChests.dat';
  return model;
};
