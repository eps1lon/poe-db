const createItemClassScope = require('./ItemClass');
const createModScope = require('./Mod');
const createTagScope = require('./Tag');

module.exports = models => {
  const item_class_scope = createItemClassScope(models);
  const mod_scope = createModScope(models);
  const tag_scope = createTagScope(models);

  return {
    // data structure for eps1lon/poe_mod_repository
    'for-mod-repository': {
      attributes: [
        ['row', 'primary'],
        ['row', 'Rows'],
        ['name', 'Name'],
        ['item_classes_key', 'ItemClass'],
        ['width', 'Width'],
        ['height', 'Height'],
        ['_tags_cache', 'TagsKeys'],
        ['_implicit_mods_cache', 'Implicit_ModsKeys'],
        ['drop_level', 'DropLevel'],
        ['inherits_from', 'InheritsFrom'],
        'id', // needed for include `on` clause
      ],
      include: [
        {
          model: models.ComponentArmour,
          as: 'component_armour',
          attributes: [
            ['armour', 'Armour'],
            ['evasion', 'Evasion'],
            ['energy_shield', 'EnergyShield'],
          ],
        },
        {
          model: models.ComponentAttributeRequirement,
          as: 'component_attribute_requirements',
          attributes: [
            ['req_str', 'ReqStr'],
            ['req_dex', 'ReqDex'],
            ['req_int', 'ReqInt'],
          ],
        },
        {
          model: models.WeaponType,
          as: 'weapon_type',
          attributes: [
            ['critical', 'Critical'],
            ['speed', 'Speed'],
            ['damage_min', 'DamageMin'],
            ['damage_max', 'DamageMax'],
            ['range_max', 'RangeMax'],
          ],
        },
      ],
    },
    // structure for eps1lon/reacraft
    'for-recraft': {
      attributes: [
        ['row', 'primary'],
        'name',
        'width',
        'height',
        'drop_level',
        'inherits_from',
        // only needed because of join
        'id',
        'item_classes_key',
      ],
      include: [
        {
          model: models.ItemClass,
          attributes: item_class_scope['for-recraft'].attributes,
          as: 'item_class',
        },
        {
          model: models.ComponentArmour,
          as: 'component_armour',
          attributes: ['armour', 'evasion', 'energy_shield'],
        },
        {
          model: models.ComponentAttributeRequirement,
          as: 'component_attribute_requirements',
          attributes: ['req_str', 'req_dex', 'req_int'],
        },
        {
          model: models.WeaponType,
          as: 'weapon_type',
          attributes: [
            'critical',
            'speed',
            'damage_min',
            'damage_max',
            'range_max',
          ],
        },
        {
          model: models.Tag,
          as: 'tags',
          ...tag_scope['for-recraft'],
        },
        {
          model: models.Mod,
          as: 'implicit_mods',
          ...mod_scope['for-recraft'],
        },
      ],
      where: {
        item_classes_key: {
          // mtx
          $notIn: [40],
        },
      },
    },
  };
};
