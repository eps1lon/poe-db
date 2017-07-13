module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ModSellPrices',
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
    },
  );

  model.associate = models => {
    model.belongsTo(models.ModSellPriceTypes, {
      foreignKey: {
        name: 'mod_sell_price_types_key',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ModSellPriceTypes.hasMany(model, {
      foreignKey: {
        name: 'mod_sell_price_types_key',
        $col_order: 0,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types',
      through: 'ModSellPricesBaseItemTypes',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ModSellPrices.dat';
  return model;
};
