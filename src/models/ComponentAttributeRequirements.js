const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ComponentAttributeRequirements',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      req_str: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      req_dex: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      req_int: {
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
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'base_item_types_key',
      target: 'id',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ComponentAttributeRequirements.dat';
  return model;
};
