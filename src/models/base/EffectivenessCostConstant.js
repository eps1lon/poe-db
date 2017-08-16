module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EffectivenessCostConstant',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'effectiveness_cost_constants',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'EffectivenessCostConstants.dat';
  return model;
};
