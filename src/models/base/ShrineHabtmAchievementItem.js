module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShrineHabtmAchievementItem',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['shrine_row', 'achievement_item_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'shrine_habtm_achievement_items',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Shrine, {
      foreignKey: 'shrine_row',
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
