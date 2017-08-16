module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PreloadGroup',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'preload_groups',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'PreloadGroups.dat';
  return model;
};
