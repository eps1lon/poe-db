module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'OldMapStashTabLayout',
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
      tableName: 'old_map_stash_tab_layouts',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'OldMapStashTabLayout.dat';
  return model;
};
