module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BindableVirtualKey',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      key_code: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'bindable_virtual_keys',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'BindableVirtualKeys.dat';
  return model;
};
