module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapInhabitant',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
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
              attribute: 'stats_key',
            },
          ],
          name: 'index_stats_key',
        },
      ],
      tableName: 'map_inhabitants',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Stat, {
      as: 'stat',
      $inverse: 'map_inhabitants',
      $col_order: 1,
      foreignKey: {
        name: 'stats_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapInhabitants.dat';
  return model;
};
