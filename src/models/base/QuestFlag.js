module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestFlag',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'quest_flags',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'QuestFlags.dat';
  return model;
};
