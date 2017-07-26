module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Attribute',
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
      tableName: 'attributes',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'Attributes.dat';
  return model;
};
