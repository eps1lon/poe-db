module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterMapBossDifficulty',
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
          fields: ['stats_key1'],
        },
        {
          fields: ['stats_key2'],
        },
        {
          fields: ['stats_key3'],
        },
        {
          fields: ['stats_key4'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.Stat, {
      foreignKey: {
        name: 'stats_key1',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Stat.hasMany(model, {
      foreignKey: {
        name: 'stats_key1',
        $col_order: 3,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Stat, {
      foreignKey: {
        name: 'stats_key2',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Stat.hasMany(model, {
      foreignKey: {
        name: 'stats_key2',
        $col_order: 4,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Stat, {
      foreignKey: {
        name: 'stats_key3',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Stat.hasMany(model, {
      foreignKey: {
        name: 'stats_key3',
        $col_order: 5,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Stat, {
      foreignKey: {
        name: 'stats_key4',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Stat.hasMany(model, {
      foreignKey: {
        name: 'stats_key4',
        $col_order: 7,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'MonsterMapBossDifficulty.dat';
  return model;
};
