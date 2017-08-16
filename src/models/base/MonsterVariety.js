module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterVariety',
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
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      object_size: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      minimum_attack_distance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      maximum_attack_distance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      act_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      ao_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      base_monster_type_index: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      unknown_index0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      unknown_index1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      model_size_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      experience_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 20,
      },
      unknown7: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 21,
      },
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 22,
      },
      unknown9: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 23,
      },
      unknown10: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 24,
      },
      critical_strike_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 25,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 26,
      },
      ais_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 28,
      },
      stance: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 30,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 31,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 32,
      },
      damage_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 33,
      },
      life_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 34,
      },
      attack_speed: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 35,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 41,
      },
      unknown13: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 43,
      },
      unknown14: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 47,
      },
      unknown15: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 48,
      },
      unknown16: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 49,
      },
      unknown17: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 50,
      },
      unknown18: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 51,
      },
      unknown19: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 52,
      },
      unknown20: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 53,
      },
      unknown21: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 54,
      },
      unknown22: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 55,
      },
      unknown23: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 56,
      },
      key3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 71,
      },
      _mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 9,
      },
      _tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 19,
      },
      _granted_effects_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 27,
      },
      _mods2_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 29,
      },
      _weapon1_item_visual_identity_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 36,
      },
      _weapon2_item_visual_identity_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 37,
      },
      _achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 44,
      },
      _special_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 45,
      },
      _achievement_items2_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 46,
      },
      _normal_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 57,
      },
      _merciless_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 58,
      },
      _cruel_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 59,
      },
      _normal_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 65,
      },
      _cruel_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 66,
      },
      _merciless_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 67,
      },
      _kill_rare_in_normal_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 68,
      },
      _kill_rare_in_cruel_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 69,
      },
      _kill_rare_in_merciless_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 70,
      },
      _count_kills_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 72,
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
              attribute: 'monster_types_key',
            },
          ],
          name: 'index_monster_types_key',
        },
        {
          fields: [
            {
              attribute: 'back_item_visual_identity_key',
            },
          ],
          name: 'index_back_item_visual_identity_key',
        },
        {
          fields: [
            {
              attribute: 'main_hand_item_classes_key',
            },
          ],
          name: 'index_main_hand_item_classes_key',
        },
        {
          fields: [
            {
              attribute: 'off_hand_item_classes_key',
            },
          ],
          name: 'index_off_hand_item_classes_key',
        },
        {
          fields: [
            {
              attribute: 'helmet_item_visual_identity_key',
            },
          ],
          name: 'index_helmet_item_visual_identity_key',
        },
        {
          fields: [
            {
              attribute: 'flashback_achievement_items_key',
            },
          ],
          name: 'index_flashback_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'monster_segments_key',
            },
          ],
          name: 'index_monster_segments_key',
        },
        {
          fields: [
            {
              attribute: 'monster_armours_key',
            },
          ],
          name: 'index_monster_armours_key',
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
              attribute: 'achievement_items_key4',
            },
          ],
          name: 'index_achievement_items_key4',
        },
      ],
      tableName: 'monster_varieties',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterType, {
      as: 'monster_type',
      $inverse: 'monster_varieties',
      $col_order: 1,
      foreignKey: {
        name: 'monster_types_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      as: 'back_item_visual_identity',
      $inverse: 'monster_varieties',
      $col_order: 38,
      foreignKey: {
        name: 'back_item_visual_identity_key',
        $type: 'ulong',
        $col_order: 38,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemClass, {
      as: 'main_hand_item_class',
      $inverse: 'monster_varieties',
      $col_order: 39,
      foreignKey: {
        name: 'main_hand_item_classes_key',
        $type: 'ulong',
        $col_order: 39,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemClass, {
      as: 'off_hand_item_class',
      $inverse: 'monster_varieties',
      $col_order: 40,
      foreignKey: {
        name: 'off_hand_item_classes_key',
        $type: 'ulong',
        $col_order: 40,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      as: 'helmet_item_visual_identity',
      $inverse: 'monster_varieties',
      $col_order: 42,
      foreignKey: {
        name: 'helmet_item_visual_identity_key',
        $type: 'ulong',
        $col_order: 42,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'flashback_achievement_item',
      $inverse: 'monster_varieties',
      $col_order: 60,
      foreignKey: {
        name: 'flashback_achievement_items_key',
        $type: 'ulong',
        $col_order: 60,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterSegment, {
      as: 'monster_segment',
      $inverse: 'monster_varieties',
      $col_order: 61,
      foreignKey: {
        name: 'monster_segments_key',
        $type: 'ulong',
        $col_order: 61,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterArmour, {
      as: 'monster_armour',
      $inverse: 'monster_varieties',
      $col_order: 62,
      foreignKey: {
        name: 'monster_armours_key',
        $type: 'ulong',
        $col_order: 62,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_item',
      $inverse: 'monster_varieties',
      $col_order: 63,
      foreignKey: {
        name: 'achievement_items_key',
        $type: 'ulong',
        $col_order: 63,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_items4',
      $inverse: 'monster_varieties4',
      $col_order: 64,
      foreignKey: {
        name: 'achievement_items_key4',
        $type: 'ref|list|ulong',
        $col_order: 64,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.MonsterVarietyHabtmMod,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'mod_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'tags',
      through: {
        model: models.MonsterVarietyHabtmTag,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'tag_row',
      $col_order: 19,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.GrantedEffect, {
      as: 'granted_effects',
      through: {
        model: models.MonsterVarietyHabtmGrantedEffect,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'granted_effect_row',
      $col_order: 27,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods2',
      through: {
        model: models.MonsterVarietyHabtmMods2,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'mod_row',
      $col_order: 29,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemVisualIdentity, {
      as: 'weapon1_item_visual_identity',
      through: {
        model: models.MonsterVarietyHabtmWeapon1Itemvisualidentity,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'item_visual_identity_row',
      $col_order: 36,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemVisualIdentity, {
      as: 'weapon2_item_visual_identity',
      through: {
        model: models.MonsterVarietyHabtmWeapon2Itemvisualidentity,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'item_visual_identity_row',
      $col_order: 37,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: {
        model: models.MonsterVarietyHabtmAchievementItem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      $col_order: 44,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'special_mods',
      through: {
        model: models.MonsterVarietyHabtmSpecialMod,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'mod_row',
      $col_order: 45,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items2',
      through: {
        model: models.MonsterVarietyHabtmAchievementItems2,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      $col_order: 46,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'normal_achievement_items',
      through: {
        model: models.MonsterVarietyHabtmNormalAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      $col_order: 57,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'merciless_achievement_items',
      through: {
        model: models.MonsterVarietyHabtmMercilessAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      $col_order: 58,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'cruel_achievement_items',
      through: {
        model: models.MonsterVarietyHabtmCruelAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      $col_order: 59,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'normal_mods',
      through: {
        model: models.MonsterVarietyHabtmNormalMod,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'mod_row',
      $col_order: 65,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'cruel_mods',
      through: {
        model: models.MonsterVarietyHabtmCruelMod,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'mod_row',
      $col_order: 66,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'merciless_mods',
      through: {
        model: models.MonsterVarietyHabtmMercilessMod,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'mod_row',
      $col_order: 67,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'kill_rare_in_normal_achievement_items',
      through: {
        model: models.MonsterVarietyHabtmKillRareInNormalAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      $col_order: 68,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'kill_rare_in_cruel_achievement_items',
      through: {
        model: models.MonsterVarietyHabtmKillRareInCruelAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      $col_order: 69,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'kill_rare_in_merciless_achievement_items',
      through: {
        model: models.MonsterVarietyHabtmKillRareInMercilessAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      $col_order: 70,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'count_kills_achievement_items',
      through: {
        model: models.MonsterVarietyHabtmCountKillsAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      $col_order: 72,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterVarieties.dat';
  return model;
};
