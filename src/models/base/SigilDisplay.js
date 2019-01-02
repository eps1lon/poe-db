module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SigilDisplay',
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
      dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      inactive_art_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      active_art_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      frame_art_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
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
              attribute: 'active_stats_key',
            },
          ],
          name: 'index_active_stats_key',
        },
        {
          fields: [
            {
              attribute: 'inactive_stats_key',
            },
          ],
          name: 'index_inactive_stats_key',
        },
      ],
      tableName: 'sigil_displays',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Stat, {
      as: 'active_stat',
      $inverse: 'sigil_displays',
      $col_order: 1,
      foreignKey: {
        name: 'active_stats_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      as: 'inactive_stat',
      $inverse: 'sigil_displays',
      $col_order: 2,
      foreignKey: {
        name: 'inactive_stats_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'SigilDisplay.dat';
  return model;
};
