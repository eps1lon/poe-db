const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BaseItemTypes',
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
      width: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      height: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      inherits_from: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      drop_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown_unique: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown20: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      is_picked_up_by_monsters: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      data11: {
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
    model.belongsTo(models.ItemClasses, {
      foreignKey: 'item_classes_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.FlavourText, {
      foreignKey: 'flavour_text_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.SoundEffects, {
      foreignKey: 'sound_effects_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: 'item_visual_identity_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'equip_achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'implicit_mods',
      through: 'ImplicitMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'normal_purchase_base_item_types',
      through: 'NormalPurchaseBaseItemTypes',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'magic_purchase_base_item_types',
      through: 'MagicPurchaseBaseItemTypes',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'tags',
      through: 'BaseItemTypesTags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'vendor_recipe_achievement_items',
      through: 'VendorRecipeAchievementItems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'rare_purchase_base_item_types',
      through: 'RarePurchaseBaseItemTypes',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'unique_purchase_base_item_types',
      through: 'UniquePurchaseBaseItemTypes',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BaseItemTypes.dat';
  return model;
};
