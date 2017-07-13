const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'RaceTimes',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      index: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      start_unix_time: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      end_unix_time: {
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
    model.belongsTo(models.Races, {
      foreignKey: 'races_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
