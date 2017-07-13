const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AchievementItems',
    {
      row: {
        type: 'BIGINT.UNSIGNED',
        primaryKey: true,
        allowNull: false,
      },
      id: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      unknown1: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      unknown2: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      completions_required: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: 'BOOLEAN',
        primaryKey: false,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate: models => {
          model.belongsTo(models.Achievements, {
            foreignKey: 'achievements_key',
            target: 'row',
            nullable: true,
          });
        },
      },
    },
  );
  return model;
};
