module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopItemHabtmPackageShopitem',
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
          fields: ['source_row', 'target_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'shop_item_habtm_package_shopitems',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopItem, {
      foreignKey: 'source_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShopItem, {
      foreignKey: 'target_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
