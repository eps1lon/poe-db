module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexIntMissionUniqueMaps',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['world_areas_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldAreas, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.WorldAreas.hasMany(model, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 4,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Mods, {
      as: 'mods',
      through: 'StrDexIntMissionUniqueMapsMods',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'map_boss_monster_varieties',
      through: 'StrDexIntMissionUniqueMapsMapBossMonsterVarieties',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrDexIntMissionUniqueMaps.dat';
  return model;
};
