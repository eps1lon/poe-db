module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrIntMissionMonsterWave',
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
      wave_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      pack_timer: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      time_limit: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      unknown13: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      unique_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
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
              attribute: 'monster_packs_key',
            },
          ],
        },
      ],
      tableName: 'str_int_mission_monster_waves',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterPack, {
      foreignKey: {
        name: 'monster_packs_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MonsterPack.hasMany(model, {
      foreignKey: {
        name: 'monster_packs_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'unique_monster_varieties',
      through: 'StrIntMissionMonsterWaveUniqueMonsterVarieties',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrIntMissionMonsterWaves.dat';
  return model;
};
