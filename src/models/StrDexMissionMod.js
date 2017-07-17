module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexMissionMod',
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
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'str_dex_mission_mods',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.StrDexMissionModHabtmMod,
        unique: false,
      },
      foreignKey: 'str_dex_mission_mod_row',
      otherKey: 'mod_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrDexMissionMods.dat';
  return model;
};
