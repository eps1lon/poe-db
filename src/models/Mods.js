const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Mods',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      id: {
        type: DataTypes.TEXT,
      },
      unknown0: {
        type: DataTypes.INTEGER,
      },
      level: {
        type: DataTypes.INTEGER,
      },
      domain: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.TEXT,
      },
      generation_type: {
        type: DataTypes.INTEGER,
      },
      correct_group: {
        type: DataTypes.TEXT,
      },
      stat1_min: {
        type: DataTypes.INTEGER,
      },
      stat1_max: {
        type: DataTypes.INTEGER,
      },
      stat2_min: {
        type: DataTypes.INTEGER,
      },
      stat2_max: {
        type: DataTypes.INTEGER,
      },
      stat3_min: {
        type: DataTypes.INTEGER,
      },
      stat3_max: {
        type: DataTypes.INTEGER,
      },
      stat4_min: {
        type: DataTypes.INTEGER,
      },
      stat4_max: {
        type: DataTypes.INTEGER,
      },
      buff_value: {
        type: DataTypes.INTEGER,
      },
      data1: {
        type: DataTypes.TEXT,
      },
      data2: {
        type: DataTypes.TEXT,
      },
      monster_metadata: {
        type: DataTypes.TEXT,
      },
      data3: {
        type: DataTypes.TEXT,
      },
      data4: {
        type: DataTypes.TEXT,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      stat5_min: {
        type: DataTypes.INTEGER,
      },
      stat5_max: {
        type: DataTypes.INTEGER,
      },
      data5: {
        type: DataTypes.TEXT,
      },
      is_essence_only_modifier: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      classMethods: {
        associate: models => {
          model.belongsTo(models.ModType, {
            foreignKey: 'mod_type_key',
            target: 'row',
            nullable: true,
          });
          model.belongsTo(models.Stats, {
            foreignKey: 'stats_key1',
            target: 'row',
            nullable: true,
          });
          model.belongsTo(models.Stats, {
            foreignKey: 'stats_key2',
            target: 'row',
            nullable: true,
          });
          model.belongsTo(models.Stats, {
            foreignKey: 'stats_key3',
            target: 'row',
            nullable: true,
          });
          model.belongsTo(models.Stats, {
            foreignKey: 'stats_key4',
            target: 'row',
            nullable: true,
          });
          model.belongsTo(models.BuffDefinitions, {
            foreignKey: 'buff_definitions_key',
            target: 'row',
            nullable: true,
          });
          model.belongsTo(models.GrantedEffectsPerLevel, {
            foreignKey: 'granted_effects_per_level_key',
            target: 'row',
            nullable: true,
          });
          model.belongsTo(models.Stats, {
            foreignKey: 'stats_key5',
            target: 'row',
            nullable: true,
          });
          model.belongsTo(models.AchievementItems, {
            foreignKey: 'achievement_items_key',
            target: 'row',
            nullable: true,
          });
          model.belongsToMany(models.Tags, {
            through: 'SpawnWeightTags',
            as: 'spawn_weight_tags',
            nullable: true,
          });
          model.belongsToMany(models.Tags, {
            through: 'ModsTags',
            nullable: true,
          });
          model.belongsToMany(models.Keys0, {
            through: 'ModsKeys0',
            nullable: true,
          });
          model.belongsToMany(models.Tags, {
            through: 'GenerationWeightTags',
            as: 'generation_weight_tags',
            nullable: true,
          });
        },
      },
    },
  );
  return model;
};
