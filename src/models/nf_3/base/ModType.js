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
      _mod_sell_prices_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: '',
        $col_order: 1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'mod_types',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.ModSellPrice, {
      as: 'mod_sell_prices',
      through: {
        model: models.ModTypeHabtmModSellPrice,
        unique: false,
      },
      foreignKey: 'mod_type_row',
      otherKey: 'mod_sell_price_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ModType.dat';
  return model;
};
