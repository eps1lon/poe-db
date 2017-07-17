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
        allowNull: false,
        $col_order: 1,
      },
      y: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      flavour_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
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
              attribute: 'world_areas_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'default__item_visual_identity_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'shaped__item_visual_identity_key',
            },
          ],
        },
      ],
      tableName: 'atlas_nodes',
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: {
        name: 'default__item_visual_identity_key',
        $col_order: 7,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: {
        name: 'shaped__item_visual_identity_key',
        $col_order: 8,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AtlasNode, {
      as: 'atlas_node',
      through: models.AtlasNodeAtlasNode,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'AtlasNode.dat';
  return model;
};
