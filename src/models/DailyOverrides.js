module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DailyOverrides',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
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
          fields: ['daily_missions_keys'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.DailyMissions, {
      foreignKey: {
        name: 'daily_missions_keys',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.DailyMissions.hasMany(model, {
      foreignKey: {
        name: 'daily_missions_keys',
        $col_order: 1,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'DailyOverrides.dat';
  return model;
};
