const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EclipseMods',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      key: {
        type: DataTypes.TEXT,
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
      is_prefix: {
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
    model.belongsTo(models.Mods, {
      foreignKey: 'mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      through: 'SpawnWeightTags',
      as: 'spawn_weight_tags',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
