module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WeaponClass',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'weapon_classes',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'WeaponClasses.dat';
  return model;
};
