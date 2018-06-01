module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'IncursionChestReward',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown5: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      _incursion_chests_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
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
              attribute: 'incursion_rooms_key',
            },
          ],
          name: 'index_incursion_rooms_key',
        },
      ],
      tableName: 'incursion_chest_rewards',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.IncursionRoom, {
      as: 'incursion_room',
      $inverse: 'incursion_chest_rewards',
      $col_order: 0,
      foreignKey: {
        name: 'incursion_rooms_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.IncursionChest, {
      as: 'incursion_chests',
      through: {
        model: models.IncursionChestRewardHabtmIncursionChest,
        unique: false,
      },
      foreignKey: 'incursion_chest_reward_row',
      otherKey: 'incursion_chest_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'IncursionChestRewards.dat';
  return model;
};
