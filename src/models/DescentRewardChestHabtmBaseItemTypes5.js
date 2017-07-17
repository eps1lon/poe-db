module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DescentRewardChestHabtmBaseItemTypes5',
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
      indexes: [
        {
          fields: ['descent_reward_chest_row', 'base_item_type_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'descent_reward_chest_habtm_base_item_types5s',
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