module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'architect_map_difficulties',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        area_level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat1_value: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        stats_key1: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'chest_item_templates',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        id: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        keys0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'clone_shots',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        id: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'geometry_attacks',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown6: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown7: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown8: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown9: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown10: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown11: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown12: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown17: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown18: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag4: {
          allowNull: true,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'hideout_n_p_cs',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        hideout_np_cs_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        regular_np_cs_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_architects',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        min_level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_brackets',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        min_level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.FLOAT,
        },
        unknown1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        incursion_world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        template_world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_chests',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        id: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        min_level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        weight: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown8: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        chests_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_chest_rewards',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown4: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown5: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        unknown6: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown7: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _incursion_chests_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        incursion_rooms_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_chest_reward__incursion_chests',
      {
        row: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        priority: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        incursion_chest_reward_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        incursion_chest_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MyISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_rooms',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        id: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        name: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tier: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        present_arm_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        int_id: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        past_arm_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tsi_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ui_icon: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flavour_text: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        room_upgrade_incursion_rooms_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        incursion_architect_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_room_additional_boss_drops',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_room_boss_fight_events',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown4: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown5: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown6: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_unique_upgrades',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unique_items_key: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        incursion_unique_upgrade_components_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_unique_upgrade_components',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unique_items_key: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'item_set_names',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'item_shop_types',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'item_trade_data',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        id: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        keys0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'level_relative_player_scalings',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'monster_skills_client_instances',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'monster_skills_orientations',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'monster_skills_references',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'monster_skills_shapes',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'shop_payment_package_proxies',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'spawn_objects',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown6: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown7: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown8: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown9: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown10: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown11: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown12: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown13: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown14: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown15: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown16: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown17: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'treasure_hunter_missions',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown5: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown7: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown9: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown11: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown12: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown13: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown14: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown15: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown19: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown16: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown17: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown18: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'u_i_talk_categories',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'u_i_talk_texts',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        id: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ogg_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        text: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        ui_talk_categories_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.removeIndex(
      'shop_payment_package_items',
      'index_shop_item_key',
    );
    await queryInterface.addColumn('archetypes', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('archetypes', 'is_temporary', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_visuals', 'key1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('buff_visuals', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_visuals', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('divination_card_arts', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('divination_card_arts', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('extra_terrain_features', 'unknown2');
    await queryInterface.removeColumn('extra_terrain_features', 'unknown3');
    await queryInterface.removeColumn('extra_terrain_features', 'unknown4');
    await queryInterface.removeColumn('extra_terrain_features', 'unknown5');
    await queryInterface.removeColumn('extra_terrain_features', 'unknown6');
    await queryInterface.removeColumn('extra_terrain_features', 'unknown7');
    await queryInterface.addColumn('extra_terrain_features', 'data0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('extra_terrain_features', 'data1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('extra_terrain_features', 'data2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('extra_terrain_features', 'data3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('extra_terrain_features', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('extra_terrain_features', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('extra_terrain_features', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn(
      'invasion_monsters_per_areas',
      'unknown2',
      'unknown10',
    );
    await queryInterface.renameColumn(
      'invasion_monsters_per_areas',
      'unknown0',
      'unknown2',
    );
    await queryInterface.renameColumn(
      'invasion_monsters_per_areas',
      'unknown3',
      'unknown11',
    );
    await queryInterface.renameColumn(
      'invasion_monsters_per_areas',
      'unknown4',
      'unknown12',
    );
    await queryInterface.removeColumn(
      'invasion_monsters_per_areas',
      'unknown1',
    );
    await queryInterface.addColumn('invasion_monsters_per_areas', 'unknown9', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn('monster_packs', 'unknown3', 'unknown0');
    await queryInterface.renameColumn('monster_packs', 'unknown4', 'unknown1');
    await queryInterface.renameColumn('monster_packs', 'unknown11', 'unknown2');
    await queryInterface.removeColumn('monster_packs', 'unknown5');
    await queryInterface.addColumn('monster_mortars', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('monster_projectile_attacks', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('monster_projectile_spells', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('n_p_c_talks', 'flag4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('projectiles', 'flag4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('projectiles', 'flag5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('projectiles', 'flag6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.changeColumn(
      'shop_payment_package_items',
      'shop_item_key',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.removeColumn('skill_gems', 'key0');
    await queryInterface.addColumn('skill_gems', 'granted_effects_key2', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('world_areas', 'incursion_chance', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addIndex(
      'architect_map_difficulties',
      [
        {
          attribute: 'stats_key1',
        },
      ],
      {
        indexName: 'index_stats_key1',
      },
    );
    await queryInterface.addIndex(
      'clone_shots',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    await queryInterface.addIndex(
      'hideout_n_p_cs',
      [
        {
          attribute: 'hideout_np_cs_key',
        },
      ],
      {
        indexName: 'index_hideout_np_cs_key',
      },
    );
    await queryInterface.addIndex(
      'hideout_n_p_cs',
      [
        {
          attribute: 'regular_np_cs_key',
        },
      ],
      {
        indexName: 'index_regular_np_cs_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_architects',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_brackets',
      [
        {
          attribute: 'incursion_world_areas_key',
        },
      ],
      {
        indexName: 'index_incursion_world_areas_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_brackets',
      [
        {
          attribute: 'template_world_areas_key',
        },
      ],
      {
        indexName: 'index_template_world_areas_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_chests',
      [
        {
          attribute: 'chests_key',
        },
      ],
      {
        indexName: 'index_chests_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_chest_rewards',
      [
        {
          attribute: 'incursion_rooms_key',
        },
      ],
      {
        indexName: 'index_incursion_rooms_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_chest_reward__incursion_chests',
      [
        {
          attribute: 'incursion_chest_reward_row',
        },
        {
          attribute: 'incursion_chest_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'incursion_rooms',
      [
        {
          attribute: 'room_upgrade_incursion_rooms_key',
        },
      ],
      {
        indexName: 'index_room_upgrade_incursion_rooms_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_rooms',
      [
        {
          attribute: 'mods_key',
        },
      ],
      {
        indexName: 'index_mods_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_rooms',
      [
        {
          attribute: 'incursion_architect_key',
        },
      ],
      {
        indexName: 'index_incursion_architect_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_unique_upgrades',
      [
        {
          attribute: 'incursion_unique_upgrade_components_key',
        },
      ],
      {
        indexName: 'index_incursion_unique_upgrade_components_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_unique_upgrade_components',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    await queryInterface.addIndex(
      'skill_gems',
      [
        {
          attribute: 'granted_effects_key2',
        },
      ],
      {
        indexName: 'index_granted_effects_key2',
      },
    );
    await queryInterface.addIndex(
      'u_i_talk_texts',
      [
        {
          attribute: 'ui_talk_categories_key',
        },
      ],
      {
        indexName: 'index_ui_talk_categories_key',
      },
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(
      'u_i_talk_texts',
      'index_ui_talk_categories_key',
    );
    await queryInterface.removeIndex(
      'skill_gems',
      'index_granted_effects_key2',
    );
    await queryInterface.removeIndex(
      'incursion_unique_upgrade_components',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex(
      'incursion_unique_upgrades',
      'index_incursion_unique_upgrade_components_key',
    );
    await queryInterface.removeIndex(
      'incursion_rooms',
      'index_incursion_architect_key',
    );
    await queryInterface.removeIndex('incursion_rooms', 'index_mods_key');
    await queryInterface.removeIndex(
      'incursion_rooms',
      'index_room_upgrade_incursion_rooms_key',
    );
    await queryInterface.removeIndex(
      'incursion_chest_reward__incursion_chests',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'incursion_chest_rewards',
      'index_incursion_rooms_key',
    );
    await queryInterface.removeIndex('incursion_chests', 'index_chests_key');
    await queryInterface.removeIndex(
      'incursion_brackets',
      'index_template_world_areas_key',
    );
    await queryInterface.removeIndex(
      'incursion_brackets',
      'index_incursion_world_areas_key',
    );
    await queryInterface.removeIndex(
      'incursion_architects',
      'index_monster_varieties_key',
    );
    await queryInterface.removeIndex(
      'hideout_n_p_cs',
      'index_regular_np_cs_key',
    );
    await queryInterface.removeIndex(
      'hideout_n_p_cs',
      'index_hideout_np_cs_key',
    );
    await queryInterface.removeIndex(
      'clone_shots',
      'index_monster_varieties_key',
    );
    await queryInterface.removeIndex(
      'architect_map_difficulties',
      'index_stats_key1',
    );
    await queryInterface.removeColumn('world_areas', 'incursion_chance');
    await queryInterface.removeColumn('skill_gems', 'granted_effects_key2');
    await queryInterface.addColumn('skill_gems', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.changeColumn(
      'shop_payment_package_items',
      'shop_item_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.removeColumn('projectiles', 'flag6');
    await queryInterface.removeColumn('projectiles', 'flag5');
    await queryInterface.removeColumn('projectiles', 'flag4');
    await queryInterface.removeColumn('n_p_c_talks', 'flag4');
    await queryInterface.removeColumn('monster_projectile_spells', 'flag0');
    await queryInterface.removeColumn('monster_projectile_attacks', 'flag0');

    await queryInterface.removeColumn('monster_packs', 'unknown2', 'unknown11');
    await queryInterface.renameColumn('monster_packs', 'unknown1', 'unknown4');
    await queryInterface.renameColumn('monster_packs', 'unknown0', 'unknown3');
    await queryInterface.addColumn('monster_packs', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('monster_mortars', 'unknown2');
    await queryInterface.removeColumn(
      'invasion_monsters_per_areas',
      'unknown9',
    );
    await queryInterface.renameColumn(
      'invasion_monsters_per_areas',
      'unknown12',
      'unknown4',
    );
    await queryInterface.renameColumn(
      'invasion_monsters_per_areas',
      'unknown11',
      'unknown3',
    );
    await queryInterface.renameColumn(
      'invasion_monsters_per_areas',
      'unknown2',
      'unknown0',
    );
    await queryInterface.renameColumn(
      'invasion_monsters_per_areas',
      'unknown10',
      'unknown2',
    );
    await queryInterface.addColumn('invasion_monsters_per_areas', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('extra_terrain_features', 'unknown0');
    await queryInterface.removeColumn('extra_terrain_features', 'flag2');
    await queryInterface.removeColumn('extra_terrain_features', 'flag1');
    await queryInterface.removeColumn('extra_terrain_features', 'flag0');
    await queryInterface.removeColumn('extra_terrain_features', 'data3');
    await queryInterface.removeColumn('extra_terrain_features', 'data2');
    await queryInterface.removeColumn('extra_terrain_features', 'data1');
    await queryInterface.removeColumn('extra_terrain_features', 'data0');
    await queryInterface.addColumn('extra_terrain_features', 'unknown7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('divination_card_arts', 'unknown1');
    await queryInterface.removeColumn('divination_card_arts', 'unknown0');
    await queryInterface.removeColumn('buff_visuals', 'unknown2');
    await queryInterface.removeColumn('buff_visuals', 'unknown1');
    await queryInterface.removeColumn('buff_visuals', 'key1');
    await queryInterface.removeColumn('archetypes', 'is_temporary');
    await queryInterface.removeColumn('archetypes', 'flag0');
    await queryInterface.addIndex(
      'shop_payment_package_items',
      [
        {
          attribute: 'shop_item_key',
        },
      ],
      {
        indexName: 'index_shop_item_key',
      },
    );
    await queryInterface.dropTable('u_i_talk_texts');
    await queryInterface.dropTable('u_i_talk_categories');
    await queryInterface.dropTable('treasure_hunter_missions');
    await queryInterface.dropTable('spawn_objects');
    await queryInterface.dropTable('shop_payment_package_proxies');
    await queryInterface.dropTable('monster_skills_shapes');
    await queryInterface.dropTable('monster_skills_references');
    await queryInterface.dropTable('monster_skills_orientations');
    await queryInterface.dropTable('monster_skills_client_instances');
    await queryInterface.dropTable('level_relative_player_scalings');
    await queryInterface.dropTable('item_trade_data');
    await queryInterface.dropTable('item_shop_types');
    await queryInterface.dropTable('item_set_names');
    await queryInterface.dropTable('incursion_unique_upgrade_components');
    await queryInterface.dropTable('incursion_unique_upgrades');
    await queryInterface.dropTable('incursion_room_boss_fight_events');
    await queryInterface.dropTable('incursion_room_additional_boss_drops');
    await queryInterface.dropTable('incursion_rooms');
    await queryInterface.dropTable('incursion_chest_reward__incursion_chests');
    await queryInterface.dropTable('incursion_chest_rewards');
    await queryInterface.dropTable('incursion_chests');
    await queryInterface.dropTable('incursion_brackets');
    await queryInterface.dropTable('incursion_architects');
    await queryInterface.dropTable('hideout_n_p_cs');
    await queryInterface.dropTable('geometry_attacks');
    await queryInterface.dropTable('clone_shots');
    await queryInterface.dropTable('chest_item_templates');
    await queryInterface.dropTable('architect_map_difficulties');
  },
};
