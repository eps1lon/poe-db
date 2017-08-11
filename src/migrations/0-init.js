module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable(
      'achievements',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        objective: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown_unique: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        achievement_sets_display_key: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MyISAM',
      },
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('achievements');
  },
};
