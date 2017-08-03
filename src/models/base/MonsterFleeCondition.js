module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterFleeCondition',
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
      tableName: 'monster_flee_conditions',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MonsterFleeConditions.dat';
  return model;
};
