module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestStaticReward',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      stat_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
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
              attribute: 'stats_key',
            },
          ],
          name: 'index_stats_key',
        },
        {
          fields: [
            {
              attribute: 'difficulty_key',
            },
          ],
          name: 'index_difficulty_key',
        },
        {
          fields: [
            {
              attribute: 'quest_key',
            },
          ],
          name: 'index_quest_key',
        },
      ],
      tableName: 'quest_static_rewards',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'stat',
      $inverse: 'quest_static_rewards',
      foreignKey: {
        name: 'stats_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Difficulty, {
      as: 'difficulty',
      $inverse: 'quest_static_rewards',
      foreignKey: {
        name: 'difficulty_key',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Quest, {
      as: 'quest',
      $inverse: 'quest_static_rewards',
      foreignKey: {
        name: 'quest_key',
        $col_order: 5,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'QuestStaticRewards.dat';
  return model;
};
