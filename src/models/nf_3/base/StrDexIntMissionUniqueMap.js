module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexIntMissionUniqueMap',
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
          fields: [
            {
              attribute: 'world_areas_key',
            },
          ],
          name: 'index_world_areas_key',
        },
      ],
      tableName: 'str_dex_int_mission_unique_maps',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'world_area',
      $inverse: 'str_dex_int_mission_unique_maps',
      $col_order: 4,
      foreignKey: {
        name: 'world_areas_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.StrDexIntMissionUniqueMapHabtmMod,
        unique: false,
      },
      foreignKey: 'str_dex_int_mission_unique_map_row',
      otherKey: 'mod_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'map_boss_monster_varieties',
      through: {
        model: models.StrDexIntMissionUniqueMapHabtmMapBossMonstervariety,
        unique: false,
      },
      foreignKey: 'str_dex_int_mission_unique_map_row',
      otherKey: 'monster_variety_row',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrDexIntMissionUniqueMaps.dat';
  return model;
};
