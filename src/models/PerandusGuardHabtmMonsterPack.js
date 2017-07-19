module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PerandusGuardHabtmMonsterPack',
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
          fields: ['perandus_guard_row', 'monster_pack_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'perandus_guard_habtm_monster_packs',
    },
  );

  model.associate = models => {
    model.belongsTo(models.PerandusGuard, {
      foreignKey: 'perandus_guard_row',
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
