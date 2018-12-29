module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AtlasNodeHabtmAtlasSector',
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
              attribute: 'atlas_node_row',
            },
            {
              attribute: 'atlas_sector_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'atlas_node__atlas_sectors',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.AtlasNode, {
      foreignKey: 'atlas_node_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AtlasSector, {
      foreignKey: 'atlas_sector_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
