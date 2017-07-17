module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexMissionSpecialModMod',
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
      tableName: 'str_dex_mission_special_mod_mods',
    },
  );

  model.associate = models => {
    model.belongsTo(models.StrDexMissionSpecialMod, {
      foreignKey: 'str_dex_mission_special_mod_row',
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
