module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrIntMissionRelicPatternRelicMod',
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
      tableName: 'str_int_mission_relic_pattern_relic_mods',
    },
  );

  model.associate = models => {
    model.belongsTo(models.StrIntMissionRelicPattern, {
      foreignKey: 'str_int_mission_relic_pattern_row',
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
