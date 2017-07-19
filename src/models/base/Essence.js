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
              attribute: 'quiver__mods_key',
            },
          ],
          name: 'index_quiver__mods_key',
        },
        {
          fields: [
            {
              attribute: 'amulet1__mods_key',
            },
          ],
          name: 'index_amulet1__mods_key',
        },
        {
          fields: [
            {
              attribute: 'belt1__mods_key',
            },
          ],
          name: 'index_belt1__mods_key',
        },
        {
          fields: [
            {
              attribute: 'belt3__mods_key',
            },
          ],
          name: 'index_belt3__mods_key',
        },
        {
          fields: [
            {
              attribute: 'gloves1__mods_key',
            },
          ],
          name: 'index_gloves1__mods_key',
        },
        {
          fields: [
            {
              attribute: 'boots1__mods_key',
            },
          ],
          name: 'index_boots1__mods_key',
        },
        {
          fields: [
            {
              attribute: 'body_armour1__mods_key',
            },
          ],
          name: 'index_body_armour1__mods_key',
        },
        {
          fields: [
            {
              attribute: 'helmet1__mods_key',
            },
          ],
          name: 'index_helmet1__mods_key',
        },
        {
          fields: [
            {
              attribute: 'shield1__mods_key',
            },
          ],
          name: 'index_shield1__mods_key',
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
              attribute: '1_hand__mods_key1',
            },
          ],
          name: 'index_1_hand__mods_key1',
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
              attribute: '2_hand__mods_key1',
            },
          ],
          name: 'index_2_hand__mods_key1',
        },
        {
          fields: [
            {
              attribute: 'boots3__mods_key',
            },
          ],
          name: 'index_boots3__mods_key',
        },
        {
          fields: [
            {
              attribute: 'ranged__mods_key',
            },
          ],
          name: 'index_ranged__mods_key',
        },
        {
          fields: [
            {
              attribute: 'helmet2__mods_key',
            },
          ],
          name: 'index_helmet2__mods_key',
        },
        {
          fields: [
            {
              attribute: 'body_armour2__mods_key',
            },
          ],
          name: 'index_body_armour2__mods_key',
        },
        {
          fields: [
            {
              attribute: 'boots2__mods_key',
            },
          ],
          name: 'index_boots2__mods_key',
        },
        {
          fields: [
            {
              attribute: 'gloves2__mods_key',
            },
          ],
          name: 'index_gloves2__mods_key',
        },
        {
          fields: [
            {
              attribute: 'bow__mods_key',
            },
          ],
          name: 'index_bow__mods_key',
        },
        {
          fields: [
            {
              attribute: 'wand__mods_key',
            },
          ],
          name: 'index_wand__mods_key',
        },
        {
          fields: [
            {
              attribute: '2_hand__mods_key2',
            },
          ],
          name: 'index_2_hand__mods_key2',
        },
        {
          fields: [
            {
              attribute: '2_hand__mods_key3',
            },
          ],
          name: 'index_2_hand__mods_key3',
        },
        {
          fields: [
            {
              attribute: '2_hand__mods_key4',
            },
          ],
          name: 'index_2_hand__mods_key4',
        },
        {
          fields: [
            {
              attribute: '2_hand__mods_key5',
            },
          ],
          name: 'index_2_hand__mods_key5',
        },
        {
          fields: [
            {
              attribute: '1_hand__mods_key2',
            },
          ],
          name: 'index_1_hand__mods_key2',
        },
        {
          fields: [
            {
              attribute: '1_hand__mods_key3',
            },
          ],
          name: 'index_1_hand__mods_key3',
        },
        {
          fields: [
            {
              attribute: '1_hand__mods_key4',
            },
          ],
          name: 'index_1_hand__mods_key4',
        },
        {
          fields: [
            {
              attribute: '1_hand__mods_key5',
            },
          ],
          name: 'index_1_hand__mods_key5',
        },
        {
          fields: [
            {
              attribute: '1_hand__mods_key6',
            },
          ],
          name: 'index_1_hand__mods_key6',
        },
        {
          fields: [
            {
              attribute: '1_hand__mods_key7',
            },
          ],
          name: 'index_1_hand__mods_key7',
        },
        {
          fields: [
            {
              attribute: '1_hand__mods_key8',
            },
          ],
          name: 'index_1_hand__mods_key8',
        },
        {
          fields: [
            {
              attribute: '1_hand__mods_key9',
            },
          ],
          name: 'index_1_hand__mods_key9',
        },
        {
          fields: [
            {
              attribute: 'belt2__mods_key',
            },
          ],
          name: 'index_belt2__mods_key',
        },
        {
          fields: [
            {
              attribute: 'amulet2__mods_key',
            },
          ],
          name: 'index_amulet2__mods_key',
        },
        {
          fields: [
            {
              attribute: 'ring__mods_key',
            },
          ],
          name: 'index_ring__mods_key',
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
              attribute: 'shield2__mods_key',
            },
          ],
          name: 'index_shield2__mods_key',
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
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      $inverse: 'essences',
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods1',
      $inverse: 'essences1',
      foreignKey: {
        name: 'mods_key1',
        $col_order: 12,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods2',
      $inverse: 'essences2',
      foreignKey: {
        name: 'mods_key2',
        $col_order: 13,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'quiver__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'quiver__mods_key',
        $col_order: 14,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'amulet1__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'amulet1__mods_key',
        $col_order: 15,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'belt1__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'belt1__mods_key',
        $col_order: 16,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'belt3__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'belt3__mods_key',
        $col_order: 17,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'gloves1__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'gloves1__mods_key',
        $col_order: 18,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'boots1__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'boots1__mods_key',
        $col_order: 19,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'body_armour1__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'body_armour1__mods_key',
        $col_order: 20,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'helmet1__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'helmet1__mods_key',
        $col_order: 21,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'shield1__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'shield1__mods_key',
        $col_order: 22,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.EssenceType, {
      as: 'essence_type',
      $inverse: 'essences',
      foreignKey: {
        name: 'essence_type_key',
        $col_order: 27,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand__mods1',
      $inverse: 'essences1',
      foreignKey: {
        name: '1_hand__mods_key1',
        $col_order: 30,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods13',
      $inverse: 'essences13',
      foreignKey: {
        name: 'mods_key13',
        $col_order: 31,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods14',
      $inverse: 'essences14',
      foreignKey: {
        name: 'mods_key14',
        $col_order: 32,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods15',
      $inverse: 'essences15',
      foreignKey: {
        name: 'mods_key15',
        $col_order: 33,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand__mods1',
      $inverse: 'essences1',
      foreignKey: {
        name: '2_hand__mods_key1',
        $col_order: 34,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'boots3__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'boots3__mods_key',
        $col_order: 35,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'ranged__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'ranged__mods_key',
        $col_order: 36,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'helmet2__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'helmet2__mods_key',
        $col_order: 37,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'body_armour2__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'body_armour2__mods_key',
        $col_order: 38,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'boots2__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'boots2__mods_key',
        $col_order: 39,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'gloves2__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'gloves2__mods_key',
        $col_order: 40,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'bow__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'bow__mods_key',
        $col_order: 41,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'wand__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'wand__mods_key',
        $col_order: 42,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand__mods2',
      $inverse: 'essences2',
      foreignKey: {
        name: '2_hand__mods_key2',
        $col_order: 43,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand__mods3',
      $inverse: 'essences3',
      foreignKey: {
        name: '2_hand__mods_key3',
        $col_order: 44,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand__mods4',
      $inverse: 'essences4',
      foreignKey: {
        name: '2_hand__mods_key4',
        $col_order: 45,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand__mods5',
      $inverse: 'essences5',
      foreignKey: {
        name: '2_hand__mods_key5',
        $col_order: 46,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand__mods2',
      $inverse: 'essences2',
      foreignKey: {
        name: '1_hand__mods_key2',
        $col_order: 47,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand__mods3',
      $inverse: 'essences3',
      foreignKey: {
        name: '1_hand__mods_key3',
        $col_order: 48,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand__mods4',
      $inverse: 'essences4',
      foreignKey: {
        name: '1_hand__mods_key4',
        $col_order: 49,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand__mods5',
      $inverse: 'essences5',
      foreignKey: {
        name: '1_hand__mods_key5',
        $col_order: 50,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand__mods6',
      $inverse: 'essences6',
      foreignKey: {
        name: '1_hand__mods_key6',
        $col_order: 51,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand__mods7',
      $inverse: 'essences7',
      foreignKey: {
        name: '1_hand__mods_key7',
        $col_order: 52,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand__mods8',
      $inverse: 'essences8',
      foreignKey: {
        name: '1_hand__mods_key8',
        $col_order: 53,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand__mods9',
      $inverse: 'essences9',
      foreignKey: {
        name: '1_hand__mods_key9',
        $col_order: 54,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'belt2__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'belt2__mods_key',
        $col_order: 56,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'amulet2__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'amulet2__mods_key',
        $col_order: 57,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'ring__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'ring__mods_key',
        $col_order: 58,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods41',
      $inverse: 'essences41',
      foreignKey: {
        name: 'mods_key41',
        $col_order: 59,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'shield2__mod',
      $inverse: 'essences',
      foreignKey: {
        name: 'shield2__mods_key',
        $col_order: 60,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mods43',
      $inverse: 'essences43',
      foreignKey: {
        name: 'mods_key43',
        $col_order: 61,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'monster__mods',
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
