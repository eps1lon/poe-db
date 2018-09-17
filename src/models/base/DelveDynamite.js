module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DelveDynamite',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown9: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      unknown10: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      unknown12: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown13: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      unknown16: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
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
              attribute: 'flare_misc_objects_key',
            },
          ],
          name: 'index_flare_misc_objects_key',
        },
        {
          fields: [
            {
              attribute: 'dynamite_misc_objects_key',
            },
          ],
          name: 'index_dynamite_misc_objects_key',
        },
        {
          fields: [
            {
              attribute: 'misc_animated_key',
            },
          ],
          name: 'index_misc_animated_key',
        },
      ],
      tableName: 'delve_dynamites',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MiscObject, {
      as: 'flare_misc_object',
      $inverse: 'delve_dynamites',
      $col_order: 1,
      foreignKey: {
        name: 'flare_misc_objects_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MiscObject, {
      as: 'dynamite_misc_object',
      $inverse: 'delve_dynamites',
      $col_order: 3,
      foreignKey: {
        name: 'dynamite_misc_objects_key',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MiscAnimated, {
      as: 'misc_animated',
      $inverse: 'delve_dynamites',
      $col_order: 11,
      foreignKey: {
        name: 'misc_animated_key',
        $type: 'ulong',
        $col_order: 11,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DelveDynamite.dat';
  return model;
};
