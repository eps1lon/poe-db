module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WorldAreas',
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
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      act: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      is_town: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      has_waypoint: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      area_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      has_doodads: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      unknown9: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      loading_screen_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      unknown15: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
      unknown21: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 19,
      },
      unknown22: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 20,
      },
      unknown23: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 21,
      },
      is_map: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 26,
      },
      unknown32: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 28,
      },
      unknown33: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 29,
      },
      unknown39: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 32,
      },
      unknown40: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 33,
      },
      strongbox_spawn_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 36,
      },
      strongbox_max_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 37,
      },
      strongbox_rarity_weight: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 38,
      },
      is_town_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 39,
      },
      unknown49: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 40,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 41,
      },
      unknown50: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 43,
      },
      is_merciless_vaal_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 44,
      },
      unknown52: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 45,
      },
      is_hideout: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 46,
      },
      unknown53: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 47,
      },
      unknown54: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 48,
      },
      unknown55: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 49,
      },
      unknown56: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 50,
      },
      unknown_index: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 51,
      },
      unknown59: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 52,
      },
      unknown60: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 53,
      },
      unknown61: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 54,
      },
      is_vaal_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 56,
      },
      unknown64: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 57,
      },
      unknown65: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 58,
      },
      unknown66: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 59,
      },
      is_labyrinth_airlock: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 60,
      },
      is_labyrinth_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 61,
      },
      unknown73: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 64,
      },
      unknown74: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 65,
      },
      unknown75: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 66,
      },
      unknown76: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 67,
      },
      unknown77: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 69,
      },
      unknown78: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 70,
      },
      unknown79: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 71,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 73,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 74,
      },
      unknown82: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 75,
      },
      unknown83: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 76,
      },
      keys2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 77,
      },
      key0a: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 78,
      },
      key0b: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 79,
      },
      unknown88: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 80,
      },
      unknown89: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 81,
      },
      unknown90: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 82,
      },
      unknown91: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 83,
      },
      unknown92: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 84,
      },
      unknown93: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 85,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['parent_town_world_areas_key'],
        },
        {
          fields: ['difficulties_key'],
        },
        {
          fields: ['achievement_items_key'],
        },
        {
          fields: ['twinned_full_clear_achievement_items_key'],
        },
        {
          fields: ['enter_achievement_items_key'],
        },
        {
          fields: ['8_mods_full_clear_achievement_items_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldAreas, {
      foreignKey: {
        name: 'parent_town_world_areas_key',
        $col_order: 17,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.WorldAreas.hasMany(model, {
      foreignKey: {
        name: 'parent_town_world_areas_key',
        $col_order: 17,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Difficulties, {
      foreignKey: {
        name: 'difficulties_key',
        $col_order: 18,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Difficulties.hasMany(model, {
      foreignKey: {
        name: 'difficulties_key',
        $col_order: 18,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 30,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItems.hasMany(model, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 30,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: {
        name: 'twinned_full_clear_achievement_items_key',
        $col_order: 62,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItems.hasMany(model, {
      foreignKey: {
        name: 'twinned_full_clear_achievement_items_key',
        $col_order: 62,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: {
        name: 'enter_achievement_items_key',
        $col_order: 63,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItems.hasMany(model, {
      foreignKey: {
        name: 'enter_achievement_items_key',
        $col_order: 63,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: {
        name: '8_mods_full_clear_achievement_items_key',
        $col_order: 68,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItems.hasMany(model, {
      foreignKey: {
        name: '8_mods_full_clear_achievement_items_key',
        $col_order: 68,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'connections_world_areas',
      through: 'WorldAreasConnectionsWorldAreas',
      $col_order: 5,
      foreignKey: 'source_row',
      targetKey: 'target_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Topologies, {
      as: 'topologies',
      through: 'WorldAreasTopologies',
      $col_order: 16,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'bosses_monster_varieties',
      through: 'WorldAreasBossesMonsterVarieties',
      $col_order: 22,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'monsters_monster_varieties',
      through: 'WorldAreasMonstersMonsterVarieties',
      $col_order: 23,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'spawn_weight_tags',
      through: 'WorldAreasSpawnWeightTags',
      $col_order: 24,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'full_clear_achievement_items',
      through: 'WorldAreasFullClearAchievementItems',
      $col_order: 27,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'mods',
      through: 'WorldAreasMods',
      $col_order: 31,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'vaal_area_world_areas',
      through: 'WorldAreasVaalAreaWorldAreas',
      $col_order: 34,
      foreignKey: 'source_row',
      targetKey: 'target_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'area_type_tags',
      through: 'WorldAreasAreaTypeTags',
      $col_order: 42,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'tags',
      through: 'WorldAreasTags',
      $col_order: 55,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: '1',
      through: 'WorldAreasAchievementItems',
      $col_order: 72,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'WorldAreas.dat';
  return model;
};
