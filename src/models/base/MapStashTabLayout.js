module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapStashTabLayout',
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
      tableName: 'map_stash_tab_layouts',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MapStashTabLayout.dat';
  return model;
};
