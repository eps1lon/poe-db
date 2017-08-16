module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MissionTileMapHabtmWorldArea',
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
              attribute: 'mission_tile_map_row',
            },
            {
              attribute: 'world_area_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'mission_tile_map_habtm_world_areas',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MissionTileMap, {
      foreignKey: 'mission_tile_map_row',
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
