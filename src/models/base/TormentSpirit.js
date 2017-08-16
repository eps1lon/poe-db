module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'TormentSpirit',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      min_zone_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      max_zone_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown13: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      _spirit_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
      _touched_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
      _possessed_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 3,
      },
      _mods0_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 9,
      },
      _mods1_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 10,
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
              attribute: 'monster_varieties_key',
            },
          ],
          name: 'index_monster_varieties_key',
        },
        {
          fields: [
            {
              attribute: 'summoned_monster_monster_varieties_key',
            },
          ],
          name: 'index_summoned_monster_monster_varieties_key',
        },
      ],
      tableName: 'torment_spirits',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'monster_variety',
      $inverse: 'torment_spirits',
      $col_order: 0,
      foreignKey: {
        name: 'monster_varieties_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'summoned_monster_monster_variety',
      $inverse: 'torment_spirits',
      $col_order: 7,
      foreignKey: {
        name: 'summoned_monster_monster_varieties_key',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'spirit_mods',
      through: {
        model: models.TormentSpiritHabtmSpiritMod,
        unique: false,
      },
      foreignKey: 'torment_spirit_row',
      otherKey: 'mod_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'touched_mods',
      through: {
        model: models.TormentSpiritHabtmTouchedMod,
        unique: false,
      },
      foreignKey: 'torment_spirit_row',
      otherKey: 'mod_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'possessed_mods',
      through: {
        model: models.TormentSpiritHabtmPossessedMod,
        unique: false,
      },
      foreignKey: 'torment_spirit_row',
      otherKey: 'mod_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods0',
      through: {
        model: models.TormentSpiritHabtmMods0,
        unique: false,
      },
      foreignKey: 'torment_spirit_row',
      otherKey: 'mod_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods1',
      through: {
        model: models.TormentSpiritHabtmMods1,
        unique: false,
      },
      foreignKey: 'torment_spirit_row',
      otherKey: 'mod_row',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'TormentSpirits.dat';
  return model;
};
