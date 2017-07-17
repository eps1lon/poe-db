module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapDeviceRecipeHabtmWorldArea',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['map_device_recipe_row', 'world_area_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'map_device_recipe_habtm_world_areas',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MapDeviceRecipe, {
      foreignKey: 'map_device_recipe_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      foreignKey: 'world_area_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
