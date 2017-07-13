const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Mods',
    {
      row: {
        type: 'BIGINT.UNSIGNED',
        primaryKey: true,
        allowNull: false,
      },
      id: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      unknown0: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      level: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      domain: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      generation_type: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      correct_group: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      stat1_min: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      stat1_max: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      stat2_min: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      stat2_max: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      stat3_min: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      stat3_max: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      stat4_min: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      stat4_max: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      buff_value: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      data1: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      data2: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      monster_metadata: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      data3: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      data4: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      key0: {
        type: 'BIGINT.UNSIGNED',
        primaryKey: false,
        allowNull: false,
      },
      stat5_min: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      stat5_max: {
        type: 'INTEGER',
        primaryKey: false,
        allowNull: false,
      },
      data5: {
        type: 'TEXT',
        primaryKey: false,
        allowNull: false,
      },
      is_essence_only_modifier: {
        type: 'BOOLEAN',
        primaryKey: false,
        allowNull: false,
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
