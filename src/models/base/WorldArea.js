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
        allowNull: true,
        $col_order: 0,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      act: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      is_town: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      has_waypoint: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      area_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      loading_screen_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      unknown10: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      unknown13: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      unknown17: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      unknown18: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      unknown19: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      is_map_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 23,
      },
      unknown32: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 25,
      },
      unknown33: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 26,
      },
      unknown38: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 29,
      },
      unknown39: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 30,
      },
      strongbox_spawn_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 33,
      },
      strongbox_max_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 34,
      },
      strongbox_rarity_weight: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 35,
      },
      flag0: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 36,
      },
      unknown46: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 37,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 38,
      },
      unknown50: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 40,
      },
      unknown51: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 41,
      },
      is_hideout: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 42,
      },
      unknown52: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 43,
      },
      unknown53: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 44,
      },
      unknown54: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 45,
      },
      unknown55: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 46,
      },
      unknown56: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 47,
      },
      unknown57: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 48,
      },
      unknown58: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 49,
      },
      unknown59: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 50,
      },
      is_vaal_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 52,
      },
      unknown62: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 53,
      },
      unknown63: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 54,
      },
      unknown64: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 55,
      },
      is_labyrinth_airlock: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 56,
      },
      is_labyrinth_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 57,
      },
      unknown69: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 60,
      },
      unknown70: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 61,
      },
      unknown71: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 62,
      },
      tsi_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 63,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 64,
      },
      unknown75: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 65,
      },
      unknown76: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 66,
      },
      unknown77: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 67,
      },
      is_unique_map_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 69,
      },
      is_labyrinth_boss_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 70,
      },
      unknown80: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 71,
      },
      unknown81: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 72,
      },
      unknown89: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 77,
      },
      unknown90: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 78,
      },
      unknown91: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 79,
      },
      unknown92: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 80,
      },
      unknown93: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 81,
      },
      is_master_daily_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 82,
      },
      harbinger_spawn_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 84,
      },
      harbinger_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
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
        $col_order: 14,
      },
      _bosses_monster_varieties_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 19,
      },
      _monsters_monster_varieties_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 20,
      },
      _spawn_weight_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 21,
      },
      _full_clear_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 24,
      },
      _mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 28,
      },
      _vaal_area_world_areas_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 31,
      },
      _area_type_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 39,
      },
      _tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 51,
      },
      _waypoint_activation_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 68,
      },
      _completion_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 73,
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
              attribute: 'parent_town_world_areas_key',
            },
          ],
          name: 'index_parent_town_world_areas_key',
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
              attribute: 'first_entry_npc_text_audio_key',
            },
          ],
          name: 'index_first_entry_npc_text_audio_key',
        },
        {
          fields: [
            {
              attribute: 'first_entry_sound_effects_key',
            },
          ],
          name: 'index_first_entry_sound_effects_key',
        },
        {
          fields: [
            {
              attribute: 'first_entry_np_cs_key',
              length: 250,
            },
          ],
          name: 'index_first_entry_np_cs_key',
        },
        {
          fields: [
            {
              attribute: 'environments_key',
            },
          ],
          name: 'index_environments_key',
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
      $col_order: 15,
      foreignKey: {
        name: 'parent_town_world_areas_key',
        $type: 'uint',
        $col_order: 15,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_item',
      $inverse: 'world_areas',
      $col_order: 27,
      foreignKey: {
        name: 'achievement_items_key',
        $type: 'ulong',
        $col_order: 27,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'twinned_full_clear_achievement_item',
      $inverse: 'world_areas',
      $col_order: 58,
      foreignKey: {
        name: 'twinned_full_clear_achievement_items_key',
        $type: 'ulong',
        $col_order: 58,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'enter_achievement_item',
      $inverse: 'world_areas',
      $col_order: 59,
      foreignKey: {
        name: 'enter_achievement_items_key',
        $type: 'ulong',
        $col_order: 59,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCTextAudio, {
      as: 'first_entry_npc_text_audio',
      $inverse: 'world_areas',
      $col_order: 74,
      foreignKey: {
        name: 'first_entry_npc_text_audio_key',
        $type: 'ulong',
        $col_order: 74,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.SoundEffect, {
      as: 'first_entry_sound_effect',
      $inverse: 'world_areas',
      $col_order: 75,
      foreignKey: {
        name: 'first_entry_sound_effects_key',
        $type: 'ulong',
        $col_order: 75,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPC, {
      as: 'first_entry_npc',
      $inverse: 'world_areas',
      $col_order: 76,
      foreignKey: {
        name: 'first_entry_np_cs_key',
        $type: 'ref|string',
        $col_order: 76,
      },
      targetKey: 'id',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Environment, {
      as: 'environment',
      $inverse: 'world_areas',
      $col_order: 83,
      foreignKey: {
        name: 'environments_key',
        $type: 'ulong',
        $col_order: 83,
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
      $col_order: 14,
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
      $col_order: 19,
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
      $col_order: 20,
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
      $col_order: 21,
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
      $col_order: 24,
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
      $col_order: 28,
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
      $col_order: 31,
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
      $col_order: 39,
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
      $col_order: 51,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'waypoint_activation_achievement_items',
      through: {
        model: models.WorldAreaHabtmWaypointActivationAchievementitem,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'achievement_item_row',
      $col_order: 68,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'completion_achievement_items',
      through: {
        model: models.WorldAreaHabtmCompletionAchievementitem,
        unique: false,
      },
      foreignKey: 'world_area_row',
      otherKey: 'achievement_item_row',
      $col_order: 73,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'WorldAreas.dat';
  return model;
};
