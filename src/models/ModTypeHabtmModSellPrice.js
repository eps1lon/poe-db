module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ModTypeHabtmModSellPrice',
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
      tableName: 'mod_type_habtm_mod_sell_prices',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ModType, {
      foreignKey: 'mod_type_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ModSellPrice, {
      foreignKey: 'mod_sell_price_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
