const Sequelize = require('sequelize');

module.exports = models => {
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
  };
};
