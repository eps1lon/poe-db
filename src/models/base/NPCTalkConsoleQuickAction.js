module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCTalkConsoleQuickAction',
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
      controller: {
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
      tableName: 'n_p_c_talk_console_quick_actions',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'NPCTalkConsoleQuickActions.dat';
  return model;
};
