module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'RecipeUnlockDisplayHabtmCraftingItemClassCategory',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
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
              attribute: 'recipe_unlock_display_row',
            },
            {
              attribute: 'crafting_item_class_category_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'recipe_unlock_display__crafting_item_class_categories',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.RecipeUnlockDisplay, {
      foreignKey: 'recipe_unlock_display_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.CraftingItemClassCategory, {
      foreignKey: 'crafting_item_class_category_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
