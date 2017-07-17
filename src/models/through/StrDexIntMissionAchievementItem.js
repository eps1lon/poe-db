module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexIntMissionAchievementItem',
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
      tableName: 'str_dex_int_mission_achievement_items',
    },
  );

  model.associate = models => {
    model.belongsTo(models.StrDexIntMission, {
      foreignKey: 'str_dex_int_mission_row',
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
