module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WorldAreaConnectionsWorldarea',
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
      tableName: 'world_area_connections_worldareas',
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      foreignKey: 'source_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      foreignKey: 'target_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
