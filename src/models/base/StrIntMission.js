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
        allowNull: false,
        $col_order: 0,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      f9: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      has_time_limit: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      time_limit: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      is_destroy_relic1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      is_destroy_relic2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      feed_required: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      f12: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
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
              attribute: 'relic__monster_varieties_key',
            },
          ],
          name: 'index_relic__monster_varieties_key',
        },
        {
          fields: [
            {
              attribute: 'n_p_c_talk_key',
            },
          ],
          name: 'index_n_p_c_talk_key',
        },
      ],
      tableName: 'str_int_missions',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'relic__monster_variety',
      $inverse: 'str_int_missions',
      foreignKey: {
        name: 'relic__monster_varieties_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCTalk, {
      as: 'n_p_c_talk',
      $inverse: 'str_int_missions',
      foreignKey: {
        name: 'n_p_c_talk_key',
        $col_order: 5,
        $type: 'ulong',
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
