module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'IncursionRoomHabtmAchievementItem',
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
              attribute: 'incursion_room_row',
            },
            {
              attribute: 'achievement_item_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'incursion_room__achievement_items',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.IncursionRoom, {
      foreignKey: 'incursion_room_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      foreignKey: 'achievement_item_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
