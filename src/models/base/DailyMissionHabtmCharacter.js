module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DailyMissionHabtmCharacter',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['daily_mission_row', 'character_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'daily_mission_habtm_characters',
      underscored: true,
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
