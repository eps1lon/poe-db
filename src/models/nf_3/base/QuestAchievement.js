module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestAchievement',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      quest_state: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      is_hardcore_achievement: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      is_standard_achievement: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown1: {
        type: DataTypes.INTEGER,
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
              attribute: 'achievement_items_key',
            },
          ],
          name: 'index_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'difficulties_key',
            },
          ],
          name: 'index_difficulties_key',
        },
      ],
      tableName: 'quest_achievements',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_item',
      $inverse: 'quest_achievements',
      $col_order: 0,
      foreignKey: {
        name: 'achievement_items_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Difficulty, {
      as: 'difficulty',
      $inverse: 'quest_achievements',
      $col_order: 4,
      foreignKey: {
        name: 'difficulties_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'QuestAchievements.dat';
  return model;
};
