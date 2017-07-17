module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexIntMissionUniqueMapMod',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'str_dex_int_mission_unique_map_mods',
    },
  );

  model.associate = models => {
    model.belongsTo(models.StrDexIntMissionUniqueMap, {
      foreignKey: 'str_dex_int_mission_unique_map_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      foreignKey: 'mod_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
