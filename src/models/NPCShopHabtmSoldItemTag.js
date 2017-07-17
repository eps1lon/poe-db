module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCShopHabtmSoldItemTag',
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
      tableName: 'n_p_c_shop_habtm_sold_item_tags',
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCShop, {
      foreignKey: 'n_p_c_shop_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Tag, {
      foreignKey: 'tag_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
