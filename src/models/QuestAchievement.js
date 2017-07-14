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
        },
        {
          fields: [
            {
              attribute: 'difficulties_key',
            },
          ],
        },
      ],
      tableName: 'quest_achievements',
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItem.hasMany(model, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Difficulty, {
      foreignKey: {
        name: 'difficulties_key',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Difficulty.hasMany(model, {
      foreignKey: {
        name: 'difficulties_key',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'QuestAchievements.dat';
  return model;
};
