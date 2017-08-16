module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Essence',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
      unknown1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown4: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown5: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown6: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      unknown7: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      unknown8: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      unknown9: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown10: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      unknown11: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      unknown23: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 23,
      },
      drop_level_minimum: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 24,
      },
      drop_level_maximum: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 25,
      },
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 28,
      },
      unknown31: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 29,
      },
      item_level_restriction: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 55,
      },
      is_screaming_essence: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 62,
      },
      _monster_mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 26,
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
              attribute: 'base_item_types_key',
            },
          ],
          name: 'index_base_item_types_key',
        },
        {
          fields: [
            {
              attribute: 'mods_key1',
            },
          ],
          name: 'index_mods_key1',
        },
        {
          fields: [
            {
              attribute: 'mods_key2',
            },
          ],
          name: 'index_mods_key2',
        },
        {
          fields: [
            {
              attribute: 'quiver_mods_key',
            },
          ],
          name: 'index_quiver_mods_key',
        },
        {
          fields: [
            {
              attribute: 'amulet1_mods_key',
            },
          ],
          name: 'index_amulet1_mods_key',
        },
        {
          fields: [
            {
              attribute: 'belt1_mods_key',
            },
          ],
          name: 'index_belt1_mods_key',
        },
        {
          fields: [
            {
              attribute: 'belt3_mods_key',
            },
          ],
          name: 'index_belt3_mods_key',
        },
        {
          fields: [
            {
              attribute: 'gloves1_mods_key',
            },
          ],
          name: 'index_gloves1_mods_key',
        },
        {
          fields: [
            {
              attribute: 'boots1_mods_key',
            },
          ],
          name: 'index_boots1_mods_key',
        },
        {
          fields: [
            {
              attribute: 'body_armour1_mods_key',
            },
          ],
          name: 'index_body_armour1_mods_key',
        },
        {
          fields: [
            {
              attribute: 'helmet1_mods_key',
            },
          ],
          name: 'index_helmet1_mods_key',
        },
        {
          fields: [
            {
              attribute: 'shield1_mods_key',
            },
          ],
          name: 'index_shield1_mods_key',
        },
        {
          fields: [
            {
              attribute: 'essence_type_key',
            },
          ],
          name: 'index_essence_type_key',
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key1',
            },
          ],
          name: 'index_1_hand_mods_key1',
        },
        {
          fields: [
            {
              attribute: 'mods_key13',
            },
          ],
          name: 'index_mods_key13',
        },
        {
          fields: [
            {
              attribute: 'mods_key14',
            },
          ],
          name: 'index_mods_key14',
        },
        {
          fields: [
            {
              attribute: 'mods_key15',
            },
          ],
          name: 'index_mods_key15',
        },
        {
          fields: [
            {
              attribute: '2_hand_mods_key1',
            },
          ],
          name: 'index_2_hand_mods_key1',
        },
        {
          fields: [
            {
              attribute: 'boots3_mods_key',
            },
          ],
          name: 'index_boots3_mods_key',
        },
        {
          fields: [
            {
              attribute: 'ranged_mods_key',
            },
          ],
          name: 'index_ranged_mods_key',
        },
        {
          fields: [
            {
              attribute: 'helmet2_mods_key',
            },
          ],
          name: 'index_helmet2_mods_key',
        },
        {
          fields: [
            {
              attribute: 'body_armour2_mods_key',
            },
          ],
          name: 'index_body_armour2_mods_key',
        },
        {
          fields: [
            {
              attribute: 'boots2_mods_key',
            },
          ],
          name: 'index_boots2_mods_key',
        },
        {
          fields: [
            {
              attribute: 'gloves2_mods_key',
            },
          ],
          name: 'index_gloves2_mods_key',
        },
        {
          fields: [
            {
              attribute: 'bow_mods_key',
            },
          ],
          name: 'index_bow_mods_key',
        },
        {
          fields: [
            {
              attribute: 'wand_mods_key',
            },
          ],
          name: 'index_wand_mods_key',
        },
        {
          fields: [
            {
              attribute: '2_hand_mods_key2',
            },
          ],
          name: 'index_2_hand_mods_key2',
        },
        {
          fields: [
            {
              attribute: '2_hand_mods_key3',
            },
          ],
          name: 'index_2_hand_mods_key3',
        },
        {
          fields: [
            {
              attribute: '2_hand_mods_key4',
            },
          ],
          name: 'index_2_hand_mods_key4',
        },
        {
          fields: [
            {
              attribute: '2_hand_mods_key5',
            },
          ],
          name: 'index_2_hand_mods_key5',
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key2',
            },
          ],
          name: 'index_1_hand_mods_key2',
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key3',
            },
          ],
          name: 'index_1_hand_mods_key3',
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key4',
            },
          ],
          name: 'index_1_hand_mods_key4',
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key5',
            },
          ],
          name: 'index_1_hand_mods_key5',
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key6',
            },
          ],
          name: 'index_1_hand_mods_key6',
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key7',
            },
          ],
          name: 'index_1_hand_mods_key7',
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key8',
            },
          ],
          name: 'index_1_hand_mods_key8',
        },
        {
          fields: [
            {
              attribute: '1_hand_mods_key9',
            },
          ],
          name: 'index_1_hand_mods_key9',
        },
        {
          fields: [
            {
              attribute: 'belt2_mods_key',
            },
          ],
          name: 'index_belt2_mods_key',
        },
        {
          fields: [
            {
              attribute: 'amulet2_mods_key',
            },
          ],
          name: 'index_amulet2_mods_key',
        },
        {
          fields: [
            {
              attribute: 'ring_mods_key',
            },
          ],
          name: 'index_ring_mods_key',
        },
        {
          fields: [
            {
              attribute: 'mods_key41',
            },
          ],
          name: 'index_mods_key41',
        },
        {
          fields: [
            {
              attribute: 'shield2_mods_key',
            },
          ],
          name: 'index_shield2_mods_key',
        },
        {
          fields: [
            {
              attribute: 'mods_key43',
            },
          ],
          name: 'index_mods_key43',
        },
      ],
      tableName: 'essences',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      $inverse: 'essences',
      $col_order: 0,
      foreignKey: {
        name: 'base_item_types_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods1',
      $inverse: 'essences1',
      $col_order: 12,
      foreignKey: {
        name: 'mods_key1',
        $type: 'ulong',
        $col_order: 12,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods2',
      $inverse: 'essences2',
      $col_order: 13,
      foreignKey: {
        name: 'mods_key2',
        $type: 'ulong',
        $col_order: 13,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'quiver_mod',
      $inverse: 'essences',
      $col_order: 14,
      foreignKey: {
        name: 'quiver_mods_key',
        $type: 'ulong',
        $col_order: 14,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'amulet1_mod',
      $inverse: 'essences',
      $col_order: 15,
      foreignKey: {
        name: 'amulet1_mods_key',
        $type: 'ulong',
        $col_order: 15,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'belt1_mod',
      $inverse: 'essences',
      $col_order: 16,
      foreignKey: {
        name: 'belt1_mods_key',
        $type: 'ulong',
        $col_order: 16,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'belt3_mod',
      $inverse: 'essences',
      $col_order: 17,
      foreignKey: {
        name: 'belt3_mods_key',
        $type: 'ulong',
        $col_order: 17,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'gloves1_mod',
      $inverse: 'essences',
      $col_order: 18,
      foreignKey: {
        name: 'gloves1_mods_key',
        $type: 'ulong',
        $col_order: 18,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'boots1_mod',
      $inverse: 'essences',
      $col_order: 19,
      foreignKey: {
        name: 'boots1_mods_key',
        $type: 'ulong',
        $col_order: 19,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'body_armour1_mod',
      $inverse: 'essences',
      $col_order: 20,
      foreignKey: {
        name: 'body_armour1_mods_key',
        $type: 'ulong',
        $col_order: 20,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'helmet1_mod',
      $inverse: 'essences',
      $col_order: 21,
      foreignKey: {
        name: 'helmet1_mods_key',
        $type: 'ulong',
        $col_order: 21,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'shield1_mod',
      $inverse: 'essences',
      $col_order: 22,
      foreignKey: {
        name: 'shield1_mods_key',
        $type: 'ulong',
        $col_order: 22,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.EssenceType, {
      as: 'essence_type',
      $inverse: 'essences',
      $col_order: 27,
      foreignKey: {
        name: 'essence_type_key',
        $type: 'ulong',
        $col_order: 27,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_mods1',
      $inverse: 'essences1',
      $col_order: 30,
      foreignKey: {
        name: '1_hand_mods_key1',
        $type: 'ulong',
        $col_order: 30,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods13',
      $inverse: 'essences13',
      $col_order: 31,
      foreignKey: {
        name: 'mods_key13',
        $type: 'ulong',
        $col_order: 31,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods14',
      $inverse: 'essences14',
      $col_order: 32,
      foreignKey: {
        name: 'mods_key14',
        $type: 'ulong',
        $col_order: 32,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods15',
      $inverse: 'essences15',
      $col_order: 33,
      foreignKey: {
        name: 'mods_key15',
        $type: 'ulong',
        $col_order: 33,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand_mods1',
      $inverse: 'essences1',
      $col_order: 34,
      foreignKey: {
        name: '2_hand_mods_key1',
        $type: 'ulong',
        $col_order: 34,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'boots3_mod',
      $inverse: 'essences',
      $col_order: 35,
      foreignKey: {
        name: 'boots3_mods_key',
        $type: 'ulong',
        $col_order: 35,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'ranged_mod',
      $inverse: 'essences',
      $col_order: 36,
      foreignKey: {
        name: 'ranged_mods_key',
        $type: 'ulong',
        $col_order: 36,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'helmet2_mod',
      $inverse: 'essences',
      $col_order: 37,
      foreignKey: {
        name: 'helmet2_mods_key',
        $type: 'ulong',
        $col_order: 37,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'body_armour2_mod',
      $inverse: 'essences',
      $col_order: 38,
      foreignKey: {
        name: 'body_armour2_mods_key',
        $type: 'ulong',
        $col_order: 38,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'boots2_mod',
      $inverse: 'essences',
      $col_order: 39,
      foreignKey: {
        name: 'boots2_mods_key',
        $type: 'ulong',
        $col_order: 39,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'gloves2_mod',
      $inverse: 'essences',
      $col_order: 40,
      foreignKey: {
        name: 'gloves2_mods_key',
        $type: 'ulong',
        $col_order: 40,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'bow_mod',
      $inverse: 'essences',
      $col_order: 41,
      foreignKey: {
        name: 'bow_mods_key',
        $type: 'ulong',
        $col_order: 41,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'wand_mod',
      $inverse: 'essences',
      $col_order: 42,
      foreignKey: {
        name: 'wand_mods_key',
        $type: 'ulong',
        $col_order: 42,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand_mods2',
      $inverse: 'essences2',
      $col_order: 43,
      foreignKey: {
        name: '2_hand_mods_key2',
        $type: 'ulong',
        $col_order: 43,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand_mods3',
      $inverse: 'essences3',
      $col_order: 44,
      foreignKey: {
        name: '2_hand_mods_key3',
        $type: 'ulong',
        $col_order: 44,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand_mods4',
      $inverse: 'essences4',
      $col_order: 45,
      foreignKey: {
        name: '2_hand_mods_key4',
        $type: 'ulong',
        $col_order: 45,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand_mods5',
      $inverse: 'essences5',
      $col_order: 46,
      foreignKey: {
        name: '2_hand_mods_key5',
        $type: 'ulong',
        $col_order: 46,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_mods2',
      $inverse: 'essences2',
      $col_order: 47,
      foreignKey: {
        name: '1_hand_mods_key2',
        $type: 'ulong',
        $col_order: 47,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_mods3',
      $inverse: 'essences3',
      $col_order: 48,
      foreignKey: {
        name: '1_hand_mods_key3',
        $type: 'ulong',
        $col_order: 48,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_mods4',
      $inverse: 'essences4',
      $col_order: 49,
      foreignKey: {
        name: '1_hand_mods_key4',
        $type: 'ulong',
        $col_order: 49,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_mods5',
      $inverse: 'essences5',
      $col_order: 50,
      foreignKey: {
        name: '1_hand_mods_key5',
        $type: 'ulong',
        $col_order: 50,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_mods6',
      $inverse: 'essences6',
      $col_order: 51,
      foreignKey: {
        name: '1_hand_mods_key6',
        $type: 'ulong',
        $col_order: 51,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_mods7',
      $inverse: 'essences7',
      $col_order: 52,
      foreignKey: {
        name: '1_hand_mods_key7',
        $type: 'ulong',
        $col_order: 52,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_mods8',
      $inverse: 'essences8',
      $col_order: 53,
      foreignKey: {
        name: '1_hand_mods_key8',
        $type: 'ulong',
        $col_order: 53,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_mods9',
      $inverse: 'essences9',
      $col_order: 54,
      foreignKey: {
        name: '1_hand_mods_key9',
        $type: 'ulong',
        $col_order: 54,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'belt2_mod',
      $inverse: 'essences',
      $col_order: 56,
      foreignKey: {
        name: 'belt2_mods_key',
        $type: 'ulong',
        $col_order: 56,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'amulet2_mod',
      $inverse: 'essences',
      $col_order: 57,
      foreignKey: {
        name: 'amulet2_mods_key',
        $type: 'ulong',
        $col_order: 57,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'ring_mod',
      $inverse: 'essences',
      $col_order: 58,
      foreignKey: {
        name: 'ring_mods_key',
        $type: 'ulong',
        $col_order: 58,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods41',
      $inverse: 'essences41',
      $col_order: 59,
      foreignKey: {
        name: 'mods_key41',
        $type: 'ulong',
        $col_order: 59,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'shield2_mod',
      $inverse: 'essences',
      $col_order: 60,
      foreignKey: {
        name: 'shield2_mods_key',
        $type: 'ulong',
        $col_order: 60,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods43',
      $inverse: 'essences43',
      $col_order: 61,
      foreignKey: {
        name: 'mods_key43',
        $type: 'ulong',
        $col_order: 61,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'monster_mods',
      through: {
        model: models.EssenceHabtmMonsterMod,
        unique: false,
      },
      foreignKey: 'essence_row',
      otherKey: 'mod_row',
      $col_order: 26,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Essences.dat';
  return model;
};
