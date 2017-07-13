const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthAreas',
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
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.WorldAreas, {
      through: 'NormalWorldAreas',
      as: 'normal_world_areas',
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
      through: 'MercilessWorldAreas',
      as: 'merciless_world_areas',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      through: 'EndgameWorldAreas',
      as: 'endgame_world_areas',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
