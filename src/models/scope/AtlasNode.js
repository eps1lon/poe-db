const createModScope = require('./Mod');
const createTagScope = require('./Tag');

module.exports = models => {
  const mod_scope = createModScope(models);
  const tag_scope = createTagScope(models);

  return {
    atlas: {
      attributes: [
        // actual
        'row',
        'x',
        'y',
        // for join
        'world_areas_key',
      ],
      include: [
        {
          attributes: ['row'],
          model: models.AtlasNode,
          as: 'atlas_node',
        },
        {
          attributes: ['row', 'id', 'name', 'area_level'],
          model: models.WorldArea,
          as: 'world_area',
          include: [
            {
              model: models.Tag,
              as: 'area_type_tags',
              ...tag_scope['for-recraft'],
            },
            {
              model: models.Tag,
              as: 'tags',
              ...tag_scope['for-recraft'],
            },
            {
              model: models.Mod,
              as: 'mods',
              ...mod_scope['for-recraft'],
            },
          ],
        },
      ],
    },
  };
};
