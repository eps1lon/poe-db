module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ItemClass',
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
        allowNull: true,
        $col_order: 0,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      category: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
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
              attribute: 'elder_tags_key',
            },
          ],
          name: 'index_elder_tags_key',
        },
        {
          fields: [
            {
              attribute: 'shaper_tags_key',
            },
          ],
          name: 'index_shaper_tags_key',
        },
      ],
      tableName: 'item_classes',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Tag, {
      as: 'elder_tag',
      $inverse: 'item_classes',
      $col_order: 4,
      foreignKey: {
        name: 'elder_tags_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Tag, {
      as: 'shaper_tag',
      $inverse: 'item_classes',
      $col_order: 5,
      foreignKey: {
        name: 'shaper_tags_key',
        $type: 'ulong',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ItemClasses.dat';
  return model;
};
