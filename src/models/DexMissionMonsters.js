const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexMissionMonsters',
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
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      max_level: {
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
      foreignKey: 'boss_monster_varieties_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterPacks, {
      as: 'monster_packs',
      through: 'DexMissionMonstersMonsterPacks',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'monster_varieties',
      through: 'DexMissionMonstersMonsterVarieties',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DexMissionMonsters.dat';
  return model;
};
