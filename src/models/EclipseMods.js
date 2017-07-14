module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EclipseMods',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      key: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      is_prefix: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['mods_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'mods_key',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mods.hasMany(model, {
      foreignKey: {
        name: 'mods_key',
        $col_order: 3,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Tags, {
      as: 'spawn_weight_tags',
      through: 'EclipseModsSpawnWeightTags',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'EclipseMods.dat';
  return model;
};
