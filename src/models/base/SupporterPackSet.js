module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SupporterPackSet',
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
      format_title: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      background: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      time0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      time1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
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
              attribute: 'shop_package_platform_key',
            },
          ],
          name: 'index_shop_package_platform_key',
        },
      ],
      tableName: 'supporter_pack_sets',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShopPackagePlatform, {
      as: 'shop_package_platform',
      $inverse: 'supporter_pack_sets',
      $col_order: 5,
      foreignKey: {
        name: 'shop_package_platform_key',
        $type: 'ref|list|int',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'SupporterPackSets.dat';
  return model;
};
