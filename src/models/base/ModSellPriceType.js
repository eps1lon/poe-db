module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ModSellPriceType',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'mod_sell_price_types',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'ModSellPriceTypes.dat';
  return model;
};
