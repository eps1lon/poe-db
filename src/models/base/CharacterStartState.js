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
        allowNull: true,
        $col_order: 0,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      is_pvp: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      bool0: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      info_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      _passive_skills_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
      _character_start_quest_state_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 8,
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
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Character, {
      as: 'character',
      $inverse: 'character_start_states',
      $col_order: 2,
      foreignKey: {
        name: 'characters_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.CharacterStartStateSet, {
      as: 'character_start_state_set',
      $inverse: 'character_start_states',
      $col_order: 6,
      foreignKey: {
        name: 'character_start_state_set_key',
        $type: 'ulong',
        $col_order: 6,
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
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterStartQuestState, {
      as: 'character_start_quest_state',
      through: {
        model: models.CharacterStartStateHabtmCharacterStartQuestState,
        unique: false,
      },
      foreignKey: 'character_start_state_row',
      otherKey: 'character_start_quest_state_row',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterStartStates.dat';
  return model;
};
