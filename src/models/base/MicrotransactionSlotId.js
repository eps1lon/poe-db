module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MicrotransactionSlotId',
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
      tableName: 'microtransaction_slot_ids',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MicrotransactionSlotId.dat';
  return model;
};
