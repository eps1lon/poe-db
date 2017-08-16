module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'RandomUniqueMonster',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'random_unique_monsters',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'RandomUniqueMonsters.dat';
  return model;
};
