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
          fields: ['shop_payment_package_key'],
        },
        {
          fields: ['shop_item_key'],
        },
        {
          fields: ['shop_token_key'],
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ShopPaymentPackage.hasMany(model, {
      foreignKey: {
        name: 'shop_payment_package_key',
        $col_order: 1,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ShopItem, {
      foreignKey: {
        name: 'shop_item_key',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ShopItem.hasMany(model, {
      foreignKey: {
        name: 'shop_item_key',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ShopToken, {
      foreignKey: {
        name: 'shop_token_key',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ShopToken.hasMany(model, {
      foreignKey: {
        name: 'shop_token_key',
        $col_order: 4,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'ShopPaymentPackageItems.dat';
  return model;
};
