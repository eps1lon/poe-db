module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexMissionMod',
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
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      _mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'dex_mission_mods',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.DexMissionModHabtmMod,
        unique: false,
      },
      foreignKey: 'dex_mission_mod_row',
      otherKey: 'mod_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DexMissionMods.dat';
  return model;
};
