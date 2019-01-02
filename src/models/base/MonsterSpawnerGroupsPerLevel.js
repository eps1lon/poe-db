module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterSpawnerGroupsPerLevel',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
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
              attribute: 'monster_spawner_groups_key',
            },
          ],
          name: 'index_monster_spawner_groups_key',
        },
      ],
      tableName: 'monster_spawner_groups_per_levels',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterSpawnerGroup, {
      as: 'monster_spawner_group',
      $inverse: 'monster_spawner_groups_per_levels',
      $col_order: 0,
      foreignKey: {
        name: 'monster_spawner_groups_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterSpawnerGroupsPerLevel.dat';
  return model;
};
