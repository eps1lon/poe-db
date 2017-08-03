module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrIntMissionRelicModHabtmMod',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['str_int_mission_relic_mod_row', 'mod_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'str_int_mission_relic_mod_habtm_mods',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.StrIntMissionRelicMod, {
      foreignKey: 'str_int_mission_relic_mod_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      foreignKey: 'mod_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
