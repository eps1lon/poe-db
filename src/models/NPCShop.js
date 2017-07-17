module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCShop',
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
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      data0__keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      data0__values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      unknown10: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown11: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'n_p_c_shops',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Tag, {
      as: 'sold_item__tags',
      through: models.NPCShopHabtmSoldItemTag,
      foreignKey: 'n_p_c_shop_row',
      otherKey: 'tag_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCShop.dat';
  return model;
};
