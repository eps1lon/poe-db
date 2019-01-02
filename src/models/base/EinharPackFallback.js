module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EinharPackFallback',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      keys0: {
        type: DataTypes.TEXT,
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
      tableName: 'einhar_pack_fallbacks',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'EinharPackFallback.dat';
  return model;
};
