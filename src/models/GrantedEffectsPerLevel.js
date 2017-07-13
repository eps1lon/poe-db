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
        allowNull: false,
        $col_order: 1,
      },
      stat1_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      stat2_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      stat3_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      stat4_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      stat5_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      stat6_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      stat7_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      stat8_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      level_requirement: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      mana_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      level_requirement2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      level_requirement3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      critical_strike_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 17,
      },
      mana_cost: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 18,
      },
      damage_effectiveness: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 19,
      },
      stored_uses: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 20,
      },
      cooldown: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 21,
      },
      cooldown_bypass_type: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 22,
      },
      unknown30a: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 24,
      },
      vaal_souls: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 25,
      },
      vaal_stored_uses: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 26,
      },
      cooldown_group: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 27,
      },
      mana_reservation_override: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 28,
      },
      unknown34: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 29,
      },
      damage_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 30,
      },
      unknown36: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 31,
      },
      unknown37: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 32,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.GrantedEffects, {
      foreignKey: {
        name: 'granted_effects_key',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.GrantedEffects.hasMany(model, {
      foreignKey: {
        name: 'granted_effects_key',
        $col_order: 0,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Stats, {
      as: 'stats',
      through: 'GrantedEffectsPerLevelStats',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stats, {
      as: 'quality_stats',
      through: 'QualityStats',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stats, {
      as: 'stats2',
      through: 'GrantedEffectsPerLevelStats',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'GrantedEffectsPerLevel.dat';
  return model;
};
