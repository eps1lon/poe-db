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
      data0_keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      data0_values: {
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
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Tags, {
      as: 'sold_item_tags',
      through: 'SoldItemTags',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCShop.dat';
  return model;
};
