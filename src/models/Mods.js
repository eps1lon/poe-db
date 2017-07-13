const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Mods',
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
      level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      domain: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      generation_type: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      correct_group: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      stat1_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat1_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat2_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat2_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat3_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat3_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat4_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat4_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      buff_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      monster_metadata: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      stat5_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat5_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data5: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      is_essence_only_modifier: {
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
    model.belongsTo(models.ModType, {
      foreignKey: 'mod_type_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stats, {
      foreignKey: 'stats_key1',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stats, {
      foreignKey: 'stats_key2',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stats, {
      foreignKey: 'stats_key3',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stats, {
      foreignKey: 'stats_key4',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinitions, {
      foreignKey: 'buff_definitions_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.GrantedEffectsPerLevel, {
      foreignKey: 'granted_effects_per_level_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stats, {
      foreignKey: 'stats_key5',
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
    model.belongsToMany(models.Tags, {
      as: 'spawn_weight_tags',
      through: 'SpawnWeightTags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'tags',
      through: 'ModsTags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'generation_weight_tags',
      through: 'GenerationWeightTags',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Mods.dat';
  return model;
};
