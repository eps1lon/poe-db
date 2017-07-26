module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopCountry',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      country_two_letter_code: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      country: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
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
              attribute: 'shop_currency_key',
            },
          ],
          name: 'index_shop_currency_key',
        },
      ],
      tableName: 'shop_countries',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopCurrency, {
      as: 'shop_currency',
      $inverse: 'shop_countries',
      $col_order: 2,
      foreignKey: {
        name: 'shop_currency_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopCountry.dat';
  return model;
};
