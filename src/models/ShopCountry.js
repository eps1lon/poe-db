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
          fields: ['shop_currency_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopCurrency, {
      foreignKey: {
        name: 'shop_currency_key',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ShopCurrency.hasMany(model, {
      foreignKey: {
        name: 'shop_currency_key',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'ShopCountry.dat';
  return model;
};
