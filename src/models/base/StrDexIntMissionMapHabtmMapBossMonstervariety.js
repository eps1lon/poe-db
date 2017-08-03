module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexIntMissionMapHabtmMapBossMonstervariety',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['str_dex_int_mission_map_row', 'monster_variety_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'str_dex_int_mission_map_habtm_map_boss_monstervarieties',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.StrDexIntMissionMap, {
      foreignKey: 'str_dex_int_mission_map_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      foreignKey: 'monster_variety_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
