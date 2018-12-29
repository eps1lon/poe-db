module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'RecipeUnlockDisplay',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      _crafting_item_class_categories_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'recipe_unlock_displays',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.CraftingItemClassCategory, {
      as: 'crafting_item_class_categories',
      through: {
        model: models.RecipeUnlockDisplayHabtmCraftingItemClassCategory,
        unique: false,
      },
      foreignKey: 'recipe_unlock_display_row',
      otherKey: 'crafting_item_class_category_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'RecipeUnlockDisplay.dat';
  return model;
};
