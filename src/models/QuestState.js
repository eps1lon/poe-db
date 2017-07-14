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
        allowNull: false,
        $col_order: 1,
      },
      quest_states: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      message: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      map_pins_texts: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      keys2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      quest_finished_ogg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      unknown2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      unknown3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
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
              attribute: 'quest_key',
            },
          ],
        },
      ],
      tableName: 'quest_states',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Quest, {
      foreignKey: {
        name: 'quest_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Quest.hasMany(model, {
      foreignKey: {
        name: 'quest_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.MapPin, {
      as: 'map_pins1',
      through: 'QuestStateMapPin',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MapPin, {
      as: 'map_pins2',
      through: 'QuestStateMapPin',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'QuestStates.dat';
  return model;
};
