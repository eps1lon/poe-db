module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ModGenerationType',
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
      tableName: 'mod_generation_types',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'ModGenerationType.dat';
  return model;
};
