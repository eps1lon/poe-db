const { NotFoundError } = require('restify-errors');

module.exports = models => async (req, res, next) => {
  const { params: { file } } = req;

  const files = {
    baseitemtypes: models.BaseItemType
      .scope('for-mod-repository')
      .findAll({})
      .then(results => {
        const undefToNull = val => (val === undefined ? null : val);

        return results.reduce((results, result) => {
          const {
            // omit
            id,
            // flatten
            weapon_type = {},
            component_attribute_requirements: [requirements = {}],
            component_armour: [armour = {}],
            // keep
            ...props
          } = result.toJSON();

          const weapon = weapon_type || {}; // cast null to empty obj

          return {
            ...results,
            [props.primary]: {
              ...props,
              Critical: undefToNull(weapon.Critical),
              Speed: undefToNull(weapon.Speed),
              DamageMin: undefToNull(weapon.DamageMin),
              DamageMax: undefToNull(weapon.DamageMax),
              RangeMax: undefToNull(weapon.RangeMax),
              Armour: undefToNull(armour.Armour),
              Evasion: undefToNull(armour.Evasion),
              EnergyShield: undefToNull(armour.EnergyShield),
              ReqStr: undefToNull(requirements.ReqStr),
              ReqDex: undefToNull(requirements.ReqDex),
              ReqInt: undefToNull(requirements.ReqInt),
            },
          };
        }, {});
      }),

    craftingbenchoptions: models.CraftingBenchOption['for-mod-repository'](),

    itemclasses: models.ItemClass
      .scope('for-mod-repository')
      .findAll({ order: [['row', 'asc']] }),

    mods: models.Mod.withZippedSpawnweights(),

    stats: models.Stat
      .scope('for-mod-repository')
      .findAll({ order: [['row', 'asc']] }),

    tags: models.Tag
      .scope('for-mod-repository')
      .findAll({ order: [['row', 'asc']] }),
  };

  if (files[file]) {
    res.json(await files[file]);
    next();
  } else {
    next(new NotFoundError(`no file found for '${file}'`));
  }
};
