module.exports = Mod => {
  /**
   * zips extended HasAndBelongsToMany
   * while restoring original order via priority
   */
  Mod.withZippedSpawnweights = () => {
    const results = Mod.scope('for-mod-repository').findAll();

    return Mod.denormalizeThrough(
      'spawn_weight_tags',
      [
        { attribute: 'row', as: 'SpawnWeight_TagsKeys', through_prop: false },
        { attribute: 'value', as: 'SpawnWeight_Values', through_prop: true },
      ],
      results,
    );
  };
};
