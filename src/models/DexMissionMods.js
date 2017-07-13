module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DexMissionMods',
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
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'mods_key',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mods.hasMany(model, {
      foreignKey: {
        name: 'mods_key',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'DexMissionMods.dat';
  return model;
};
