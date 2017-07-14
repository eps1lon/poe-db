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
      is_pvp: {
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
          fields: ['characters_key'],
        },
        {
          fields: ['character_start_state_set_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.Character, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Character.hasMany(model, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.CharacterStartStateSet, {
      foreignKey: {
        name: 'character_start_state_set_key',
        $col_order: 6,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.CharacterStartStateSet.hasMany(model, {
      foreignKey: {
        name: 'character_start_state_set_key',
        $col_order: 6,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.PassiveSkill, {
      as: 'passive_skills',
      through: 'CharacterStartStatePassiveSkill',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterStartQuestState, {
      as: 'normal_character_start_quest_state',
      through: 'CharacterStartStateNormalCharacterStartQuestStates',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterStartQuestState, {
      as: 'cruel_character_start_quest_state',
      through: 'CharacterStartStateCruelCharacterStartQuestStates',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.CharacterStartQuestState, {
      as: 'merciless_character_start_quest_state',
      through: 'CharacterStartStateMercilessCharacterStartQuestStates',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterStartStates.dat';
  return model;
};
