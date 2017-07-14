module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BaseItemType',
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
      indexes: [
        {
          fields: ['item_classes_key'],
        },
        {
          fields: ['flavour_text_key'],
        },
        {
          fields: ['sound_effects_key'],
        },
        {
          fields: ['item_visual_identity_key'],
        },
        {
          fields: ['equip_achievement_items_key'],
        },
      ],
      tableName: 'base_item_types',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ItemClass, {
      foreignKey: {
        name: 'item_classes_key',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ItemClass.hasMany(model, {
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
    model.belongsTo(models.SoundEffect, {
      foreignKey: {
        name: 'sound_effects_key',
        $col_order: 10,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.SoundEffect.hasMany(model, {
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
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'equip_achievement_items_key',
        $col_order: 26,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItem.hasMany(model, {
      foreignKey: {
        name: 'equip_achievement_items_key',
        $col_order: 26,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Mod, {
      as: 'implicit_mods',
      through: 'BaseItemTypeImplicitMods',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'normal_purchase_base_item_types',
      through: 'BaseItemTypeNormalPurchaseBaseItemTypes',
      $col_order: 11,
      foreignKey: 'source_row',
      targetKey: 'target_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'magic_purchase_base_item_types',
      through: 'BaseItemTypeMagicPurchaseBaseItemTypes',
      $col_order: 13,
      foreignKey: 'source_row',
      targetKey: 'target_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'tags',
      through: 'BaseItemTypeTag',
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'vendor_recipe_achievement_items',
      through: 'BaseItemTypeVendorRecipeAchievementItems',
      $col_order: 20,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'rare_purchase_base_item_types',
      through: 'BaseItemTypeRarePurchaseBaseItemTypes',
      $col_order: 21,
      foreignKey: 'source_row',
      targetKey: 'target_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'unique_purchase_base_item_types',
      through: 'BaseItemTypeUniquePurchaseBaseItemTypes',
      $col_order: 23,
      foreignKey: 'source_row',
      targetKey: 'target_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BaseItemTypes.dat';
  return model;
};
