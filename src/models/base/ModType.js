module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ModType',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      _mod_sell_price_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
      _tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'mod_types',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.ModSellPriceType, {
      as: 'mod_sell_price_types',
      through: {
        model: models.ModTypeHabtmModSellPriceType,
        unique: false,
      },
      foreignKey: 'mod_type_row',
      otherKey: 'mod_sell_price_type_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'tags',
      through: {
        model: models.ModTypeHabtmTag,
        unique: false,
      },
      foreignKey: 'mod_type_row',
      otherKey: 'tag_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ModType.dat';
  return model;
};
