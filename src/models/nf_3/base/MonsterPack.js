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
      _world_areas_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: '',
        $col_order: 1,
      },
      _boss_monster_monster_varieties_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: '',
        $col_order: 7,
      },
      _tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: '',
        $col_order: 11,
      },
    },
    {
      engine: 'MyISAM',
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
      $col_order: 7,
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
      $col_order: 11,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterPacks.dat';
  return model;
};
