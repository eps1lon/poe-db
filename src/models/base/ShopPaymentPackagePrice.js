module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopPaymentPackagePrice',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      price: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
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
              attribute: 'shop_payment_package_key',
            },
          ],
          name: 'index_shop_payment_package_key',
        },
        {
          fields: [
            {
              attribute: 'shop_country_key',
            },
          ],
          name: 'index_shop_country_key',
        },
      ],
      tableName: 'shop_payment_package_prices',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopPaymentPackage, {
      as: 'shop_payment_package',
      $inverse: 'shop_payment_package_prices',
      $col_order: 0,
      foreignKey: {
        name: 'shop_payment_package_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopCountry, {
      as: 'shop_country',
      $inverse: 'shop_payment_package_prices',
      $col_order: 1,
      foreignKey: {
        name: 'shop_country_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopPaymentPackagePrice.dat';
  return model;
};
