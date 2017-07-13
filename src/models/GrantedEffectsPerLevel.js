const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'GrantedEffectsPerLevel',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat1_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat2_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat3_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat4_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat5_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat6_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat7_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat8_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      level_requirement: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      mana_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      level_requirement2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      level_requirement3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      critical_strike_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      mana_cost: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      damage_effectiveness: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stored_uses: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      cooldown: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      cooldown_bypass_type: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown30a: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      vaal_souls: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      vaal_stored_uses: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      cooldown_group: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      mana_reservation_override: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown34: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      damage_multiplier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown36: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown37: {
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
    model.belongsTo(models.GrantedEffects, {
      foreignKey: 'granted_effects_key',
      target: 'row',
      nullable: true,
      constraints: false,
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
