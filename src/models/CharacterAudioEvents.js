const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterAudioEvents',
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
      quest_state: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
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
    model.belongsToMany(models.CharacterTextAudio, {
      through: 'MarauderCharacterTextAudio',
      as: 'marauder_character_text_audio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      through: 'RangerCharacterTextAudio',
      as: 'ranger_character_text_audio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      through: 'WitchCharacterTextAudio',
      as: 'witch_character_text_audio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      through: 'DuelistCharacterTextAudio',
      as: 'duelist_character_text_audio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      through: 'ShadowCharacterTextAudio',
      as: 'shadow_character_text_audio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      through: 'TemplarCharacterTextAudio',
      as: 'templar_character_text_audio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      through: 'ScionCharacterTextAudio',
      as: 'scion_character_text_audio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      through: 'GoddessCharacterTextAudio',
      as: 'goddess_character_text_audio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      through: 'JackTheAxeCharacterTextAudio',
      as: 'jack_the_axe_character_text_audio',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
