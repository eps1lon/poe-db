module.exports = CraftingBenchOption => {
  /**
   * zips extended HasAndBelongsToMany
   * while restoring original order via priority
   */
  CraftingBenchOption.withZippedCosts = () => {
    const results = CraftingBenchOption.scope('for-mod-repository').findAll();

    return CraftingBenchOption.denormalizeThrough(
      'cost_base_item_types',
      [
        { attribute: 'row', as: 'Cost_BaseItemTypesKeys', through_prop: false },
        { attribute: 'value', as: 'Cost_Values', through_prop: true },
      ],
      results,
    );
  };

  CraftingBenchOption['for-mod-repository'] = () => {
    return CraftingBenchOption.withZippedCosts().then(results => {
      return results.map(
        ({ npc_master_key, npc_master: { row, npc }, ...props }) => {
          // alias npc_master_key to NPCMasterKey

          return {
            ...props,
            NPCMasterKey: row,
            MasterName: npc.name,
            MasterNameShort: npc.short_name,
          };
        },
      );
    });
  };
};
