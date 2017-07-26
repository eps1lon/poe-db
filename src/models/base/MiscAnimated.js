module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MiscAnimated',
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
      a_o_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'misc_animateds',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.PreloadGroup, {
      as: 'preload_groups',
      through: {
        model: models.MiscAnimatedHabtmPreloadGroup,
        unique: false,
      },
      foreignKey: 'misc_animated_row',
      otherKey: 'preload_group_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MiscAnimated.dat';
  return model;
};
