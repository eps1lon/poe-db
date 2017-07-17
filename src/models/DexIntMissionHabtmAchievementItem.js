module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexIntMissionHabtmAchievementItem',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'dex_int_mission_habtm_achievement_items',
    },
  );

  model.associate = models => {
    model.belongsTo(models.DexIntMission, {
      foreignKey: 'dex_int_mission_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      foreignKey: 'achievement_item_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
