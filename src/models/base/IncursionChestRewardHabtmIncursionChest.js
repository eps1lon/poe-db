module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'IncursionChestRewardHabtmIncursionChest',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'incursion_chest_reward_row',
            },
            {
              attribute: 'incursion_chest_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'incursion_chest_reward__incursion_chests',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.IncursionChestReward, {
      foreignKey: 'incursion_chest_reward_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.IncursionChest, {
      foreignKey: 'incursion_chest_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
