const createBaseItemTypeScope = require('./BaseItemType');

module.exports = models => {
  const base_item_type_scope = createBaseItemTypeScope(models);

  // list of attributes with mod keys
  models.Essence.mod_attributes = [
    'quiver_mods_key',
    'amulet1_mods_key',
    'amulet2_mods_key',
    'ring_mods_key',
    'belt1_mods_key',
    'belt2_mods_key',
    'belt3_mods_key',
    'gloves1_mods_key',
    'boots1_mods_key',
    'body_armour1_mods_key',
    'helmet1_mods_key',
    'shield1_mods_key',
    'shield2_mods_key',
    'boots3_mods_key',
    'ranged_mods_key',
    'helmet2_mods_key',
    'body_armour2_mods_key',
    'boots2_mods_key',
    'gloves2_mods_key',
    'bow_mods_key',
    'wand_mods_key',
    '2_hand_mods_key1',
    '2_hand_mods_key2',
    '2_hand_mods_key3',
    '2_hand_mods_key4',
    '2_hand_mods_key5',
    '1_hand_mods_key1',
    '1_hand_mods_key2',
    '1_hand_mods_key3',
    '1_hand_mods_key4',
    '1_hand_mods_key5',
    '1_hand_mods_key6',
    '1_hand_mods_key7',
    '1_hand_mods_key8',
    'mods_key1',
    'mods_key2',
    'mods_key13',
    'mods_key14',
    'mods_key15',
    'mods_key41',
    'mods_key43',
  ];

  return {
    // data structure for eps1lon/recraft
    'for-recraft': {
      attributes: [
        'row',
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
  };
};
