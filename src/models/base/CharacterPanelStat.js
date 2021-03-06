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
        allowNull: true,
        $col_order: 0,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      data4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      _stats1_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
      _stats2_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
      _stats3_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
      },
    },
    {
      engine: 'MYISAM',
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
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.CharacterPanelDescriptionMode, {
      as: 'character_panel_description_mode',
      $inverse: 'character_panel_stats',
      $col_order: 3,
      foreignKey: {
        name: 'character_panel_description_modes_key',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.CharacterPanelTab, {
      as: 'character_panel_tab',
      $inverse: 'character_panel_stats',
      $col_order: 6,
      foreignKey: {
        name: 'character_panel_tabs_key',
        $type: 'ulong',
        $col_order: 6,
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
      $col_order: 2,
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
      $col_order: 4,
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
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterPanelStats.dat';
  return model;
};
