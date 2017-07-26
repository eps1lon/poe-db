module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PreloadPriority',
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
      tableName: 'preload_priorities',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'PreloadPriorities.dat';
  return model;
};
