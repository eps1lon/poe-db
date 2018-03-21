module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BestiaryRecipeItemCreation',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      command: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
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
              attribute: 'bestiary_recipes_key',
            },
          ],
          name: 'index_bestiary_recipes_key',
        },
      ],
      tableName: 'bestiary_recipe_item_creations',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BestiaryRecipe, {
      as: 'bestiary_recipe',
      $inverse: 'bestiary_recipe_item_creations',
      $col_order: 0,
      foreignKey: {
        name: 'bestiary_recipes_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BestiaryRecipeItemCreation.dat';
  return model;
};
