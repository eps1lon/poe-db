module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DescentStarterChest',
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
      socket_colours: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Characters, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Characters.hasMany(model, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 1,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemTypes.hasMany(model, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.WorldAreas, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.WorldAreas.hasMany(model, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 4,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'DescentStarterChest.dat';
  return model;
};
