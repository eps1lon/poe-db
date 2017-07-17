module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ModSellPrice',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
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
              attribute: 'mod_sell_price_types_key',
            },
          ],
        },
      ],
      tableName: 'mod_sell_prices',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ModSellPriceType, {
      foreignKey: {
        name: 'mod_sell_price_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types',
      through: models.ModSellPriceBaseItemType,
      foreignKey: 'mod_sell_price_row',
      otherKey: 'base_item_type_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ModSellPrices.dat';
  return model;
};
