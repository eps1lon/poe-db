module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MissionFavourPerLevel',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      favour: {
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
      tableName: 'mission_favour_per_levels',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MissionFavourPerLevel.dat';
  return model;
};
