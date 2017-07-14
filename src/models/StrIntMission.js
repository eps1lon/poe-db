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
              attribute: 'relic_monster_varieties_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'npc_talk_key',
            },
          ],
        },
      ],
      tableName: 'str_int_missions',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      foreignKey: {
        name: 'relic_monster_varieties_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MonsterVariety.hasMany(model, {
      foreignKey: {
        name: 'relic_monster_varieties_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.NPCTalk, {
      foreignKey: {
        name: 'npc_talk_key',
        $col_order: 5,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.NPCTalk.hasMany(model, {
      foreignKey: {
        name: 'npc_talk_key',
        $col_order: 5,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Mod, {
      as: 'relic_mods',
      through: 'StrIntMissionMod',
      $col_order: 13,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: 'StrIntMissionAchievementItem',
      $col_order: 14,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrIntMissions.dat';
  return model;
};
