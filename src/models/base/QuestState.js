module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestState',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      quest_states: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      message: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      map_pins_texts: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      keys2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      quest_finished_ogg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      data2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      quest_state_calcuation_key: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      _map_pins1_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 7,
      },
      _map_pins2_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 10,
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
              attribute: 'quest_key',
            },
          ],
          name: 'index_quest_key',
        },
      ],
      tableName: 'quest_states',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Quest, {
      as: 'quest',
      $inverse: 'quest_states',
      $col_order: 0,
      foreignKey: {
        name: 'quest_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MapPin, {
      as: 'map_pins1',
      through: {
        model: models.QuestStateHabtmMapPins1,
        unique: false,
      },
      foreignKey: 'quest_state_row',
      otherKey: 'map_pin_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MapPin, {
      as: 'map_pins2',
      through: {
        model: models.QuestStateHabtmMapPins2,
        unique: false,
      },
      foreignKey: 'quest_state_row',
      otherKey: 'map_pin_row',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'QuestStates.dat';
  return model;
};
