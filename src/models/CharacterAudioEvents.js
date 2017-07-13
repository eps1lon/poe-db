module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterAudioEvents',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      quest_state: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
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
      as: 'marauder_character_text_audio',
      through: 'CharacterAudioEventsMarauderCharacterTextAudio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'ranger_character_text_audio',
      through: 'CharacterAudioEventsRangerCharacterTextAudio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'witch_character_text_audio',
      through: 'CharacterAudioEventsWitchCharacterTextAudio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'duelist_character_text_audio',
      through: 'CharacterAudioEventsDuelistCharacterTextAudio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'shadow_character_text_audio',
      through: 'CharacterAudioEventsShadowCharacterTextAudio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'templar_character_text_audio',
      through: 'CharacterAudioEventsTemplarCharacterTextAudio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'scion_character_text_audio',
      through: 'CharacterAudioEventsScionCharacterTextAudio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'goddess_character_text_audio',
      through: 'CharacterAudioEventsGoddessCharacterTextAudio',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'jack_the_axe_character_text_audio',
      through: 'CharacterAudioEventsJackTheAxeCharacterTextAudio',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterAudioEvents.dat';
  return model;
};
