module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BuffVisuals',
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
      buff_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      epk_file1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      epk_file2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MiscAnimated, {
      foreignKey: {
        name: 'misc_animated_key',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MiscAnimated.hasMany(model, {
      foreignKey: {
        name: 'misc_animated_key',
        $col_order: 4,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.MiscAnimated, {
      foreignKey: {
        name: 'misc_animated_key2',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MiscAnimated.hasMany(model, {
      foreignKey: {
        name: 'misc_animated_key2',
        $col_order: 5,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.PreloadGroups, {
      as: 'preload_groups',
      through: 'BuffVisualsPreloadGroups',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BuffVisuals.dat';
  return model;
};
