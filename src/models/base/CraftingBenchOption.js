module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CraftingBenchOption',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      order: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      required_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      crafting_bench_custom_action: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      links: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      socket_colours: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      sockets: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      item_quantity: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      is_disabled: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      is_area_option: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      recipe_ids: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      mod_family: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 19,
      },
      maximum_map_tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 21,
      },
      unveils_required: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 23,
      },
      unveils_required2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 24,
      },
      affix_type: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 25,
      },
      keys1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 26,
      },
      _cost_base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 3,
      },
      _item_classes_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 8,
      },
      _crafting_item_class_categories_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 20,
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
              attribute: 'hideout_np_cs_key',
            },
          ],
          name: 'index_hideout_np_cs_key',
        },
        {
          fields: [
            {
              attribute: 'mods_key',
            },
          ],
          name: 'index_mods_key',
        },
        {
          fields: [
            {
              attribute: 'crafting_bench_unlock_categories_key',
            },
          ],
          name: 'index_crafting_bench_unlock_categories_key',
        },
      ],
      tableName: 'crafting_bench_options',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.HideoutNPC, {
      as: 'hideout_npc',
      $inverse: 'crafting_bench_options',
      $col_order: 0,
      foreignKey: {
        name: 'hideout_np_cs_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mod',
      $inverse: 'crafting_bench_options',
      $col_order: 2,
      foreignKey: {
        name: 'mods_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.CraftingBenchUnlockCategory, {
      as: 'crafting_bench_unlock_category',
      $inverse: 'crafting_bench_options',
      $col_order: 22,
      foreignKey: {
        name: 'crafting_bench_unlock_categories_key',
        $type: 'ulong',
        $col_order: 22,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'cost_base_item_types',
      through: {
        model: models.CraftingBenchOptionHabtmCostBaseitemtype,
        unique: false,
      },
      foreignKey: 'crafting_bench_option_row',
      otherKey: 'base_item_type_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemClass, {
      as: 'item_classes',
      through: {
        model: models.CraftingBenchOptionHabtmItemClass,
        unique: false,
      },
      foreignKey: 'crafting_bench_option_row',
      otherKey: 'item_class_row',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CraftingItemClassCategory, {
      as: 'crafting_item_class_categories',
      through: {
        model: models.CraftingBenchOptionHabtmCraftingItemClassCategory,
        unique: false,
      },
      foreignKey: 'crafting_bench_option_row',
      otherKey: 'crafting_item_class_category_row',
      $col_order: 20,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CraftingBenchOptions.dat';
  return model;
};
