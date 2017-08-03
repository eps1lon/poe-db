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
        allowNull: false,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
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
              attribute: 'achievement_sets_display_key',
            },
          ],
          name: 'index_achievement_sets_display_key',
        },
        {
          fields: [
            {
              attribute: 'base_item_types_key',
            },
          ],
          name: 'index_base_item_types_key',
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
    models.AchievementSetsDisplay.hasMany(model, {
      as: 'achievement_set_rewards',
      $inverse: 'achievement_set_rewards',
      $col_order: 0,
      foreignKey: {
        name: 'achievement_sets_display_key',
        $type: 'int',
        $col_order: 0,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'id',
    });
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      $inverse: 'achievement_set_rewards',
      $col_order: 2,
      foreignKey: {
        name: 'base_item_types_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemType.hasMany(model, {
      as: 'achievement_set_rewards',
      $inverse: 'achievement_set_rewards',
      $col_order: 2,
      foreignKey: {
        name: 'base_item_types_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'AchievementSetRewards.dat';
  return model;
};
