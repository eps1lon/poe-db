module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MicrotransactionCharacterPortraitVariation',
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
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'microtransaction_character_portrait_variations',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MicrotransactionCharacterPortraitVariations.dat';
  return model;
};
