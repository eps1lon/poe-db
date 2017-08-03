module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ItemTheme',
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
        allowNull: false,
        $col_order: 0,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'item_themes',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'ItemThemes.dat';
  return model;
};
