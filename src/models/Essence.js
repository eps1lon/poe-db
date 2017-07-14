module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Essence',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown4: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      unknown5: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      unknown6: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown7: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown8: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      unknown9: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      unknown10: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      unknown11: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      unknown23: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 23,
      },
      drop_level_minimum: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 24,
      },
      drop_level_maximum: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 25,
      },
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 28,
      },
      unknown31: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 29,
      },
      item_level_restriction: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 55,
      },
      is_screaming_essence: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 62,
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
        },
        {
          fields: [
            {
              attribute: 'mods_key1',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'mods_key2',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'quiver_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'amulet1_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'belt1_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'belt3_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'gloves1_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'boots1_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'body_armour1_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'helmet1_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'shield1_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'essence_type_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key1',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'mods_key13',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'mods_key14',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'mods_key15',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '2_hand_mods_key1',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'boots3_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'ranged_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'helmet2_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'body_armour2_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'boots2_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'gloves2_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'bow_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'wand_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '2_hand_mods_key2',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '2_hand_mods_key3',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '2_hand_mods_key4',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '2_hand_mods_key5',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key2',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key3',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key4',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key5',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key6',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key7',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key8',
            },
          ],
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key9',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'belt2_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'amulet2_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'ring_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'mods_key41',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'shield2_mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'mods_key43',
            },
          ],
        },
      ],
      tableName: 'essences',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemType.hasMany(model, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'mods_key1',
        $col_order: 12,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key1',
        $col_order: 12,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'mods_key2',
        $col_order: 13,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key2',
        $col_order: 13,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'quiver_mods_key',
        $col_order: 14,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'quiver_mods_key',
        $col_order: 14,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'amulet1_mods_key',
        $col_order: 15,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'amulet1_mods_key',
        $col_order: 15,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'belt1_mods_key',
        $col_order: 16,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'belt1_mods_key',
        $col_order: 16,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'belt3_mods_key',
        $col_order: 17,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'belt3_mods_key',
        $col_order: 17,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'gloves1_mods_key',
        $col_order: 18,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'gloves1_mods_key',
        $col_order: 18,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'boots1_mods_key',
        $col_order: 19,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'boots1_mods_key',
        $col_order: 19,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'body_armour1_mods_key',
        $col_order: 20,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'body_armour1_mods_key',
        $col_order: 20,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'helmet1_mods_key',
        $col_order: 21,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'helmet1_mods_key',
        $col_order: 21,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'shield1_mods_key',
        $col_order: 22,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'shield1_mods_key',
        $col_order: 22,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.EssenceType, {
      foreignKey: {
        name: 'essence_type_key',
        $col_order: 27,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.EssenceType.hasMany(model, {
      foreignKey: {
        name: 'essence_type_key',
        $col_order: 27,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '1_hand_mods_key1',
        $col_order: 30,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key1',
        $col_order: 30,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'mods_key13',
        $col_order: 31,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key13',
        $col_order: 31,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'mods_key14',
        $col_order: 32,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key14',
        $col_order: 32,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'mods_key15',
        $col_order: 33,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key15',
        $col_order: 33,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '2_hand_mods_key1',
        $col_order: 34,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '2_hand_mods_key1',
        $col_order: 34,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'boots3_mods_key',
        $col_order: 35,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'boots3_mods_key',
        $col_order: 35,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'ranged_mods_key',
        $col_order: 36,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'ranged_mods_key',
        $col_order: 36,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'helmet2_mods_key',
        $col_order: 37,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'helmet2_mods_key',
        $col_order: 37,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'body_armour2_mods_key',
        $col_order: 38,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'body_armour2_mods_key',
        $col_order: 38,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'boots2_mods_key',
        $col_order: 39,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'boots2_mods_key',
        $col_order: 39,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'gloves2_mods_key',
        $col_order: 40,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'gloves2_mods_key',
        $col_order: 40,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'bow_mods_key',
        $col_order: 41,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'bow_mods_key',
        $col_order: 41,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'wand_mods_key',
        $col_order: 42,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'wand_mods_key',
        $col_order: 42,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '2_hand_mods_key2',
        $col_order: 43,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '2_hand_mods_key2',
        $col_order: 43,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '2_hand_mods_key3',
        $col_order: 44,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '2_hand_mods_key3',
        $col_order: 44,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '2_hand_mods_key4',
        $col_order: 45,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '2_hand_mods_key4',
        $col_order: 45,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '2_hand_mods_key5',
        $col_order: 46,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '2_hand_mods_key5',
        $col_order: 46,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '1_hand_mods_key2',
        $col_order: 47,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key2',
        $col_order: 47,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '1_hand_mods_key3',
        $col_order: 48,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key3',
        $col_order: 48,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '1_hand_mods_key4',
        $col_order: 49,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key4',
        $col_order: 49,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '1_hand_mods_key5',
        $col_order: 50,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key5',
        $col_order: 50,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '1_hand_mods_key6',
        $col_order: 51,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key6',
        $col_order: 51,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '1_hand_mods_key7',
        $col_order: 52,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key7',
        $col_order: 52,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '1_hand_mods_key8',
        $col_order: 53,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key8',
        $col_order: 53,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: '1_hand_mods_key9',
        $col_order: 54,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key9',
        $col_order: 54,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'belt2_mods_key',
        $col_order: 56,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'belt2_mods_key',
        $col_order: 56,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'amulet2_mods_key',
        $col_order: 57,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'amulet2_mods_key',
        $col_order: 57,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'ring_mods_key',
        $col_order: 58,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'ring_mods_key',
        $col_order: 58,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'mods_key41',
        $col_order: 59,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key41',
        $col_order: 59,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'shield2_mods_key',
        $col_order: 60,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'shield2_mods_key',
        $col_order: 60,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'mods_key43',
        $col_order: 61,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key43',
        $col_order: 61,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Mod, {
      as: 'monster_mods',
      through: 'EssenceMonsterMods',
      $col_order: 26,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Essences.dat';
  return model;
};