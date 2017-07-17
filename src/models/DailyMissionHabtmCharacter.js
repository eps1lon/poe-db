module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DailyMissionHabtmCharacter',
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
      indexes: [],
      tableName: 'daily_mission_habtm_characters',
    },
  );

  model.associate = models => {
    model.belongsTo(models.DailyMission, {
      foreignKey: 'daily_mission_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Character, {
      foreignKey: 'character_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
