const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SkillGems',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      str: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      dex: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      int: {
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
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.GrantedEffects, {
      foreignKey: 'granted_effects_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'vaal_variant_base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.GemTags, {
      through: 'SkillGemsGemTags',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
