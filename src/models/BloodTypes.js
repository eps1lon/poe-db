module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BloodTypes',
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
      pet_file1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      pet_file2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      pet_file3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      pet_file4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      pet_file5: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      pet_file6: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      pet_file7: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      pet_file8: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      pet_file9: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'BloodTypes.dat';
  return model;
};
