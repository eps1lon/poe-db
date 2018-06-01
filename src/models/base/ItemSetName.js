module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ItemSetName',
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
      tableName: 'item_set_names',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'ItemSetNames.dat';
  return model;
};
