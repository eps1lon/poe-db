module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartStateHabtmCruelCharacterstartqueststate',
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
          fields: [
            'character_start_state_row',
            'character_start_quest_state_row',
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'character_start_state_habtm_cruel_characterstartqueststates',
    },
  );

  model.associate = models => {
    model.belongsTo(models.CharacterStartState, {
      foreignKey: 'character_start_state_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.CharacterStartQuestState, {
      foreignKey: 'character_start_quest_state_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
