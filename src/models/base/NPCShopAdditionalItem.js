module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCShopAdditionalItem',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      _item_classes_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'npc_shop_key',
            },
          ],
          name: 'index_npc_shop_key',
        },
      ],
      tableName: 'n_p_c_shop_additional_items',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCShop, {
      as: 'npc_shop',
      $inverse: 'npc_shop_additional_items',
      $col_order: 0,
      foreignKey: {
        name: 'npc_shop_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemClass, {
      as: 'item_classes',
      through: {
        model: models.NPCShopAdditionalItemHabtmItemClass,
        unique: false,
      },
      foreignKey: 'npc_shop_additional_item_row',
      otherKey: 'item_class_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCShopAdditionalItems.dat';
  return model;
};
