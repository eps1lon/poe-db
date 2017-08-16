module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthRewardType',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      object_path: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'labyrinth_reward_types',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'LabyrinthRewardTypes.dat';
  return model;
};
