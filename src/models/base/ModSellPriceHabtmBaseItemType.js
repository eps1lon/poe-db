module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ModSellPriceHabtmBaseItemType',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['mod_sell_price_row', 'base_item_type_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'mod_sell_price_habtm_base_item_types',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ModSellPrice, {
      foreignKey: 'mod_sell_price_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      foreignKey: 'base_item_type_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
