const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UniqueChests',
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
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      ao_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      data2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
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
    model.belongsTo(models.Chests, {
      foreignKey: 'chests_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Words, {
      foreignKey: 'words_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'mods',
      through: 'UniqueChestsMods',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'UniqueChests.dat';
  return model;
};
