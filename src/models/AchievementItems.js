const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AchievementItems',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      id: {
        type: DataTypes.TEXT,
      },
      unknown1: {
        type: DataTypes.INTEGER,
      },
      unknown2: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.TEXT,
      },
      completions_required: {
        type: DataTypes.INTEGER,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      classMethods: {
        associate: models => {
          model.belongsTo(models.Achievements, {
            foreignKey: 'achievements_key',
            target: 'row',
            nullable: true,
            test: [],
          });
        },
      },
    },
  );
  return model;
};
