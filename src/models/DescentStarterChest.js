const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DescentStarterChest',
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
      socket_colours: {
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
    model.belongsTo(models.Characters, {
      foreignKey: 'characters_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldAreas, {
      foreignKey: 'world_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DescentStarterChest.dat';
  return model;
};
