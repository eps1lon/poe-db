module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Environment',
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
        allowNull: true,
        $col_order: 0,
      },
      base_ambient_sound_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      base_env_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      ambient_sound_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      ambient_bank_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      _music_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
      _corrupted_music_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'environment_transitions_key',
            },
          ],
          name: 'index_environment_transitions_key',
        },
      ],
      tableName: 'environments',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.EnvironmentTransition, {
      as: 'environment_transition',
      $inverse: 'environments',
      $col_order: 11,
      foreignKey: {
        name: 'environment_transitions_key',
        $type: 'ulong',
        $col_order: 11,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Music, {
      as: 'music',
      through: {
        model: models.EnvironmentHabtmMusic,
        unique: false,
      },
      foreignKey: 'environment_row',
      otherKey: 'music_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Music, {
      as: 'corrupted_music',
      through: {
        model: models.EnvironmentHabtmCorruptedMusic,
        unique: false,
      },
      foreignKey: 'environment_row',
      otherKey: 'music_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Environments.dat';
  return model;
};
