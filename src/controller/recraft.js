const { NotFoundError } = require('restify-errors');

const formatMod = mod => {
  const {
    // map
    stats1,
    stats2,
    stats3,
    stats4,
    stats5,
    tags,
    spawn_weight_tags,
    // omit
    stats_key1,
    stats_key2,
    stats_key3,
    stats_key4,
    stats_key5,
    mod_type_key,
    // keep
    ...props
  } = mod;

  const spawn_weights = spawn_weight_tags
    .sort((a, b) => {
      return (
        a.ModHabtmSpawnWeightTag.priority - b.ModHabtmSpawnWeightTag.priority
      );
    })
    .map(({ ModHabtmSpawnWeightTag: { value }, ...spawn_weight_tag }) => {
      return {
        tag: spawn_weight_tag,
        value,
      };
    });

  const stats = [stats1, stats2, stats3, stats4, stats5].filter(Boolean);

  return {
    ...props,
    spawn_weights,
    stats,
    tags,
  };
};

const formatBaseItemType = item => {
  const {
    // omit
    id,
    item_classes_key,
    // map
    item_class,
    implicit_mods,
    tags,
    component_attribute_requirements: [component_attribute_requirement = null],
    component_armour: [component_armour = null],
    // keep
    ...props
  } = item;

  const formatted_implicits = implicit_mods
    .map(formatMod)
    .map(({ BaseItemTypeHabtmImplicitMod, ...implicit }) => implicit);

  const formatted_tags = tags.map(({ BaseItemTypeHabtmTag, ...tag }) => tag);

  return {
    ...props,
    component_attribute_requirement,
    component_armour,
    implicit_mods: formatted_implicits,
    item_class: item_class.primary === null ? null : item_class,
    tags: formatted_tags,
  };
};

const formatCraftingBenchOption = option => {
  const {
    // omit
    // map
    cost_base_item_types,
    item_classes,
    mod,
    // keep
    ...props
  } = option;

  const costs = cost_base_item_types
    .sort((a, b) => {
      return (
        a.CraftingBenchOptionHabtmCostBaseitemtype.priority -
        b.CraftingBenchOptionHabtmCostBaseitemtype.priority
      );
    })
    .map(
      ({
        CraftingBenchOptionHabtmCostBaseitemtype: { value },
        ...base_item_type
      }) => {
        return {
          amount: value,
          base_item_type: formatBaseItemType(base_item_type),
        };
      },
    );

  const formatted_item_classes = item_classes
    .sort((a, b) => {
      return (
        a.CraftingBenchOptionHabtmItemClass.priority -
        b.CraftingBenchOptionHabtmItemClass.priority
      );
    })
    .map(({ CraftingBenchOptionHabtmItemClass, ...item_class }) => {
      return { ...item_class };
    });

  return {
    ...props,
    costs,
    mod: mod === null ? null : formatMod(mod),
    item_classes: formatted_item_classes,
  };
};

module.exports = models => async (req, res, next) => {
  const { params: { file } } = req;

  const files = {
    baseitemtypes: () =>
      models.BaseItemType.scope('for-recraft').findAll({}).then(items => {
        return items.map(item => formatBaseItemType(item.get({ plain: true })));
      }),
    craftingbenchoptions: () =>
      models.CraftingBenchOption
        .scope('for-recraft')
        .findAll({})
        .then(options => {
          return options.map(option => {
            return formatCraftingBenchOption(option.get({ plain: true }));
          });
        }),
    mods: () =>
      models.Mod.scope('for-recraft').findAll({}).then(mods => {
        return mods.map(mod => formatMod(mod.get({ plain: true })));
      }),
    tags: () => models.Tag.scope('for-recraft').findAll({}),
  };

  if (files[file]) {
    res.json(await files[file]());
    next();
  } else {
    next(new NotFoundError(`no file found for '${file}'`));
  }
};
