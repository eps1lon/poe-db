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
      as: 'marauder_character_text_audio',
      through: 'CharacterAudioEventMarauderCharacterTextAudios',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'ranger_character_text_audio',
      through: 'CharacterAudioEventRangerCharacterTextAudios',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'witch_character_text_audio',
      through: 'CharacterAudioEventWitchCharacterTextAudios',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'duelist_character_text_audio',
      through: 'CharacterAudioEventDuelistCharacterTextAudios',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'shadow_character_text_audio',
      through: 'CharacterAudioEventShadowCharacterTextAudios',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'templar_character_text_audio',
      through: 'CharacterAudioEventTemplarCharacterTextAudios',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'scion_character_text_audio',
      through: 'CharacterAudioEventScionCharacterTextAudios',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'goddess_character_text_audio',
      through: 'CharacterAudioEventGoddessCharacterTextAudios',
      $col_order: 11,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterTextAudio, {
      as: 'jack_the_axe_character_text_audio',
      through: 'CharacterAudioEventJackTheAxeCharacterTextAudios',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterAudioEvents.dat';
  return model;
};
