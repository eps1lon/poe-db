module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapCreationInformation',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
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
              attribute: 'maps_key',
            },
          ],
          name: 'index_maps_key',
        },
      ],
      tableName: 'map_creation_informations',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Map, {
      as: 'map',
      $inverse: 'map_creation_informations',
      $col_order: 0,
      foreignKey: {
        name: 'maps_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MapCreationInformation.dat';
  return model;
};
