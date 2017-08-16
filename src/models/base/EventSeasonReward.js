module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EventSeasonReward',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      point: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      reward_command: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
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
              attribute: 'event_season_key',
            },
          ],
          name: 'index_event_season_key',
        },
      ],
      tableName: 'event_season_rewards',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.EventSeason, {
      as: 'event_season',
      $inverse: 'event_season_rewards',
      $col_order: 0,
      foreignKey: {
        name: 'event_season_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'EventSeasonRewards.dat';
  return model;
};
