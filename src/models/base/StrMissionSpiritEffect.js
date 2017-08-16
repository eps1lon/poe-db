module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrMissionSpiritEffect',
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
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      key0: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      ground_effect_unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      ground_effect_unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      key3: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      b1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      b2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
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
              attribute: 'summon_monster_varieties_keys',
            },
          ],
          name: 'index_summon_monster_varieties_keys',
        },
        {
          fields: [
            {
              attribute: 'ground_effect_monster_varieties_keys',
            },
          ],
          name: 'index_ground_effect_monster_varieties_keys',
        },
      ],
      tableName: 'str_mission_spirit_effects',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'summon_monster_varietiess',
      $inverse: 'str_mission_spirit_effects',
      $col_order: 6,
      foreignKey: {
        name: 'summon_monster_varieties_keys',
        $type: 'ulong',
        $col_order: 6,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'ground_effect_monster_varietiess',
      $inverse: 'str_mission_spirit_effects',
      $col_order: 7,
      foreignKey: {
        name: 'ground_effect_monster_varieties_keys',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrMissionSpiritEffects.dat';
  return model;
};
