const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopCountry',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      country_two_letter_code: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      country: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopCurrency, {
      foreignKey: 'shop_currency_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
