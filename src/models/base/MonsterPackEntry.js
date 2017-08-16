module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterPackEntry',
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
        allowNull: true,
        $col_order: 0,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
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
              attribute: 'monster_packs_key',
            },
          ],
          name: 'index_monster_packs_key',
        },
        {
          fields: [
            {
              attribute: 'monster_varieties_key',
            },
          ],
          name: 'index_monster_varieties_key',
        },
      ],
      tableName: 'monster_pack_entries',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterPack, {
      as: 'monster_pack',
      $inverse: 'monster_pack_entries',
      $col_order: 1,
      foreignKey: {
        name: 'monster_packs_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'monster_variety',
      $inverse: 'monster_pack_entries',
      $col_order: 4,
      foreignKey: {
        name: 'monster_varieties_key',
        $type: 'long',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterPackEntries.dat';
  return model;
};
