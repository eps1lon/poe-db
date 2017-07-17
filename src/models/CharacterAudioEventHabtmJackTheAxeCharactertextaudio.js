module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterAudioEventHabtmJackTheAxeCharactertextaudio',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['character_audio_event_row', 'character_text_audio_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'character_audio_event_habtm_jack_the_axe_charactertextaudios',
    },
  );

  model.associate = models => {
    model.belongsTo(models.CharacterAudioEvent, {
      foreignKey: 'character_audio_event_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.CharacterTextAudio, {
      foreignKey: 'character_text_audio_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
