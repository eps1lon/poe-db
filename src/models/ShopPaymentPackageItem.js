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
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopPaymentPackage, {
      foreignKey: {
        name: 'shop_payment_package_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopItem, {
      foreignKey: {
        name: 'shop_item_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopToken, {
      foreignKey: {
        name: 'shop_token_key',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopPaymentPackageItems.dat';
  return model;
};
