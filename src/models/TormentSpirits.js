const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'TormentSpirits',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      min_zone_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      max_zone_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown13: {
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
    model.belongsTo(models.MonsterVarieties, {
      foreignKey: 'monster_varieties_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVarieties, {
      foreignKey: 'summoned_monster_monster_varieties_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'SpiritMods',
      as: 'spirit_mods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'TouchedMods',
      as: 'touched_mods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'PossessedMods',
      as: 'possessed_mods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'TormentSpiritsMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'TormentSpiritsMods',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
