module.exports = models => {
  return {
    'patch-3.0.1': {
      attributes: ['row', 'Unknown0'],
      include: [
        {
          model: models.BaseItemType,
          as: 'base_item_type',
          // attributes: ['name'],
          include: [
            { model: models.ItemVisualIdentity, as: 'item_visual_identity' },
          ],
        },
      ],
    },
  };
};
