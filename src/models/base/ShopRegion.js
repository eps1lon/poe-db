module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopRegion',
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
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'shop_regions',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'ShopRegion.dat';
  return model;
};
