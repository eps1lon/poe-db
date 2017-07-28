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
      _marauder_character_text_audio_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
      _ranger_character_text_audio_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
      },
      _witch_character_text_audio_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 6,
      },
      _duelist_character_text_audio_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 7,
      },
      _shadow_character_text_audio_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 8,
      },
      _templar_character_text_audio_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 9,
      },
      _scion_character_text_audio_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 10,
      },
      _goddess_character_text_audio_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 11,
      },
      _jack_the_axe_character_text_audio_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 12,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'character_audio_events',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'marauder_character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmMarauderCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'ranger_character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmRangerCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'witch_character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmWitchCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'duelist_character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmDuelistCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'shadow_character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmShadowCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'templar_character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmTemplarCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'scion_character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmScionCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'goddess_character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmGoddessCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      $col_order: 11,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'jack_the_axe_character_text_audio',
      through: {
        model: models.CharacterAudioEventHabtmJackTheAxeCharactertextaudio,
        unique: false,
      },
      foreignKey: 'character_audio_event_row',
      otherKey: 'character_text_audio_row',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterAudioEvents.dat';
  return model;
};
