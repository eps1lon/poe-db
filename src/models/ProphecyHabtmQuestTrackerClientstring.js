module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ProphecyHabtmQuestTrackerClientstring',
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
      tableName: 'prophecy_habtm_quest_tracker_clientstrings',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Prophecy, {
      foreignKey: 'prophecy_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ClientString, {
      foreignKey: 'client_string_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
