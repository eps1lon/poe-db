const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestStates',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      quest_states: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      map_pins_texts: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      keys2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      quest_finished_ogg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown3: {
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

  model.associate = models => {
    model.belongsTo(models.Quest, {
      foreignKey: 'quest_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MapPins, {
      as: 'map_pins1',
      through: 'QuestStatesMapPins',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MapPins, {
      as: 'map_pins2',
      through: 'QuestStatesMapPins',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'QuestStates.dat';
  return model;
};
