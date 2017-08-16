module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CooldownBypassType',
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
      tableName: 'cooldown_bypass_types',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'CooldownBypassTypes.dat';
  return model;
};
