module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LevelRelativePlayerScaling',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'level_relative_player_scalings',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'LevelRelativePlayerScaling.dat';
  return model;
};
