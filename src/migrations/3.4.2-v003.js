module.exports = {
  up: async queryInterface => {
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods_0s',
      'delve_crafting_modifier__mods0s',
    );
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods_1s',
      'delve_crafting_modifier__mods1s',
    );
  },
  down: async queryInterface => {
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods0s',
      'delve_crafting_modifier__mods_0s',
    );
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods1s',
      'delve_crafting_modifier__mods_1s',
    );
  },
};
