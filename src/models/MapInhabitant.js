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
          fields: ['stats_key'],
        },
      ],
      tableName: 'map_inhabitants',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Stat, {
      foreignKey: {
        name: 'stats_key',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Stat.hasMany(model, {
      foreignKey: {
        name: 'stats_key',
        $col_order: 1,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'MapInhabitants.dat';
  return model;
};
