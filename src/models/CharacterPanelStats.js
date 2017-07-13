const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterPanelStats',
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
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      data4: {
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
    model.belongsTo(models.CharacterPanelDescriptionModes, {
      foreignKey: 'character_panel_description_modes_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.CharacterPanelTabs, {
      foreignKey: 'character_panel_tabs_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stats, {
      through: 'CharacterPanelStatsStats',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stats, {
      through: 'CharacterPanelStatsStats',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stats, {
      through: 'CharacterPanelStatsStats',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
