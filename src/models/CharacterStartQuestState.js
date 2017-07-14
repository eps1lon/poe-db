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
        allowNull: false,
        $col_order: 0,
      },
      quest_states: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      keys1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown9: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Quest, {
      as: 'quest',
      through: 'CharacterStartQuestStateQuest',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MapPin, {
      as: 'map_pins',
      through: 'CharacterStartQuestStateMapPin',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterStartQuestState.dat';
  return model;
};
