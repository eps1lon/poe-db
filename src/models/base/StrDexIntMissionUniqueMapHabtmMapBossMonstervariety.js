module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexIntMissionUniqueMapHabtmMapBossMonstervariety',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
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
              attribute: 'str_dex_int_mission_unique_map_row',
            },
            {
              attribute: 'monster_variety_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'str_dex_int_mission_unique_map__map_boss__monster_varieties',
      underscored: true,
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
