const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WorldAreas',
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
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      act: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_town: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      has_waypoint: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      area_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      has_doodads: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown7: {
        type: DataTypes.INTEGER,
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
      loading_screen_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown15: {
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
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown23: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_map: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown32: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown33: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown39: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown40: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      strongbox_spawn_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      strongbox_max_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      strongbox_rarity_weight: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      is_town_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown49: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown50: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_merciless_vaal_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown52: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_hideout: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown53: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown54: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown55: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown56: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown_index: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown59: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown60: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown61: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_vaal_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown64: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown65: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown66: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_labyrinth_airlock: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_labyrinth_area: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown73: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown74: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown75: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown76: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown77: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown78: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown79: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown82: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown83: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      keys2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      key0a: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      key0b: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown88: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown89: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown90: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown91: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown92: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown93: {
        type: DataTypes.INTEGER,
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
    model.belongsTo(models.WorldAreas, {
      foreignKey: 'parent_town_world_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Difficulties, {
      foreignKey: 'difficulties_key',
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
      foreignKey: 'twinned_full_clear_achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'enter_achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: '8_mods_full_clear_achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      through: 'ConnectionsWorldAreas',
      as: 'connections_world_areas',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Topologies, {
      through: 'WorldAreasTopologies',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      through: 'BossesMonsterVarieties',
      as: 'bosses_monster_varieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      through: 'MonstersMonsterVarieties',
      as: 'monsters_monster_varieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      through: 'SpawnWeightTags',
      as: 'spawn_weight_tags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'FullClearAchievementItems',
      as: 'full_clear_achievement_items',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'WorldAreasMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      through: 'VaalAreaWorldAreas',
      as: 'vaal_area_world_areas',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      through: 'AreaTypeTags',
      as: 'area_type_tags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      through: 'WorldAreasTags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'WorldAreasAchievementItems',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
