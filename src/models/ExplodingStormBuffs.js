const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ExplodingStormBuffs',
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
        allowNull: false,
        $col_order: 0,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      stat_values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      unknown10: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown12: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      unknown23: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      unknown24: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
      unknown25: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 16,
      },
      is_only_spawning_near_player: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 18,
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
      foreignKey: {
        name: 'buff_definitions_key1',
        $col_order: 1,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVarieties, {
      foreignKey: {
        name: 'friendly_monster_varieties_key',
        $col_order: 9,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MiscObjects, {
      foreignKey: {
        name: 'misc_objects_key',
        $col_order: 10,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MiscAnimated, {
      foreignKey: {
        name: 'misc_animated_key',
        $col_order: 11,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffVisuals, {
      foreignKey: {
        name: 'buff_visuals_key',
        $col_order: 12,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVarieties, {
      foreignKey: {
        name: 'enemy_monster_varieties_key',
        $col_order: 13,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinitions, {
      foreignKey: {
        name: 'buff_definitions_key2',
        $col_order: 17,
      },
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ExplodingStormBuffs.dat';
  return model;
};
