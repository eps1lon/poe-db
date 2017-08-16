module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopItem',
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
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      small_art_jpg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      youtube_video: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown11: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      large_art_jpg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      description2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      daily_deal_art_jpg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      unknown15: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      is_tencent_item: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      is_tradeable: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
      _package_shop_item_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 3,
      },
      _shop_category_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'shop_items',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.ShopItem, {
      as: 'package_shop_item',
      through: {
        model: models.ShopItemHabtmPackageShopitem,
        unique: false,
      },
      foreignKey: 'source_row',
      otherKey: 'target_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ShopCategory, {
      as: 'shop_category',
      through: {
        model: models.ShopItemHabtmShopCategory,
        unique: false,
      },
      foreignKey: 'shop_item_row',
      otherKey: 'shop_category_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopItem.dat';
  return model;
};
