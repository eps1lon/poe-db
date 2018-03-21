module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterProjectileAttack',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
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
      tableName: 'monster_projectile_attacks',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MonsterProjectileAttack.dat';
  return model;
};
