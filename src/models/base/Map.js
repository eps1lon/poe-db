module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Map',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      regular__guild_character: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unique__guild_character: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      shaped__area_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
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
              attribute: 'base_item_types_key',
            },
          ],
          name: 'index_base_item_types_key',
        },
        {
          fields: [
            {
              attribute: 'regular__world_areas_key',
            },
          ],
          name: 'index_regular__world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'unique__world_areas_key',
            },
          ],
          name: 'index_unique__world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'map_upgrade__base_item_types_key',
            },
          ],
          name: 'index_map_upgrade__base_item_types_key',
        },
        {
          fields: [
            {
              attribute: 'shaped__base__maps_key',
            },
          ],
          name: 'index_shaped__base__maps_key',
        },
        {
          fields: [
            {
              attribute: 'maps_key1',
            },
          ],
          name: 'index_maps_key1',
        },
        {
          fields: [
            {
              attribute: 'maps_key2',
            },
          ],
          name: 'index_maps_key2',
        },
        {
          fields: [
            {
              attribute: 'maps_key3',
            },
          ],
          name: 'index_maps_key3',
        },
      ],
      tableName: 'maps',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'regular__world_area',
      foreignKey: {
        name: 'regular__world_areas_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'unique__world_area',
      foreignKey: {
        name: 'unique__world_areas_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      as: 'map_upgrade__base_item_type',
      foreignKey: {
        name: 'map_upgrade__base_item_types_key',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Map, {
      as: 'shaped__base__map',
      foreignKey: {
        name: 'shaped__base__maps_key',
        $col_order: 10,
        $type: 'int',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Map, {
      as: 'maps1',
      foreignKey: {
        name: 'maps_key1',
        $col_order: 12,
        $type: 'int',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Map, {
      as: 'maps2',
      foreignKey: {
        name: 'maps_key2',
        $col_order: 13,
        $type: 'int',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Map, {
      as: 'maps3',
      foreignKey: {
        name: 'maps_key3',
        $col_order: 14,
        $type: 'int',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterPack, {
      as: 'monster_packs',
      through: {
        model: models.MapHabtmMonsterPack,
        unique: false,
      },
      foreignKey: 'map_row',
      otherKey: 'monster_pack_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'higher_tier_maps__base_item_types',
      through: {
        model: models.MapHabtmHigherTierMapsBaseitemtype,
        unique: false,
      },
      foreignKey: 'map_row',
      otherKey: 'base_item_type_row',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Maps.dat';
  return model;
};
