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
              attribute: 'daily_missions_keys',
            },
          ],
        },
      ],
      tableName: 'daily_overrides',
    },
  );

  model.associate = models => {
    model.belongsTo(models.DailyMission, {
      foreignKey: {
        name: 'daily_missions_keys',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DailyOverrides.dat';
  return model;
};
