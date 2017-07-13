module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrMissionSpiritEffects',
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
      key0: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      ground_effect_unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      ground_effect_unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      key3: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      b1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      b2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
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
      as: 'summon_monster_varieties',
      through: 'StrMissionSpiritEffectsSummonMonsterVarieties',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVarieties, {
      as: 'ground_effect_monster_varieties',
      through: 'StrMissionSpiritEffectsGroundEffectMonsterVarieties',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrMissionSpiritEffects.dat';
  return model;
};
