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
        },
        {
          fields: [
            {
              attribute: 'world_areas_key',
            },
          ],
        },
      ],
      tableName: 'race_areas',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Race, {
      foreignKey: {
        name: 'races_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Race.hasMany(model, {
      foreignKey: {
        name: 'races_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.WorldArea.hasMany(model, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: 'RaceAreaMod',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'RaceAreas.dat';
  return model;
};
