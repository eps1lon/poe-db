const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Shrines',
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
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      charges_shared: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown10: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown14: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_pvp_only: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown17: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_lesser_shrine: {
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
    model.belongsTo(models.ShrineBuffs, {
      foreignKey: 'player_shrine_buffs_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShrineBuffs, {
      foreignKey: 'monster_shrine_buffs_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVarieties, {
      foreignKey: 'summon_monster_monster_varieties_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVarieties, {
      foreignKey: 'summon_player_monster_varieties_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShrineSounds, {
      foreignKey: 'shrine_sounds_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'achievement_items',
      through: 'ShrinesAchievementItems',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Shrines.dat';
  return model;
};
