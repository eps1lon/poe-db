module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapDeviceRecipe',
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
      unknown5: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'map_device_recipes',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types',
      through: models.MapDeviceRecipeHabtmBaseItemType,
      foreignKey: 'map_device_recipe_row',
      otherKey: 'base_item_type_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'world_areas',
      through: models.MapDeviceRecipeHabtmWorldArea,
      foreignKey: 'map_device_recipe_row',
      otherKey: 'world_area_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapDeviceRecipes.dat';
  return model;
};
