module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'GrantedEffectsPerLevel',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      stat1_float: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      stat2_float: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      stat3_float: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      stat4_float: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      stat5_float: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      stat6_float: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      stat7_float: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      stat8_float: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      stat1_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      stat2_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      stat3_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      stat4_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      stat5_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      stat6_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      stat7_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      stat8_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 19,
      },
      level_requirement: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 20,
      },
      mana_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 21,
      },
      level_requirement2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 22,
      },
      level_requirement3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 23,
      },
      critical_strike_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 26,
      },
      mana_cost: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 27,
      },
      damage_effectiveness: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 28,
      },
      stored_uses: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 29,
      },
      cooldown: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 30,
      },
      cooldown_bypass_type: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 31,
      },
      unknown30a: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 33,
      },
      vaal_souls: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 34,
      },
      vaal_stored_uses: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 35,
      },
      cooldown_group: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 36,
      },
      mana_reservation_override: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 37,
      },
      unknown37: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 38,
      },
      damage_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 39,
      },
      unknown45: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 40,
      },
      unknown46: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 41,
      },
      stat_data: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 42,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 43,
      },
      _stats_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
      _effectiveness_cost_constants_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 11,
      },
      _quality_stats_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 24,
      },
      _stats2_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 32,
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
              attribute: 'granted_effects_key',
            },
          ],
          name: 'index_granted_effects_key',
        },
      ],
      tableName: 'granted_effects_per_levels',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.GrantedEffect, {
      as: 'granted_effect',
      $inverse: 'granted_effects_per_levels',
      $col_order: 0,
      foreignKey: {
        name: 'granted_effects_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'stats',
      through: {
        model: models.GrantedEffectsPerLevelHabtmStat,
        unique: false,
      },
      foreignKey: 'granted_effects_per_level_row',
      otherKey: 'stat_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.EffectivenessCostConstant, {
      as: 'effectiveness_cost_constants',
      through: {
        model: models.GrantedEffectsPerLevelHabtmEffectivenessCostConstant,
        unique: false,
      },
      foreignKey: 'granted_effects_per_level_row',
      otherKey: 'effectiveness_cost_constant_row',
      $col_order: 11,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'quality_stats',
      through: {
        model: models.GrantedEffectsPerLevelHabtmQualityStat,
        unique: false,
      },
      foreignKey: 'granted_effects_per_level_row',
      otherKey: 'stat_row',
      $col_order: 24,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'stats2',
      through: {
        model: models.GrantedEffectsPerLevelHabtmStats2,
        unique: false,
      },
      foreignKey: 'granted_effects_per_level_row',
      otherKey: 'stat_row',
      $col_order: 32,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'GrantedEffectsPerLevel.dat';
  return model;
};
