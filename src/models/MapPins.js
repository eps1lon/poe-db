module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapPins',
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
          fields: ['normal_waypoint_world_areas_key'],
        },
        {
          fields: ['cruel_waypoint_world_areas_key'],
        },
        {
          fields: ['merciless_waypoint_world_areas_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldAreas, {
      foreignKey: {
        name: 'normal_waypoint_world_areas_key',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.WorldAreas.hasMany(model, {
      foreignKey: {
        name: 'normal_waypoint_world_areas_key',
        $col_order: 3,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.WorldAreas, {
      foreignKey: {
        name: 'cruel_waypoint_world_areas_key',
        $col_order: 11,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.WorldAreas.hasMany(model, {
      foreignKey: {
        name: 'cruel_waypoint_world_areas_key',
        $col_order: 11,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.WorldAreas, {
      foreignKey: {
        name: 'merciless_waypoint_world_areas_key',
        $col_order: 12,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.WorldAreas.hasMany(model, {
      foreignKey: {
        name: 'merciless_waypoint_world_areas_key',
        $col_order: 12,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'normal_world_areas',
      through: 'MapPinsNormalWorldAreas',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'merciless_world_areas',
      through: 'MapPinsMercilessWorldAreas',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'cruel_world_areas',
      through: 'MapPinsCruelWorldAreas',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'world_areas',
      through: 'MapPinsWorldAreas',
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapPins.dat';
  return model;
};
