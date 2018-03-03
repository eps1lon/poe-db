module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MicrotransactionPeriodicCharacterEffectVariation',
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
      ao_file: {
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
      tableName: 'microtransaction_periodic_character_effect_variations',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MicrotransactionPeriodicCharacterEffectVariations.dat';
  return model;
};
