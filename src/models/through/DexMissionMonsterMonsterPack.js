module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexMissionMonsterMonsterPack',
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
      tableName: 'dex_mission_monster_monster_packs',
    },
  );

  model.associate = models => {
    model.belongsTo(models.DexMissionMonster, {
      foreignKey: 'dex_mission_monster_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterPack, {
      foreignKey: 'monster_pack_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
