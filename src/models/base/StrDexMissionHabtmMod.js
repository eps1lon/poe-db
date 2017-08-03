module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrDexMissionHabtmMod',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['str_dex_mission_row', 'mod_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'str_dex_mission_habtm_mods',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.StrDexMission, {
      foreignKey: 'str_dex_mission_row',
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
