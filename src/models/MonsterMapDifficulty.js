module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterMapDifficulty',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      map_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      stat1_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      stat2_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      stat3_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      stat4_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
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
              attribute: 'stats_key1',
            },
          ],
          name: 'index_stats_key1',
        },
        {
          fields: [
            {
              attribute: 'stats_key2',
            },
          ],
          name: 'index_stats_key2',
        },
        {
          fields: [
            {
              attribute: 'stats_key3',
            },
          ],
          name: 'index_stats_key3',
        },
        {
          fields: [
            {
              attribute: 'stats_key4',
            },
          ],
          name: 'index_stats_key4',
        },
      ],
      tableName: 'monster_map_difficulties',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Stat, {
      foreignKey: {
        name: 'stats_key1',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      foreignKey: {
        name: 'stats_key2',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      foreignKey: {
        name: 'stats_key3',
        $col_order: 5,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      foreignKey: {
        name: 'stats_key4',
        $col_order: 7,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterMapDifficulty.dat';
  return model;
};
