module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapFragmentFamily',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'map_fragment_families',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MapFragmentFamilies.dat';
  return model;
};
