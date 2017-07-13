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
      through: 'NormalWorldAreas',
      as: 'normal_world_areas',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      through: 'MercilessWorldAreas',
      as: 'merciless_world_areas',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      through: 'CruelWorldAreas',
      as: 'cruel_world_areas',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      through: 'MapPinsWorldAreas',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
