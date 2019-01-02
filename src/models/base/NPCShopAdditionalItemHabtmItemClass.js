module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCShopAdditionalItemHabtmItemClass',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'npc_shop_additional_item_row',
            },
            {
              attribute: 'item_class_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'n_p_c_shop_additional_item__item_classes',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCShopAdditionalItem, {
      foreignKey: 'npc_shop_additional_item_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemClass, {
      foreignKey: 'item_class_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
