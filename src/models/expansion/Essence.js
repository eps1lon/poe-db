module.exports = Essence => {
  Essence.essenceMods = async (essences, Mod) => {
    const mod_keys = essences
      .reduce((keys, essence) => {
        keys.push(
          ...Essence.mod_attributes.map(attribute => {
            return essence.get(attribute);
          }),
        );

        return keys;
      }, [])
      .filter(Boolean);

    return await Mod.scope('for-recraft').findAll({
      where: {
        row: mod_keys,
      },
    });
  };

  Essence.withMods = async (essences, Mod, formatMod) => {
    // this is basically a join on the mods that is not supported by
    // mysql because it exceeds the max table limit of 61

    // create lookup table for mods (primary => mod)
    const mods = (await Essence.essenceMods(
      essences,
      Mod,
    )).reduce((map, mod) => {
      const props = mod.get({ plain: true });
      return map.set(props.primary, formatMod(props));
    }, new Map());

    return essences.map(essence => {
      const essence_props = essence.get({ plain: true });
      Essence.mod_attributes.forEach(attribute => {
        const mod_key = essence_props[attribute];
        const mod = mods.get(mod_key);
        if (mod == null && mod_key != null) {
          console.warn(
            `Could not find mod '${mod_key}' from attr '${attribute}'`,
          );
        }

        // replace mod_key with mods[mod_key]
        essence_props[attribute] = mod != null ? mod.id : undefined;
      });

      return essence_props;
    });
  };
};
