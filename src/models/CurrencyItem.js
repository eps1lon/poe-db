module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CurrencyItem',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      stacks: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      currency_use_type: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      action: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      directions: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      cosmetic_type_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      unknown17: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      currency_tab_stack_size: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      abbreviation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
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
              attribute: 'base_item_types_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'full_stack_base_item_types_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'possession_achievement_items_key',
            },
          ],
        },
      ],
      tableName: 'currency_items',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemType.hasMany(model, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.BaseItemType, {
      foreignKey: {
        name: 'full_stack_base_item_types_key',
        $col_order: 5,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemType.hasMany(model, {
      foreignKey: {
        name: 'full_stack_base_item_types_key',
        $col_order: 5,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'possession_achievement_items_key',
        $col_order: 10,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItem.hasMany(model, {
      foreignKey: {
        name: 'possession_achievement_items_key',
        $col_order: 10,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'usage_achievement_items',
      through: 'CurrencyItemUsageAchievementItems',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CurrencyItems.dat';
  return model;
};
