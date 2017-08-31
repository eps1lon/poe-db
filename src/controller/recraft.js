const { NotFoundError } = require('restify-errors');

const filterScopedNull = (key = 'primary') => ({ [key]: prop }) =>
  prop !== null;

const formatMod = mod => {
  const {
    // omit
    stats_key1,
    stats_key2,
    stats_key3,
    stats_key4,
    stats_key5,
    mod_type_key,
    // map
    stats1,
    stats2,
    stats3,
    stats4,
    stats5,
    tags,
    spawn_weight_tags,
    // keep
    ...props
  } = mod;

  const spawn_weights = spawn_weight_tags
    .sort((a, b) => {
      return (
        a.ModHabtmSpawnWeightTag.priority - b.ModHabtmSpawnWeightTag.priority
      );
    })
    .filter(filterScopedNull('ModHabtmSpawnWeightTag'))
    .map(({ ModHabtmSpawnWeightTag: { value }, ...spawn_weight_tag }) => {
      return {
        tag: spawn_weight_tag,
        value,
      };
    });

  // applying a scope doesnt set the associated object to null but its values
  const stats = [stats1, stats2, stats3, stats4, stats5].filter(
    filterScopedNull(),
  );

  return {
    ...props,
    spawn_weights,
    stats,
    tags: tags.filter(filterScopedNull()),
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
    .filter(filterScopedNull())
    .map(formatMod)
    .map(({ BaseItemTypeHabtmImplicitMod, ...implicit }) => implicit);

  const formatted_tags = tags
    .filter(filterScopedNull())
    .map(({ BaseItemTypeHabtmTag, ...tag }) => tag);

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
    .filter(filterScopedNull())
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
    .filter(filterScopedNull())
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
    mod: mod.primary === null ? null : formatMod(mod),
    item_classes: formatted_item_classes,
  };
};

module.exports = models => async (req, res, next) => {
  const { params: { file } } = req;

  const files = {
    baseitemtypes: () =>
      models.BaseItemType.scope('for-recraft').findAll({}).then(items => {
        return items.map(item => formatBaseItemType(item.toJSON()));
      }),
    craftingbenchoptions: () =>
      models.CraftingBenchOption
        .scope('for-recraft')
        .findAll({})
        .then(options => {
          return options.map(option => {
            return formatCraftingBenchOption(option.toJSON());
          });
        }),
    mods: () =>
      models.Mod.scope('for-recraft').findAll({}).then(mods => {
        return mods.map(mod => formatMod(mod.toJSON()));
      }),
  };

  if (files[file]) {
    res.json(await files[file]());
    next();
  } else {
    next(new NotFoundError(`no file found for '${file}'`));
  }
};
