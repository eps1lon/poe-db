module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('character_start_states', 'bool0', {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('labyrinth_secrets', 'flag0', {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('labyrinth_secrets', 'flag1', {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('monster_varieties', 'unknown14', {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('n_p_c_talks', 'unknown25', {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn(
      'summoned_specific_monsters_on_deaths',
      'unknown7',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: false,
      },
    );
    await queryInterface.changeColumn('world_areas', 'flag0', {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('zana_quests', 'unknown8', {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('zana_quests', 'unknown9', {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('character_start_states', 'bool0', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('labyrinth_secrets', 'flag0', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('labyrinth_secrets', 'flag1', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('monster_varieties', 'unknown14', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('n_p_c_talks', 'unknown25', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn(
      'summoned_specific_monsters_on_deaths',
      'unknown7',
      {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        primaryKey: false,
      },
    );
    await queryInterface.changeColumn('world_areas', 'flag0', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('zana_quests', 'unknown8', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
      primaryKey: false,
    });
    await queryInterface.changeColumn('zana_quests', 'unknown9', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
      primaryKey: false,
    });
  },
};
