module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CraftingBenchUnlockCategory',
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
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      _crafting_item_class_categories_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'crafting_bench_unlock_categories',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.CraftingItemClassCategory, {
      as: 'crafting_item_class_categories',
      through: {
        model: models.CraftingBenchUnlockCategoryHabtmCraftingItemClassCategory,
        unique: false,
      },
      foreignKey: 'crafting_bench_unlock_category_row',
      otherKey: 'crafting_item_class_category_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CraftingBenchUnlockCategories.dat';
  return model;
};
