module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterBehavior',
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
      tableName: 'monster_behaviors',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MonsterBehavior.dat';
  return model;
};
