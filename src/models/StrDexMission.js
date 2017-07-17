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
        },
        {
          fields: [
            {
              attribute: 'n_p_c_talk_key',
            },
          ],
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
      through: models.StrDexMissionAlliesMonstervariety,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: models.StrDexMissionMod,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'traps__monster_varieties',
      through: models.StrDexMissionTrapsMonstervariety,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrDexMissions.dat';
  return model;
};
