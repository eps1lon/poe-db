module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Hideout',
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
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      hideout_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      hideout_image: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      is_enabled: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
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
              attribute: 'small_world_areas_key',
            },
          ],
          name: 'index_small_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'large_world_areas_key',
            },
          ],
          name: 'index_large_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'key0',
            },
          ],
          name: 'index_key0',
        },
      ],
      tableName: 'hideouts',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'small_world_area',
      $inverse: 'hideouts',
      $col_order: 1,
      foreignKey: {
        name: 'small_world_areas_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'large_world_area',
      $inverse: 'hideouts',
      $col_order: 5,
      foreignKey: {
        name: 'large_world_areas_key',
        $type: 'ulong',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.HideoutRarity, {
      as: '0',
      $inverse: 'hideouts0',
      $col_order: 9,
      foreignKey: {
        name: 'key0',
        $type: 'ulong',
        $col_order: 9,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Hideouts.dat';
  return model;
};
