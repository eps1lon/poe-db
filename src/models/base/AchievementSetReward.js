module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AchievementSetReward',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      _base_item_types_cache: {
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
              attribute: 'achievement_sets_display_key',
            },
          ],
          name: 'index_achievement_sets_display_key',
        },
      ],
      tableName: 'achievement_set_rewards',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementSetsDisplay, {
      as: 'achievement_sets_display',
      $inverse: 'achievement_set_rewards',
      $col_order: 0,
      foreignKey: {
        name: 'achievement_sets_display_key',
        $type: 'int',
        $col_order: 0,
      },
      targetKey: 'id',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types',
      through: {
        model: models.AchievementSetRewardHabtmBaseItemType,
        unique: false,
      },
      foreignKey: 'achievement_set_reward_row',
      otherKey: 'base_item_type_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'AchievementSetRewards.dat';
  return model;
};
