module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SessionQuestFlag',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      quest_flag: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'session_quest_flags',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'SessionQuestFlags.dat';
  return model;
};
