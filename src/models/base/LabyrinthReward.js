module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthReward',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      min_labyrinth_tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      max_labyrinth_tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
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
              attribute: 'chests_key',
            },
          ],
          name: 'index_chests_key',
        },
        {
          fields: [
            {
              attribute: 'labyrinth_reward_types_key',
            },
          ],
          name: 'index_labyrinth_reward_types_key',
        },
      ],
      tableName: 'labyrinth_rewards',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Chest, {
      as: 'chest',
      $inverse: 'labyrinth_rewards',
      $col_order: 1,
      foreignKey: {
        name: 'chests_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthRewardType, {
      as: 'labyrinth_reward_type',
      $inverse: 'labyrinth_rewards',
      $col_order: 6,
      foreignKey: {
        name: 'labyrinth_reward_types_key',
        $type: 'ulong',
        $col_order: 6,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthRewards.dat';
  return model;
};
