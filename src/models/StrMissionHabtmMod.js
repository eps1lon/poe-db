module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrMissionHabtmMod',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['str_mission_row', 'mod_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'str_mission_habtm_mods',
    },
  );

  model.associate = models => {
    model.belongsTo(models.StrMission, {
      foreignKey: 'str_mission_row',
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
