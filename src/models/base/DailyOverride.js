module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DailyOverride',
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
              attribute: 'daily_missions_keys',
            },
          ],
          name: 'index_daily_missions_keys',
        },
      ],
      tableName: 'daily_overrides',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.DailyMission, {
      as: 'daily_missionss',
      $inverse: 'daily_overrides',
      $col_order: 1,
      foreignKey: {
        name: 'daily_missions_keys',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DailyOverrides.dat';
  return model;
};
