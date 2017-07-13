const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartStates',
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
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_pvp: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown: {
        type: DataTypes.INTEGER.UNSIGNED,
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
    model.belongsTo(models.Characters, {
      foreignKey: 'characters_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.CharacterStartStateSet, {
      foreignKey: 'character_start_state_set_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.PassiveSkills, {
      through: 'CharacterStartStatesPassiveSkills',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterStartQuestState, {
      through: 'NormalCharacterStartQuestState',
      as: 'normal_character_start_quest_state',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterStartQuestState, {
      through: 'CruelCharacterStartQuestState',
      as: 'cruel_character_start_quest_state',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterStartQuestState, {
      through: 'MercilessCharacterStartQuestState',
      as: 'merciless_character_start_quest_state',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
