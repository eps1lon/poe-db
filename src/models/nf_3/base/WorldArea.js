module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WorldArea',
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
      _connections_world_areas_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
      },
      _topologies_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 16,
      },
      _bosses_monster_varieties_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 22,
      },
      _monsters_monster_varieties_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 23,
      },
      _spawn_weight_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 24,
      },
      _full_clear_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 27,
      },
      _mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 31,
      },
      _vaal_area_world_areas_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 34,
      },
      _area_type_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 42,
      },
      _tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 55,
      },
      _1_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 72,
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
              attribute: 'parent_town_world_areas_key',
            },
          ],
          name: 'index_parent_town_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'difficulties_key',
            },
          ],
          name: 'index_difficulties_key',
        },
        {
          fields: [
            {
              attribute: 'achievement_items_key',
            },
          ],
          name: 'index_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'twinned_full_clear_achievement_items_key',
            },
          ],
          name: 'index_twinned_full_clear_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'enter_achievement_items_key',
            },
          ],
          name: 'index_enter_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: '8_mods_full_clear_achievement_items_key',
            },
          ],
          name: 'index_8_mods_full_clear_achievement_items_key',
        },
      ],
      tableName: 'world_areas',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'parent_town_world_area',
      $inverse: 'world_areas',
      $col_order: 17,
      foreignKey: {
        name: 'parent_town_world_areas_key',
        $type: 'uint',
        $col_order: 17,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Difficulty, {
      as: 'difficulty',
      $inverse: 'world_areas',
      $col_order: 18,
      foreignKey: {
        name: 'difficulties_key',
        $type: 'ulong',
        $col_order: 18,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_item',
      $inverse: 'world_areas',
      $col_order: 30,
      foreignKey: {
        name: 'achievement_items_key',
        $type: 'ulong',
        $col_order: 30,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'twinned_full_clear_achievement_item',
      $inverse: 'world_areas',
      $col_order: 62,
      foreignKey: {
        name: 'twinned_full_clear_achievement_items_key',
        $type: 'ulong',
        $col_order: 62,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'enter_achievement_item',
      $inverse: 'world_areas',
      $col_order: 63,
      foreignKey: {
        name: 'enter_achievement_items_key',
        $type: 'ulong',
        $col_order: 63,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: '8_mods_full_clear_achievement_item',
      $inverse: 'world_areas',
      $col_order: 68,
      foreignKey: {
        name: '8_mods_full_clear_achievement_items_key',
        $type: 'ulong',
        $col_order: 68,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'connections_world_areas',
      through: {
        model: models.WorldAreaHabtmConnectionsWorldarea,
        unique: false,
      },
      foreignKey: 'source_row',
      otherKey: 'target_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Topology, {
      as: 'topologies',
      through: {
        model: models.WorldAreaHabtmTopology,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'topology_row',
      $col_order: 16,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'bosses_monster_varieties',
      through: {
        model: models.WorldAreaHabtmBossesMonstervariety,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'monster_variety_row',
      $col_order: 22,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'monsters_monster_varieties',
      through: {
        model: models.WorldAreaHabtmMonstersMonstervariety,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'monster_variety_row',
      $col_order: 23,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'spawn_weight_tags',
      through: {
        model: models.WorldAreaHabtmSpawnWeightTag,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'tag_row',
      $col_order: 24,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'full_clear_achievement_items',
      through: {
        model: models.WorldAreaHabtmFullClearAchievementitem,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'achievement_item_row',
      $col_order: 27,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.WorldAreaHabtmMod,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'mod_row',
      $col_order: 31,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'vaal_area_world_areas',
      through: {
        model: models.WorldAreaHabtmVaalAreaWorldarea,
        unique: false,
      },
      foreignKey: 'source_row',
      otherKey: 'target_row',
      $col_order: 34,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'area_type_tags',
      through: {
        model: models.WorldAreaHabtmAreaTypeTag,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'tag_row',
      $col_order: 42,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'tags',
      through: {
        model: models.WorldAreaHabtmTag,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'tag_row',
      $col_order: 55,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: '1',
      through: {
        model: models.WorldAreaHabtm1,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'achievement_item_row',
      $col_order: 72,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'WorldAreas.dat';
  return model;
};
