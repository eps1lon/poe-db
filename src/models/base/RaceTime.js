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
      start_u_n_i_x_time: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      end_u_n_i_x_time: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
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
              attribute: 'races_key',
            },
          ],
          name: 'index_races_key',
        },
      ],
      tableName: 'race_times',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Race, {
      as: 'race',
      $inverse: 'race_times',
      foreignKey: {
        name: 'races_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'RaceTimes.dat';
  return model;
};
