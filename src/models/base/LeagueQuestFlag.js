module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LeagueQuestFlag',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'league_quest_flags',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'LeagueQuestFlags.dat';
  return model;
};
