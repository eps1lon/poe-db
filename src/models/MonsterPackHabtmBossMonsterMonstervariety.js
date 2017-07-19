module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterPackHabtmBossMonsterMonstervariety',
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
          fields: ['monster_pack_row', 'monster_variety_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'monster_pack_habtm_boss_monster_monstervarieties',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterPack, {
      foreignKey: 'monster_pack_row',
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
