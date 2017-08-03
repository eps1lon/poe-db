module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrIntMissionMonsterWaveHabtmUniqueMonstervariety',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['str_int_mission_monster_wave_row', 'monster_variety_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'str_int_mission_monster_wave_habtm_unique_monstervarieties',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.StrIntMissionMonsterWave, {
      foreignKey: 'str_int_mission_monster_wave_row',
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
