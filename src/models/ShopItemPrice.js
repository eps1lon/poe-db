module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopItemPrice',
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
              attribute: 'shop_item_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'shop_region_key',
            },
          ],
        },
      ],
      tableName: 'shop_item_prices',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopItem, {
      foreignKey: {
        name: 'shop_item_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ShopItem.hasMany(model, {
      foreignKey: {
        name: 'shop_item_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ShopRegion, {
      foreignKey: {
        name: 'shop_region_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ShopRegion.hasMany(model, {
      foreignKey: {
        name: 'shop_region_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'ShopItemPrice.dat';
  return model;
};
