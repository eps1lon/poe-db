module.exports = (Mod, models) => {
  /**
   * zips extended HasAndBelongsToMany
   * while restoring original order via priority
   */
  Mod.withZippedSpawnweights = () => {
    return Mod.scope('for-mod-repository')
      .findAll({ limit: 3 })
      .then(results => {
        return results.map(result => {
          const { spawn_weight_tags, ...props } = result.toJSON();

          const spawnweights = spawn_weight_tags.sort((a, b) => {
            return (
              a.ModHabtmSpawnWeightTag.priority -
              b.ModHabtmSpawnWeightTag.priority
            );
          });

          return {
            ...props,
            SpawnWeight_TagsKeys: spawnweights
              .map(({ row }) => {
                return row;
              })
              .join(','),
            SpawnWeight_Values: spawnweights
              .map(({ ModHabtmSpawnWeightTag: { value } }) => {
                return value;
              })
              .join(','),
          };
        });
      });
  };
};
