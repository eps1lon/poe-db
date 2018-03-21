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
              attribute: 'display_wand_mods_key',
            },
          ],
          name: 'index_display_wand_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_bow_mods_key',
            },
          ],
          name: 'index_display_bow_mods_key',
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
              attribute: 'display_amulet_mods_key',
            },
          ],
          name: 'index_display_amulet_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_ring_mods_key',
            },
          ],
          name: 'index_display_ring_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_belt_mods_key',
            },
          ],
          name: 'index_display_belt_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_gloves_mods_key',
            },
          ],
          name: 'index_display_gloves_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_boots_mods_key',
            },
          ],
          name: 'index_display_boots_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_body_armour_mods_key',
            },
          ],
          name: 'index_display_body_armour_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_helmet_mods_key',
            },
          ],
          name: 'index_display_helmet_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_shield_mods_key',
            },
          ],
          name: 'index_display_shield_mods_key',
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
              attribute: 'display_weapon_mods_key',
            },
          ],
          name: 'index_display_weapon_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_melee_weapon_mods_key',
            },
          ],
          name: 'index_display_melee_weapon_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_1_hand_weapon_mods_key',
            },
          ],
          name: 'index_display_1_hand_weapon_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_2_hand_weapon_mods_key',
            },
          ],
          name: 'index_display_2_hand_weapon_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_2_hand_melee_weapon_mods_key',
            },
          ],
          name: 'index_display_2_hand_melee_weapon_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_armour_mods_key',
            },
          ],
          name: 'index_display_armour_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_ranged_mods_key',
            },
          ],
          name: 'index_display_ranged_mods_key',
        },
        {
          fields: [
            {
              attribute: 'helmet_mods_key',
            },
          ],
          name: 'index_helmet_mods_key',
        },
        {
          fields: [
            {
              attribute: 'body_armour_mods_key',
            },
          ],
          name: 'index_body_armour_mods_key',
        },
        {
          fields: [
            {
              attribute: 'boots_mods_key',
            },
          ],
          name: 'index_boots_mods_key',
        },
        {
          fields: [
            {
              attribute: 'gloves_mods_key',
            },
          ],
          name: 'index_gloves_mods_key',
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
              attribute: 'staff_mods_key',
            },
          ],
          name: 'index_staff_mods_key',
        },
        {
          fields: [
            {
              attribute: '2_hand_sword_mods_key',
            },
          ],
          name: 'index_2_hand_sword_mods_key',
        },
        {
          fields: [
            {
              attribute: '2_hand_axe_mods_key',
            },
          ],
          name: 'index_2_hand_axe_mods_key',
        },
        {
          fields: [
            {
              attribute: '2_hand_mace_mods_key',
            },
          ],
          name: 'index_2_hand_mace_mods_key',
        },
        {
          fields: [
            {
              attribute: 'claw_mods_key',
            },
          ],
          name: 'index_claw_mods_key',
        },
        {
          fields: [
            {
              attribute: 'dagger_mods_key',
            },
          ],
          name: 'index_dagger_mods_key',
        },
        {
          fields: [
            {
              attribute: '1_hand_sword_mods_key',
            },
          ],
          name: 'index_1_hand_sword_mods_key',
        },
        {
          fields: [
            {
              attribute: '1_hand_thrusting_sword_mods_key',
            },
          ],
          name: 'index_1_hand_thrusting_sword_mods_key',
        },
        {
          fields: [
            {
              attribute: '1_hand_axe_mods_key',
            },
          ],
          name: 'index_1_hand_axe_mods_key',
        },
        {
          fields: [
            {
              attribute: '1_hand_mace_mods_key',
            },
          ],
          name: 'index_1_hand_mace_mods_key',
        },
        {
          fields: [
            {
              attribute: 'sceptre_mods_key',
            },
          ],
          name: 'index_sceptre_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_monster_mods_key',
            },
          ],
          name: 'index_display_monster_mods_key',
        },
        {
          fields: [
            {
              attribute: 'belt_mods_key',
            },
          ],
          name: 'index_belt_mods_key',
        },
        {
          fields: [
            {
              attribute: 'amulet_mods_key',
            },
          ],
          name: 'index_amulet_mods_key',
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
              attribute: 'display_jewellry_mods_key',
            },
          ],
          name: 'index_display_jewellry_mods_key',
        },
        {
          fields: [
            {
              attribute: 'shield_mods_key',
            },
          ],
          name: 'index_shield_mods_key',
        },
        {
          fields: [
            {
              attribute: 'display_item_mods_key',
            },
          ],
          name: 'index_display_item_mods_key',
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
      as: 'display_wand_mod',
      $inverse: 'essences',
      $col_order: 12,
      foreignKey: {
        name: 'display_wand_mods_key',
        $type: 'ulong',
        $col_order: 12,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_bow_mod',
      $inverse: 'essences',
      $col_order: 13,
      foreignKey: {
        name: 'display_bow_mods_key',
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
      as: 'display_amulet_mod',
      $inverse: 'essences',
      $col_order: 15,
      foreignKey: {
        name: 'display_amulet_mods_key',
        $type: 'ulong',
        $col_order: 15,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_ring_mod',
      $inverse: 'essences',
      $col_order: 16,
      foreignKey: {
        name: 'display_ring_mods_key',
        $type: 'ulong',
        $col_order: 16,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_belt_mod',
      $inverse: 'essences',
      $col_order: 17,
      foreignKey: {
        name: 'display_belt_mods_key',
        $type: 'ulong',
        $col_order: 17,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_gloves_mod',
      $inverse: 'essences',
      $col_order: 18,
      foreignKey: {
        name: 'display_gloves_mods_key',
        $type: 'ulong',
        $col_order: 18,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_boots_mod',
      $inverse: 'essences',
      $col_order: 19,
      foreignKey: {
        name: 'display_boots_mods_key',
        $type: 'ulong',
        $col_order: 19,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_body_armour_mod',
      $inverse: 'essences',
      $col_order: 20,
      foreignKey: {
        name: 'display_body_armour_mods_key',
        $type: 'ulong',
        $col_order: 20,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_helmet_mod',
      $inverse: 'essences',
      $col_order: 21,
      foreignKey: {
        name: 'display_helmet_mods_key',
        $type: 'ulong',
        $col_order: 21,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_shield_mod',
      $inverse: 'essences',
      $col_order: 22,
      foreignKey: {
        name: 'display_shield_mods_key',
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
      as: 'display_weapon_mod',
      $inverse: 'essences',
      $col_order: 30,
      foreignKey: {
        name: 'display_weapon_mods_key',
        $type: 'ulong',
        $col_order: 30,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_melee_weapon_mod',
      $inverse: 'essences',
      $col_order: 31,
      foreignKey: {
        name: 'display_melee_weapon_mods_key',
        $type: 'ulong',
        $col_order: 31,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_1_hand_weapon_mod',
      $inverse: 'essences',
      $col_order: 32,
      foreignKey: {
        name: 'display_1_hand_weapon_mods_key',
        $type: 'ulong',
        $col_order: 32,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_2_hand_weapon_mod',
      $inverse: 'essences',
      $col_order: 33,
      foreignKey: {
        name: 'display_2_hand_weapon_mods_key',
        $type: 'ulong',
        $col_order: 33,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_2_hand_melee_weapon_mod',
      $inverse: 'essences',
      $col_order: 34,
      foreignKey: {
        name: 'display_2_hand_melee_weapon_mods_key',
        $type: 'ulong',
        $col_order: 34,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_armour_mod',
      $inverse: 'essences',
      $col_order: 35,
      foreignKey: {
        name: 'display_armour_mods_key',
        $type: 'ulong',
        $col_order: 35,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_ranged_mod',
      $inverse: 'essences',
      $col_order: 36,
      foreignKey: {
        name: 'display_ranged_mods_key',
        $type: 'ulong',
        $col_order: 36,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'helmet_mod',
      $inverse: 'essences',
      $col_order: 37,
      foreignKey: {
        name: 'helmet_mods_key',
        $type: 'ulong',
        $col_order: 37,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'body_armour_mod',
      $inverse: 'essences',
      $col_order: 38,
      foreignKey: {
        name: 'body_armour_mods_key',
        $type: 'ulong',
        $col_order: 38,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'boots_mod',
      $inverse: 'essences',
      $col_order: 39,
      foreignKey: {
        name: 'boots_mods_key',
        $type: 'ulong',
        $col_order: 39,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'gloves_mod',
      $inverse: 'essences',
      $col_order: 40,
      foreignKey: {
        name: 'gloves_mods_key',
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
      as: 'staff_mod',
      $inverse: 'essences',
      $col_order: 43,
      foreignKey: {
        name: 'staff_mods_key',
        $type: 'ulong',
        $col_order: 43,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand_sword_mod',
      $inverse: 'essences',
      $col_order: 44,
      foreignKey: {
        name: '2_hand_sword_mods_key',
        $type: 'ulong',
        $col_order: 44,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand_axe_mod',
      $inverse: 'essences',
      $col_order: 45,
      foreignKey: {
        name: '2_hand_axe_mods_key',
        $type: 'ulong',
        $col_order: 45,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '2_hand_mace_mod',
      $inverse: 'essences',
      $col_order: 46,
      foreignKey: {
        name: '2_hand_mace_mods_key',
        $type: 'ulong',
        $col_order: 46,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'claw_mod',
      $inverse: 'essences',
      $col_order: 47,
      foreignKey: {
        name: 'claw_mods_key',
        $type: 'ulong',
        $col_order: 47,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'dagger_mod',
      $inverse: 'essences',
      $col_order: 48,
      foreignKey: {
        name: 'dagger_mods_key',
        $type: 'ulong',
        $col_order: 48,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_sword_mod',
      $inverse: 'essences',
      $col_order: 49,
      foreignKey: {
        name: '1_hand_sword_mods_key',
        $type: 'ulong',
        $col_order: 49,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_thrusting_sword_mod',
      $inverse: 'essences',
      $col_order: 50,
      foreignKey: {
        name: '1_hand_thrusting_sword_mods_key',
        $type: 'ulong',
        $col_order: 50,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_axe_mod',
      $inverse: 'essences',
      $col_order: 51,
      foreignKey: {
        name: '1_hand_axe_mods_key',
        $type: 'ulong',
        $col_order: 51,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: '1_hand_mace_mod',
      $inverse: 'essences',
      $col_order: 52,
      foreignKey: {
        name: '1_hand_mace_mods_key',
        $type: 'ulong',
        $col_order: 52,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'sceptre_mod',
      $inverse: 'essences',
      $col_order: 53,
      foreignKey: {
        name: 'sceptre_mods_key',
        $type: 'ulong',
        $col_order: 53,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_monster_mod',
      $inverse: 'essences',
      $col_order: 54,
      foreignKey: {
        name: 'display_monster_mods_key',
        $type: 'ulong',
        $col_order: 54,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'belt_mod',
      $inverse: 'essences',
      $col_order: 56,
      foreignKey: {
        name: 'belt_mods_key',
        $type: 'ulong',
        $col_order: 56,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'amulet_mod',
      $inverse: 'essences',
      $col_order: 57,
      foreignKey: {
        name: 'amulet_mods_key',
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
      as: 'display_jewellry_mod',
      $inverse: 'essences',
      $col_order: 59,
      foreignKey: {
        name: 'display_jewellry_mods_key',
        $type: 'ulong',
        $col_order: 59,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'shield_mod',
      $inverse: 'essences',
      $col_order: 60,
      foreignKey: {
        name: 'shield_mods_key',
        $type: 'ulong',
        $col_order: 60,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'display_item_mod',
      $inverse: 'essences',
      $col_order: 61,
      foreignKey: {
        name: 'display_item_mods_key',
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
