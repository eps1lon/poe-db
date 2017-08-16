module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterAudioEventHabtmGoddessCharactertextaudio',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'character_audio_event_row',
            },
            {
              attribute: 'character_text_audio_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'character_audio_event_habtm_goddess_charactertextaudios',
      underscored: true,
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
