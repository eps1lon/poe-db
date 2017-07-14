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
      act_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      ao_file: {
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
      ais_file: {
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
        },
        {
          fields: [
            {
              attribute: 'back_item_visual_identity_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'main_hand_item_classes_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'off_hand_item_classes_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'helmet_item_visual_identity_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'flashback_achievement_items_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'monster_segments_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'monster_armours_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'achievement_items_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'achievement_items_key4',
            },
          ],
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
    models.MonsterType.hasMany(model, {
      foreignKey: {
        name: 'monster_types_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: {
        name: 'back_item_visual_identity_key',
        $col_order: 38,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ItemVisualIdentity.hasMany(model, {
      foreignKey: {
        name: 'back_item_visual_identity_key',
        $col_order: 38,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ItemClass, {
      foreignKey: {
        name: 'main_hand_item_classes_key',
        $col_order: 39,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ItemClass.hasMany(model, {
      foreignKey: {
        name: 'main_hand_item_classes_key',
        $col_order: 39,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ItemClass, {
      foreignKey: {
        name: 'off_hand_item_classes_key',
        $col_order: 40,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ItemClass.hasMany(model, {
      foreignKey: {
        name: 'off_hand_item_classes_key',
        $col_order: 40,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: {
        name: 'helmet_item_visual_identity_key',
        $col_order: 42,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ItemVisualIdentity.hasMany(model, {
      foreignKey: {
        name: 'helmet_item_visual_identity_key',
        $col_order: 42,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'flashback_achievement_items_key',
        $col_order: 60,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItem.hasMany(model, {
      foreignKey: {
        name: 'flashback_achievement_items_key',
        $col_order: 60,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
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
    models.MonsterSegment.hasMany(model, {
      foreignKey: {
        name: 'monster_segments_key',
        $col_order: 61,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
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
    models.MonsterArmour.hasMany(model, {
      foreignKey: {
        name: 'monster_armours_key',
        $col_order: 62,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
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
    models.AchievementItem.hasMany(model, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 63,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
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
    models.AchievementItem.hasMany(model, {
      foreignKey: {
        name: 'achievement_items_key4',
        $col_order: 64,
        $type: 'ref|list|ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: 'MonsterVarietyMod',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'tags',
      through: 'MonsterVarietyTag',
      $col_order: 19,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.GrantedEffect, {
      as: 'granted_effects',
      through: 'MonsterVarietyGrantedEffect',
      $col_order: 27,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods2',
      through: 'MonsterVarietyMod',
      $col_order: 29,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemVisualIdentity, {
      as: 'weapon1_item_visual_identity',
      through: 'MonsterVarietyWeapon1ItemVisualIdentities',
      $col_order: 36,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemVisualIdentity, {
      as: 'weapon2_item_visual_identity',
      through: 'MonsterVarietyWeapon2ItemVisualIdentities',
      $col_order: 37,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: 'MonsterVarietyAchievementItem',
      $col_order: 44,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'special_mods',
      through: 'MonsterVarietySpecialMods',
      $col_order: 45,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items2',
      through: 'MonsterVarietyAchievementItem',
      $col_order: 46,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'normal_achievement_items',
      through: 'MonsterVarietyNormalAchievementItems',
      $col_order: 57,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'merciless_achievement_items',
      through: 'MonsterVarietyMercilessAchievementItems',
      $col_order: 58,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'cruel_achievement_items',
      through: 'MonsterVarietyCruelAchievementItems',
      $col_order: 59,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'normal_mods',
      through: 'MonsterVarietyNormalMods',
      $col_order: 65,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'cruel_mods',
      through: 'MonsterVarietyCruelMods',
      $col_order: 66,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'merciless_mods',
      through: 'MonsterVarietyMercilessMods',
      $col_order: 67,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'kill_rare_in_normal_achievement_items',
      through: 'MonsterVarietyKillRareInNormalAchievementItems',
      $col_order: 68,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'kill_rare_in_cruel_achievement_items',
      through: 'MonsterVarietyKillRareInCruelAchievementItems',
      $col_order: 69,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'kill_rare_in_merciless_achievement_items',
      through: 'MonsterVarietyKillRareInMercilessAchievementItems',
      $col_order: 70,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'count_kills_achievement_items',
      through: 'MonsterVarietyCountKillsAchievementItems',
      $col_order: 72,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterVarieties.dat';
  return model;
};
