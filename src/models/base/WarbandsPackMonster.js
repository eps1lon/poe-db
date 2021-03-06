module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WarbandsPackMonster',
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
      unknown1: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      tier1_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      tier2_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      tier3_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      tier4_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      tier1_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      tier2_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      tier3_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      tier4_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      _tier4_monster_varieties_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 3,
      },
      _tier3_monster_varieties_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
      _tier2_monster_varieties_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
      },
      _tier1_monster_varieties_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 6,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'warbands_pack_monsters',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.MonsterVariety, {
      as: 'tier4_monster_varieties',
      through: {
        model: models.WarbandsPackMonsterHabtmTier4Monstervariety,
        unique: false,
      },
      foreignKey: 'warbands_pack_monster_row',
      otherKey: 'monster_variety_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'tier3_monster_varieties',
      through: {
        model: models.WarbandsPackMonsterHabtmTier3Monstervariety,
        unique: false,
      },
      foreignKey: 'warbands_pack_monster_row',
      otherKey: 'monster_variety_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'tier2_monster_varieties',
      through: {
        model: models.WarbandsPackMonsterHabtmTier2Monstervariety,
        unique: false,
      },
      foreignKey: 'warbands_pack_monster_row',
      otherKey: 'monster_variety_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'tier1_monster_varieties',
      through: {
        model: models.WarbandsPackMonsterHabtmTier1Monstervariety,
        unique: false,
      },
      foreignKey: 'warbands_pack_monster_row',
      otherKey: 'monster_variety_row',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'WarbandsPackMonsters.dat';
  return model;
};
