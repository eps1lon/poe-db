module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BetrayalTargetJobAchievement',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
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
              attribute: 'betrayal_targets_key',
            },
          ],
          name: 'index_betrayal_targets_key',
        },
        {
          fields: [
            {
              attribute: 'betrayal_jobs_key',
            },
          ],
          name: 'index_betrayal_jobs_key',
        },
        {
          fields: [
            {
              attribute: 'achievement_items_key',
            },
          ],
          name: 'index_achievement_items_key',
        },
      ],
      tableName: 'betrayal_target_job_achievements',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BetrayalTarget, {
      as: 'betrayal_target',
      $inverse: 'betrayal_target_job_achievements',
      $col_order: 0,
      foreignKey: {
        name: 'betrayal_targets_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BetrayalJob, {
      as: 'betrayal_job',
      $inverse: 'betrayal_target_job_achievements',
      $col_order: 1,
      foreignKey: {
        name: 'betrayal_jobs_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_item',
      $inverse: 'betrayal_target_job_achievements',
      $col_order: 2,
      foreignKey: {
        name: 'achievement_items_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BetrayalTargetJobAchievements.dat';
  return model;
};
