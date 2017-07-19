module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MissionTileMap',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      mission_key: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
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
              attribute: 'n_p_c_master_key',
            },
          ],
          name: 'index_n_p_c_master_key',
        },
      ],
      tableName: 'mission_tile_maps',
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCMaster, {
      as: 'n_p_c_master',
      foreignKey: {
        name: 'n_p_c_master_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'world_areas',
      through: {
        model: models.MissionTileMapHabtmWorldArea,
        unique: false,
      },
      foreignKey: 'mission_tile_map_row',
      otherKey: 'world_area_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MissionTileMap.dat';
  return model;
};
