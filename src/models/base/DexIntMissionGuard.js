module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexIntMissionGuard',
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
              attribute: 'monster_packs_key',
            },
          ],
          name: 'index_monster_packs_key',
        },
      ],
      tableName: 'dex_int_mission_guards',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterPack, {
      as: 'monster_pack',
      $inverse: 'dex_int_mission_guards',
      foreignKey: {
        name: 'monster_packs_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DexIntMissionGuards.dat';
  return model;
};
