module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BuffGroup',
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
      tableName: 'buff_groups',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'BuffGroups.dat';
  return model;
};
