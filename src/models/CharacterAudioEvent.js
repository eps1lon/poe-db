module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterAudioEvent',
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
      indexes: [],
      tableName: 'character_audio_events',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'marauder__character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmMarauderCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'ranger__character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmRangerCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'witch__character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmWitchCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'duelist__character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmDuelistCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'shadow__character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmShadowCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'templar__character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmTemplarCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'scion__character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmScionCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'goddess__character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmGoddessCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'jack_the_axe__character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmJackTheAxeCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterAudioEvents.dat';
  return model;
};
