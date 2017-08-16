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
      _world_areas_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
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
              attribute: 'npc_master_key',
            },
          ],
          name: 'index_npc_master_key',
        },
        {
          fields: [
            {
              attribute: 'mission_transition_tiles_key',
            },
          ],
          name: 'index_mission_transition_tiles_key',
        },
      ],
      tableName: 'mission_tile_maps',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCMaster, {
      as: 'npc_master',
      $inverse: 'mission_tile_maps',
      $col_order: 0,
      foreignKey: {
        name: 'npc_master_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MissionTransitionTile, {
      as: 'mission_transition_tile',
      $inverse: 'mission_tile_maps',
      $col_order: 1,
      foreignKey: {
        name: 'mission_transition_tiles_key',
        $type: 'ulong',
        $col_order: 1,
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
