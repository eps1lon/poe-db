module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DescentRewardChestHabtmBaseItemTypes10',
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
      tableName: 'descent_reward_chest_habtm_base_item_types10s',
    },
  );

  model.associate = models => {
    model.belongsTo(models.DescentRewardChest, {
      foreignKey: 'descent_reward_chest_row',
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
