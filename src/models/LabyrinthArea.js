module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthArea',
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
      indexes: [],
      tableName: 'labyrinth_areas',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.WorldArea, {
      as: 'normal__world_areas',
      through: models.LabyrinthAreaNormalWorldarea,
      foreignKey: 'labyrinth_area_row',
      otherKey: 'world_area_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'cruel__world_areas',
      through: models.LabyrinthAreaCruelWorldarea,
      foreignKey: 'labyrinth_area_row',
      otherKey: 'world_area_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'merciless__world_areas',
      through: models.LabyrinthAreaMercilessWorldarea,
      foreignKey: 'labyrinth_area_row',
      otherKey: 'world_area_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'endgame__world_areas',
      through: models.LabyrinthAreaEndgameWorldarea,
      foreignKey: 'labyrinth_area_row',
      otherKey: 'world_area_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthAreas.dat';
  return model;
};
