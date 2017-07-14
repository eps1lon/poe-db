module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexMissions',
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
          fields: ['dummy_monster_varieties_key'],
        },
        {
          fields: ['npc_talk_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVarieties, {
      foreignKey: {
        name: 'dummy_monster_varieties_key',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MonsterVarieties.hasMany(model, {
      foreignKey: {
        name: 'dummy_monster_varieties_key',
        $col_order: 5,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.NPCTalk, {
      foreignKey: {
        name: 'npc_talk_key',
        $col_order: 8,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.NPCTalk.hasMany(model, {
      foreignKey: {
        name: 'npc_talk_key',
        $col_order: 8,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'allies_monster_varieties',
      through: 'StrDexMissionsAlliesMonsterVarieties',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'mods',
      through: 'StrDexMissionsMods',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'traps_monster_varieties',
      through: 'StrDexMissionsTrapsMonsterVarieties',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrDexMissions.dat';
  return model;
};
