module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DelveCraftingModifier',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      flag4: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      keys9: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      _mods_0_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
      _unknown_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
      _mods_1_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
      _delve_crafting_tags0_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
      },
      _delve_crafting_tags1_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 6,
      },
      _sell_price_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 12,
      },
      _weight_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 14,
      },
      _delve_crafting_modifier_descriptions_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 16,
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
              attribute: 'base_item_types_key',
            },
          ],
          name: 'index_base_item_types_key',
        },
      ],
      tableName: 'delve_crafting_modifiers',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      $inverse: 'delve_crafting_modifiers',
      $col_order: 0,
      foreignKey: {
        name: 'base_item_types_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods_0',
      through: {
        model: models.DelveCraftingModifierHabtmMods0,
        unique: false,
      },
      foreignKey: 'delve_crafting_modifier_row',
      otherKey: 'mod_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'unknown_tags',
      through: {
        model: models.DelveCraftingModifierHabtmUnknownTag,
        unique: false,
      },
      foreignKey: 'delve_crafting_modifier_row',
      otherKey: 'tag_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods_1',
      through: {
        model: models.DelveCraftingModifierHabtmMods1,
        unique: false,
      },
      foreignKey: 'delve_crafting_modifier_row',
      otherKey: 'mod_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.DelveCraftingTag, {
      as: 'delve_crafting_tags0',
      through: {
        model: models.DelveCraftingModifierHabtmDelveCraftingTags0,
        unique: false,
      },
      foreignKey: 'delve_crafting_modifier_row',
      otherKey: 'delve_crafting_tag_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.DelveCraftingTag, {
      as: 'delve_crafting_tags1',
      through: {
        model: models.DelveCraftingModifierHabtmDelveCraftingTags1,
        unique: false,
      },
      foreignKey: 'delve_crafting_modifier_row',
      otherKey: 'delve_crafting_tag_row',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'sell_price_mods',
      through: {
        model: models.DelveCraftingModifierHabtmSellPriceMod,
        unique: false,
      },
      foreignKey: 'delve_crafting_modifier_row',
      otherKey: 'mod_row',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'weight_tags',
      through: {
        model: models.DelveCraftingModifierHabtmWeightTag,
        unique: false,
      },
      foreignKey: 'delve_crafting_modifier_row',
      otherKey: 'tag_row',
      $col_order: 14,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.DelveCraftingModifierDescription, {
      as: 'delve_crafting_modifier_descriptions',
      through: {
        model:
          models.DelveCraftingModifierHabtmDelveCraftingModifierDescription,
        unique: false,
      },
      foreignKey: 'delve_crafting_modifier_row',
      otherKey: 'delve_crafting_modifier_description_row',
      $col_order: 16,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DelveCraftingModifiers.dat';
  return model;
};
