module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Bloodline',
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
      min_zone_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      max_zone_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown11: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      unknown20: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      keys2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
      _mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
      },
      _spawn_weight_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
      _item_weight_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 9,
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
              attribute: 'buff_definitions_key',
            },
          ],
          name: 'index_buff_definitions_key',
        },
        {
          fields: [
            {
              attribute: 'monster_varieties_key',
            },
          ],
          name: 'index_monster_varieties_key',
        },
      ],
      tableName: 'bloodlines',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BuffDefinition, {
      as: 'buff_definition',
      $inverse: 'bloodlines',
      $col_order: 7,
      foreignKey: {
        name: 'buff_definitions_key',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'monster_variety',
      $inverse: 'bloodlines',
      $col_order: 11,
      foreignKey: {
        name: 'monster_varieties_key',
        $type: 'ulong',
        $col_order: 11,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.BloodlineHabtmMod,
        unique: false,
      },
      foreignKey: 'bloodline_row',
      otherKey: 'mod_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'spawn_weight_tags',
      through: {
        model: models.BloodlineHabtmSpawnWeightTag,
        unique: false,
      },
      foreignKey: 'bloodline_row',
      otherKey: 'tag_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'item_weight_tags',
      through: {
        model: models.BloodlineHabtmItemWeightTag,
        unique: false,
      },
      foreignKey: 'bloodline_row',
      otherKey: 'tag_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Bloodlines.dat';
  return model;
};
