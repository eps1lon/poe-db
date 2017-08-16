module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapConnection',
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
        allowNull: true,
        $col_order: 2,
      },
      restricted_area_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'map_pins_key0',
            },
          ],
          name: 'index_map_pins_key0',
        },
        {
          fields: [
            {
              attribute: 'map_pins_key1',
            },
          ],
          name: 'index_map_pins_key1',
        },
      ],
      tableName: 'map_connections',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MapPin, {
      as: 'map_pins0',
      $inverse: 'map_connections0',
      $col_order: 0,
      foreignKey: {
        name: 'map_pins_key0',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MapPin, {
      as: 'map_pins1',
      $inverse: 'map_connections1',
      $col_order: 1,
      foreignKey: {
        name: 'map_pins_key1',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapConnections.dat';
  return model;
};
