module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ItemVisualIdentityHabtmPickupAchievementitem',
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
          fields: ['item_visual_identity_row', 'achievement_item_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'item_visual_identity_habtm_pickup_achievementitems',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: 'item_visual_identity_row',
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
