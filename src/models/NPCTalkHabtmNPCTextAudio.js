module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCTalkHabtmNPCTextAudio',
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
      tableName: 'n_p_c_talk_habtm_n_p_c_text_audios',
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCTalk, {
      foreignKey: 'n_p_c_talk_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCTextAudio, {
      foreignKey: 'n_p_c_text_audio_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
