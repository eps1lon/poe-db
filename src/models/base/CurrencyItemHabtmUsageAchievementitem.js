module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CurrencyItemHabtmUsageAchievementitem',
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
          fields: ['currency_item_row', 'achievement_item_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'currency_item_habtm_usage_achievementitems',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.CurrencyItem, {
      foreignKey: 'currency_item_row',
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
