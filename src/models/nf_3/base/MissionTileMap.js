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
              attribute: 'npc_master_key',
            },
          ],
          name: 'index_npc_master_key',
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
