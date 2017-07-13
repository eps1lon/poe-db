const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ItemVisualIdentity',
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
      dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      ao_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown_unique_int: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      ao_file2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      marauder_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      ranger_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      witch_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      duelist_dex_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      templar_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      shadow_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      scion_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      marauder_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      ranger_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      witch_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      duelist_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      templar_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      shadow_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      scion_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown28: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown29: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      is_alternate_art: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
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
    model.belongsTo(models.SoundEffects, {
      foreignKey: 'sound_effects_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'create_corrupted_jewel_achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'PickupAchievementItems',
      as: 'pickup_achievement_items',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'IdentifyAchievementItems',
      as: 'identify_achievement_items',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      through: 'CorruptAchievementItems',
      as: 'corrupt_achievement_items',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
