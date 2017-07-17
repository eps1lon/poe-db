module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CraftingBenchOptionCostBaseitemtype',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'crafting_bench_option_cost_baseitemtypes',
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
