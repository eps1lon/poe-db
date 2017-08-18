module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EnvironmentCorruptedMusic',
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
      env_file: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: 4,
      },
      ambient_sound_file: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
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
              attribute: 'environment_row',
            },
            {
              attribute: 'music_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'environment__corrupted__musics',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Environment, {
      foreignKey: 'environment_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Music, {
      foreignKey: 'music_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
