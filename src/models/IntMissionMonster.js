module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'IntMissionMonster',
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
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'int_mission_monsters',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.MonsterVariety, {
      as: 'objective__monster_varieties',
      through: models.IntMissionMonsterHabtmObjectiveMonstervariety,
      foreignKey: 'int_mission_monster_row',
      otherKey: 'monster_variety_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: models.IntMissionMonsterHabtmAchievementItem,
      foreignKey: 'int_mission_monster_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'IntMissionMonsters.dat';
  return model;
};
