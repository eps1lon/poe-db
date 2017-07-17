module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartState',
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
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      is_p_v_p: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
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
              attribute: 'characters_key',
            },
          ],
          name: 'index_characters_key',
        },
        {
          fields: [
            {
              attribute: 'character_start_state_set_key',
            },
          ],
          name: 'index_character_start_state_set_key',
        },
      ],
      tableName: 'character_start_states',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Character, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.CharacterStartStateSet, {
      foreignKey: {
        name: 'character_start_state_set_key',
        $col_order: 6,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.PassiveSkill, {
      as: 'passive_skills',
      through: {
        model: models.CharacterStartStateHabtmPassiveSkill,
        unique: false,
      },
      foreignKey: 'character_start_state_row',
      otherKey: 'passive_skill_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterStartQuestState, {
      as: 'normal__character_start_quest_state',
      through: {
        model: models.CharacterStartStateHabtmNormalCharacterstartqueststate,
        unique: false,
      },
      foreignKey: 'character_start_state_row',
      otherKey: 'character_start_quest_state_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterStartQuestState, {
      as: 'cruel__character_start_quest_state',
      through: {
        model: models.CharacterStartStateHabtmCruelCharacterstartqueststate,
        unique: false,
      },
      foreignKey: 'character_start_state_row',
      otherKey: 'character_start_quest_state_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterStartQuestState, {
      as: 'merciless__character_start_quest_state',
      through: {
        model: models.CharacterStartStateHabtmMercilessCharacterstartqueststate,
        unique: false,
      },
      foreignKey: 'character_start_state_row',
      otherKey: 'character_start_quest_state_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterStartStates.dat';
  return model;
};
