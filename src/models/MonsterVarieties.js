const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterVarieties',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      object_size: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      minimum_attack_distance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      maximum_attack_distance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      act_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      ao_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      base_monster_type_index: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown_index0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown_index1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      model_size_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      experience_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown7: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown9: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown10: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      critical_strike_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      ais_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      stance: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      damage_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      life_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      attack_speed: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown13: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown14: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown15: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown16: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown17: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown18: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown19: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown20: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown21: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown22: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown23: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      key3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterTypes, {
      foreignKey: 'monster_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: 'back_item_visual_identity_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemClasses, {
      foreignKey: 'main_hand_item_classes_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemClasses, {
      foreignKey: 'off_hand_item_classes_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: 'helmet_item_visual_identity_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'flashback_achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterSegments, {
      foreignKey: 'monster_segments_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterArmours, {
      foreignKey: 'monster_armours_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'achievement_items_key4',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'mods',
      through: 'MonsterVarietiesMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'tags',
      through: 'MonsterVarietiesTags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.GrantedEffects, {
      as: 'granted_effects',
      through: 'MonsterVarietiesGrantedEffects',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'mods2',
      through: 'MonsterVarietiesMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemVisualIdentity, {
      as: 'weapon1_item_visual_identity',
      through: 'Weapon1ItemVisualIdentity',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemVisualIdentity, {
      as: 'weapon2_item_visual_identity',
      through: 'Weapon2ItemVisualIdentity',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'achievement_items',
      through: 'MonsterVarietiesAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'special_mods',
      through: 'SpecialMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'achievement_items2',
      through: 'MonsterVarietiesAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'normal_achievement_items',
      through: 'NormalAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'merciless_achievement_items',
      through: 'MercilessAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'cruel_achievement_items',
      through: 'CruelAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'normal_mods',
      through: 'NormalMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'cruel_mods',
      through: 'CruelMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'merciless_mods',
      through: 'MercilessMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'kill_rare_in_normal_achievement_items',
      through: 'KillRareInNormalAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'kill_rare_in_cruel_achievement_items',
      through: 'KillRareInCruelAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'kill_rare_in_merciless_achievement_items',
      through: 'KillRareInMercilessAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'count_kills_achievement_items',
      through: 'CountKillsAchievementItems',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterVarieties.dat';
  return model;
};
