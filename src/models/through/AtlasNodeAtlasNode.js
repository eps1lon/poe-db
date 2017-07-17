module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AtlasNodeAtlasNode',
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
      indexes: [],
      tableName: 'atlas_node_atlas_nodes',
    },
  );

  model.associate = models => {
    model.belongsTo(models.AtlasNode, {
      foreignKey: 'source_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AtlasNode, {
      foreignKey: 'target_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
