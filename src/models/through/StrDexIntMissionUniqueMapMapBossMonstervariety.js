module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexIntMissionUniqueMapMapBossMonstervariety',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'str_dex_int_mission_unique_map_map_boss_monstervarieties',
    },
  );

  model.associate = models => {
    model.belongsTo(models.StrDexIntMissionUniqueMap, {
      foreignKey: 'str_dex_int_mission_unique_map_row',
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
