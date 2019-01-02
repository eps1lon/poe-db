module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AtlasSector',
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
        allowNull: true,
        $col_order: 0,
      },
      _spawn_weight_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'atlas_sectors',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Tag, {
      as: 'spawn_weight_tags',
      through: {
        model: models.AtlasSectorHabtmSpawnWeightTag,
        unique: false,
      },
      foreignKey: 'atlas_sector_row',
      otherKey: 'tag_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'AtlasSector.dat';
  return model;
};
