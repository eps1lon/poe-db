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
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      data4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
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
      foreignKey: {
        name: 'character_panel_description_modes_key',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.CharacterPanelDescriptionModes.hasMany(model, {
      foreignKey: {
        name: 'character_panel_description_modes_key',
        $col_order: 3,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.CharacterPanelTabs, {
      foreignKey: {
        name: 'character_panel_tabs_key',
        $col_order: 6,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.CharacterPanelTabs.hasMany(model, {
      foreignKey: {
        name: 'character_panel_tabs_key',
        $col_order: 6,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Stats, {
      as: 'stats1',
      through: 'CharacterPanelStatsStats',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stats, {
      as: 'stats2',
      through: 'CharacterPanelStatsStats',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stats, {
      as: 'stats3',
      through: 'CharacterPanelStatsStats',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterPanelStats.dat';
  return model;
};
