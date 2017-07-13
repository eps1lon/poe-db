const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DamageParticleEffects',
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
      pet_file: {
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

  model.DAT_FILE = 'DamageParticleEffects.dat';
  return model;
};
