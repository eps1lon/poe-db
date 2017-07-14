module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UniqueSetName',
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
      tableName: 'unique_set_names',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'UniqueSetNames.dat';
  return model;
};
