module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestStateHabtmMapPins1',
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
          fields: ['quest_state_row', 'map_pin_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'quest_state_habtm_map_pins1s',
    },
  );

  model.associate = models => {
    model.belongsTo(models.QuestState, {
      foreignKey: 'quest_state_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MapPin, {
      foreignKey: 'map_pin_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
