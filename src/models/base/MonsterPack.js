module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterPack',
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
        allowNull: true,
        $col_order: 0,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      boss_monster_spawn_chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      boss_monster_count: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      _world_areas_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
      _boss_monster_monster_varieties_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 6,
      },
      _tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 10,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'monster_packs',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.WorldArea, {
      as: 'world_areas',
      through: {
        model: models.MonsterPackHabtmWorldArea,
        unique: false,
      },
      foreignKey: 'monster_pack_row',
      otherKey: 'world_area_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'boss_monster_monster_varieties',
      through: {
        model: models.MonsterPackHabtmBossMonsterMonstervariety,
        unique: false,
      },
      foreignKey: 'monster_pack_row',
      otherKey: 'monster_variety_row',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'tags',
      through: {
        model: models.MonsterPackHabtmTag,
        unique: false,
      },
      foreignKey: 'monster_pack_row',
      otherKey: 'tag_row',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterPacks.dat';
  return model;
};
