module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'FixedHideoutDoodad',
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
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
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
      tableName: 'fixed_hideout_doodads',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'FixedHideoutDoodads.dat';
  return model;
};
