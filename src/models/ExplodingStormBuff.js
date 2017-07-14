module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ExplodingStormBuff',
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
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      stat_values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown7: {
        type: DataTypes.INTEGER,
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
      unknown10: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown12: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      unknown23: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      unknown24: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
      unknown25: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 16,
      },
      is_only_spawning_near_player: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 18,
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
              attribute: 'buff_definitions_key1',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'friendly_monster_varieties_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'misc_objects_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'misc_animated_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'buff_visuals_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'enemy_monster_varieties_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'buff_definitions_key2',
            },
          ],
        },
      ],
      tableName: 'exploding_storm_buffs',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BuffDefinition, {
      foreignKey: {
        name: 'buff_definitions_key1',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BuffDefinition.hasMany(model, {
      foreignKey: {
        name: 'buff_definitions_key1',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.MonsterVariety, {
      foreignKey: {
        name: 'friendly_monster_varieties_key',
        $col_order: 9,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MonsterVariety.hasMany(model, {
      foreignKey: {
        name: 'friendly_monster_varieties_key',
        $col_order: 9,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.MiscObject, {
      foreignKey: {
        name: 'misc_objects_key',
        $col_order: 10,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MiscObject.hasMany(model, {
      foreignKey: {
        name: 'misc_objects_key',
        $col_order: 10,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.MiscAnimated, {
      foreignKey: {
        name: 'misc_animated_key',
        $col_order: 11,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MiscAnimated.hasMany(model, {
      foreignKey: {
        name: 'misc_animated_key',
        $col_order: 11,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.BuffVisual, {
      foreignKey: {
        name: 'buff_visuals_key',
        $col_order: 12,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BuffVisual.hasMany(model, {
      foreignKey: {
        name: 'buff_visuals_key',
        $col_order: 12,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.MonsterVariety, {
      foreignKey: {
        name: 'enemy_monster_varieties_key',
        $col_order: 13,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MonsterVariety.hasMany(model, {
      foreignKey: {
        name: 'enemy_monster_varieties_key',
        $col_order: 13,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.BuffDefinition, {
      foreignKey: {
        name: 'buff_definitions_key2',
        $col_order: 17,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BuffDefinition.hasMany(model, {
      foreignKey: {
        name: 'buff_definitions_key2',
        $col_order: 17,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'ExplodingStormBuffs.dat';
  return model;
};