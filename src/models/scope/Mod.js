const Sequelize = require('sequelize');

const createStatScope = require('./Stat');
const createTagScope = require('./Tag');

module.exports = models => {
  const stat_scope = createStatScope(models);
  const tag_scope = createTagScope(models);

  return {
    // data structure for eps1lon/poe_mod_repository
    correct_groups: {
      attributes: [
        ['correct_group', 'primary'],
        [Sequelize.literal("''"), 'init'],
      ],
      where: {
        generation_type: {
          $ne: 3,
        },
      },
      group: ['correct_group'],
      order: [['correct_group', 'asc']],
    },
    // data structure for eps1lon/poe_mod_repository
    'for-mod-repository': {
      attributes: [
        ['row', 'primary'],
        ['row', 'Rows'],
        ['id', 'Id'],
        ['mod_type_key', 'ModTypeKey'],
        ['level', 'Level'],
        ['domain', 'Domain'],
        ['name', 'Name'],
        ['generation_type', 'GenerationType'],
        ['correct_group', 'CorrectGroup'],
        ['stat1_min', 'Stat1Min'],
        ['stat1_max', 'Stat1Max'],
        ['stat2_min', 'Stat2Min'],
        ['stat2_max', 'Stat2Max'],
        ['stat3_min', 'Stat3Min'],
        ['stat3_max', 'Stat3Max'],
        ['stat4_min', 'Stat4Min'],
        ['stat4_max', 'Stat4Max'],
        [
          Sequelize.fn(
            'concat_ws',
            ',',
            Sequelize.col('stats_key1'),
            Sequelize.col('stats_key2'),
            Sequelize.col('stats_key3'),
            Sequelize.col('stats_key4'),
          ),
          'Stats',
        ],
        ['_tags_cache', 'TagsKeys'],
        ['granted_effects_per_level_key', 'GrantedEffectsPerLevelKey'],
      ],
      include: [
        {
          group: ['mod_row'],
          model: models.Tag,
          as: 'spawn_weight_tags',
          attributes: ['row'],
          through: {
            attributes: ['value', 'priority'],
          },
        },
      ],
    },
    // data structure for eps1lon/poe_mod_repository
    'for-recraft': {
      attributes: [
        ['row', 'primary'],
        'id',
        'level',
        'domain',
        'name',
        'generation_type',
        'correct_group',
        'stat1_min',
        'stat1_max',
        'stat2_min',
        'stat2_max',
        'stat3_min',
        'stat3_max',
        'stat4_min',
        'stat4_max',
        'stat5_min',
        'stat5_max',
        // for include only
        'stats_key1',
        'stats_key2',
        'stats_key3',
        'stats_key4',
        'stats_key5',
        'mod_type_key',
      ],
      include: [
        {
          model: models.ModType,
          as: 'mod_type',
          attributes: [['row', 'primary']],
        },
        {
          model: models.Stat,
          as: 'stats1',
          //scope: 'for-recraft',
          ...stat_scope['for-recraft'],
        },
        {
          model: models.Stat,
          as: 'stats2',
          //scope: 'for-recraft',
          ...stat_scope['for-recraft'],
        },
        {
          model: models.Stat,
          as: 'stats3',
          //scope: 'for-recraft',
          ...stat_scope['for-recraft'],
        },
        {
          model: models.Stat,
          as: 'stats4',
          //scope: 'for-recraft',
          ...stat_scope['for-recraft'],
        },
        {
          model: models.Stat,
          as: 'stats5',
          //scope: 'for-recraft',
          ...stat_scope['for-recraft'],
        },
        {
          model: models.Tag,
          as: 'tags',
          //scope: 'for-recraft',
          ...tag_scope['for-recraft'],
        },
        {
          model: models.Tag,
          as: 'spawn_weight_tags',
          ...tag_scope['for-recraft'],
          through: {
            attributes: ['value', 'priority'],
          },
        },
      ],
    },
  };
};
