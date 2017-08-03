module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthAreaHabtmCruelWorldarea',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['labyrinth_area_row', 'world_area_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'labyrinth_area_habtm_cruel_worldareas',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.LabyrinthArea, {
      foreignKey: 'labyrinth_area_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      foreignKey: 'world_area_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
