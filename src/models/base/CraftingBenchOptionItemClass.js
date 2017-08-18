module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CraftingBenchOptionItemClass',
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
              attribute: 'item_class_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'crafting_bench_option__item_classes',
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
    model.belongsTo(models.ItemClass, {
      foreignKey: 'item_class_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
