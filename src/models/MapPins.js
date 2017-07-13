const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapPins',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      position_x: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      position_y: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      notes: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      act: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      index3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldAreas, {
      foreignKey: 'normal_waypoint_world_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldAreas, {
      foreignKey: 'cruel_waypoint_world_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldAreas, {
      foreignKey: 'merciless_waypoint_world_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'normal_world_areas',
      through: 'NormalWorldAreas',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'merciless_world_areas',
      through: 'MercilessWorldAreas',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'cruel_world_areas',
      through: 'CruelWorldAreas',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'world_areas',
      through: 'MapPinsWorldAreas',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapPins.dat';
  return model;
};
