const createBaseItemTypeScope = require('./BaseItemType');
const createItemClassScope = require('./ItemClass');
const createModScope = require('./Mod');

module.exports = models => {
  const base_item_type_scope = createBaseItemTypeScope(models);
  const item_class_scope = createItemClassScope(models);
  const mod_scope = createModScope(models);

  return {
    // data structure for eps1lon/poe_mod_repository
    'for-recraft': {
      attributes: [
        ['row', 'primary'],
        'order',
        'tier',
        'affix_type',
        'required_level',
        'name',
        'crafting_bench_custom_action',
        'sockets',
        'socket_colours',
        'links',
        'item_quantity',
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
        'required_level',
        'affix_type',
        'mod_family',
        'name',
        'crafting_bench_custom_action',
        'sockets',
        'socket_colours',
        'links',
        'item_quantity',
        'mods_key',
        // include only
        'hideout_np_cs_key',
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
          model: models.CraftingItemClassCategory,
          as: 'crafting_item_class_categories',
          include: [
            { model: models.ItemClass, as: 'item_classes', attributes: ['id'] },
          ],
        },
        {
          model: models.Mod,
          as: 'mod',
          ...mod_scope['for-poe-mods'],
        },
        {
          model: models.HideoutNPC,
          as: 'hideout_npc',
          attributes: ['npc_master_key'],
        },
      ],
    },
  };
};
