module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestVendorReward',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      quest_state: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
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
              attribute: 'npc_key',
            },
          ],
          name: 'index_npc_key',
        },
      ],
      tableName: 'quest_vendor_rewards',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPC, {
      as: 'npc',
      $inverse: 'quest_vendor_rewards',
      $col_order: 1,
      foreignKey: {
        name: 'npc_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Character, {
      as: 'characters',
      through: {
        model: models.QuestVendorRewardHabtmCharacter,
        unique: false,
      },
      foreignKey: 'quest_vendor_reward_row',
      otherKey: 'character_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types',
      through: {
        model: models.QuestVendorRewardHabtmBaseItemType,
        unique: false,
      },
      foreignKey: 'quest_vendor_reward_row',
      otherKey: 'base_item_type_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'QuestVendorRewards.dat';
  return model;
};
