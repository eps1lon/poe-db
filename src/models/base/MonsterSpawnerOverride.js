module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterSpawnerOverride',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
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
              attribute: 'base_monster_varieties_key',
            },
          ],
          name: 'index_base_monster_varieties_key',
        },
        {
          fields: [
            {
              attribute: 'override_monster_varieties_key',
            },
          ],
          name: 'index_override_monster_varieties_key',
        },
      ],
      tableName: 'monster_spawner_overrides',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'base_monster_variety',
      $inverse: 'monster_spawner_overrides',
      $col_order: 1,
      foreignKey: {
        name: 'base_monster_varieties_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'override_monster_variety',
      $inverse: 'monster_spawner_overrides',
      $col_order: 2,
      foreignKey: {
        name: 'override_monster_varieties_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterSpawnerOverrides.dat';
  return model;
};
