module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EventSeasonRewards',
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
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.EventSeason, {
      foreignKey: {
        name: 'event_season_key',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.EventSeason.hasMany(model, {
      foreignKey: {
        name: 'event_season_key',
        $col_order: 0,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'EventSeasonRewards.dat';
  return model;
};
