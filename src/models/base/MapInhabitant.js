module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapInhabitant',
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
    },
    {
      engine: 'MyISAM',
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
    },
  );

  model.associate = models => {
    model.belongsTo(models.Stat, {
      as: 'stat',
      foreignKey: {
        name: 'stats_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapInhabitants.dat';
  return model;
};
