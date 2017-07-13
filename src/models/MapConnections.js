module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapConnections',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      restricted_area_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MapPins, {
      foreignKey: {
        name: 'map_pins_key0',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MapPins.hasMany(model, {
      foreignKey: {
        name: 'map_pins_key0',
        $col_order: 0,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.MapPins, {
      foreignKey: {
        name: 'map_pins_key1',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MapPins.hasMany(model, {
      foreignKey: {
        name: 'map_pins_key1',
        $col_order: 1,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'MapConnections.dat';
  return model;
};
