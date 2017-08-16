module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartQuestState',
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
      quest_states: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      keys1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      _quest_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
      _map_pins_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'character_start_quest_states',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Quest, {
      as: 'quest',
      through: {
        model: models.CharacterStartQuestStateHabtmQuest,
        unique: false,
      },
      foreignKey: 'character_start_quest_state_row',
      otherKey: 'quest_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MapPin, {
      as: 'map_pins',
      through: {
        model: models.CharacterStartQuestStateHabtmMapPin,
        unique: false,
      },
      foreignKey: 'character_start_quest_state_row',
      otherKey: 'map_pin_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterStartQuestState.dat';
  return model;
};
