module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BuffDefinitionHabtmStat',
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
      tableName: 'buff_definition_habtm_stats',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BuffDefinition, {
      foreignKey: 'buff_definition_row',
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
