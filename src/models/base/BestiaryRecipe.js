module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BestiaryRecipe',
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
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      notes: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      hint_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      data1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      _bestiary_recipe_component_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
      _achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 7,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'bestiary_recipes',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.BestiaryRecipeComponent, {
      as: 'bestiary_recipe_component',
      through: {
        model: models.BestiaryRecipeHabtmBestiaryRecipeComponent,
        unique: false,
      },
      foreignKey: 'bestiary_recipe_row',
      otherKey: 'bestiary_recipe_component_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: {
        model: models.BestiaryRecipeHabtmAchievementItem,
        unique: false,
      },
      foreignKey: 'bestiary_recipe_row',
      otherKey: 'achievement_item_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BestiaryRecipes.dat';
  return model;
};
