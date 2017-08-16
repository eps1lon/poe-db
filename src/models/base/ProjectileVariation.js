module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ProjectileVariation',
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
        allowNull: false,
        $col_order: 0,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'projectile_key',
            },
          ],
          name: 'index_projectile_key',
        },
      ],
      tableName: 'projectile_variations',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Projectile, {
      as: 'projectile',
      $inverse: 'projectile_variations',
      $col_order: 1,
      foreignKey: {
        name: 'projectile_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ProjectileVariations.dat';
  return model;
};
