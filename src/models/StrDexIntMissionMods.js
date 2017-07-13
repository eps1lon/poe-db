const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexIntMissionMods',
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
      is_unique_map: {
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
    model.belongsToMany(models.Mods, {
      as: 'mods',
      through: 'StrDexIntMissionModsMods',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrDexIntMissionMods.dat';
  return model;
};
