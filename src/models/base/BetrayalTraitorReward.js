module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BetrayalTraitorReward',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
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
              attribute: 'betrayal_jobs_key',
            },
          ],
          name: 'index_betrayal_jobs_key',
        },
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
              attribute: 'betrayal_ranks_key',
            },
          ],
          name: 'index_betrayal_ranks_key',
        },
      ],
      tableName: 'betrayal_traitor_rewards',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BetrayalJob, {
      as: 'betrayal_job',
      $inverse: 'betrayal_traitor_rewards',
      $col_order: 0,
      foreignKey: {
        name: 'betrayal_jobs_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BetrayalTarget, {
      as: 'betrayal_target',
      $inverse: 'betrayal_traitor_rewards',
      $col_order: 1,
      foreignKey: {
        name: 'betrayal_targets_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BetrayalRank, {
      as: 'betrayal_rank',
      $inverse: 'betrayal_traitor_rewards',
      $col_order: 2,
      foreignKey: {
        name: 'betrayal_ranks_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BetrayalTraitorRewards.dat';
  return model;
};
