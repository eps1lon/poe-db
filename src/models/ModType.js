module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ModType',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'mod_types',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.ModSellPrice, {
      as: 'mod_sell_prices',
      through: 'ModTypeModSellPrice',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ModType.dat';
  return model;
};
