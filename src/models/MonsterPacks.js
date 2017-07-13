module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterPacks',
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
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      boss_monster_spawn_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      boss_monster_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.WorldAreas, {
      as: 'world_areas',
      through: 'MonsterPacksWorldAreas',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'boss_monster_monster_varieties',
      through: 'BossMonsterMonsterVarieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'tags',
      through: 'MonsterPacksTags',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterPacks.dat';
  return model;
};
