module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapPurchaseCost',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      _normal_purchase_base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
      _magic_purchase_base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 3,
      },
      _rare_purchase_base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
      },
      _unique_purchase_base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 7,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'map_purchase_costs',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.BaseItemType, {
      as: 'normal_purchase_base_item_types',
      through: {
        model: models.MapPurchaseCostHabtmNormalPurchaseBaseitemtype,
        unique: false,
      },
      foreignKey: 'map_purchase_cost_row',
      otherKey: 'base_item_type_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'magic_purchase_base_item_types',
      through: {
        model: models.MapPurchaseCostHabtmMagicPurchaseBaseitemtype,
        unique: false,
      },
      foreignKey: 'map_purchase_cost_row',
      otherKey: 'base_item_type_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'rare_purchase_base_item_types',
      through: {
        model: models.MapPurchaseCostHabtmRarePurchaseBaseitemtype,
        unique: false,
      },
      foreignKey: 'map_purchase_cost_row',
      otherKey: 'base_item_type_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'unique_purchase_base_item_types',
      through: {
        model: models.MapPurchaseCostHabtmUniquePurchaseBaseitemtype,
        unique: false,
      },
      foreignKey: 'map_purchase_cost_row',
      otherKey: 'base_item_type_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapPurchaseCosts.dat';
  return model;
};
