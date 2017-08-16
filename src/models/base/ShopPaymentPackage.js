module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShopPaymentPackage',
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
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      coins: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      available_flag: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      contains_beta_key: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      background_image: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      unknown5: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      physical_item_points: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
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
              attribute: 'upgrade_shop_payment_package_key',
            },
          ],
          name: 'index_upgrade_shop_payment_package_key',
        },
      ],
      tableName: 'shop_payment_packages',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopPaymentPackage, {
      as: 'upgrade_shop_payment_package',
      $inverse: 'shop_payment_packages',
      $col_order: 13,
      foreignKey: {
        name: 'upgrade_shop_payment_package_key',
        $type: 'int',
        $col_order: 13,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ShopPaymentPackage.dat';
  return model;
};
