module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CraftingItemClassCategory',
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
      unknown_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      _item_classes_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'crafting_item_class_categories',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.ItemClass, {
      as: 'item_classes',
      through: {
        model: models.CraftingItemClassCategoryHabtmItemClass,
        unique: false,
      },
      foreignKey: 'crafting_item_class_category_row',
      otherKey: 'item_class_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CraftingItemClassCategories.dat';
  return model;
};
