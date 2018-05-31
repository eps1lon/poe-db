const { NotFoundError } = require('restify-errors');

const formatWorldAreaFromAtlas = world_area => {
  const {
    // map
    area_type_tags,
    tags,
    mods,
    // omit
    row,
    // keep
    ...props
  } = world_area;

  return {
    ...props,
    area_type_tags: area_type_tags.map(({ id }) => id),
    tags: tags.map(({ id }) => id),
    mods: mods.map(({ WorldAreaHabtmMod, ...mod }) => formatMod(mod)),
  };
};

const formatAtlasNode = node => {
  const {
    // map
    atlas_node,
    world_area,
    // omit
    world_areas_key,
    // keep
    ...props
  } = node;

  return {
    ...props,
    adjacent: atlas_node.map(({ row }) => row),
    world_area: formatWorldAreaFromAtlas(world_area),
  };
};

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
    primary,
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
    .map(({ ModHabtmSpawnWeightTag: { value }, id }) => {
      return {
        tag: id,
        value,
      };
    });

  const stats = [stats1, stats2, stats3, stats4, stats5]
    .filter(Boolean)
    // omit primary
    .map(({ primary, ...props }) => props);

  return {
    ...props,
    spawn_weights,
    stats,
    tags: tags.map(({ id }) => id),
  };
};

const formatBaseItemType = item => {
  const {
    // omit
    primary,
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

  const formatted_implicits = implicit_mods.map(
    ({ BaseItemTypeHabtmImplicitMod, ...implicit }) => formatMod(implicit),
  );

  const formatted_tags = tags.map(({ id }) => id);

  return {
    ...props,
    component_attribute_requirement,
    component_armour,
    implicit_mods: formatted_implicits,
    item_class: item_class.id,
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
    .map(({ id }) => id);

  return {
    ...props,
    costs,
    mod: mod === null ? null : formatMod(mod),
    item_classes: formatted_item_classes,
  };
};

const formatLevelEffect = level_effect => {
  const { level, stats, stats2 } = level_effect;

  const formatLevelStat = offset => stat => {
    const join =
      stat.GrantedEffectsPerLevelHabtmStat ||
      stat.GrantedEffectsPerLevelHabtmStats2;
    const index = join.priority;

    return {
      id: stat.id,
      value: level_effect[`stat${index + offset}_value`],
      float: level_effect[`stat${index + offset}float`],
    };
  };

  return {
    level,
    stats: [
      ...stats.map(formatLevelStat(1)),
      ...stats2.map(formatLevelStat(5)),
    ],
  };
};

const formatEssence = essence => {
  const {
    // map none
    // omit
    base_item_types_key,
    essence_type_key,
    // include
    ...rest
  } = essence;

  return {
    ...rest,
  };
};

const formatGrantedEffect = effect => {
  const { id, is_support, cast_time, granted_effects_per_levels } = effect;

  return {
    id,
    is_support,
    cast_time,
    granted_effects_per_levels: granted_effects_per_levels.map(level_effect =>
      formatLevelEffect(level_effect),
    ),
  };
};

const formatSkillGem = skill_gem => {
  const { description, granted_effect } = skill_gem;

  return {
    description,
    granted_effect: formatGrantedEffect(granted_effect),
  };
};

module.exports = models => async (req, res, next) => {
  const { params: { file } } = req;

  const files = {
    atlas: () =>
      models.AtlasNode
        .scope('atlas')
        .findAll({})
        .then(nodes => {
          return nodes.map(node => formatAtlasNode(node.get({ plain: true })));
        }),
    baseitemtypes: () =>
      models.BaseItemType
        .scope('for-recraft')
        .findAll({})
        .then(items => {
          return items.map(item =>
            formatBaseItemType(item.get({ plain: true })),
          );
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
    essences: () =>
      models.Essence
        .scope('for-recraft')
        .findAll({})
        .then(essences =>
          models.Essence.withMods(
            essences,
            models.Mod,
            props => props.id,
            attribute => attribute,
          ),
        )
        .then(essences => {
          return essences.map(essence => {
            return formatEssence(essence);
          });
        }),
    essencesForMods: () =>
      models.Essence
        .scope('for-mods')
        .findAll({})
        .then(essences =>
          models.Essence.withMods(essences, models.Mod, formatMod, attribute =>
            attribute.replace('_mods_key', '_mod'),
          ),
        ),
    gems: () =>
      models.SkillGem
        .scope('for-recraft')
        .findAll({})
        .then(gems =>
          gems.map(gem => formatSkillGem(gem.get({ plain: true }))),
        ),
    mods: () =>
      models.Mod
        .scope('for-recraft')
        .findAll({})
        .then(mods => {
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
