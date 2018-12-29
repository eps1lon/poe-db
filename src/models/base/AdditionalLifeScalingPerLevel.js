module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AdditionalLifeScalingPerLevel',
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
      tableName: 'additional_life_scaling_per_levels',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'AdditionalLifeScalingPerLevel.dat';
  return model;
};
