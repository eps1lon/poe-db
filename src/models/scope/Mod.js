const Sequelize = require('sequelize');

module.exports = models => {
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
  };
};
