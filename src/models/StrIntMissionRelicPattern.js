module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrIntMissionRelicPattern',
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
      ally_relic_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      is_enemy_relic: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      is_ally_relic: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      enemy_relic_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'str_int_mission_relic_patterns',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Mod, {
      as: 'relic__mods',
      through: {
        model: models.StrIntMissionRelicPatternHabtmRelicMod,
        unique: false,
      },
      foreignKey: 'str_int_mission_relic_pattern_row',
      otherKey: 'mod_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrIntMissionRelicPatterns.dat';
  return model;
};
