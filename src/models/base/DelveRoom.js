module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DelveRoom',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      arm_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
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
              attribute: 'delve_biomes_key',
            },
          ],
          name: 'index_delve_biomes_key',
        },
        {
          fields: [
            {
              attribute: 'delve_features_key',
            },
          ],
          name: 'index_delve_features_key',
        },
      ],
      tableName: 'delve_rooms',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.DelveBiome, {
      as: 'delve_biome',
      $inverse: 'delve_rooms',
      $col_order: 0,
      foreignKey: {
        name: 'delve_biomes_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.DelveFeature, {
      as: 'delve_feature',
      $inverse: 'delve_rooms',
      $col_order: 1,
      foreignKey: {
        name: 'delve_features_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DelveRooms.dat';
  return model;
};
