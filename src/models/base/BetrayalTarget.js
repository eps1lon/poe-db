module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BetrayalTarget',
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
      art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      key3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      full_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      safehouse_arm_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      short_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
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
              attribute: 'betrayal_relationship_state_key',
            },
          ],
          name: 'index_betrayal_relationship_state_key',
        },
        {
          fields: [
            {
              attribute: 'monster_varieties_key',
            },
          ],
          name: 'index_monster_varieties_key',
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
              attribute: 'safehouse_leader_acheivement_items_key',
            },
          ],
          name: 'index_safehouse_leader_acheivement_items_key',
        },
        {
          fields: [
            {
              attribute: 'level3_achievement_items_key',
            },
          ],
          name: 'index_level3_achievement_items_key',
        },
      ],
      tableName: 'betrayal_targets',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BetrayalRelationshipState, {
      as: 'betrayal_relationship_state',
      $inverse: 'betrayal_targets',
      $col_order: 1,
      foreignKey: {
        name: 'betrayal_relationship_state_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'monster_variety',
      $inverse: 'betrayal_targets',
      $col_order: 2,
      foreignKey: {
        name: 'monster_varieties_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BetrayalJob, {
      as: 'betrayal_job',
      $inverse: 'betrayal_targets',
      $col_order: 3,
      foreignKey: {
        name: 'betrayal_jobs_key',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'safehouse_leader_acheivement_item',
      $inverse: 'betrayal_targets',
      $col_order: 11,
      foreignKey: {
        name: 'safehouse_leader_acheivement_items_key',
        $type: 'ulong',
        $col_order: 11,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'level3_achievement_item',
      $inverse: 'betrayal_targets',
      $col_order: 12,
      foreignKey: {
        name: 'level3_achievement_items_key',
        $type: 'ulong',
        $col_order: 12,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BetrayalTargets.dat';
  return model;
};
