const createBaseItemTypeScope = require('./BaseItemType');
const createItemClassScope = require('./ItemClass');
const createModScope = require('./Mod');

module.exports = models => {
  const base_item_type_scope = createBaseItemTypeScope(models);
  const item_class_scope = createItemClassScope(models);
  const mod_scope = createModScope(models);

  return {
    // data structure for eps1lon/poe_mod_repository
    'for-mod-repository': {
      attributes: [
        ['row', 'Rows'],
        'npc_master_key', // for some reason we have to explicitly select the attribute in order for the belongsTo to work
        ['order', 'Order'],
        ['master_level', 'MasterLevel'],
        ['name', 'Name'],
        ['crafting_bench_custom_action', 'Unknown11'],
        ['_item_classes_cache', 'ItemClassesKeys'],
        ['sockets', 'Sockets'],
        ['socket_colours', 'SocketColours'],
        ['links', 'Links'],
        ['item_quantity', 'ItemQuantity'],
        ['unknown1', 'Unknown18'],
        ['row', 'primary'],
        ['_item_classes_cache', 'BaseItemClassesKeys'],
      ],
      include: [
        {
          model: models.BaseItemType,
          as: 'cost_base_item_types',
          attributes: ['row'],
          through: {
            attributes: ['value', 'priority'],
          },
        },
        {
          model: models.NPCMaster,
          as: 'npc_master',
          attributes: ['row'],
          include: [
            {
              model: models.NPC,
              as: 'npc',
              attributes: ['name', 'short_name'],
            },
          ],
        },
      ],
    },
    // data structure for eps1lon/poe_mod_repository
    'for-recraft': {
      attributes: [
        ['row', 'primary'],
        'order',
        'master_level',
        'name',
        'crafting_bench_custom_action',
        'sockets',
        'socket_colours',
        'links',
        'item_quantity',
        'unknown1',
        // include only
        'npc_master_key',
        'mods_key',
      ],
      include: [
        {
          model: models.BaseItemType,
          as: 'cost_base_item_types',
          through: {
            attributes: ['value', 'priority'],
          },
          ...base_item_type_scope['for-recraft'],
        },
        {
          model: models.NPCMaster,
          as: 'npc_master',
          attributes: ['row'],
          include: [
            {
              model: models.NPC,
              as: 'npc',
              attributes: ['name', 'short_name'],
            },
          ],
        },
        {
          model: models.ItemClass,
          as: 'item_classes',
          ...item_class_scope['for-recraft'],
        },
        {
          model: models.Mod,
          as: 'mod',
          ...mod_scope['for-recraft'],
        },
      ],
    },
    // data structure for eps1lon/poe_mod_repository
    'for-poe-mods': {
      attributes: [
        ['row', 'primary'],
        'master_level',
        'name',
        'crafting_bench_custom_action',
        'sockets',
        'socket_colours',
        'links',
        'item_quantity',
        // include only
        'npc_master_key',
        'mods_key',
      ],
      include: [
        {
          model: models.BaseItemType,
          as: 'cost_base_item_types',
          through: {
            attributes: ['value', 'priority'],
          },
          ...base_item_type_scope['for-poe-mods'],
        },
        {
          model: models.NPCMaster,
          as: 'npc_master',
          attributes: ['row'],
          include: [
            {
              model: models.NPC,
              as: 'npc',
              attributes: ['name', 'short_name'],
            },
          ],
        },
        {
          model: models.ItemClass,
          as: 'item_classes',
          attributes: ['id'],
        },
        {
          model: models.Mod,
          as: 'mod',
          ...mod_scope['for-poe-mods'],
        },
      ],
    },
  };
};
