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
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.WorldArea, {
      as: 'normal_world_areas',
      through: {
        model: models.LabyrinthAreaHabtmNormalWorldarea,
        unique: false,
      },
      foreignKey: 'labyrinth_area_row',
      otherKey: 'world_area_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'cruel_world_areas',
      through: {
        model: models.LabyrinthAreaHabtmCruelWorldarea,
        unique: false,
      },
      foreignKey: 'labyrinth_area_row',
      otherKey: 'world_area_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'merciless_world_areas',
      through: {
        model: models.LabyrinthAreaHabtmMercilessWorldarea,
        unique: false,
      },
      foreignKey: 'labyrinth_area_row',
      otherKey: 'world_area_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.WorldArea, {
      as: 'endgame_world_areas',
      through: {
        model: models.LabyrinthAreaHabtmEndgameWorldarea,
        unique: false,
      },
      foreignKey: 'labyrinth_area_row',
      otherKey: 'world_area_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthAreas.dat';
  return model;
};
