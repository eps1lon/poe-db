const createBaseItemTypeScope = require('./BaseItemType');

module.exports = models => {
  const base_item_type_scope = createBaseItemTypeScope(models);

  // list of attributes with mod keys
  models.Essence.displayed_mod_attributes = [
    'display_wand_mods_key',
    'display_bow_mods_key',
    'display_amulet_mods_key',
    'display_ring_mods_key',
    'display_belt_mods_key',
    'display_gloves_mods_key',
    'display_boots_mods_key',
    'display_body_armour_mods_key',
    'display_helmet_mods_key',
    'display_shield_mods_key',
    'display_weapon_mods_key',
    'display_melee_weapon_mods_key',
    'display_1_hand_weapon_mods_key',
    'display_2_hand_weapon_mods_key',
    'display_2_hand_melee_weapon_mods_key',
    'display_armour_mods_key',
    'display_ranged_mods_key',
    'display_item_mods_key',
    'display_jewellry_mods_key',
  ];
  models.Essence.applied_mod_attributes = [
    'quiver_mods_key',
    'helmet_mods_key',
    'body_armour_mods_key',
    'boots_mods_key',
    'gloves_mods_key',
    'bow_mods_key',
    'wand_mods_key',
    'staff_mods_key',
    ['2_hand_sword_mods_key', 'two_hand_sword_mods_key'],
    ['2_hand_axe_mods_key', 'two_hand_axe_mods_key'],
    ['2_hand_mace_mods_key', 'two_hand_mace_mods_key'],
    'claw_mods_key',
    'dagger_mods_key',
    ['1_hand_sword_mods_key', 'one_hand_sword_mods_key'],
    ['1_hand_thrusting_sword_mods_key', 'one_hand_thrusting_sword_mods_key'],
    ['1_hand_axe_mods_key', 'one_hand_axe_mods_key'],
    ['1_hand_mace_mods_key', 'one_hand_mace_mods_key'],
    'sceptre_mods_key',
    'belt_mods_key',
    'amulet_mods_key',
    'ring_mods_key',
    'shield_mods_key',
  ];
  models.Essence.mod_attributes = [
    ...models.Essence.applied_mod_attributes,
    ...models.Essence.displayed_mod_attributes,
  ];

  return {
    // data structure for eps1lon/poe-recraft
    'for-recraft': {
      attributes: [
        ['row', 'primary'],
        'tier',
        'item_level_restriction',
        'is_screaming_essence',
        // for include only
        // we cant create a query that includes those mods via
        // join because it will exceed mysqls join table limit of 61
        'base_item_types_key',
        'essence_type_key',
        ...models.Essence.mod_attributes,
      ],
      include: [
        {
          model: models.BaseItemType,
          as: 'base_item_type',
          ...base_item_type_scope['for-recraft'],
        },
        {
          model: models.EssenceType,
          as: 'essence_type',
          attributes: ['id', 'essence_type', 'is_corrupted_essence'],
        },
      ],
    },
    'for-mods': {
      attributes: [
        ['row', 'primary'],
        'tier',
        'item_level_restriction',
        // for include only
        // we cant create a query that includes those mods via
        // join because it will exceed mysqls join table limit of 61
        'base_item_types_key',
        'essence_type_key',
        ...models.Essence.applied_mod_attributes,
      ],
      include: [
        {
          model: models.BaseItemType,
          as: 'base_item_type',
          ...base_item_type_scope['for-recraft'],
        },
        {
          model: models.EssenceType,
          as: 'essence_type',
          attributes: ['id', 'essence_type'],
        },
      ],
    },
  };
};
