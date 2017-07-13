module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WarbandsPackMonsters',
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
    },
  );

  model.associate = models => {
    model.belongsToMany(models.MonsterVarieties, {
      as: 'tier4_monster_varieties',
      through: 'Tier4MonsterVarieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'tier3_monster_varieties',
      through: 'Tier3MonsterVarieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'tier2_monster_varieties',
      through: 'Tier2MonsterVarieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'tier1_monster_varieties',
      through: 'Tier1MonsterVarieties',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'WarbandsPackMonsters.dat';
  return model;
};
