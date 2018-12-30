module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MicrotransactionRarityDisplay',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      rarity: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      image_file: {
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
      tableName: 'microtransaction_rarity_displays',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MicrotransactionRarityDisplay.dat';
  return model;
};
