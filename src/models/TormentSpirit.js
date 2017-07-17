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
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'monster_varieties_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'summoned_monster__monster_varieties_key',
            },
          ],
        },
      ],
      tableName: 'torment_spirits',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      foreignKey: {
        name: 'monster_varieties_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      foreignKey: {
        name: 'summoned_monster__monster_varieties_key',
        $col_order: 7,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'spirit__mods',
      through: models.TormentSpiritHabtmSpiritMod,
      foreignKey: 'torment_spirit_row',
      otherKey: 'mod_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'touched__mods',
      through: models.TormentSpiritHabtmTouchedMod,
      foreignKey: 'torment_spirit_row',
      otherKey: 'mod_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'possessed__mods',
      through: models.TormentSpiritHabtmPossessedMod,
      foreignKey: 'torment_spirit_row',
      otherKey: 'mod_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods0',
      through: models.TormentSpiritHabtmMods0,
      foreignKey: 'torment_spirit_row',
      otherKey: 'mod_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods1',
      through: models.TormentSpiritHabtmMods1,
      foreignKey: 'torment_spirit_row',
      otherKey: 'mod_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'TormentSpirits.dat';
  return model;
};
