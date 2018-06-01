module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UITalkCategory',
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
      tableName: 'u_i_talk_categories',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'UITalkCategories.dat';
  return model;
};
