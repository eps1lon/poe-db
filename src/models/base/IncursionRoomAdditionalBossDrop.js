module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'IncursionRoomAdditionalBossDrop',
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
      tableName: 'incursion_room_additional_boss_drops',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'IncursionRoomAdditionalBossDrops.dat';
  return model;
};
