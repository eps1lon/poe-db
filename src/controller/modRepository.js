const { NotFoundError, NotImplementedError } = require('restify-errors');

module.exports = models => async (req, res, next) => {
  const { params: { file } } = req;

  const files = {
    baseitemtypes: Promise.resolve(new NotImplementedError()),

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
