module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ArchitectLifeScalingPerLevel',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      more_life: {
        type: DataTypes.INTEGER,
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
      tableName: 'architect_life_scaling_per_levels',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'ArchitectLifeScalingPerLevel.dat';
  return model;
};
