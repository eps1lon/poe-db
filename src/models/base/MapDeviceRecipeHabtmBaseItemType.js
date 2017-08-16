module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapDeviceRecipeHabtmBaseItemType',
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
              attribute: 'map_device_recipe_row',
            },
            {
              attribute: 'base_item_type_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'map_device_recipe_habtm_base_item_types',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MapDeviceRecipe, {
      foreignKey: 'map_device_recipe_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      foreignKey: 'base_item_type_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
