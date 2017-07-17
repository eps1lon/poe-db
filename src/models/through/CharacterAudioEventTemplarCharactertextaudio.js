module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterAudioEventTemplarCharactertextaudio',
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
      indexes: [],
      tableName: 'character_audio_event_templar_charactertextaudios',
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
