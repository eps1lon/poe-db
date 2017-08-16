module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CraftingBenchOptionHabtmCostBaseitemtype',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
      },
      value: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: 4,
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
              attribute: 'crafting_bench_option_row',
            },
            {
              attribute: 'base_item_type_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'crafting_bench_option_habtm_cost_baseitemtypes',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.CraftingBenchOption, {
      foreignKey: 'crafting_bench_option_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      foreignKey: 'base_item_type_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
