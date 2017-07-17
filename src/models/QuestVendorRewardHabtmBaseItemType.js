module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestVendorRewardHabtmBaseItemType',
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
      tableName: 'quest_vendor_reward_habtm_base_item_types',
    },
  );

  model.associate = models => {
    model.belongsTo(models.QuestVendorReward, {
      foreignKey: 'quest_vendor_reward_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      foreignKey: 'base_item_type_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
