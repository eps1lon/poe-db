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
          name: 'index_buff_definitions_key1',
        },
        {
          fields: [
            {
              attribute: 'friendly_monster_varieties_key',
            },
          ],
          name: 'index_friendly_monster_varieties_key',
        },
        {
          fields: [
            {
              attribute: 'misc_objects_key',
            },
          ],
          name: 'index_misc_objects_key',
        },
        {
          fields: [
            {
              attribute: 'misc_animated_key',
            },
          ],
          name: 'index_misc_animated_key',
        },
        {
          fields: [
            {
              attribute: 'buff_visuals_key',
            },
          ],
          name: 'index_buff_visuals_key',
        },
        {
          fields: [
            {
              attribute: 'enemy_monster_varieties_key',
            },
          ],
          name: 'index_enemy_monster_varieties_key',
        },
        {
          fields: [
            {
              attribute: 'buff_definitions_key2',
            },
          ],
          name: 'index_buff_definitions_key2',
        },
      ],
      tableName: 'exploding_storm_buffs',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BuffDefinition, {
      as: 'buff_definitions1',
      $inverse: 'exploding_storm_buffs1',
      $col_order: 1,
      foreignKey: {
        name: 'buff_definitions_key1',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'friendly_monster_variety',
      $inverse: 'exploding_storm_buffs',
      $col_order: 9,
      foreignKey: {
        name: 'friendly_monster_varieties_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MiscObject, {
      as: 'misc_object',
      $inverse: 'exploding_storm_buffs',
      $col_order: 10,
      foreignKey: {
        name: 'misc_objects_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MiscAnimated, {
      as: 'misc_animated',
      $inverse: 'exploding_storm_buffs',
      $col_order: 11,
      foreignKey: {
        name: 'misc_animated_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffVisual, {
      as: 'buff_visual',
      $inverse: 'exploding_storm_buffs',
      $col_order: 12,
      foreignKey: {
        name: 'buff_visuals_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'enemy_monster_variety',
      $inverse: 'exploding_storm_buffs',
      $col_order: 13,
      foreignKey: {
        name: 'enemy_monster_varieties_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinition, {
      as: 'buff_definitions2',
      $inverse: 'exploding_storm_buffs2',
      $col_order: 17,
      foreignKey: {
        name: 'buff_definitions_key2',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ExplodingStormBuffs.dat';
  return model;
};
