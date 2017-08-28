module.exports = (CraftingBenchOption, models) => {
  /**
   * zips extended HasAndBelongsToMany
   * while restoring original order via priority
   */
  CraftingBenchOption.withZippedCosts = () => {
    return CraftingBenchOption.scope('for-mod-repository')
      .findAll()
      .then(results => {
        return results.map(result => {
          const { cost_base_item_types, ...props } = result.toJSON();

          const costs = cost_base_item_types.sort((a, b) => {
            return (
              a.CraftingBenchOptionHabtmCostBaseitemtype.priority -
              b.CraftingBenchOptionHabtmCostBaseitemtype.priority
            );
          });

          return {
            ...props,
            Cost_BaseItemTypesKeys: costs
              .map(({ row }) => {
                return row;
              })
              .join(','),
            Cost_Values: costs
              .map(
                ({ CraftingBenchOptionHabtmCostBaseitemtype: { value } }) => {
                  return value;
                },
              )
              .join(','),
          };
        });
      });
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
