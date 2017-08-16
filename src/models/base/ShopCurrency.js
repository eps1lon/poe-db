module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopCurrency',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      currency_code: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      currency_sign: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'shop_currencies',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'ShopCurrency.dat';
  return model;
};
