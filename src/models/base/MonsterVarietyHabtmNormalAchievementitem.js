module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterVarietyHabtmNormalAchievementitem',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      mods_key: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: 65,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['monster_variety_row', 'achievement_item_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'monster_variety_habtm_normal_achievementitems',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      foreignKey: 'monster_variety_row',
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
