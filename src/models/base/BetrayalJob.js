module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BetrayalJob',
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
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
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
              attribute: 'completion_achievement_items_key',
            },
          ],
          name: 'index_completion_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'open_chests_achievement_items_key',
            },
          ],
          name: 'index_open_chests_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'mission_completion_acheivement_items_key',
            },
          ],
          name: 'index_mission_completion_acheivement_items_key',
        },
      ],
      tableName: 'betrayal_jobs',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementItem, {
      as: 'completion_achievement_item',
      $inverse: 'betrayal_jobs',
      $col_order: 7,
      foreignKey: {
        name: 'completion_achievement_items_key',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'open_chests_achievement_item',
      $inverse: 'betrayal_jobs',
      $col_order: 8,
      foreignKey: {
        name: 'open_chests_achievement_items_key',
        $type: 'ulong',
        $col_order: 8,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'mission_completion_acheivement_item',
      $inverse: 'betrayal_jobs',
      $col_order: 9,
      foreignKey: {
        name: 'mission_completion_acheivement_items_key',
        $type: 'ulong',
        $col_order: 9,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BetrayalJobs.dat';
  return model;
};
