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
        allowNull: true,
        $col_order: 0,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      stat_values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      _stats_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'quest_key',
            },
          ],
          name: 'index_quest_key',
        },
        {
          fields: [
            {
              attribute: 'client_strings_key',
            },
          ],
          name: 'index_client_strings_key',
        },
      ],
      tableName: 'quest_static_rewards',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Quest, {
      as: 'quest',
      $inverse: 'quest_static_rewards',
      $col_order: 4,
      foreignKey: {
        name: 'quest_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ClientString, {
      as: 'client_string',
      $inverse: 'quest_static_rewards',
      $col_order: 6,
      foreignKey: {
        name: 'client_strings_key',
        $type: 'ulong',
        $col_order: 6,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'stats',
      through: {
        model: models.QuestStaticRewardHabtmStat,
        unique: false,
      },
      foreignKey: 'quest_static_reward_row',
      otherKey: 'stat_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'QuestStaticRewards.dat';
  return model;
};
