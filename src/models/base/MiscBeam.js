module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MiscBeam',
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
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      _preload_groups_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 3,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'misc_beams',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.PreloadGroup, {
      as: 'preload_groups',
      through: {
        model: models.MiscBeamHabtmPreloadGroup,
        unique: false,
      },
      foreignKey: 'misc_beam_row',
      otherKey: 'preload_group_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MiscBeams.dat';
  return model;
};
