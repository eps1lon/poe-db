module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ItemVisualIdentityHabtmCorruptAchievementitem',
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
      tableName: 'item_visual_identity_habtm_corrupt_achievementitems',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: 'item_visual_identity_row',
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
