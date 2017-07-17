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
          name: 'index_character_panel_description_modes_key',
        },
        {
          fields: [
            {
              attribute: 'character_panel_tabs_key',
            },
          ],
          name: 'index_character_panel_tabs_key',
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
    model.belongsToMany(models.Stat, {
      as: 'stats1',
      through: {
        model: models.CharacterPanelStatHabtmStats1,
        unique: false,
      },
      foreignKey: 'character_panel_stat_row',
      otherKey: 'stat_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'stats2',
      through: {
        model: models.CharacterPanelStatHabtmStats2,
        unique: false,
      },
      foreignKey: 'character_panel_stat_row',
      otherKey: 'stat_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'stats3',
      through: {
        model: models.CharacterPanelStatHabtmStats3,
        unique: false,
      },
      foreignKey: 'character_panel_stat_row',
      otherKey: 'stat_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterPanelStats.dat';
  return model;
};
