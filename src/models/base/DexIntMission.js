module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexIntMission',
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
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      kill_target: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      fail_if_target_killed: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      kill_guards: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      fail_if_guards_killed: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      time_limit: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      chest_flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      chest_flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      fail_if_no_guards_left: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      timer: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      flag7: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      _achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 16,
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
              attribute: 'hostage_monster_varieties_key',
            },
          ],
          name: 'index_hostage_monster_varieties_key',
        },
        {
          fields: [
            {
              attribute: 'npc_talk_key',
            },
          ],
          name: 'index_npc_talk_key',
        },
      ],
      tableName: 'dex_int_missions',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'hostage_monster_variety',
      $inverse: 'dex_int_missions',
      $col_order: 7,
      foreignKey: {
        name: 'hostage_monster_varieties_key',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCTalk, {
      as: 'npc_talk',
      $inverse: 'dex_int_missions',
      $col_order: 12,
      foreignKey: {
        name: 'npc_talk_key',
        $type: 'long',
        $col_order: 12,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: {
        model: models.DexIntMissionHabtmAchievementItem,
        unique: false,
      },
      foreignKey: 'dex_int_mission_row',
      otherKey: 'achievement_item_row',
      $col_order: 16,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DexIntMissions.dat';
  return model;
};
