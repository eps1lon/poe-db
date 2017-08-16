module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PerandusGuardHabtmMonsterPack',
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
              attribute: 'perandus_guard_row',
            },
            {
              attribute: 'monster_pack_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'perandus_guard_habtm_monster_packs',
      underscored: true,
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
