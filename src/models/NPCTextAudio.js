module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCTextAudio',
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
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      mono_audio_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      stereo_audio_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      has_stereo: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
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
              attribute: 'characters_key',
            },
          ],
        },
      ],
      tableName: 'n_p_c_text_audios',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Character, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 1,
        $type: 'long',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Character.hasMany(model, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 1,
        $type: 'long',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'NPCTextAudio.dat';
  return model;
};
