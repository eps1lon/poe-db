const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCTextAudio',
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
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      mono_audio_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      stereo_audio_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      has_stereo: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
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

  model.associate = models => {
    model.belongsTo(models.Characters, {
      foreignKey: 'characters_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCTextAudio.dat';
  return model;
};
