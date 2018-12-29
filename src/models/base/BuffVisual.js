module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BuffVisual',
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
      buff_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      epk_files1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      epk_files2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      buff_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      buff_description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      _misc_animated1_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
      _misc_animated2_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
      },
      _preload_groups_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 7,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'buff_visuals',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.MiscAnimated, {
      as: 'misc_animated1',
      through: {
        model: models.BuffVisualHabtmMiscAnimated1,
        unique: false,
      },
      foreignKey: 'buff_visual_row',
      otherKey: 'misc_animated_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MiscAnimated, {
      as: 'misc_animated2',
      through: {
        model: models.BuffVisualHabtmMiscAnimated2,
        unique: false,
      },
      foreignKey: 'buff_visual_row',
      otherKey: 'misc_animated_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.PreloadGroup, {
      as: 'preload_groups',
      through: {
        model: models.BuffVisualHabtmPreloadGroup,
        unique: false,
      },
      foreignKey: 'buff_visual_row',
      otherKey: 'preload_group_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BuffVisuals.dat';
  return model;
};
