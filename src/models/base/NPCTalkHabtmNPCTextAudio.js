module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCTalkHabtmNPCTextAudio',
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
              attribute: 'npc_talk_row',
            },
            {
              attribute: 'npc_text_audio_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'n_p_c_talk__n_p_c_text_audios',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCTalk, {
      foreignKey: 'npc_talk_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCTextAudio, {
      foreignKey: 'npc_text_audio_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
