module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'RaceArea',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      keys1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
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
              attribute: 'races_key',
            },
          ],
          name: 'index_races_key',
        },
        {
          fields: [
            {
              attribute: 'world_areas_key',
            },
          ],
          name: 'index_world_areas_key',
        },
      ],
      tableName: 'race_areas',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Race, {
      as: 'race',
      $inverse: 'race_areas',
      $col_order: 0,
      foreignKey: {
        name: 'races_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'world_area',
      $inverse: 'race_areas',
      $col_order: 1,
      foreignKey: {
        name: 'world_areas_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.RaceAreaHabtmMod,
        unique: false,
      },
      foreignKey: 'race_area_row',
      otherKey: 'mod_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'RaceAreas.dat';
  return model;
};
