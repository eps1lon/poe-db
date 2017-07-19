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
      engine: 'MyISAM',
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
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopPaymentPackage, {
      as: 'shop_payment_package',
      foreignKey: {
        name: 'shop_payment_package_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopCountry, {
      as: 'shop_country',
      foreignKey: {
        name: 'shop_country_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopPaymentPackagePrice.dat';
  return model;
};
