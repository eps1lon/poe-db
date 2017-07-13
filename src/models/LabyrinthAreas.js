module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthAreas',
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
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.WorldAreas, {
      as: 'normal_world_areas',
      through: 'LabyrinthAreasNormalWorldAreas',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'cruel_world_areas',
      through: 'LabyrinthAreasCruelWorldAreas',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'merciless_world_areas',
      through: 'LabyrinthAreasMercilessWorldAreas',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldAreas, {
      as: 'endgame_world_areas',
      through: 'LabyrinthAreasEndgameWorldAreas',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthAreas.dat';
  return model;
};
