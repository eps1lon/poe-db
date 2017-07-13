module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Environments',
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
        allowNull: false,
        $col_order: 0,
      },
      base_ambient_sound_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      base_env_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      corrupted_env_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      keys1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      corrupted_ambient_sound_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      ambient_sound_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'Environments.dat';
  return model;
};
