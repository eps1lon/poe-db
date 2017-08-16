module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopCategory',
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
        allowNull: true,
        $col_order: 0,
      },
      client_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      client_jpg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      website_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      website_jpg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
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
              attribute: 'applied_to_base_item_types_key',
            },
          ],
          name: 'index_applied_to_base_item_types_key',
        },
      ],
      tableName: 'shop_categories',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'applied_to_base_item_type',
      $inverse: 'shop_categories',
      $col_order: 6,
      foreignKey: {
        name: 'applied_to_base_item_types_key',
        $type: 'ulong',
        $col_order: 6,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopCategory.dat';
  return model;
};
