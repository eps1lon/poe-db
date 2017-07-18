module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EclipseMod',
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
          fields: [
            {
              attribute: 'mods_key',
            },
          ],
          name: 'index_mods_key',
        },
      ],
      tableName: 'eclipse_mods',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'mods_key',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'spawn_weight__tags',
      through: {
        model: models.EclipseModHabtmSpawnWeightTag,
        unique: false,
      },
      foreignKey: 'eclipse_mod_row',
      otherKey: 'tag_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'EclipseMods.dat';
  return model;
};
