module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterArmour',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      art_string_sm_file: {
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
      tableName: 'monster_armours',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MonsterArmours.dat';
  return model;
};
