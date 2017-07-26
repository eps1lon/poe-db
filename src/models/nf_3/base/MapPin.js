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
              attribute: 'normal_waypoint_world_areas_key',
            },
          ],
          name: 'index_normal_waypoint_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'cruel_waypoint_world_areas_key',
            },
          ],
          name: 'index_cruel_waypoint_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'merciless_waypoint_world_areas_key',
            },
          ],
          name: 'index_merciless_waypoint_world_areas_key',
        },
      ],
      tableName: 'map_pins',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'normal_waypoint_world_area',
      $inverse: 'map_pins',
      $col_order: 3,
      foreignKey: {
        name: 'normal_waypoint_world_areas_key',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'cruel_waypoint_world_area',
      $inverse: 'map_pins',
      $col_order: 11,
      foreignKey: {
        name: 'cruel_waypoint_world_areas_key',
        $type: 'ulong',
        $col_order: 11,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'merciless_waypoint_world_area',
      $inverse: 'map_pins',
      $col_order: 12,
      foreignKey: {
        name: 'merciless_waypoint_world_areas_key',
        $type: 'ulong',
        $col_order: 12,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'normal_world_areas',
      through: {
        model: models.MapPinHabtmNormalWorldarea,
        unique: false,
      },
      foreignKey: 'map_pin_row',
      otherKey: 'world_area_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'merciless_world_areas',
      through: {
        model: models.MapPinHabtmMercilessWorldarea,
        unique: false,
      },
      foreignKey: 'map_pin_row',
      otherKey: 'world_area_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'cruel_world_areas',
      through: {
        model: models.MapPinHabtmCruelWorldarea,
        unique: false,
      },
      foreignKey: 'map_pin_row',
      otherKey: 'world_area_row',
      $col_order: 10,
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
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapPins.dat';
  return model;
};
