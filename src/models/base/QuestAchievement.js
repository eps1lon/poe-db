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
      quest_states: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      is_standard_achievement: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      is_hardcore_achievement: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
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
              attribute: 'achievement_items_key',
            },
          ],
          name: 'index_achievement_items_key',
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
  };

  model.DAT_FILE = 'QuestAchievements.dat';
  return model;
};
