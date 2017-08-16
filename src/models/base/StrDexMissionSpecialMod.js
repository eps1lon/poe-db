module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexMissionSpecialMod',
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
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      _mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'str_dex_mission_special_mods',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.StrDexMissionSpecialModHabtmMod,
        unique: false,
      },
      foreignKey: 'str_dex_mission_special_mod_row',
      otherKey: 'mod_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrDexMissionSpecialMods.dat';
  return model;
};
