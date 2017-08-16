module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'FlavourTextImage',
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
      tableName: 'flavour_text_images',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'FlavourTextImages.dat';
  return model;
};
