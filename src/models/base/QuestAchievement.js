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
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      quest_states: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      unknown3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      _achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 3,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'quest_achievements',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: {
        model: models.QuestAchievementHabtmAchievementItem,
        unique: false,
      },
      foreignKey: 'quest_achievement_row',
      otherKey: 'achievement_item_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'QuestAchievements.dat';
  return model;
};
