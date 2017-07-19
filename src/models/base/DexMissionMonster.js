module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexMissionMonster',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
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
              attribute: 'boss__monster_varieties_key',
            },
          ],
          name: 'index_boss__monster_varieties_key',
        },
      ],
      tableName: 'dex_mission_monsters',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'boss__monster_variety',
      $inverse: 'dex_mission_monsters',
      foreignKey: {
        name: 'boss__monster_varieties_key',
        $col_order: 6,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterPack, {
      as: 'monster_packs',
      through: {
        model: models.DexMissionMonsterHabtmMonsterPack,
        unique: false,
      },
      foreignKey: 'dex_mission_monster_row',
      otherKey: 'monster_pack_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'monster_varieties',
      through: {
        model: models.DexMissionMonsterHabtmMonsterVariety,
        unique: false,
      },
      foreignKey: 'dex_mission_monster_row',
      otherKey: 'monster_variety_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DexMissionMonsters.dat';
  return model;
};
