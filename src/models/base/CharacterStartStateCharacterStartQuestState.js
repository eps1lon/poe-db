module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartStateCharacterStartQuestState',
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
          fields: [
            {
              attribute: 'character_start_state_row',
            },
            {
              attribute: 'character_start_quest_state_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'character_start_state__character_start_quest_states',
      underscored: true,
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
