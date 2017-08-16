module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthLadderReward',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
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
      tableName: 'labyrinth_ladder_rewards',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'LabyrinthLadderRewards.dat';
  return model;
};
