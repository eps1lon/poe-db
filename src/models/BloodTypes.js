const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BloodTypes',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      pet_file1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      pet_file2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      pet_file3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      pet_file4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      pet_file5: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      pet_file6: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      pet_file7: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      pet_file8: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      pet_file9: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {};

  return model;
};
