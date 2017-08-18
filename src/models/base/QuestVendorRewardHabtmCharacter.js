module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestVendorRewardHabtmCharacter',
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
              attribute: 'quest_vendor_reward_row',
            },
            {
              attribute: 'character_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'quest_vendor_reward__characters',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.QuestVendorReward, {
      foreignKey: 'quest_vendor_reward_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Character, {
      foreignKey: 'character_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
