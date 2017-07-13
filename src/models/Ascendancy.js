const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Ascendancy',
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
      class_no: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      coordinate_rect: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      rgb_flavour_text_colour: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flavour_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      ogg_file: {
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
  };

  model.DAT_FILE = 'Ascendancy.dat';
  return model;
};
