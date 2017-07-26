module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexMissionMonsterHabtmMonsterVariety',
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
          fields: ['dex_mission_monster_row', 'monster_variety_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'dex_mission_monster_habtm_monster_varieties',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.DexMissionMonster, {
      foreignKey: 'dex_mission_monster_row',
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
