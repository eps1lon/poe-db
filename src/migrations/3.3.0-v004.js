module.exports = {
  up: async queryInterface => {
    // swap sockets<->links name
    await queryInterface.renameColumn(
      'crafting_bench_options',
      'sockets',
      'sockets_temp',
    );
    await queryInterface.renameColumn(
      'crafting_bench_options',
      'links',
      'sockets',
    );
    await queryInterface.renameColumn(
      'crafting_bench_options',
      'sockets_temp',
      'links',
    );
  },
  down: async queryInterface => {
    // swap sockets<->links name
    await queryInterface.renameColumn(
      'crafting_bench_options',
      'sockets',
      'sockets_temp',
    );
    await queryInterface.renameColumn(
      'crafting_bench_options',
      'links',
      'sockets',
    );
    await queryInterface.renameColumn(
      'crafting_bench_options',
      'sockets_temp',
      'links',
    );
  },
};
