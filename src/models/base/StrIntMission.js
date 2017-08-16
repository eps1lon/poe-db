module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrIntMission',
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
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      f9: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      has_time_limit: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      time_limit: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      is_destroy_relic1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      is_destroy_relic2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      feed_required: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      f12: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      _relic_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 13,
      },
      _achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 14,
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
              attribute: 'relic_monster_varieties_key',
            },
          ],
          name: 'index_relic_monster_varieties_key',
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
      tableName: 'str_int_missions',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'relic_monster_variety',
      $inverse: 'str_int_missions',
      $col_order: 2,
      foreignKey: {
        name: 'relic_monster_varieties_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCTalk, {
      as: 'npc_talk',
      $inverse: 'str_int_missions',
      $col_order: 5,
      foreignKey: {
        name: 'npc_talk_key',
        $type: 'ulong',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'relic_mods',
      through: {
        model: models.StrIntMissionHabtmRelicMod,
        unique: false,
      },
      foreignKey: 'str_int_mission_row',
      otherKey: 'mod_row',
      $col_order: 13,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: {
        model: models.StrIntMissionHabtmAchievementItem,
        unique: false,
      },
      foreignKey: 'str_int_mission_row',
      otherKey: 'achievement_item_row',
      $col_order: 14,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrIntMissions.dat';
  return model;
};
