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
        allowNull: false,
        $col_order: 0,
      },
      buff_d_d_s_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      e_p_k_file1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      e_p_k_file2: {
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
      indexes: [
        {
          fields: [
            {
              attribute: 'misc_animated_key',
            },
          ],
          name: 'index_misc_animated_key',
        },
        {
          fields: [
            {
              attribute: 'misc_animated_key2',
            },
          ],
          name: 'index_misc_animated_key2',
        },
      ],
      tableName: 'buff_visuals',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MiscAnimated, {
      as: 'misc_animated',
      $inverse: 'buff_visuals',
      $col_order: 4,
      foreignKey: {
        name: 'misc_animated_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MiscAnimated, {
      as: 'misc_animated2',
      $inverse: 'buff_visuals2',
      $col_order: 5,
      foreignKey: {
        name: 'misc_animated_key2',
        $type: 'ulong',
      },
      targetKey: 'row',
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
