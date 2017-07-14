module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterPanelStat',
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
      indexes: [
        {
          fields: [
            {
              attribute: 'character_panel_description_modes_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'character_panel_tabs_key',
            },
          ],
        },
      ],
      tableName: 'character_panel_stats',
    },
  );

  model.associate = models => {
    model.belongsTo(models.CharacterPanelDescriptionMode, {
      foreignKey: {
        name: 'character_panel_description_modes_key',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.CharacterPanelDescriptionMode.hasMany(model, {
      foreignKey: {
        name: 'character_panel_description_modes_key',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.CharacterPanelTab, {
      foreignKey: {
        name: 'character_panel_tabs_key',
        $col_order: 6,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.CharacterPanelTab.hasMany(model, {
      foreignKey: {
        name: 'character_panel_tabs_key',
        $col_order: 6,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Stat, {
      as: 'stats1',
      through: 'CharacterPanelStatStat',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'stats2',
      through: 'CharacterPanelStatStat',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'stats3',
      through: 'CharacterPanelStatStat',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterPanelStats.dat';
  return model;
};
