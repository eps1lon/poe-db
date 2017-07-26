module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CraftingBenchCustomAction',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'crafting_bench_custom_actions',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'CraftingBenchCustomActions.dat';
  return model;
};
