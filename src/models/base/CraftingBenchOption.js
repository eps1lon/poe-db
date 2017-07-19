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
        allowNull: false,
        $col_order: 1,
      },
      master_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      crafting_bench_custom_action: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      sockets: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      socket_colours: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      links: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      item_quantity: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      unknown1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      is_disabled: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'n_p_c_master_key',
            },
          ],
          name: 'index_n_p_c_master_key',
        },
        {
          fields: [
            {
              attribute: 'mods_key',
            },
          ],
          name: 'index_mods_key',
        },
      ],
      tableName: 'crafting_bench_options',
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCMaster, {
      as: 'n_p_c_master',
      $inverse: 'crafting_bench_options',
      foreignKey: {
        name: 'n_p_c_master_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mod',
      $inverse: 'crafting_bench_options',
      foreignKey: {
        name: 'mods_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'cost__base_item_types',
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
  };

  model.DAT_FILE = 'CraftingBenchOptions.dat';
  return model;
};
