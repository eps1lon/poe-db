module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WorldAreaHabtmTopology',
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
          fields: ['world_area_row', 'topology_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'world_area_habtm_topologies',
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      foreignKey: 'world_area_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Topology, {
      foreignKey: 'topology_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
