module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ChestCluster',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'chest_clusters',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Chest, {
      as: 'chests',
      through: {
        model: models.ChestClusterHabtmChest,
        unique: false,
      },
      foreignKey: 'chest_cluster_row',
      otherKey: 'chest_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ChestClusters.dat';
  return model;
};
