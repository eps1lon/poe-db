module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WarbandsPackMonsterHabtmTier3Monstervariety',
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
      indexes: [
        {
          fields: ['warbands_pack_monster_row', 'monster_variety_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'warbands_pack_monster_habtm_tier3_monstervarieties',
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
