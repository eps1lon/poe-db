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
      as: 'spirit_mods',
      through: 'SpiritMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'touched_mods',
      through: 'TouchedMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'possessed_mods',
      through: 'PossessedMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'mods0',
      through: 'TormentSpiritsMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'mods1',
      through: 'TormentSpiritsMods',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'TormentSpirits.dat';
  return model;
};
