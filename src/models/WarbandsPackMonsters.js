const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WarbandsPackMonsters',
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
      unknown1: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        allowNull: false,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      tier1_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      tier2_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      tier3_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      tier4_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      tier1_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      tier2_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      tier3_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      tier4_art: {
        type: DataTypes.TEXT,
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
    model.belongsToMany(models.MonsterVarieties, {
      as: 'tier4_monster_varieties',
      through: 'Tier4MonsterVarieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'tier3_monster_varieties',
      through: 'Tier3MonsterVarieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'tier2_monster_varieties',
      through: 'Tier2MonsterVarieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'tier1_monster_varieties',
      through: 'Tier1MonsterVarieties',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'WarbandsPackMonsters.dat';
  return model;
};
