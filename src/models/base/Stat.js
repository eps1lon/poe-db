module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Stat',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
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
        $col_order: 1,
      },
      is_local: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      is_weapon_local: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      flag5: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      flag6: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      flag7: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      unknown0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
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
              attribute: 'main_hand_alias_stats_key',
            },
          ],
          name: 'index_main_hand_alias_stats_key',
        },
        {
          fields: [
            {
              attribute: 'off_hand_alias_stats_key',
            },
          ],
          name: 'index_off_hand_alias_stats_key',
        },
      ],
      tableName: 'stats',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Stat, {
      as: 'main_hand_alias_stat',
      $inverse: 'stats',
      $col_order: 9,
      foreignKey: {
        name: 'main_hand_alias_stats_key',
        $type: 'int',
        $col_order: 9,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      as: 'off_hand_alias_stat',
      $inverse: 'stats',
      $col_order: 10,
      foreignKey: {
        name: 'off_hand_alias_stats_key',
        $type: 'int',
        $col_order: 10,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Stats.dat';
  return model;
};
