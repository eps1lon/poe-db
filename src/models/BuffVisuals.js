const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BuffVisuals',
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
      buff_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      epk_file1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      epk_file2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
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
    model.belongsTo(models.MiscAnimated, {
      foreignKey: 'misc_animated_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MiscAnimated, {
      foreignKey: 'misc_animated_key2',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.PreloadGroups, {
      as: 'preload_groups',
      through: 'BuffVisualsPreloadGroups',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
