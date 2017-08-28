module.exports = models => {
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
  };
};
