module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopItemShopCategory',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'shop_item_shop_categories',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopItem, {
      foreignKey: 'shop_item_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopCategory, {
      foreignKey: 'shop_category_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
