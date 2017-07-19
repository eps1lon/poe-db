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
          name: 'index_shop_item_key',
        },
        {
          fields: [
            {
              attribute: 'shop_region_key',
            },
          ],
          name: 'index_shop_region_key',
        },
      ],
      tableName: 'shop_item_prices',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopItem, {
      as: 'shop_item',
      foreignKey: {
        name: 'shop_item_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopRegion, {
      as: 'shop_region',
      foreignKey: {
        name: 'shop_region_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopItemPrice.dat';
  return model;
};
