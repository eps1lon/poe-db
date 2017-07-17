module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterPanelStatHabtmStats1',
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
      tableName: 'character_panel_stat_habtm_stats1s',
    },
  );

  model.associate = models => {
    model.belongsTo(models.CharacterPanelStat, {
      foreignKey: 'character_panel_stat_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      foreignKey: 'stat_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
