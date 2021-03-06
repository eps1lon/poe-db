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
        allowNull: true,
        $col_order: 0,
      },
      width: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      height: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      inherits_from: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      drop_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      unknown_unique: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 19,
      },
      inflection: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 25,
      },
      is_picked_up_by_monsters: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 27,
      },
      is_blessing: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 32,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 33,
      },
      _implicit_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 8,
      },
      _normal_purchase_base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 11,
      },
      _magic_purchase_base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 13,
      },
      _tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 15,
      },
      _vendor_recipe_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 20,
      },
      _rare_purchase_base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 21,
      },
      _unique_purchase_base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 23,
      },
      _identify_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 28,
      },
      _identify_magic_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 30,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'item_classes_key',
            },
          ],
          name: 'index_item_classes_key',
        },
        {
          fields: [
            {
              attribute: 'flavour_text_key',
            },
          ],
          name: 'index_flavour_text_key',
        },
        {
          fields: [
            {
              attribute: 'sound_effects_key',
            },
          ],
          name: 'index_sound_effects_key',
        },
        {
          fields: [
            {
              attribute: 'item_visual_identity_key',
            },
          ],
          name: 'index_item_visual_identity_key',
        },
        {
          fields: [
            {
              attribute: 'equip_achievement_items_key',
            },
          ],
          name: 'index_equip_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'item_themes_key',
            },
          ],
          name: 'index_item_themes_key',
        },
        {
          fields: [
            {
              attribute: 'fragment_base_item_types_key',
            },
          ],
          name: 'index_fragment_base_item_types_key',
        },
      ],
      tableName: 'base_item_types',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ItemClass, {
      as: 'item_class',
      $inverse: 'base_item_types',
      $col_order: 1,
      foreignKey: {
        name: 'item_classes_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.FlavourText, {
      as: 'flavour_text',
      $inverse: 'base_item_types',
      $col_order: 7,
      foreignKey: {
        name: 'flavour_text_key',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.SoundEffect, {
      as: 'sound_effect',
      $inverse: 'base_item_types',
      $col_order: 10,
      foreignKey: {
        name: 'sound_effects_key',
        $type: 'ulong',
        $col_order: 10,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      as: 'item_visual_identity',
      $inverse: 'base_item_types',
      $col_order: 18,
      foreignKey: {
        name: 'item_visual_identity_key',
        $type: 'ulong',
        $col_order: 18,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'equip_achievement_item',
      $inverse: 'base_item_types',
      $col_order: 26,
      foreignKey: {
        name: 'equip_achievement_items_key',
        $type: 'ulong',
        $col_order: 26,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemTheme, {
      as: 'item_theme',
      $inverse: 'base_item_types',
      $col_order: 29,
      foreignKey: {
        name: 'item_themes_key',
        $type: 'ulong',
        $col_order: 29,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      as: 'fragment_base_item_type',
      $inverse: 'base_item_types',
      $col_order: 31,
      foreignKey: {
        name: 'fragment_base_item_types_key',
        $type: 'uint',
        $col_order: 31,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'implicit_mods',
      through: {
        model: models.BaseItemTypeHabtmImplicitMod,
        unique: false,
      },
      foreignKey: 'base_item_type_row',
      otherKey: 'mod_row',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'normal_purchase_base_item_types',
      through: {
        model: models.BaseItemTypeHabtmNormalPurchaseBaseitemtype,
        unique: false,
      },
      foreignKey: 'source_row',
      otherKey: 'target_row',
      $col_order: 11,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'magic_purchase_base_item_types',
      through: {
        model: models.BaseItemTypeHabtmMagicPurchaseBaseitemtype,
        unique: false,
      },
      foreignKey: 'source_row',
      otherKey: 'target_row',
      $col_order: 13,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'tags',
      through: {
        model: models.BaseItemTypeHabtmTag,
        unique: false,
      },
      foreignKey: 'base_item_type_row',
      otherKey: 'tag_row',
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'vendor_recipe_achievement_items',
      through: {
        model: models.BaseItemTypeHabtmVendorRecipeAchievementitem,
        unique: false,
      },
      foreignKey: 'base_item_type_row',
      otherKey: 'achievement_item_row',
      $col_order: 20,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'rare_purchase_base_item_types',
      through: {
        model: models.BaseItemTypeHabtmRarePurchaseBaseitemtype,
        unique: false,
      },
      foreignKey: 'source_row',
      otherKey: 'target_row',
      $col_order: 21,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'unique_purchase_base_item_types',
      through: {
        model: models.BaseItemTypeHabtmUniquePurchaseBaseitemtype,
        unique: false,
      },
      foreignKey: 'source_row',
      otherKey: 'target_row',
      $col_order: 23,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'identify_achievement_items',
      through: {
        model: models.BaseItemTypeHabtmIdentifyAchievementitem,
        unique: false,
      },
      foreignKey: 'base_item_type_row',
      otherKey: 'achievement_item_row',
      $col_order: 28,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'identify_magic_achievement_items',
      through: {
        model: models.BaseItemTypeHabtmIdentifyMagicAchievementitem,
        unique: false,
      },
      foreignKey: 'base_item_type_row',
      otherKey: 'achievement_item_row',
      $col_order: 30,
      nullable: true,
      constraints: false,
    });

    // MANUAL: think of a way to define has_one/has_many TODO
    // hasOne but sourceKey not supported
    model.hasMany(models.ComponentArmour, {
      as: 'component_armour',
      foreignKey: {
        name: 'base_item_types_key',
      },
      sourceKey: 'id',
    });
    // MANUAL: hasOne but sourceKey not supported
    model.hasMany(models.ComponentAttributeRequirement, {
      as: 'component_attribute_requirements',
      foreignKey: {
        name: 'base_item_types_key',
      },
      sourceKey: 'id',
    });
    // MANUAL
    model.hasOne(models.WeaponType, {
      as: 'weapon_type',
      foreignKey: {
        name: 'base_item_types_key',
      },
    });
    model.hasOne(models.ShieldType, {
      as: 'shield_type',
      foreignKey: {
        name: 'base_item_types_key',
      },
    });
  };

  model.DAT_FILE = 'BaseItemTypes.dat';
  return model;
};
