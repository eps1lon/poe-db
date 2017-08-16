module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EndlessLedgeChest',
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
      socket_colour: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      _base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
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
              attribute: 'world_areas_key',
            },
          ],
          name: 'index_world_areas_key',
        },
      ],
      tableName: 'endless_ledge_chests',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'world_area',
      $inverse: 'endless_ledge_chests',
      $col_order: 1,
      foreignKey: {
        name: 'world_areas_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types',
      through: {
        model: models.EndlessLedgeChestHabtmBaseItemType,
        unique: false,
      },
      foreignKey: 'endless_ledge_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'EndlessLedgeChests.dat';
  return model;
};
