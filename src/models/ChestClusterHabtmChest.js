module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ChestClusterHabtmChest',
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
          fields: ['chest_cluster_row', 'chest_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'chest_cluster_habtm_chests',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ChestCluster, {
      foreignKey: 'chest_cluster_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Chest, {
      foreignKey: 'chest_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
