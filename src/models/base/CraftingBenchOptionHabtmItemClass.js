module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CraftingBenchOptionHabtmItemClass',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['crafting_bench_option_row', 'item_class_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'crafting_bench_option_habtm_item_classes',
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
