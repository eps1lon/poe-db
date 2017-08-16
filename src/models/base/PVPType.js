module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PVPType',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'p_v_p_types',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'PVPTypes.dat';
  return model;
};
