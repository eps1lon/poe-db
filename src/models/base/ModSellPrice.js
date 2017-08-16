module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ModSellPrice',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
      _base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
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
              attribute: 'mod_sell_price_types_key',
            },
          ],
          name: 'index_mod_sell_price_types_key',
        },
      ],
      tableName: 'mod_sell_prices',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ModSellPriceType, {
      as: 'mod_sell_price_type',
      $inverse: 'mod_sell_prices',
      $col_order: 0,
      foreignKey: {
        name: 'mod_sell_price_types_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types',
      through: {
        model: models.ModSellPriceHabtmBaseItemType,
        unique: false,
      },
      foreignKey: 'mod_sell_price_row',
      otherKey: 'base_item_type_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ModSellPrices.dat';
  return model;
};
