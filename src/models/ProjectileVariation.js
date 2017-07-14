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
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'projectile_key',
            },
          ],
        },
      ],
      tableName: 'projectile_variations',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Projectile, {
      foreignKey: {
        name: 'projectile_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Projectile.hasMany(model, {
      foreignKey: {
        name: 'projectile_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'ProjectileVariations.dat';
  return model;
};
