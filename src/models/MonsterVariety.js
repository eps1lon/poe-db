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
        allowNull: false,
        $col_order: 0,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      object_size: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      minimum_attack_distance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      maximum_attack_distance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      a_c_t_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      a_o_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      base_monster_type_index: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      unknown_index0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      unknown_index1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      model_size_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 16,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 17,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 18,
      },
      experience_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 20,
      },
      unknown7: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 21,
      },
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 22,
      },
      unknown9: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 23,
      },
      unknown10: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 24,
      },
      critical_strike_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 25,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 26,
      },
      a_i_s_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 28,
      },
      stance: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 30,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 31,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 32,
      },
      damage_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 33,
      },
      life_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 34,
      },
      attack_speed: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 35,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 41,
      },
      unknown13: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 43,
      },
      unknown14: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 47,
      },
      unknown15: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 48,
      },
      unknown16: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 49,
      },
      unknown17: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 50,
      },
      unknown18: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 51,
      },
      unknown19: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 52,
      },
      unknown20: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 53,
      },
      unknown21: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 54,
      },
      unknown22: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 55,
      },
      unknown23: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 56,
      },
      key3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 71,
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
              attribute: 'monster_types_key',
            },
          ],
          name: 'index_monster_types_key',
        },
        {
          fields: [
            {
              attribute: 'back__item_visual_identity_key',
            },
          ],
          name: 'index_back__item_visual_identity_key',
        },
        {
          fields: [
            {
              attribute: 'main_hand__item_classes_key',
            },
          ],
          name: 'index_main_hand__item_classes_key',
        },
        {
          fields: [
            {
              attribute: 'off_hand__item_classes_key',
            },
          ],
          name: 'index_off_hand__item_classes_key',
        },
        {
          fields: [
            {
              attribute: 'helmet__item_visual_identity_key',
            },
          ],
          name: 'index_helmet__item_visual_identity_key',
        },
        {
          fields: [
            {
              attribute: 'flashback__achievement_items_key',
            },
          ],
          name: 'index_flashback__achievement_items_key',
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
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterType, {
      foreignKey: {
        name: 'monster_types_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: {
        name: 'back__item_visual_identity_key',
        $col_order: 38,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemClass, {
      foreignKey: {
        name: 'main_hand__item_classes_key',
        $col_order: 39,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemClass, {
      foreignKey: {
        name: 'off_hand__item_classes_key',
        $col_order: 40,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: {
        name: 'helmet__item_visual_identity_key',
        $col_order: 42,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'flashback__achievement_items_key',
        $col_order: 60,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterSegment, {
      foreignKey: {
        name: 'monster_segments_key',
        $col_order: 61,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterArmour, {
      foreignKey: {
        name: 'monster_armours_key',
        $col_order: 62,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 63,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'achievement_items_key4',
        $col_order: 64,
        $type: 'ref|list|ulong',
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
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemVisualIdentity, {
      as: 'weapon1__item_visual_identity',
      through: {
        model: models.MonsterVarietyHabtmWeapon1Itemvisualidentity,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'item_visual_identity_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemVisualIdentity, {
      as: 'weapon2__item_visual_identity',
      through: {
        model: models.MonsterVarietyHabtmWeapon2Itemvisualidentity,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'item_visual_identity_row',
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
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'special__mods',
      through: {
        model: models.MonsterVarietyHabtmSpecialMod,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'mod_row',
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
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'normal__achievement_items',
      through: {
        model: models.MonsterVarietyHabtmNormalAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'merciless__achievement_items',
      through: {
        model: models.MonsterVarietyHabtmMercilessAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'cruel__achievement_items',
      through: {
        model: models.MonsterVarietyHabtmCruelAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'normal__mods',
      through: {
        model: models.MonsterVarietyHabtmNormalMod,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'mod_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'cruel__mods',
      through: {
        model: models.MonsterVarietyHabtmCruelMod,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'mod_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'merciless__mods',
      through: {
        model: models.MonsterVarietyHabtmMercilessMod,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'mod_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'kill_rare_in_normal__achievement_items',
      through: {
        model: models.MonsterVarietyHabtmKillRareInNormalAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'kill_rare_in_cruel__achievement_items',
      through: {
        model: models.MonsterVarietyHabtmKillRareInCruelAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'kill_rare_in_merciless__achievement_items',
      through: {
        model: models.MonsterVarietyHabtmKillRareInMercilessAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'count_kills__achievement_items',
      through: {
        model: models.MonsterVarietyHabtmCountKillsAchievementitem,
        unique: false,
      },
      foreignKey: 'monster_variety_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterVarieties.dat';
  return model;
};
