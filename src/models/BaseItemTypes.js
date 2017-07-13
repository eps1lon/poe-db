module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BaseItemTypes',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      width: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      height: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      inherits_from: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      drop_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 16,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 17,
      },
      unknown_unique: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 19,
      },
      unknown20: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 25,
      },
      is_picked_up_by_monsters: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 27,
      },
      data11: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 28,
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
      foreignKey: {
        name: 'item_classes_key',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ItemClasses.hasMany(model, {
      foreignKey: {
        name: 'item_classes_key',
        $col_order: 1,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.FlavourText, {
      foreignKey: {
        name: 'flavour_text_key',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.FlavourText.hasMany(model, {
      foreignKey: {
        name: 'flavour_text_key',
        $col_order: 7,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.SoundEffects, {
      foreignKey: {
        name: 'sound_effects_key',
        $col_order: 10,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.SoundEffects.hasMany(model, {
      foreignKey: {
        name: 'sound_effects_key',
        $col_order: 10,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: {
        name: 'item_visual_identity_key',
        $col_order: 18,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ItemVisualIdentity.hasMany(model, {
      foreignKey: {
        name: 'item_visual_identity_key',
        $col_order: 18,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: {
        name: 'equip_achievement_items_key',
        $col_order: 26,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItems.hasMany(model, {
      foreignKey: {
        name: 'equip_achievement_items_key',
        $col_order: 26,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Mods, {
      as: 'implicit_mods',
      through: 'BaseItemTypesImplicitMods',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'normal_purchase_base_item_types',
      through: 'BaseItemTypesNormalPurchaseBaseItemTypes',
      $col_order: 11,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'magic_purchase_base_item_types',
      through: 'BaseItemTypesMagicPurchaseBaseItemTypes',
      $col_order: 13,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'tags',
      through: 'BaseItemTypesTags',
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'vendor_recipe_achievement_items',
      through: 'BaseItemTypesVendorRecipeAchievementItems',
      $col_order: 20,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'rare_purchase_base_item_types',
      through: 'BaseItemTypesRarePurchaseBaseItemTypes',
      $col_order: 21,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'unique_purchase_base_item_types',
      through: 'BaseItemTypesUniquePurchaseBaseItemTypes',
      $col_order: 23,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BaseItemTypes.dat';
  return model;
};
