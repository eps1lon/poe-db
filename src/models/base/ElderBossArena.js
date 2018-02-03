module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ElderBossArena',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      _achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
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
              attribute: 'world_areas_key',
            },
          ],
          name: 'index_world_areas_key',
        },
      ],
      tableName: 'elder_boss_arenas',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'world_area',
      $inverse: 'elder_boss_arenas',
      $col_order: 0,
      foreignKey: {
        name: 'world_areas_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: {
        model: models.ElderBossArenaHabtmAchievementItem,
        unique: false,
      },
      foreignKey: 'elder_boss_arena_row',
      otherKey: 'achievement_item_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ElderBossArenas.dat';
  return model;
};
