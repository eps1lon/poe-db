module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'GlobalQuestFlag',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'global_quest_flags',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'GlobalQuestFlags.dat';
  return model;
};
