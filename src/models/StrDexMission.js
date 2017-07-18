module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexMission',
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
      time_limit: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
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
      dummy_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      dummy_spawn_timer: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown12: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
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
              attribute: 'dummy__monster_varieties_key',
            },
          ],
          name: 'index_dummy__monster_varieties_key',
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
      tableName: 'str_dex_missions',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      foreignKey: {
        name: 'dummy__monster_varieties_key',
        $col_order: 5,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCTalk, {
      foreignKey: {
        name: 'n_p_c_talk_key',
        $col_order: 8,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'allies__monster_varieties',
      through: {
        model: models.StrDexMissionHabtmAlliesMonstervariety,
        unique: false,
      },
      foreignKey: 'str_dex_mission_row',
      otherKey: 'monster_variety_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.StrDexMissionHabtmMod,
        unique: false,
      },
      foreignKey: 'str_dex_mission_row',
      otherKey: 'mod_row',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'traps__monster_varieties',
      through: {
        model: models.StrDexMissionHabtmTrapsMonstervariety,
        unique: false,
      },
      foreignKey: 'str_dex_mission_row',
      otherKey: 'monster_variety_row',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrDexMissions.dat';
  return model;
};
