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
      through: 'MonsterVarietiesMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      through: 'MonsterVarietiesTags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.GrantedEffects, {
      through: 'MonsterVarietiesGrantedEffects',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'MonsterVarietiesMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemVisualIdentity, {
      through: 'Weapon1ItemVisualIdentity',
      as: 'weapon1_item_visual_identity',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemVisualIdentity, {
      through: 'Weapon2ItemVisualIdentity',
      as: 'weapon2_item_visual_identity',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'MonsterVarietiesAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'SpecialMods',
      as: 'special_mods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'MonsterVarietiesAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'NormalAchievementItems',
      as: 'normal_achievement_items',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'MercilessAchievementItems',
      as: 'merciless_achievement_items',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'CruelAchievementItems',
      as: 'cruel_achievement_items',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'NormalMods',
      as: 'normal_mods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'CruelMods',
      as: 'cruel_mods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'MercilessMods',
      as: 'merciless_mods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'KillRareInNormalAchievementItems',
      as: 'kill_rare_in_normal_achievement_items',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'KillRareInCruelAchievementItems',
      as: 'kill_rare_in_cruel_achievement_items',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'KillRareInMercilessAchievementItems',
      as: 'kill_rare_in_merciless_achievement_items',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'CountKillsAchievementItems',
      as: 'count_kills_achievement_items',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
