module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BestiaryRecipeHabtmBestiaryRecipeComponent',
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
              attribute: 'bestiary_recipe_row',
            },
            {
              attribute: 'bestiary_recipe_component_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'bestiary_recipe__bestiary_recipe_components',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BestiaryRecipe, {
      foreignKey: 'bestiary_recipe_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BestiaryRecipeComponent, {
      foreignKey: 'bestiary_recipe_component_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
