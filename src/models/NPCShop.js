const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCShop',
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
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      data0_keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data0_values: {
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
    model.belongsToMany(models.Tags, {
      as: 'sold_item_tags',
      through: 'SoldItemTags',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCShop.dat';
  return model;
};
