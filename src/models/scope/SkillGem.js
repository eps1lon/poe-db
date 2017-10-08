module.exports = models => {
  return {
    'for-recraft': {
      attributes: ['description', 'base_item_types_key', 'granted_effects_key'],
      include: [
        {
          model: models.BaseItemType,
          as: 'base_item_type',
          attributes: ['id', 'name'],
        },
        {
          model: models.GrantedEffect,
          as: 'granted_effect',
          attributes: ['id', 'is_support', 'cast_time'],
          include: [
            {
              model: models.GrantedEffectsPerLevel,
              as: 'granted_effects_per_levels',
              attributes: [
                'level',
                'granted_effects_key',
                ...Array(8)
                  .fill('stat')
                  .reduce(
                    (stats, pref, i) =>
                      stats.concat([
                        `${pref}${i + 1}_float`,
                        `${pref}${i + 1}_value`,
                      ]),
                    [],
                  ),
              ],
              include: [
                { model: models.Stat, as: 'stats', attributes: ['id'] },
                { model: models.Stat, as: 'stats2', attributes: ['id'] },
              ],
            },
          ],
        },
      ],
    },
  };
};
