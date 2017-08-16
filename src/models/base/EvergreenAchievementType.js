module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EvergreenAchievementType',
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
      tableName: 'evergreen_achievement_types',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'EvergreenAchievementTypes.dat';
  return model;
};
