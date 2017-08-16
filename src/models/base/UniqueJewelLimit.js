module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UniqueJewelLimit',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unique_items_key: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      limit: {
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
      indexes: [],
      tableName: 'unique_jewel_limits',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'UniqueJewelLimits.dat';
  return model;
};
