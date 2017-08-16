module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopPaymentPackageItem',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      unknown0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
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
              attribute: 'shop_item_key',
            },
          ],
          name: 'index_shop_item_key',
        },
        {
          fields: [
            {
              attribute: 'shop_token_key',
            },
          ],
          name: 'index_shop_token_key',
        },
      ],
      tableName: 'shop_payment_package_items',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopPaymentPackage, {
      as: 'shop_payment_package',
      $inverse: 'shop_payment_package_items',
      $col_order: 1,
      foreignKey: {
        name: 'shop_payment_package_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopItem, {
      as: 'shop_item',
      $inverse: 'shop_payment_package_items',
      $col_order: 2,
      foreignKey: {
        name: 'shop_item_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopToken, {
      as: 'shop_token',
      $inverse: 'shop_payment_package_items',
      $col_order: 4,
      foreignKey: {
        name: 'shop_token_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopPaymentPackageItems.dat';
  return model;
};
