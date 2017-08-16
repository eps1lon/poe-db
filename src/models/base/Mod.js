module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Mod',
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
        $col_order: 1,
      },
      level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      domain: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      generation_type: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      correct_group: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      stat1_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      stat1_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      stat2_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      stat2_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      stat3_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      stat3_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      stat4_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      stat4_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 19,
      },
      buff_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 23,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 26,
      },
      data2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 27,
      },
      monster_metadata: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 28,
      },
      data3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 29,
      },
      data4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 30,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 31,
      },
      stat5_min: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 32,
      },
      stat5_max: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 33,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 35,
      },
      data5: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 39,
      },
      is_essence_only_modifier: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 40,
      },
      _spawn_weight_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 20,
      },
      _tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 24,
      },
      _generation_weight_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 37,
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
              attribute: 'mod_type_key',
            },
          ],
          name: 'index_mod_type_key',
        },
        {
          fields: [
            {
              attribute: 'stats_key1',
            },
          ],
          name: 'index_stats_key1',
        },
        {
          fields: [
            {
              attribute: 'stats_key2',
            },
          ],
          name: 'index_stats_key2',
        },
        {
          fields: [
            {
              attribute: 'stats_key3',
            },
          ],
          name: 'index_stats_key3',
        },
        {
          fields: [
            {
              attribute: 'stats_key4',
            },
          ],
          name: 'index_stats_key4',
        },
        {
          fields: [
            {
              attribute: 'buff_definitions_key',
            },
          ],
          name: 'index_buff_definitions_key',
        },
        {
          fields: [
            {
              attribute: 'granted_effects_per_level_key',
            },
          ],
          name: 'index_granted_effects_per_level_key',
        },
        {
          fields: [
            {
              attribute: 'stats_key5',
            },
          ],
          name: 'index_stats_key5',
        },
        {
          fields: [
            {
              attribute: 'achievement_items_key',
            },
          ],
          name: 'index_achievement_items_key',
        },
      ],
      tableName: 'mods',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ModType, {
      as: 'mod_type',
      $inverse: 'mods',
      $col_order: 2,
      foreignKey: {
        name: 'mod_type_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      as: 'stats1',
      $inverse: 'mods1',
      $col_order: 4,
      foreignKey: {
        name: 'stats_key1',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      as: 'stats2',
      $inverse: 'mods2',
      $col_order: 5,
      foreignKey: {
        name: 'stats_key2',
        $type: 'ulong',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      as: 'stats3',
      $inverse: 'mods3',
      $col_order: 6,
      foreignKey: {
        name: 'stats_key3',
        $type: 'ulong',
        $col_order: 6,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      as: 'stats4',
      $inverse: 'mods4',
      $col_order: 7,
      foreignKey: {
        name: 'stats_key4',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinition, {
      as: 'buff_definition',
      $inverse: 'mods',
      $col_order: 22,
      foreignKey: {
        name: 'buff_definitions_key',
        $type: 'ulong',
        $col_order: 22,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.GrantedEffectsPerLevel, {
      as: 'granted_effects_per_level',
      $inverse: 'mods',
      $col_order: 25,
      foreignKey: {
        name: 'granted_effects_per_level_key',
        $type: 'ulong',
        $col_order: 25,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      as: 'stats5',
      $inverse: 'mods5',
      $col_order: 34,
      foreignKey: {
        name: 'stats_key5',
        $type: 'ulong',
        $col_order: 34,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_item',
      $inverse: 'mods',
      $col_order: 36,
      foreignKey: {
        name: 'achievement_items_key',
        $type: 'ulong',
        $col_order: 36,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'spawn_weight_tags',
      through: {
        model: models.ModHabtmSpawnWeightTag,
        unique: false,
      },
      foreignKey: 'mod_row',
      otherKey: 'tag_row',
      $col_order: 20,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'tags',
      through: {
        model: models.ModHabtmTag,
        unique: false,
      },
      foreignKey: 'mod_row',
      otherKey: 'tag_row',
      $col_order: 24,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'generation_weight_tags',
      through: {
        model: models.ModHabtmGenerationWeightTag,
        unique: false,
      },
      foreignKey: 'mod_row',
      otherKey: 'tag_row',
      $col_order: 37,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Mods.dat';
  return model;
};
