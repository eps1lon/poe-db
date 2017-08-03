module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AchievementSetsDisplay',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      title: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'achievement_sets_displays',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'AchievementSetsDisplay.dat';
  return model;
};
