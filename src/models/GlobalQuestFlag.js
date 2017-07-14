module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'GlobalQuestFlag',
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
      tableName: 'global_quest_flags',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'GlobalQuestFlags.dat';
  return model;
};
