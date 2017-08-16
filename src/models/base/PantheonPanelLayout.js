module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PantheonPanelLayout',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      is_major_god: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      cover_image: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      god_name2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      god_name3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      god_name4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      god_name1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      quest_state1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      quest_state2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 19,
      },
      quest_state3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 20,
      },
      quest_state4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 21,
      },
      is_enabled: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 22,
      },
      _effect1_stats_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 7,
      },
      _effect2_stats_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 9,
      },
      _effect3_stats_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 12,
      },
      _effect4_stats_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 14,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'pantheon_panel_layouts',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Stat, {
      as: 'effect1_stats',
      through: {
        model: models.PantheonPanelLayoutHabtmEffect1Stat,
        unique: false,
      },
      foreignKey: 'pantheon_panel_layout_row',
      otherKey: 'stat_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'effect2_stats',
      through: {
        model: models.PantheonPanelLayoutHabtmEffect2Stat,
        unique: false,
      },
      foreignKey: 'pantheon_panel_layout_row',
      otherKey: 'stat_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'effect3_stats',
      through: {
        model: models.PantheonPanelLayoutHabtmEffect3Stat,
        unique: false,
      },
      foreignKey: 'pantheon_panel_layout_row',
      otherKey: 'stat_row',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'effect4_stats',
      through: {
        model: models.PantheonPanelLayoutHabtmEffect4Stat,
        unique: false,
      },
      foreignKey: 'pantheon_panel_layout_row',
      otherKey: 'stat_row',
      $col_order: 14,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'PantheonPanelLayout.dat';
  return model;
};
