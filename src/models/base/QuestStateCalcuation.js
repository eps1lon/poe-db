module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestStateCalcuation',
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
      tableName: 'quest_state_calcuations',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'QuestStateCalcuation.dat';
  return model;
};
