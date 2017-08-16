module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'RaceTime',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      index: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      start_unix_time: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      end_unix_time: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
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
              attribute: 'races_key',
            },
          ],
          name: 'index_races_key',
        },
      ],
      tableName: 'race_times',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Race, {
      as: 'race',
      $inverse: 'race_times',
      $col_order: 0,
      foreignKey: {
        name: 'races_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'RaceTimes.dat';
  return model;
};
