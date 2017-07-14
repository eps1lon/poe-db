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
          fields: ['base_item_types_key'],
        },
        {
          fields: ['mods_key1'],
        },
        {
          fields: ['mods_key2'],
        },
        {
          fields: ['quiver_mods_key'],
        },
        {
          fields: ['amulet1_mods_key'],
        },
        {
          fields: ['belt1_mods_key'],
        },
        {
          fields: ['belt3_mods_key'],
        },
        {
          fields: ['gloves1_mods_key'],
        },
        {
          fields: ['boots1_mods_key'],
        },
        {
          fields: ['body_armour1_mods_key'],
        },
        {
          fields: ['helmet1_mods_key'],
        },
        {
          fields: ['shield1_mods_key'],
        },
        {
          fields: ['essence_type_key'],
        },
        {
          fields: ['1_hand_mods_key1'],
        },
        {
          fields: ['mods_key13'],
        },
        {
          fields: ['mods_key14'],
        },
        {
          fields: ['mods_key15'],
        },
        {
          fields: ['2_hand_mods_key1'],
        },
        {
          fields: ['boots3_mods_key'],
        },
        {
          fields: ['ranged_mods_key'],
        },
        {
          fields: ['helmet2_mods_key'],
        },
        {
          fields: ['body_armour2_mods_key'],
        },
        {
          fields: ['boots2_mods_key'],
        },
        {
          fields: ['gloves2_mods_key'],
        },
        {
          fields: ['bow_mods_key'],
        },
        {
          fields: ['wand_mods_key'],
        },
        {
          fields: ['2_hand_mods_key2'],
        },
        {
          fields: ['2_hand_mods_key3'],
        },
        {
          fields: ['2_hand_mods_key4'],
        },
        {
          fields: ['2_hand_mods_key5'],
        },
        {
          fields: ['1_hand_mods_key2'],
        },
        {
          fields: ['1_hand_mods_key3'],
        },
        {
          fields: ['1_hand_mods_key4'],
        },
        {
          fields: ['1_hand_mods_key5'],
        },
        {
          fields: ['1_hand_mods_key6'],
        },
        {
          fields: ['1_hand_mods_key7'],
        },
        {
          fields: ['1_hand_mods_key8'],
        },
        {
          fields: ['1_hand_mods_key9'],
        },
        {
          fields: ['belt2_mods_key'],
        },
        {
          fields: ['amulet2_mods_key'],
        },
        {
          fields: ['ring_mods_key'],
        },
        {
          fields: ['mods_key41'],
        },
        {
          fields: ['shield2_mods_key'],
        },
        {
          fields: ['mods_key43'],
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemType.hasMany(model, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key1',
        $col_order: 12,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key2',
        $col_order: 13,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'quiver_mods_key',
        $col_order: 14,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'amulet1_mods_key',
        $col_order: 15,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'belt1_mods_key',
        $col_order: 16,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'belt3_mods_key',
        $col_order: 17,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'gloves1_mods_key',
        $col_order: 18,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'boots1_mods_key',
        $col_order: 19,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'body_armour1_mods_key',
        $col_order: 20,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'helmet1_mods_key',
        $col_order: 21,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'shield1_mods_key',
        $col_order: 22,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.EssenceType.hasMany(model, {
      foreignKey: {
        name: 'essence_type_key',
        $col_order: 27,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key1',
        $col_order: 30,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key13',
        $col_order: 31,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key14',
        $col_order: 32,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key15',
        $col_order: 33,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '2_hand_mods_key1',
        $col_order: 34,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'boots3_mods_key',
        $col_order: 35,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'ranged_mods_key',
        $col_order: 36,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'helmet2_mods_key',
        $col_order: 37,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'body_armour2_mods_key',
        $col_order: 38,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'boots2_mods_key',
        $col_order: 39,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'gloves2_mods_key',
        $col_order: 40,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'bow_mods_key',
        $col_order: 41,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'wand_mods_key',
        $col_order: 42,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '2_hand_mods_key2',
        $col_order: 43,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '2_hand_mods_key3',
        $col_order: 44,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '2_hand_mods_key4',
        $col_order: 45,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '2_hand_mods_key5',
        $col_order: 46,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key2',
        $col_order: 47,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key3',
        $col_order: 48,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key4',
        $col_order: 49,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key5',
        $col_order: 50,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key6',
        $col_order: 51,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key7',
        $col_order: 52,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key8',
        $col_order: 53,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: '1_hand_mods_key9',
        $col_order: 54,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'belt2_mods_key',
        $col_order: 56,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'amulet2_mods_key',
        $col_order: 57,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'ring_mods_key',
        $col_order: 58,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key41',
        $col_order: 59,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'shield2_mods_key',
        $col_order: 60,
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mod.hasMany(model, {
      foreignKey: {
        name: 'mods_key43',
        $col_order: 61,
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
