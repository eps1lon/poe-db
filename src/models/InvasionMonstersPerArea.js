const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'InvasionMonstersPerArea',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown4: {
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
    model.belongsTo(models.WorldAreas, {
      foreignKey: 'world_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'monster_varieties1',
      through: 'InvasionMonstersPerAreaMonsterVarieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'monster_varieties2',
      through: 'InvasionMonstersPerAreaMonsterVarieties',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'InvasionMonstersPerArea.dat';
  return model;
};
