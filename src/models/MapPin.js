module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapPin',
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
      position_x: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      position_y: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      notes: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      act: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      index3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      unknown3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 16,
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
              attribute: 'normal_waypoint__world_areas_key',
            },
          ],
          name: 'index_normal_waypoint__world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'cruel_waypoint__world_areas_key',
            },
          ],
          name: 'index_cruel_waypoint__world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'merciless_waypoint__world_areas_key',
            },
          ],
          name: 'index_merciless_waypoint__world_areas_key',
        },
      ],
      tableName: 'map_pins',
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'normal_waypoint__world_areas_key',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'cruel_waypoint__world_areas_key',
        $col_order: 11,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'merciless_waypoint__world_areas_key',
        $col_order: 12,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'normal__world_areas',
      through: {
        model: models.MapPinHabtmNormalWorldarea,
        unique: false,
      },
      foreignKey: 'map_pin_row',
      otherKey: 'world_area_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'merciless__world_areas',
      through: {
        model: models.MapPinHabtmMercilessWorldarea,
        unique: false,
      },
      foreignKey: 'map_pin_row',
      otherKey: 'world_area_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'cruel__world_areas',
      through: {
        model: models.MapPinHabtmCruelWorldarea,
        unique: false,
      },
      foreignKey: 'map_pin_row',
      otherKey: 'world_area_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'world_areas',
      through: {
        model: models.MapPinHabtmWorldArea,
        unique: false,
      },
      foreignKey: 'map_pin_row',
      otherKey: 'world_area_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapPins.dat';
  return model;
};
