module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Difficulty',
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
      resistances: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      minimum_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      prefix: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'difficulties',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'Difficulties.dat';
  return model;
};
