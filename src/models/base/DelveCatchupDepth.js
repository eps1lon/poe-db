module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DelveCatchupDepth',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'delve_catchup_depths',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'DelveCatchupDepths.dat';
  return model;
};
