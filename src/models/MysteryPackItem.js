module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MysteryPackItem',
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
      tableName: 'mystery_pack_items',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MysteryPackItems.dat';
  return model;
};
