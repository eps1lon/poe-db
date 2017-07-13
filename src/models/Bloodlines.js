const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Bloodlines',
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
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown11: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown20: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      keys2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag1: {
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
    model.belongsTo(models.BuffDefinitions, {
      foreignKey: 'buff_definitions_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVarieties, {
      foreignKey: 'monster_varieties_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'mods',
      through: 'BloodlinesMods',
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
      as: 'item_weight_tags',
      through: 'ItemWeightTags',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Bloodlines.dat';
  return model;
};
