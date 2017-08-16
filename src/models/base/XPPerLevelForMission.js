module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'XPPerLevelForMission',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
      zone_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      experience: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'x_p_per_level_for_missions',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'XPPerLevelForMissions.dat';
  return model;
};
