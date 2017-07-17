module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WarbandsPackMonsterTier2Monstervariety',
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
      tableName: 'warbands_pack_monster_tier2_monstervarieties',
    },
  );

  model.associate = models => {
    model.belongsTo(models.WarbandsPackMonster, {
      foreignKey: 'warbands_pack_monster_row',
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
