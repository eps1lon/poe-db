const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ActiveSkills',
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
      displayed_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      index3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      icon_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      active_skill_target_types: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      active_skill_types: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      website_description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      website_image: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown13: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      skill_totem_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_manually_casted: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown19: {
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
    model.belongsToMany(models.ItemClasses, {
      as: 'weapon_restriction_item_classes',
      through: 'WeaponRestrictionItemClasses',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stats, {
      as: 'input_stat',
      through: 'InputStat',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stats, {
      as: 'output_stat',
      through: 'OutputStat',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
