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
        allowNull: false,
        $col_order: 0,
      },
      unknown1: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      tier1_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      tier2_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      tier3_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      tier4_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      tier1_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      tier2_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      tier3_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      tier4_art: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'warbands_pack_monsters',
    },
  );

  model.associate = models => {
    model.belongsToMany(models.MonsterVariety, {
      as: 'tier4__monster_varieties',
      through: models.WarbandsPackMonsterTier4Monstervariety,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'tier3__monster_varieties',
      through: models.WarbandsPackMonsterTier3Monstervariety,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'tier2__monster_varieties',
      through: models.WarbandsPackMonsterTier2Monstervariety,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'tier1__monster_varieties',
      through: models.WarbandsPackMonsterTier1Monstervariety,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'WarbandsPackMonsters.dat';
  return model;
};
