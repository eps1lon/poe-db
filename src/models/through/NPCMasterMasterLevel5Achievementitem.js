module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCMasterMasterLevel5Achievementitem',
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
      tableName: 'n_p_c_master_master_level5_achievementitems',
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCMaster, {
      foreignKey: 'n_p_c_master_row',
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
