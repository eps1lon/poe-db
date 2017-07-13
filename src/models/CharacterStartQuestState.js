const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartQuestState',
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
      quest_states: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      keys1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown9: {
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
    model.belongsToMany(models.Quest, {
      as: 'quest',
      through: 'CharacterStartQuestStateQuest',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MapPins, {
      as: 'map_pins',
      through: 'CharacterStartQuestStateMapPins',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterStartQuestState.dat';
  return model;
};
