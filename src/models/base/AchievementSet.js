module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AchievementSet',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'achievement_sets',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'AchievementSets.dat';
  return model;
};
