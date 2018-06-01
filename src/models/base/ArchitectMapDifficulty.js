module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ArchitectMapDifficulty',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      area_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      stat1_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
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
              attribute: 'stats_key1',
            },
          ],
          name: 'index_stats_key1',
        },
      ],
      tableName: 'architect_map_difficulties',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Stat, {
      as: 'stats1',
      $inverse: 'architect_map_difficulties1',
      $col_order: 2,
      foreignKey: {
        name: 'stats_key1',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ArchitectMapDifficulty.dat';
  return model;
};
