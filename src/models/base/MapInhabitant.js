module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapInhabitant',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      _monster_packs_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'stats_key',
            },
          ],
          name: 'index_stats_key',
        },
      ],
      tableName: 'map_inhabitants',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Stat, {
      as: 'stat',
      $inverse: 'map_inhabitants',
      $col_order: 0,
      foreignKey: {
        name: 'stats_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterPack, {
      as: 'monster_packs',
      through: {
        model: models.MapInhabitantHabtmMonsterPack,
        unique: false,
      },
      foreignKey: 'map_inhabitant_row',
      otherKey: 'monster_pack_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapInhabitants.dat';
  return model;
};
