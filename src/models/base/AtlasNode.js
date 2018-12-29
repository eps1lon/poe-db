module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AtlasNode',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      x: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      y: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      _atlas_node_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 6,
      },
      _atlas_sector_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 12,
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
              attribute: 'world_areas_key',
            },
          ],
          name: 'index_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'item_visual_identity_key',
            },
          ],
          name: 'index_item_visual_identity_key',
        },
        {
          fields: [
            {
              attribute: 'maps_key',
            },
          ],
          name: 'index_maps_key',
        },
        {
          fields: [
            {
              attribute: 'flavour_text_key',
            },
          ],
          name: 'index_flavour_text_key',
        },
      ],
      tableName: 'atlas_nodes',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'world_area',
      $inverse: 'atlas_nodes',
      $col_order: 0,
      foreignKey: {
        name: 'world_areas_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      as: 'item_visual_identity',
      $inverse: 'atlas_nodes',
      $col_order: 7,
      foreignKey: {
        name: 'item_visual_identity_key',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Map, {
      as: 'map',
      $inverse: 'atlas_nodes',
      $col_order: 10,
      foreignKey: {
        name: 'maps_key',
        $type: 'ulong',
        $col_order: 10,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.FlavourText, {
      as: 'flavour_text',
      $inverse: 'atlas_nodes',
      $col_order: 13,
      foreignKey: {
        name: 'flavour_text_key',
        $type: 'ulong',
        $col_order: 13,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AtlasNode, {
      as: 'atlas_node',
      through: {
        model: models.AtlasNodeHabtmAtlasNode,
        unique: false,
      },
      foreignKey: 'source_row',
      otherKey: 'target_row',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AtlasSector, {
      as: 'atlas_sector',
      through: {
        model: models.AtlasNodeHabtmAtlasSector,
        unique: false,
      },
      foreignKey: 'atlas_node_row',
      otherKey: 'atlas_sector_row',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'AtlasNode.dat';
  return model;
};
