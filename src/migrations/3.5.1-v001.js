module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'account_quest_flags',
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
      'achievement_set_reward__base_item_types',
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
        achievement_set_reward_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        base_item_type_row: {
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
      'additional_life_scalings',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        int_id: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        id: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        dat_file: {
          allowNull: true,
          primaryKey: false,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'additional_life_scaling_per_levels',
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
      'architect_life_scaling_per_levels',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        more_life: {
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
      'atlas_node_definitions',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        tier: {
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
        world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        item_visual_identity_key: {
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
      'atlas_node__atlas_sectors',
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
        atlas_node_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        atlas_sector_row: {
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
      'atlas_quadrants',
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
      'atlas_sectors',
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
        _spawn_weight_tags_cache: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'atlas_sector__spawn_weight__tags',
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
        value: {
          allowNull: false,
          autoIncrement: false,
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
        atlas_sector_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        tag_row: {
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
      'betrayal_choices',
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
        text: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'betrayal_choice_actions',
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
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        betrayal_choices_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        client_strings_key: {
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
      'betrayal_dialogues',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
          type: Sequelize.TEXT,
        },
        unknown4: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        keys1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown5: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        keys0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown6: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown7: {
          allowNull: true,
          primaryKey: false,
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
        betrayal_dialogue_cue_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        betrayal_targets_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        betrayal_upgrades_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_text_audio_key: {
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
      'betrayal_dialogue_cues',
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
      'betrayal_flags',
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
      'betrayal_forts',
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
      'betrayal_jobs',
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
        text: {
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
        art: {
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
        key1: {
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
        completion_achievement_items_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        open_chests_achievement_items_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mission_completion_acheivement_items_key: {
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
      'betrayal_ranks',
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
        text: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        rank_image: {
          allowNull: true,
          primaryKey: false,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'betrayal_relationship_states',
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
        text: {
          allowNull: true,
          primaryKey: false,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'betrayal_targets',
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
        art: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        full_name: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        safehouse_arm_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        short_name: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
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
        betrayal_relationship_state_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        betrayal_jobs_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        safehouse_leader_acheivement_items_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        level3_achievement_items_key: {
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
      'betrayal_target_flags',
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
      'betrayal_target_job_achievements',
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
        betrayal_targets_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        betrayal_jobs_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        achievement_items_key: {
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
      'betrayal_target_life_scaling_per_levels',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        more_life: {
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
      'betrayal_traitor_rewards',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        description: {
          allowNull: true,
          primaryKey: false,
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
        betrayal_jobs_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        betrayal_targets_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        betrayal_ranks_key: {
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
      'betrayal_upgrades',
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
        description: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        art_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown7: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown11: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
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
        mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        betrayal_upgrade_slots_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        item_visual_identity_key0: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        item_visual_identity_key1: {
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
      'betrayal_upgrade_slots',
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
      'betrayal_wall_life_scaling_per_levels',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        more_life: {
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
      'breachstone_upgrades',
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
        base_item_types_key0: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        base_item_types_key1: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        base_item_types_key2: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        base_item_types_key3: {
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
      'buff_stack_u_i_modes',
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
      'crafting_bench_option__crafting_item_class_categories',
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
        crafting_bench_option_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        crafting_item_class_category_row: {
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
      'crafting_bench_unlock_categories',
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
        unknown1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _crafting_item_class_categories_cache: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'crafting_bench_unlock_category__crafting_item_class_categories',
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
        crafting_bench_unlock_category_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        crafting_item_class_category_row: {
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
      'crafting_item_class_categories',
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
        unknown_text: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        text: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _item_classes_cache: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'crafting_item_class_category__item_classes',
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
        crafting_item_class_category_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        item_class_row: {
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
      'einhar_missions',
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
      'einhar_pack_fallbacks',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
      'fixed_hideout_doodads',
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
      'fixed_missions',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
      'geometry_projectiles',
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
        key0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
      'hideout_n_p_c__regular__n_p_cs',
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
        hideout_npc_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_row: {
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
      'hideout_rarities',
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
        text: {
          allowNull: true,
          primaryKey: false,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'incursion_room__achievement_items',
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
        incursion_room_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        achievement_item_row: {
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
      'job_assassination_spawner_groups',
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
      'job_raid_brackets',
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
        unknown1: {
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
      'map_creation_informations',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        tier: {
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
        maps_key: {
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
      'map_devices',
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
        unknown2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        inherits_from: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        command: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        command_data: {
          allowNull: true,
          primaryKey: false,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'map_fragment_families',
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
      'map_purchase_costs',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        tier: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _normal_purchase_base_item_types_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _magic_purchase_base_item_types_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _rare_purchase_base_item_types_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _unique_purchase_base_item_types_cache: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'map_purchase_cost__magic_purchase__base_item_types',
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
        cost: {
          allowNull: false,
          autoIncrement: false,
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
        map_purchase_cost_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        base_item_type_row: {
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
      'map_purchase_cost__normal_purchase__base_item_types',
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
        cost: {
          allowNull: false,
          autoIncrement: false,
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
        map_purchase_cost_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        base_item_type_row: {
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
      'map_purchase_cost__rare_purchase__base_item_types',
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
        cost: {
          allowNull: false,
          autoIncrement: false,
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
        map_purchase_cost_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        base_item_type_row: {
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
      'map_purchase_cost__unique_purchase__base_item_types',
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
        cost: {
          allowNull: false,
          autoIncrement: false,
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
        map_purchase_cost_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        base_item_type_row: {
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
      'master_hideout_levels',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        missions_required: {
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
        npc_master_key: {
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
      'mission_favour_per_levels',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        favour: {
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
      'mod_type__mod_sell_price_types',
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
        mod_type_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mod_sell_price_type_row: {
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
      'monster_spawner_groups',
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
      'monster_spawner_groups_per_levels',
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
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        monster_spawner_groups_key: {
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
      'multi_part_achievement_areas',
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
      'n_p_c_additional_vendor_items',
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
          type: Sequelize.TEXT,
        },
        keys0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
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
      'n_p_c_follower_variations',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag1: {
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
        flag2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag3: {
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
        monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        misc_animated_key0: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        misc_animated_key1: {
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
      'n_p_c_master__spawn_weight__tags',
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
        value: {
          allowNull: false,
          autoIncrement: false,
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
        npc_master_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        tag_row: {
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
      'n_p_c_master_levels',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        level: {
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
        npc_master_key: {
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
      'n_p_c_shop_additional_items',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        _item_classes_cache: {
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
        npc_shop_key: {
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
      'n_p_c_shop_additional_item__item_classes',
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
        npc_shop_additional_item_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        item_class_row: {
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
      'n_p_c_talk_console_quick_actions',
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
        controller: {
          allowNull: true,
          primaryKey: false,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'passive_skill_buffs',
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
        buff_stat_values: {
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
        unknown4: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: true,
          primaryKey: false,
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
        buff_definitions_key: {
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
      'passive_skill__passive_skill_buffs',
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
        passive_skill_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        passive_skill_buff_row: {
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
      'quest_achievement__achievement_items',
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
        quest_achievement_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        achievement_item_row: {
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
      'quest_types',
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
        unknown1: {
          allowNull: true,
          primaryKey: false,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'recipe_unlock_displays',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        recipe_id: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        description: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _crafting_item_class_categories_cache: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'recipe_unlock_display__crafting_item_class_categories',
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
        recipe_unlock_display_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        crafting_item_class_category_row: {
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
      'recipe_unlock_objects',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        inherits_from: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        recipe_id: {
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
        world_areas_key: {
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
      'safehouse_b_y_o_craftings',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        description: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        server_command: {
          allowNull: true,
          primaryKey: false,
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
        betrayal_jobs_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        betrayal_targets_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        betrayal_ranks_key: {
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
      'safehouse_crafting_sprees',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        chance: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _currency_safehouse_crafting_spree_currencies_cache: {
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
        betrayal_jobs_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        betrayal_ranks_key: {
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
      'safehouse_crafting_spree_currencies',
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
        has_specific_base_item: {
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
      'safeho_craft_spree__curre__safeh_craft_spree_curre',
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
        value: {
          allowNull: false,
          autoIncrement: false,
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
        safehouse_crafting_spree_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        safehouse_crafting_spree_currency_row: {
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
      'shop_forum_badges',
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
      'shop_payment_package__shop_package_platforms',
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
        shop_payment_package_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shop_package_platform_row: {
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
      'sigil_displays',
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
        dds_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        inactive_art_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        active_art_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        frame_art_file: {
          allowNull: true,
          primaryKey: false,
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
        active_stats_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        inactive_stats_key: {
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
      'skill_gem_info__characters',
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
        skill_gem_info_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_row: {
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
      'surge_types',
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
      'table_monster_spawners',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        metadata: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
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
        flag0: {
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
        flag1: {
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
        flag3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag4: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown18: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown19: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag5: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag6: {
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
      'unique_maps',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        has_guild_character: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        guild_character: {
          allowNull: true,
          primaryKey: false,
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
        item_visual_identity_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        words_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        flavour_text_key: {
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
      'unique_stash_layouts',
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
        key3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag1: {
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
        item_visual_identity_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unique_stash_types_key: {
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
      'unique_stash_types',
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
        order: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        width: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        height: {
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
        name: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown7: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        image: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown9: {
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
    await queryInterface.removeIndex(
      'achievement_set_rewards',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex(
      'crafting_bench_options',
      'index_npc_master_key',
    );
    await queryInterface.removeIndex('hideouts', 'index_npc_master_key');
    await queryInterface.removeIndex(
      'hideouts',
      'index_medium_world_areas_key',
    );
    await queryInterface.removeIndex('hideout_doodads', 'index_npc_master_key');
    await queryInterface.removeIndex(
      'hideout_n_p_cs',
      'index_regular_np_cs_key',
    );
    await queryInterface.removeIndex(
      'mission_tile_maps',
      'index_npc_master_key',
    );
    await queryInterface.removeIndex(
      'mission_tile_maps',
      'index_mission_transition_tiles_key',
    );
    await queryInterface.removeIndex('n_p_c_masters', 'index_np_cs_key');
    await queryInterface.removeIndex(
      'n_p_c_masters',
      'index_signature_mod_mods_key',
    );
    await queryInterface.removeIndex(
      'n_p_c_masters',
      'index_talisman_achievement_items_key',
    );
    await queryInterface.removeIndex(
      'n_p_c_talks',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex(
      'passive_skills',
      'index_granted_buff_buff_definitions_key',
    );
    await queryInterface.removeIndex(
      'skill_surge_effects',
      'index_misc_animated_key',
    );
    await queryInterface.addColumn('achievement_items', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('achievement_items', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn(
      'achievement_set_rewards',
      'base_item_types_key',
    );
    await queryInterface.addColumn(
      'achievement_set_rewards',
      '_base_item_types_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.renameColumn('achievements', 'unknown4', 'unknown1');
    await queryInterface.addColumn('achievements', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('advanced_skills_tutorials', 'unknown0');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'unknown1');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'unknown2');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'unknown3');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'unknown4');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'unknown5');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'unknown6');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'unknown7');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'unknown8');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'unknown9');
    await queryInterface.addColumn(
      'advanced_skills_tutorials',
      'characters_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn(
      'advanced_skills_tutorials',
      'china_bk2_file',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('advanced_skills_tutorials', 'description', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'id', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn(
      'advanced_skills_tutorials',
      'international_bk2_file',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('advanced_skills_tutorials', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'key2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'keys1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('atlas_nodes', 'flavour_text');
    await queryInterface.removeColumn('atlas_nodes', 'unknown3');
    await queryInterface.addColumn('atlas_nodes', '_atlas_sector_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('atlas_nodes', 'flavour_text_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('atlas_nodes', 'maps_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('atlas_nodes', 'tier', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('atlas_nodes', 'unknown4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('bestiary_capturable_monsters', 'flag3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('bestiary_capturable_monsters', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('bestiary_genus', 'unknown6');
    await queryInterface.renameColumn('bestiary_groups', 'name', 'id');
    await queryInterface.renameColumn('bestiary_groups', 'group_name', 'name');
    await queryInterface.renameColumn(
      'bestiary_recipe_components',
      'rarity_key',
      'rarity',
    );
    await queryInterface.removeColumn('bestiary_recipes', 'data0');
    await queryInterface.removeColumn('buff_definitions', 'flag9');
    await queryInterface.removeColumn('buff_definitions', 'unknown5');
    await queryInterface.removeColumn('buff_definitions', 'unknown7');
    await queryInterface.addColumn('buff_definitions', 'flag13', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_definitions', 'flag14', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_definitions', 'flag15', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_definitions', 'id2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('buff_definitions', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('buff_definitions', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_definitions', 'unknown6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('buff_visuals', 'unknown1');
    await queryInterface.removeColumn('buff_visuals', 'unknown2');
    await queryInterface.addColumn('buff_visuals', 'buff_description', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('buff_visuals', 'buff_name', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('buff_visuals', 'epk_file', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('chest_item_templates', 'key0');
    await queryInterface.addColumn('chest_item_templates', 'chests_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('chest_item_templates', 'unknown4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('chest_item_templates', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('client_strings', 'playstation_text', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('client_strings', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn(
      'crafting_bench_options',
      'master_level',
      'required_level',
    );
    await queryInterface.removeColumn(
      'crafting_bench_options',
      'npc_master_key',
    );
    await queryInterface.removeColumn('crafting_bench_options', 'unknown0');
    await queryInterface.addColumn(
      'crafting_bench_options',
      '_crafting_item_class_categories_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('crafting_bench_options', 'affix_type', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn(
      'crafting_bench_options',
      'crafting_bench_unlock_categories_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn(
      'crafting_bench_options',
      'hideout_np_cs_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('crafting_bench_options', 'keys1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn(
      'crafting_bench_options',
      'maximum_map_tier',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn('crafting_bench_options', 'mod_family', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('crafting_bench_options', 'recipe_ids', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('crafting_bench_options', 'tier', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn(
      'crafting_bench_options',
      'unveils_required',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'crafting_bench_options',
      'unveils_required2',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn('custom_league_mods', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn(
      'delve_biomes',
      'data0',
      'spawn_weight_depth',
    );
    await queryInterface.renameColumn(
      'delve_biomes',
      'data1',
      'spawn_weight_values',
    );
    await queryInterface.addColumn('delve_biomes', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('delve_biomes', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods0s',
      'delve_crafting_modifier__mods_0s',
    );
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods1s',
      'delve_crafting_modifier__mods_1s',
    );
    await queryInterface.addColumn(
      'delve_crafting_modifier__mods_0s',
      'keys1',
      {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn(
      'delve_crafting_modifier__mods_1s',
      'keys0',
      {
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.renameColumn(
      'delve_crafting_modifiers',
      '_mods0_cache',
      '_mods_0_cache',
    );
    await queryInterface.renameColumn(
      'delve_crafting_modifiers',
      '_mods1_cache',
      '_mods_1_cache',
    );
    await queryInterface.addColumn('delve_features', 'unknown12', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('delve_features', 'unknown13', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown2',
      'unknown1',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown3',
      'sulphite_cost',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown5',
      'more_monster_life',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown6',
      'more_monster_damage',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown9',
      'unknown4',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown10',
      'unknown5',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown11',
      'unknown6',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown12',
      'unknown7',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown13',
      'unknown8',
    );
    await queryInterface.renameColumn(
      'delve_monster_spawners',
      'unknown0',
      'base_metadata',
    );
    await queryInterface.renameColumn(
      'delve_resource_per_levels',
      'level',
      'area_level',
    );
    await queryInterface.renameColumn(
      'delve_resource_per_levels',
      'resources',
      'sulphite',
    );
    await queryInterface.removeColumn('delve_rooms', 'unknown0');
    await queryInterface.addColumn('delve_rooms', 'delve_biomes_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.renameColumn(
      'delve_upgrades',
      'stats_values',
      'stat_values',
    );
    await queryInterface.removeColumn('extra_terrain_features', 'unknown0');
    await queryInterface.removeColumn('extra_terrain_features', 'unknown1');
    await queryInterface.removeColumn('extra_terrain_features', 'unknown2');
    await queryInterface.removeColumn('extra_terrain_features', 'unknown3');
    await queryInterface.addColumn('extra_terrain_features', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown10', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown11', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('geometry_attacks', 'flag0');
    await queryInterface.removeColumn('geometry_attacks', 'key1');
    await queryInterface.removeColumn('geometry_attacks', 'unknown1');
    await queryInterface.removeColumn('geometry_attacks', 'unknown17');
    await queryInterface.removeColumn('geometry_attacks', 'unknown3');
    await queryInterface.removeColumn('geometry_attacks', 'unknown4');
    await queryInterface.addColumn('geometry_attacks', 'flag5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('geometry_attacks', 'flag6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('geometry_attacks', 'keys0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('geometry_attacks', 'keys1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown13', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown14', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown15', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown16', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown19', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown21', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown22', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown23', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn(
      'granted_effects',
      'multiplier1',
      'base_effectiveness',
    );
    await queryInterface.renameColumn(
      'granted_effects',
      'multiplier2',
      'incremental_effectiveness',
    );
    await queryInterface.removeColumn(
      'granted_effects_per_levels',
      'stat_data',
    );
    await queryInterface.addColumn(
      'granted_effects_per_levels',
      'stat_interpolation_types_keys',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.removeColumn('hideout_doodads', 'npc_master_key');
    await queryInterface.addColumn('hideout_doodads', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('hideout_doodads', 'hideout_np_cs_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('hideout_n_p_cs', 'regular_np_cs_key');
    await queryInterface.addColumn('hideout_n_p_cs', '_regular_np_cs_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('hideout_n_p_cs', 'hideout_doodads_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('hideout_n_p_cs', 'npc_master_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('hideouts', 'medium_world_areas_key');
    await queryInterface.removeColumn('hideouts', 'npc_master_key');
    await queryInterface.removeColumn('hideouts', 'unknown9');
    await queryInterface.addColumn('hideouts', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('hideouts', 'hideout_file', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('hideouts', 'hideout_image', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('hideouts', 'is_enabled', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('hideouts', 'key0', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('hideouts', 'keys0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('hideouts', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('hideouts', 'weight', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn(
      'incursion_chest_rewards',
      'unknown4',
      'unknown0',
    );
    await queryInterface.renameColumn(
      'incursion_chest_rewards',
      'unknown5',
      'unknown1',
    );
    await queryInterface.renameColumn(
      'incursion_chest_rewards',
      'unknown6',
      'unknown2',
    );
    await queryInterface.renameColumn(
      'incursion_chest_rewards',
      'unknown7',
      'unknown3',
    );
    await queryInterface.removeColumn('incursion_rooms', 'key0');
    await queryInterface.addColumn(
      'incursion_rooms',
      '_achievement_items_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'incursion_rooms',
      'room_upgrade_from_incursion_rooms_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('incursion_rooms', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn(
      'item_visual_identities',
      'is_atlas_of_worlds_map_icon',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      },
    );
    await queryInterface.addColumn('item_visual_identities', 'is_tier16_icon', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown10', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown11', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown12', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown13', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown8', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown9', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn(
      'labyrinth_secret_effects',
      'buff_values',
      'buff_stat_values',
    );
    await queryInterface.renameColumn(
      'labyrinth_trinkets',
      'buff_values',
      'buff_stat_values',
    );
    await queryInterface.addColumn(
      'map_fragment_mods',
      'achievement_items_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('map_fragment_mods', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('map_fragment_mods', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('map_fragment_mods', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn(
      'map_fragment_mods',
      'map_fragment_families',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn('map_series', 'base_icon_dds_file', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn(
      'maps',
      '_higher_tier_maps_base_item_types_cache',
    );
    await queryInterface.removeColumn('maps', 'flag0');
    await queryInterface.addColumn('melees', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('melees', 'key1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'microtransaction_combine_forumulas',
      'bk2_file',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'microtransaction_periodic_character_effect_variations',
      'key0',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn(
      'microtransaction_portal_variations',
      'unknown4',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.FLOAT,
      },
    );
    await queryInterface.removeColumn(
      'mission_tile_maps',
      '_world_areas_cache',
    );
    await queryInterface.removeColumn(
      'mission_tile_maps',
      'mission_transition_tiles_key',
    );
    await queryInterface.removeColumn('mission_tile_maps', 'npc_master_key');
    await queryInterface.renameColumn(
      'mod_types',
      '_mod_sell_prices_cache',
      '_mod_sell_price_types_cache',
    );
    await queryInterface.addColumn('mods', 'unveil_achievement_items_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('monster_mortars', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('monster_mortars', 'unknown4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn(
      'monster_spawner_overrides',
      'unknown0',
      'key0',
    );
    await queryInterface.addColumn('multi_part_achievements', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('multi_part_achievements', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('music', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('music', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('mystery_boxes', 'bk2_file', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('mystery_boxes', 'box_id', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('mystery_boxes', 'bundle_id', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_audios', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_c_audios', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'n_p_c_masters',
      '_achievement_items_cache',
    );
    await queryInterface.removeColumn(
      'n_p_c_masters',
      '_master_level5_achievement_items_cache',
    );
    await queryInterface.removeColumn(
      'n_p_c_masters',
      '_signature_mod_spawn_weight_tags_cache',
    );
    await queryInterface.removeColumn(
      'n_p_c_masters',
      '_unknown_weight_tags_cache',
    );
    await queryInterface.removeColumn('n_p_c_masters', 'hideout');
    await queryInterface.removeColumn('n_p_c_masters', 'is_dex_master');
    await queryInterface.removeColumn('n_p_c_masters', 'is_int_master');
    await queryInterface.removeColumn('n_p_c_masters', 'is_str_master');
    await queryInterface.removeColumn('n_p_c_masters', 'key2');
    await queryInterface.removeColumn('n_p_c_masters', 'keys0');
    await queryInterface.removeColumn('n_p_c_masters', 'keys1');
    await queryInterface.removeColumn('n_p_c_masters', 'np_cs_key');
    await queryInterface.removeColumn(
      'n_p_c_masters',
      'signature_mod_mods_key',
    );
    await queryInterface.removeColumn(
      'n_p_c_masters',
      'talisman_achievement_items_key',
    );
    await queryInterface.removeColumn('n_p_c_masters', 'unknown7');
    await queryInterface.addColumn(
      'n_p_c_masters',
      '_spawn_weight_tags_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('n_p_c_masters', 'help_text', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_masters', 'key1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('n_p_c_masters', 'signature_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('n_p_c_masters', 'unknown14', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_c_masters', 'unknown15', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_c_masters', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_masters', 'unknown6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('n_p_c_talks', '_prophecies_cache');
    await queryInterface.removeColumn('n_p_c_talks', 'base_item_types_key');
    await queryInterface.removeColumn('n_p_c_talks', 'data7');
    await queryInterface.removeColumn('n_p_c_talks', 'flag5');
    await queryInterface.removeColumn('n_p_c_talks', 'unknown25');
    await queryInterface.removeColumn('n_p_c_talks', 'unknown25c');
    await queryInterface.removeColumn('n_p_c_talks', 'unknown26');
    await queryInterface.removeColumn('n_p_c_talks', 'unknown27');
    await queryInterface.removeColumn('n_p_c_talks', 'unknown30');
    await queryInterface.addColumn('n_p_c_talks', 'dialogue_option2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_talks', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('n_p_c_talks', 'key1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('n_p_c_talks', 'key2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('n_p_c_talks', 'keys0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_talks', 'unknown19', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_c_talks', 'unknown20', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_talks', 'unknown21', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'passive_skills',
      'buff_related_unknown0',
    );
    await queryInterface.removeColumn(
      'passive_skills',
      'buff_related_unknown1',
    );
    await queryInterface.removeColumn(
      'passive_skills',
      'granted_buff_buff_definitions_key',
    );
    await queryInterface.removeColumn(
      'passive_skills',
      'granted_buff_stat_values',
    );
    await queryInterface.removeColumn('passive_skills', 'key2');
    await queryInterface.addColumn(
      'passive_skills',
      '_passive_skill_buffs_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('projectile_variations', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('projectiles', 'ao_file');
    await queryInterface.removeColumn('projectiles', 'flag3');
    await queryInterface.removeColumn('projectiles', 'flag4');
    await queryInterface.removeColumn('projectiles', 'flag5');
    await queryInterface.removeColumn('projectiles', 'flag6');
    await queryInterface.removeColumn('projectiles', 'impact_animation_id');
    await queryInterface.removeColumn('projectiles', 'index4');
    await queryInterface.removeColumn('projectiles', 'loop_animation_id');
    await queryInterface.removeColumn('projectiles', 'unknown0');
    await queryInterface.addColumn('projectiles', 'ao_files', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('projectiles', 'impact_animation_ids', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('projectiles', 'inherits_from', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('projectiles', 'loop_animation_ids', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('projectiles', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('projectiles', 'unknown7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('prophecies', 'prediction_text2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('prophecy_chains', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'quest_achievements',
      'achievement_items_keys',
    );
    await queryInterface.removeColumn('quest_achievements', 'key0');
    await queryInterface.renameColumn('quest_achievements', 'unknown0', 'id');
    await queryInterface.addColumn(
      'quest_achievements',
      '_achievement_items_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('quest_achievements', 'keys0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.renameColumn('quest_rewards', 'rarity_key', 'rarity');
    await queryInterface.renameColumn('quest_rewards', 'unknown6', 'unknown4');
    await queryInterface.addColumn('quest_rewards', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('quest_states', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('quests', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('quests', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('realms', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn(
      'shop_payment_packages',
      'shop_package_platform_key',
    );
    await queryInterface.addColumn(
      'shop_payment_packages',
      '_shop_package_platform_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('shop_payment_packages', 'unknown8', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('skill_gem_infos', '_characters_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn(
      'skill_surge_effects',
      'misc_animated_key',
    );
    await queryInterface.addColumn('skill_surge_effects', 'misc_animated', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('supporter_pack_sets', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('u_i_talk_texts', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('unique_fragments', 'key0');
    await queryInterface.addColumn('unique_fragments', 'base_item_types_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('unique_map_infos', 'unknown0');
    await queryInterface.removeColumn('unique_map_infos', 'unknown1');
    await queryInterface.removeColumn('unique_map_infos', 'unknown2');
    await queryInterface.removeColumn('unique_map_infos', 'unknown3');
    await queryInterface.removeColumn('unique_map_infos', 'unknown8');
    await queryInterface.addColumn('unique_map_infos', 'base_item_types_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('unique_map_infos', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('unique_map_infos', 'flavour_text_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'unique_map_infos',
      'item_visual_identity_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('unique_map_infos', 'key1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('world_areas', 'is_master_daily_area');
    await queryInterface.addColumn('world_areas', 'unknown100', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'unknown101', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'unknown102', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'unknown103', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'unknown104', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'unknown105', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'unknown99', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addIndex(
      'achievement_set_reward__base_item_types',
      [
        {
          attribute: 'achievement_set_reward_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'advanced_skills_tutorials',
      [
        {
          attribute: 'characters_key',
        },
      ],
      {
        indexName: 'index_characters_key',
      },
    );
    await queryInterface.addIndex(
      'atlas_nodes',
      [
        {
          attribute: 'maps_key',
        },
      ],
      {
        indexName: 'index_maps_key',
      },
    );
    await queryInterface.addIndex(
      'atlas_nodes',
      [
        {
          attribute: 'flavour_text_key',
        },
      ],
      {
        indexName: 'index_flavour_text_key',
      },
    );
    await queryInterface.addIndex(
      'atlas_node_definitions',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    await queryInterface.addIndex(
      'atlas_node_definitions',
      [
        {
          attribute: 'item_visual_identity_key',
        },
      ],
      {
        indexName: 'index_item_visual_identity_key',
      },
    );
    await queryInterface.addIndex(
      'atlas_node__atlas_sectors',
      [
        {
          attribute: 'atlas_node_row',
        },
        {
          attribute: 'atlas_sector_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'atlas_sector__spawn_weight__tags',
      [
        {
          attribute: 'atlas_sector_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'betrayal_choice_actions',
      [
        {
          attribute: 'betrayal_choices_key',
        },
      ],
      {
        indexName: 'index_betrayal_choices_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_choice_actions',
      [
        {
          attribute: 'client_strings_key',
        },
      ],
      {
        indexName: 'index_client_strings_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_dialogues',
      [
        {
          attribute: 'betrayal_dialogue_cue_key',
        },
      ],
      {
        indexName: 'index_betrayal_dialogue_cue_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_dialogues',
      [
        {
          attribute: 'betrayal_targets_key',
        },
      ],
      {
        indexName: 'index_betrayal_targets_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_dialogues',
      [
        {
          attribute: 'betrayal_upgrades_key',
        },
      ],
      {
        indexName: 'index_betrayal_upgrades_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_dialogues',
      [
        {
          attribute: 'npc_text_audio_key',
        },
      ],
      {
        indexName: 'index_npc_text_audio_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_jobs',
      [
        {
          attribute: 'completion_achievement_items_key',
        },
      ],
      {
        indexName: 'index_completion_achievement_items_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_jobs',
      [
        {
          attribute: 'open_chests_achievement_items_key',
        },
      ],
      {
        indexName: 'index_open_chests_achievement_items_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_jobs',
      [
        {
          attribute: 'mission_completion_acheivement_items_key',
        },
      ],
      {
        indexName: 'index_mission_completion_acheivement_items_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_targets',
      [
        {
          attribute: 'betrayal_relationship_state_key',
        },
      ],
      {
        indexName: 'index_betrayal_relationship_state_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_targets',
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
      'betrayal_targets',
      [
        {
          attribute: 'betrayal_jobs_key',
        },
      ],
      {
        indexName: 'index_betrayal_jobs_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_targets',
      [
        {
          attribute: 'safehouse_leader_acheivement_items_key',
        },
      ],
      {
        indexName: 'index_safehouse_leader_acheivement_items_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_targets',
      [
        {
          attribute: 'level3_achievement_items_key',
        },
      ],
      {
        indexName: 'index_level3_achievement_items_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_target_job_achievements',
      [
        {
          attribute: 'betrayal_targets_key',
        },
      ],
      {
        indexName: 'index_betrayal_targets_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_target_job_achievements',
      [
        {
          attribute: 'betrayal_jobs_key',
        },
      ],
      {
        indexName: 'index_betrayal_jobs_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_target_job_achievements',
      [
        {
          attribute: 'achievement_items_key',
        },
      ],
      {
        indexName: 'index_achievement_items_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_traitor_rewards',
      [
        {
          attribute: 'betrayal_jobs_key',
        },
      ],
      {
        indexName: 'index_betrayal_jobs_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_traitor_rewards',
      [
        {
          attribute: 'betrayal_targets_key',
        },
      ],
      {
        indexName: 'index_betrayal_targets_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_traitor_rewards',
      [
        {
          attribute: 'betrayal_ranks_key',
        },
      ],
      {
        indexName: 'index_betrayal_ranks_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_upgrades',
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
      'betrayal_upgrades',
      [
        {
          attribute: 'betrayal_upgrade_slots_key',
        },
      ],
      {
        indexName: 'index_betrayal_upgrade_slots_key',
      },
    );
    await queryInterface.addIndex(
      'betrayal_upgrades',
      [
        {
          attribute: 'item_visual_identity_key0',
        },
      ],
      {
        indexName: 'index_item_visual_identity_key0',
      },
    );
    await queryInterface.addIndex(
      'betrayal_upgrades',
      [
        {
          attribute: 'item_visual_identity_key1',
        },
      ],
      {
        indexName: 'index_item_visual_identity_key1',
      },
    );
    await queryInterface.addIndex(
      'breachstone_upgrades',
      [
        {
          attribute: 'base_item_types_key0',
        },
      ],
      {
        indexName: 'index_base_item_types_key0',
      },
    );
    await queryInterface.addIndex(
      'breachstone_upgrades',
      [
        {
          attribute: 'base_item_types_key1',
        },
      ],
      {
        indexName: 'index_base_item_types_key1',
      },
    );
    await queryInterface.addIndex(
      'breachstone_upgrades',
      [
        {
          attribute: 'base_item_types_key2',
        },
      ],
      {
        indexName: 'index_base_item_types_key2',
      },
    );
    await queryInterface.addIndex(
      'breachstone_upgrades',
      [
        {
          attribute: 'base_item_types_key3',
        },
      ],
      {
        indexName: 'index_base_item_types_key3',
      },
    );
    await queryInterface.addIndex(
      'chest_item_templates',
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
      'crafting_bench_options',
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
      'crafting_bench_options',
      [
        {
          attribute: 'crafting_bench_unlock_categories_key',
        },
      ],
      {
        indexName: 'index_crafting_bench_unlock_categories_key',
      },
    );
    await queryInterface.addIndex(
      'crafting_bench_option__crafting_item_class_categories',
      [
        {
          attribute: 'crafting_bench_option_row',
        },
        {
          attribute: 'crafting_item_class_category_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'crafting_bench_unlock_category__crafting_item_class_categories',
      [
        {
          attribute: 'crafting_bench_unlock_category_row',
        },
        {
          attribute: 'crafting_item_class_category_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'crafting_item_class_category__item_classes',
      [
        {
          attribute: 'crafting_item_class_category_row',
        },
        {
          attribute: 'item_class_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'delve_rooms',
      [
        {
          attribute: 'delve_biomes_key',
        },
      ],
      {
        indexName: 'index_delve_biomes_key',
      },
    );
    await queryInterface.addIndex(
      'hideouts',
      [
        {
          attribute: 'key0',
        },
      ],
      {
        indexName: 'index_key0',
      },
    );
    await queryInterface.addIndex(
      'hideout_doodads',
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
          attribute: 'hideout_doodads_key',
        },
      ],
      {
        indexName: 'index_hideout_doodads_key',
      },
    );
    await queryInterface.addIndex(
      'hideout_n_p_cs',
      [
        {
          attribute: 'npc_master_key',
        },
      ],
      {
        indexName: 'index_npc_master_key',
      },
    );
    await queryInterface.addIndex(
      'hideout_n_p_c__regular__n_p_cs',
      [
        {
          attribute: 'hideout_npc_row',
        },
        {
          attribute: 'npc_row',
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
          attribute: 'room_upgrade_from_incursion_rooms_key',
        },
      ],
      {
        indexName: 'index_room_upgrade_from_incursion_rooms_key',
      },
    );
    await queryInterface.addIndex(
      'incursion_room__achievement_items',
      [
        {
          attribute: 'incursion_room_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'map_creation_informations',
      [
        {
          attribute: 'maps_key',
        },
      ],
      {
        indexName: 'index_maps_key',
      },
    );
    await queryInterface.addIndex(
      'map_fragment_mods',
      [
        {
          attribute: 'achievement_items_key',
        },
      ],
      {
        indexName: 'index_achievement_items_key',
      },
    );
    await queryInterface.addIndex(
      'map_purchase_cost__magic_purchase__base_item_types',
      [
        {
          attribute: 'map_purchase_cost_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'map_purchase_cost__normal_purchase__base_item_types',
      [
        {
          attribute: 'map_purchase_cost_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'map_purchase_cost__rare_purchase__base_item_types',
      [
        {
          attribute: 'map_purchase_cost_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'map_purchase_cost__unique_purchase__base_item_types',
      [
        {
          attribute: 'map_purchase_cost_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'master_hideout_levels',
      [
        {
          attribute: 'npc_master_key',
        },
      ],
      {
        indexName: 'index_npc_master_key',
      },
    );
    await queryInterface.addIndex(
      'mods',
      [
        {
          attribute: 'unveil_achievement_items_key',
        },
      ],
      {
        indexName: 'index_unveil_achievement_items_key',
      },
    );
    await queryInterface.addIndex(
      'mod_type__mod_sell_price_types',
      [
        {
          attribute: 'mod_type_row',
        },
        {
          attribute: 'mod_sell_price_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'monster_spawner_groups_per_levels',
      [
        {
          attribute: 'monster_spawner_groups_key',
        },
      ],
      {
        indexName: 'index_monster_spawner_groups_key',
      },
    );
    await queryInterface.addIndex(
      'n_p_c_follower_variations',
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
      'n_p_c_follower_variations',
      [
        {
          attribute: 'misc_animated_key0',
        },
      ],
      {
        indexName: 'index_misc_animated_key0',
      },
    );
    await queryInterface.addIndex(
      'n_p_c_follower_variations',
      [
        {
          attribute: 'misc_animated_key1',
        },
      ],
      {
        indexName: 'index_misc_animated_key1',
      },
    );
    await queryInterface.addIndex(
      'n_p_c_masters',
      [
        {
          attribute: 'signature_mods_key',
        },
      ],
      {
        indexName: 'index_signature_mods_key',
      },
    );
    await queryInterface.addIndex(
      'n_p_c_master__spawn_weight__tags',
      [
        {
          attribute: 'npc_master_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'n_p_c_master_levels',
      [
        {
          attribute: 'npc_master_key',
        },
      ],
      {
        indexName: 'index_npc_master_key',
      },
    );
    await queryInterface.addIndex(
      'n_p_c_shop_additional_items',
      [
        {
          attribute: 'npc_shop_key',
        },
      ],
      {
        indexName: 'index_npc_shop_key',
      },
    );
    await queryInterface.addIndex(
      'n_p_c_shop_additional_item__item_classes',
      [
        {
          attribute: 'npc_shop_additional_item_row',
        },
        {
          attribute: 'item_class_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'passive_skill_buffs',
      [
        {
          attribute: 'buff_definitions_key',
        },
      ],
      {
        indexName: 'index_buff_definitions_key',
      },
    );
    await queryInterface.addIndex(
      'passive_skill__passive_skill_buffs',
      [
        {
          attribute: 'passive_skill_row',
        },
        {
          attribute: 'passive_skill_buff_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'quest_achievement__achievement_items',
      [
        {
          attribute: 'quest_achievement_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'recipe_unlock_display__crafting_item_class_categories',
      [
        {
          attribute: 'recipe_unlock_display_row',
        },
        {
          attribute: 'crafting_item_class_category_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'recipe_unlock_objects',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    await queryInterface.addIndex(
      'safehouse_b_y_o_craftings',
      [
        {
          attribute: 'betrayal_jobs_key',
        },
      ],
      {
        indexName: 'index_betrayal_jobs_key',
      },
    );
    await queryInterface.addIndex(
      'safehouse_b_y_o_craftings',
      [
        {
          attribute: 'betrayal_targets_key',
        },
      ],
      {
        indexName: 'index_betrayal_targets_key',
      },
    );
    await queryInterface.addIndex(
      'safehouse_b_y_o_craftings',
      [
        {
          attribute: 'betrayal_ranks_key',
        },
      ],
      {
        indexName: 'index_betrayal_ranks_key',
      },
    );
    await queryInterface.addIndex(
      'safehouse_crafting_sprees',
      [
        {
          attribute: 'betrayal_jobs_key',
        },
      ],
      {
        indexName: 'index_betrayal_jobs_key',
      },
    );
    await queryInterface.addIndex(
      'safehouse_crafting_sprees',
      [
        {
          attribute: 'betrayal_ranks_key',
        },
      ],
      {
        indexName: 'index_betrayal_ranks_key',
      },
    );
    await queryInterface.addIndex(
      'safehouse_crafting_spree_currencies',
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
      'safeho_craft_spree__curre__safeh_craft_spree_curre',
      [
        {
          attribute: 'safehouse_crafting_spree_row',
        },
        {
          attribute: 'safehouse_crafting_spree_currency_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'shop_payment_package__shop_package_platforms',
      [
        {
          attribute: 'shop_payment_package_row',
        },
        {
          attribute: 'shop_package_platform_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'sigil_displays',
      [
        {
          attribute: 'active_stats_key',
        },
      ],
      {
        indexName: 'index_active_stats_key',
      },
    );
    await queryInterface.addIndex(
      'sigil_displays',
      [
        {
          attribute: 'inactive_stats_key',
        },
      ],
      {
        indexName: 'index_inactive_stats_key',
      },
    );
    await queryInterface.addIndex(
      'skill_gem_info__characters',
      [
        {
          attribute: 'skill_gem_info_row',
        },
        {
          attribute: 'character_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'supporter_pack_sets',
      [
        {
          attribute: 'shop_package_platform_key',
        },
      ],
      {
        indexName: 'index_shop_package_platform_key',
      },
    );
    await queryInterface.addIndex(
      'unique_fragments',
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
      'unique_maps',
      [
        {
          attribute: 'item_visual_identity_key',
        },
      ],
      {
        indexName: 'index_item_visual_identity_key',
      },
    );
    await queryInterface.addIndex(
      'unique_maps',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    await queryInterface.addIndex(
      'unique_maps',
      [
        {
          attribute: 'words_key',
        },
      ],
      {
        indexName: 'index_words_key',
      },
    );
    await queryInterface.addIndex(
      'unique_maps',
      [
        {
          attribute: 'flavour_text_key',
        },
      ],
      {
        indexName: 'index_flavour_text_key',
      },
    );
    await queryInterface.addIndex(
      'unique_map_infos',
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
      'unique_map_infos',
      [
        {
          attribute: 'flavour_text_key',
        },
      ],
      {
        indexName: 'index_flavour_text_key',
      },
    );
    await queryInterface.addIndex(
      'unique_map_infos',
      [
        {
          attribute: 'item_visual_identity_key',
        },
      ],
      {
        indexName: 'index_item_visual_identity_key',
      },
    );
    await queryInterface.addIndex(
      'unique_stash_layouts',
      [
        {
          attribute: 'item_visual_identity_key',
        },
      ],
      {
        indexName: 'index_item_visual_identity_key',
      },
    );
    await queryInterface.addIndex(
      'unique_stash_layouts',
      [
        {
          attribute: 'unique_stash_types_key',
        },
      ],
      {
        indexName: 'index_unique_stash_types_key',
      },
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(
      'unique_stash_layouts',
      'index_unique_stash_types_key',
    );
    await queryInterface.removeIndex(
      'unique_stash_layouts',
      'index_item_visual_identity_key',
    );
    await queryInterface.removeIndex(
      'unique_map_infos',
      'index_item_visual_identity_key',
    );
    await queryInterface.removeIndex(
      'unique_map_infos',
      'index_flavour_text_key',
    );
    await queryInterface.removeIndex(
      'unique_map_infos',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex('unique_maps', 'index_flavour_text_key');
    await queryInterface.removeIndex('unique_maps', 'index_words_key');
    await queryInterface.removeIndex('unique_maps', 'index_world_areas_key');
    await queryInterface.removeIndex(
      'unique_maps',
      'index_item_visual_identity_key',
    );
    await queryInterface.removeIndex(
      'unique_fragments',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex(
      'supporter_pack_sets',
      'index_shop_package_platform_key',
    );
    await queryInterface.removeIndex(
      'skill_gem_info__characters',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'sigil_displays',
      'index_inactive_stats_key',
    );
    await queryInterface.removeIndex(
      'sigil_displays',
      'index_active_stats_key',
    );
    await queryInterface.removeIndex(
      'shop_payment_package__shop_package_platforms',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'safeho_craft_spree__curre__safeh_craft_spree_curre',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'safehouse_crafting_spree_currencies',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex(
      'safehouse_crafting_sprees',
      'index_betrayal_ranks_key',
    );
    await queryInterface.removeIndex(
      'safehouse_crafting_sprees',
      'index_betrayal_jobs_key',
    );
    await queryInterface.removeIndex(
      'safehouse_b_y_o_craftings',
      'index_betrayal_ranks_key',
    );
    await queryInterface.removeIndex(
      'safehouse_b_y_o_craftings',
      'index_betrayal_targets_key',
    );
    await queryInterface.removeIndex(
      'safehouse_b_y_o_craftings',
      'index_betrayal_jobs_key',
    );
    await queryInterface.removeIndex(
      'recipe_unlock_objects',
      'index_world_areas_key',
    );
    await queryInterface.removeIndex(
      'recipe_unlock_display__crafting_item_class_categories',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'quest_achievement__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'passive_skill__passive_skill_buffs',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'passive_skill_buffs',
      'index_buff_definitions_key',
    );
    await queryInterface.removeIndex(
      'n_p_c_shop_additional_item__item_classes',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'n_p_c_shop_additional_items',
      'index_npc_shop_key',
    );
    await queryInterface.removeIndex(
      'n_p_c_master_levels',
      'index_npc_master_key',
    );
    await queryInterface.removeIndex(
      'n_p_c_master__spawn_weight__tags',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'n_p_c_masters',
      'index_signature_mods_key',
    );
    await queryInterface.removeIndex(
      'n_p_c_follower_variations',
      'index_misc_animated_key1',
    );
    await queryInterface.removeIndex(
      'n_p_c_follower_variations',
      'index_misc_animated_key0',
    );
    await queryInterface.removeIndex(
      'n_p_c_follower_variations',
      'index_monster_varieties_key',
    );
    await queryInterface.removeIndex(
      'monster_spawner_groups_per_levels',
      'index_monster_spawner_groups_key',
    );
    await queryInterface.removeIndex(
      'mod_type__mod_sell_price_types',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'mods',
      'index_unveil_achievement_items_key',
    );
    await queryInterface.removeIndex(
      'master_hideout_levels',
      'index_npc_master_key',
    );
    await queryInterface.removeIndex(
      'map_purchase_cost__unique_purchase__base_item_types',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'map_purchase_cost__rare_purchase__base_item_types',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'map_purchase_cost__normal_purchase__base_item_types',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'map_purchase_cost__magic_purchase__base_item_types',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'map_fragment_mods',
      'index_achievement_items_key',
    );
    await queryInterface.removeIndex(
      'map_creation_informations',
      'index_maps_key',
    );
    await queryInterface.removeIndex(
      'incursion_room__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'incursion_rooms',
      'index_room_upgrade_from_incursion_rooms_key',
    );
    await queryInterface.removeIndex(
      'hideout_n_p_c__regular__n_p_cs',
      'composite primary_alias',
    );
    await queryInterface.removeIndex('hideout_n_p_cs', 'index_npc_master_key');
    await queryInterface.removeIndex(
      'hideout_n_p_cs',
      'index_hideout_doodads_key',
    );
    await queryInterface.removeIndex(
      'hideout_doodads',
      'index_hideout_np_cs_key',
    );
    await queryInterface.removeIndex('hideouts', 'index_key0');
    await queryInterface.removeIndex('delve_rooms', 'index_delve_biomes_key');
    await queryInterface.removeIndex(
      'crafting_item_class_category__item_classes',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'crafting_bench_unlock_category__crafting_item_class_categories',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'crafting_bench_option__crafting_item_class_categories',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'crafting_bench_options',
      'index_crafting_bench_unlock_categories_key',
    );
    await queryInterface.removeIndex(
      'crafting_bench_options',
      'index_hideout_np_cs_key',
    );
    await queryInterface.removeIndex(
      'chest_item_templates',
      'index_chests_key',
    );
    await queryInterface.removeIndex(
      'breachstone_upgrades',
      'index_base_item_types_key3',
    );
    await queryInterface.removeIndex(
      'breachstone_upgrades',
      'index_base_item_types_key2',
    );
    await queryInterface.removeIndex(
      'breachstone_upgrades',
      'index_base_item_types_key1',
    );
    await queryInterface.removeIndex(
      'breachstone_upgrades',
      'index_base_item_types_key0',
    );
    await queryInterface.removeIndex(
      'betrayal_upgrades',
      'index_item_visual_identity_key1',
    );
    await queryInterface.removeIndex(
      'betrayal_upgrades',
      'index_item_visual_identity_key0',
    );
    await queryInterface.removeIndex(
      'betrayal_upgrades',
      'index_betrayal_upgrade_slots_key',
    );
    await queryInterface.removeIndex('betrayal_upgrades', 'index_mods_key');
    await queryInterface.removeIndex(
      'betrayal_traitor_rewards',
      'index_betrayal_ranks_key',
    );
    await queryInterface.removeIndex(
      'betrayal_traitor_rewards',
      'index_betrayal_targets_key',
    );
    await queryInterface.removeIndex(
      'betrayal_traitor_rewards',
      'index_betrayal_jobs_key',
    );
    await queryInterface.removeIndex(
      'betrayal_target_job_achievements',
      'index_achievement_items_key',
    );
    await queryInterface.removeIndex(
      'betrayal_target_job_achievements',
      'index_betrayal_jobs_key',
    );
    await queryInterface.removeIndex(
      'betrayal_target_job_achievements',
      'index_betrayal_targets_key',
    );
    await queryInterface.removeIndex(
      'betrayal_targets',
      'index_level3_achievement_items_key',
    );
    await queryInterface.removeIndex(
      'betrayal_targets',
      'index_safehouse_leader_acheivement_items_key',
    );
    await queryInterface.removeIndex(
      'betrayal_targets',
      'index_betrayal_jobs_key',
    );
    await queryInterface.removeIndex(
      'betrayal_targets',
      'index_monster_varieties_key',
    );
    await queryInterface.removeIndex(
      'betrayal_targets',
      'index_betrayal_relationship_state_key',
    );
    await queryInterface.removeIndex(
      'betrayal_jobs',
      'index_mission_completion_acheivement_items_key',
    );
    await queryInterface.removeIndex(
      'betrayal_jobs',
      'index_open_chests_achievement_items_key',
    );
    await queryInterface.removeIndex(
      'betrayal_jobs',
      'index_completion_achievement_items_key',
    );
    await queryInterface.removeIndex(
      'betrayal_dialogues',
      'index_npc_text_audio_key',
    );
    await queryInterface.removeIndex(
      'betrayal_dialogues',
      'index_betrayal_upgrades_key',
    );
    await queryInterface.removeIndex(
      'betrayal_dialogues',
      'index_betrayal_targets_key',
    );
    await queryInterface.removeIndex(
      'betrayal_dialogues',
      'index_betrayal_dialogue_cue_key',
    );
    await queryInterface.removeIndex(
      'betrayal_choice_actions',
      'index_client_strings_key',
    );
    await queryInterface.removeIndex(
      'betrayal_choice_actions',
      'index_betrayal_choices_key',
    );
    await queryInterface.removeIndex(
      'atlas_sector__spawn_weight__tags',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'atlas_node__atlas_sectors',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'atlas_node_definitions',
      'index_item_visual_identity_key',
    );
    await queryInterface.removeIndex(
      'atlas_node_definitions',
      'index_world_areas_key',
    );
    await queryInterface.removeIndex('atlas_nodes', 'index_flavour_text_key');
    await queryInterface.removeIndex('atlas_nodes', 'index_maps_key');
    await queryInterface.removeIndex(
      'advanced_skills_tutorials',
      'index_characters_key',
    );
    await queryInterface.removeIndex(
      'achievement_set_reward__base_item_types',
      'composite primary_alias',
    );
    await queryInterface.removeColumn('world_areas', 'unknown99');
    await queryInterface.removeColumn('world_areas', 'unknown105');
    await queryInterface.removeColumn('world_areas', 'unknown104');
    await queryInterface.removeColumn('world_areas', 'unknown103');
    await queryInterface.removeColumn('world_areas', 'unknown102');
    await queryInterface.removeColumn('world_areas', 'unknown101');
    await queryInterface.removeColumn('world_areas', 'unknown100');
    await queryInterface.addColumn('world_areas', 'is_master_daily_area', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('unique_map_infos', 'key1');
    await queryInterface.removeColumn(
      'unique_map_infos',
      'item_visual_identity_key',
    );
    await queryInterface.removeColumn('unique_map_infos', 'flavour_text_key');
    await queryInterface.removeColumn('unique_map_infos', 'flag0');
    await queryInterface.removeColumn(
      'unique_map_infos',
      'base_item_types_key',
    );
    await queryInterface.addColumn('unique_map_infos', 'unknown8', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('unique_map_infos', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('unique_map_infos', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('unique_map_infos', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('unique_map_infos', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn(
      'unique_fragments',
      'base_item_types_key',
    );
    await queryInterface.addColumn('unique_fragments', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('u_i_talk_texts', 'key0');
    await queryInterface.removeColumn('supporter_pack_sets', 'unknown0');
    await queryInterface.removeColumn('skill_surge_effects', 'misc_animated');
    await queryInterface.addColumn('skill_surge_effects', 'misc_animated_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('skill_gem_infos', '_characters_cache');
    await queryInterface.removeColumn('shop_payment_packages', 'unknown8');
    await queryInterface.removeColumn(
      'shop_payment_packages',
      '_shop_package_platform_cache',
    );
    await queryInterface.addColumn(
      'shop_payment_packages',
      'shop_package_platform_key',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.removeColumn('realms', 'unknown2');
    await queryInterface.removeColumn('quests', 'unknown1');
    await queryInterface.removeColumn('quests', 'key0');
    await queryInterface.removeColumn('quest_states', 'key0');
    await queryInterface.removeColumn('quest_rewards', 'unknown5');
    await queryInterface.renameColumn('quest_rewards', 'rarity', 'rarity_key');
    await queryInterface.renameColumn('quest_rewards', 'unknown4', 'unknown6');
    await queryInterface.removeColumn('quest_achievements', 'keys0');
    await queryInterface.renameColumn('quest_achievements', 'id', 'unknown0');
    await queryInterface.removeColumn(
      'quest_achievements',
      '_achievement_items_cache',
    );
    await queryInterface.addColumn('quest_achievements', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'quest_achievements',
      'achievement_items_keys',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.removeColumn('prophecy_chains', 'unknown5');
    await queryInterface.removeColumn('prophecies', 'prediction_text2');
    await queryInterface.removeColumn('projectiles', 'unknown7');
    await queryInterface.removeColumn('projectiles', 'unknown5');
    await queryInterface.removeColumn('projectiles', 'loop_animation_ids');
    await queryInterface.removeColumn('projectiles', 'inherits_from');
    await queryInterface.removeColumn('projectiles', 'impact_animation_ids');
    await queryInterface.removeColumn('projectiles', 'ao_files');
    await queryInterface.addColumn('projectiles', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('projectiles', 'loop_animation_id', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('projectiles', 'index4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('projectiles', 'impact_animation_id', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('projectiles', 'flag6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('projectiles', 'flag5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('projectiles', 'flag4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('projectiles', 'flag3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('projectiles', 'ao_file', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('projectile_variations', 'flag0');
    await queryInterface.removeColumn(
      'passive_skills',
      '_passive_skill_buffs_cache',
    );
    await queryInterface.addColumn('passive_skills', 'key2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'passive_skills',
      'granted_buff_stat_values',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'passive_skills',
      'granted_buff_buff_definitions_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('passive_skills', 'buff_related_unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('passive_skills', 'buff_related_unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('n_p_c_talks', 'unknown21');
    await queryInterface.removeColumn('n_p_c_talks', 'unknown20');
    await queryInterface.removeColumn('n_p_c_talks', 'unknown19');
    await queryInterface.removeColumn('n_p_c_talks', 'keys0');
    await queryInterface.removeColumn('n_p_c_talks', 'key2');
    await queryInterface.removeColumn('n_p_c_talks', 'key1');
    await queryInterface.removeColumn('n_p_c_talks', 'key0');
    await queryInterface.removeColumn('n_p_c_talks', 'dialogue_option2');
    await queryInterface.addColumn('n_p_c_talks', 'unknown30', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_c_talks', 'unknown27', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_c_talks', 'unknown26', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_c_talks', 'unknown25c', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_c_talks', 'unknown25', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_c_talks', 'flag5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('n_p_c_talks', 'data7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_talks', 'base_item_types_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('n_p_c_talks', '_prophecies_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('n_p_c_masters', 'unknown6');
    await queryInterface.removeColumn('n_p_c_masters', 'unknown5');
    await queryInterface.removeColumn('n_p_c_masters', 'unknown15');
    await queryInterface.removeColumn('n_p_c_masters', 'unknown14');
    await queryInterface.removeColumn('n_p_c_masters', 'signature_mods_key');
    await queryInterface.removeColumn('n_p_c_masters', 'key1');
    await queryInterface.removeColumn('n_p_c_masters', 'help_text');
    await queryInterface.removeColumn(
      'n_p_c_masters',
      '_spawn_weight_tags_cache',
    );
    await queryInterface.addColumn('n_p_c_masters', 'unknown7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn(
      'n_p_c_masters',
      'talisman_achievement_items_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('n_p_c_masters', 'signature_mod_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('n_p_c_masters', 'np_cs_key', {
      allowNull: true,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_masters', 'keys1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_masters', 'keys0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_masters', 'key2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('n_p_c_masters', 'is_str_master', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('n_p_c_masters', 'is_int_master', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('n_p_c_masters', 'is_dex_master', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('n_p_c_masters', 'hideout', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn(
      'n_p_c_masters',
      '_unknown_weight_tags_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'n_p_c_masters',
      '_signature_mod_spawn_weight_tags_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'n_p_c_masters',
      '_master_level5_achievement_items_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'n_p_c_masters',
      '_achievement_items_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.removeColumn('n_p_c_audios', 'unknown3');
    await queryInterface.removeColumn('n_p_c_audios', 'unknown2');
    await queryInterface.removeColumn('mystery_boxes', 'bundle_id');
    await queryInterface.removeColumn('mystery_boxes', 'box_id');
    await queryInterface.removeColumn('mystery_boxes', 'bk2_file');
    await queryInterface.removeColumn('music', 'unknown1');
    await queryInterface.removeColumn('music', 'unknown0');
    await queryInterface.removeColumn('multi_part_achievements', 'unknown0');
    await queryInterface.removeColumn('multi_part_achievements', 'flag1');
    await queryInterface.renameColumn(
      'monster_spawner_overrides',
      'key0',
      'unknown0',
    );
    await queryInterface.removeColumn('monster_mortars', 'unknown4');
    await queryInterface.removeColumn('monster_mortars', 'unknown3');
    await queryInterface.removeColumn('mods', 'unveil_achievement_items_key');
    await queryInterface.renameColumn(
      'mod_types',
      '_mod_sell_price_types_cache',
      '_mod_sell_prices_cache',
    );
    await queryInterface.addColumn('mission_tile_maps', 'npc_master_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'mission_tile_maps',
      'mission_transition_tiles_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('mission_tile_maps', '_world_areas_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn(
      'microtransaction_portal_variations',
      'unknown4',
    );
    await queryInterface.removeColumn(
      'microtransaction_periodic_character_effect_variations',
      'key0',
    );
    await queryInterface.removeColumn(
      'microtransaction_combine_forumulas',
      'bk2_file',
    );
    await queryInterface.removeColumn('melees', 'key1');
    await queryInterface.removeColumn('melees', 'flag0');
    await queryInterface.addColumn('maps', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn(
      'maps',
      '_higher_tier_maps_base_item_types_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.removeColumn('map_series', 'base_icon_dds_file');
    await queryInterface.removeColumn(
      'map_fragment_mods',
      'map_fragment_families',
    );
    await queryInterface.removeColumn('map_fragment_mods', 'flag2');
    await queryInterface.removeColumn('map_fragment_mods', 'flag1');
    await queryInterface.removeColumn('map_fragment_mods', 'flag0');
    await queryInterface.removeColumn(
      'map_fragment_mods',
      'achievement_items_key',
    );
    await queryInterface.renameColumn(
      'labyrinth_trinkets',
      'buff_stat_values',
      'buff_values',
    );
    await queryInterface.renameColumn(
      'labyrinth_secret_effects',
      'buff_stat_values',
      'buff_values',
    );
    await queryInterface.removeColumn('item_visual_identities', 'unknown9');
    await queryInterface.removeColumn('item_visual_identities', 'unknown8');
    await queryInterface.removeColumn('item_visual_identities', 'unknown7');
    await queryInterface.removeColumn('item_visual_identities', 'unknown6');
    await queryInterface.removeColumn('item_visual_identities', 'unknown5');
    await queryInterface.removeColumn('item_visual_identities', 'unknown4');
    await queryInterface.removeColumn('item_visual_identities', 'unknown3');
    await queryInterface.removeColumn('item_visual_identities', 'unknown2');
    await queryInterface.removeColumn('item_visual_identities', 'unknown13');
    await queryInterface.removeColumn('item_visual_identities', 'unknown12');
    await queryInterface.removeColumn('item_visual_identities', 'unknown11');
    await queryInterface.removeColumn('item_visual_identities', 'unknown10');
    await queryInterface.removeColumn(
      'item_visual_identities',
      'is_tier16_icon',
    );
    await queryInterface.removeColumn(
      'item_visual_identities',
      'is_atlas_of_worlds_map_icon',
    );
    await queryInterface.removeColumn('incursion_rooms', 'unknown1');
    await queryInterface.removeColumn(
      'incursion_rooms',
      'room_upgrade_from_incursion_rooms_key',
    );
    await queryInterface.removeColumn(
      'incursion_rooms',
      '_achievement_items_cache',
    );
    await queryInterface.addColumn('incursion_rooms', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.renameColumn(
      'incursion_chest_rewards',
      'unknown0',
      'unknown4',
    );
    await queryInterface.renameColumn(
      'incursion_chest_rewards',
      'unknown1',
      'unknown5',
    );
    await queryInterface.renameColumn(
      'incursion_chest_rewards',
      'unknown2',
      'unknown6',
    );
    await queryInterface.renameColumn(
      'incursion_chest_rewards',
      'unknown3',
      'unknown7',
    );
    await queryInterface.removeColumn('hideouts', 'weight');
    await queryInterface.removeColumn('hideouts', 'unknown0');
    await queryInterface.removeColumn('hideouts', 'keys0');
    await queryInterface.removeColumn('hideouts', 'key0');
    await queryInterface.removeColumn('hideouts', 'is_enabled');
    await queryInterface.removeColumn('hideouts', 'hideout_image');
    await queryInterface.removeColumn('hideouts', 'hideout_file');
    await queryInterface.removeColumn('hideouts', 'flag1');
    await queryInterface.addColumn('hideouts', 'unknown9', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('hideouts', 'npc_master_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('hideouts', 'medium_world_areas_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('hideout_n_p_cs', 'npc_master_key');
    await queryInterface.removeColumn('hideout_n_p_cs', 'hideout_doodads_key');
    await queryInterface.removeColumn('hideout_n_p_cs', '_regular_np_cs_cache');
    await queryInterface.addColumn('hideout_n_p_cs', 'regular_np_cs_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('hideout_doodads', 'hideout_np_cs_key');
    await queryInterface.removeColumn('hideout_doodads', 'flag0');
    await queryInterface.addColumn('hideout_doodads', 'npc_master_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn(
      'granted_effects_per_levels',
      'stat_interpolation_types_keys',
    );
    await queryInterface.addColumn('granted_effects_per_levels', 'stat_data', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.renameColumn(
      'granted_effects',
      'base_effectiveness',
      'multiplier1',
    );
    await queryInterface.renameColumn(
      'granted_effects',
      'incremental_effectiveness',
      'multiplier2',
    );
    await queryInterface.removeColumn('geometry_attacks', 'unknown23');
    await queryInterface.removeColumn('geometry_attacks', 'unknown22');
    await queryInterface.removeColumn('geometry_attacks', 'unknown21');
    await queryInterface.removeColumn('geometry_attacks', 'unknown19');
    await queryInterface.removeColumn('geometry_attacks', 'unknown16');
    await queryInterface.removeColumn('geometry_attacks', 'unknown15');
    await queryInterface.removeColumn('geometry_attacks', 'unknown14');
    await queryInterface.removeColumn('geometry_attacks', 'unknown13');
    await queryInterface.removeColumn('geometry_attacks', 'keys1');
    await queryInterface.removeColumn('geometry_attacks', 'keys0');
    await queryInterface.removeColumn('geometry_attacks', 'flag6');
    await queryInterface.removeColumn('geometry_attacks', 'flag5');
    await queryInterface.addColumn('geometry_attacks', 'unknown4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown17', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('geometry_attacks', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('geometry_attacks', 'key1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('geometry_attacks', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('extra_terrain_features', 'unknown11');
    await queryInterface.removeColumn('extra_terrain_features', 'unknown10');
    await queryInterface.removeColumn('extra_terrain_features', 'key0');
    await queryInterface.addColumn('extra_terrain_features', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown1', {
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
      'delve_upgrades',
      'stat_values',
      'stats_values',
    );
    await queryInterface.removeColumn('delve_rooms', 'delve_biomes_key');
    await queryInterface.addColumn('delve_rooms', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.renameColumn(
      'delve_resource_per_levels',
      'area_level',
      'level',
    );
    await queryInterface.renameColumn(
      'delve_resource_per_levels',
      'sulphite',
      'resources',
    );
    await queryInterface.renameColumn(
      'delve_monster_spawners',
      'base_metadata',
      'unknown0',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown4',
      'unknown9',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown8',
      'unknown13',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown7',
      'unknown12',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown6',
      'unknown11',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown5',
      'unknown10',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'more_monster_damage',
      'unknown6',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'more_monster_life',
      'unknown5',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'sulphite_cost',
      'unknown3',
    );
    await queryInterface.renameColumn(
      'delve_level_scalings',
      'unknown1',
      'unknown2',
    );
    await queryInterface.removeColumn('delve_features', 'unknown13');
    await queryInterface.removeColumn('delve_features', 'unknown12');
    await queryInterface.removeColumn(
      'delve_crafting_modifiers',
      '_mods_1_cache',
    );
    await queryInterface.removeColumn(
      'delve_crafting_modifiers',
      '_mods_0_cache',
    );
    await queryInterface.renameColumn(
      'delve_crafting_modifiers',
      '_mods_0_cache',
      '_mods0_cache',
    );
    await queryInterface.renameColumn(
      'delve_crafting_modifiers',
      '_mods_1_cache',
      '_mods1_cache',
    );
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods_0s',
      'delve_crafting_modifier__mods0s',
    );
    await queryInterface.renameTable(
      'delve_crafting_modifier__mods_1s',
      'delve_crafting_modifier__mods1s',
    );
    await queryInterface.removeColumn('delve_biomes', 'unknown0');
    await queryInterface.renameColumn(
      'delve_biomes',
      'spawn_weight_depth',
      'data0',
    );
    await queryInterface.renameColumn(
      'delve_biomes',
      'spawn_weight_values',
      'data1',
    );
    await queryInterface.removeColumn('delve_biomes', 'flag0');
    await queryInterface.removeColumn('custom_league_mods', 'unknown2');
    await queryInterface.removeColumn(
      'crafting_bench_options',
      'unveils_required2',
    );
    await queryInterface.removeColumn(
      'crafting_bench_options',
      'unveils_required',
    );
    await queryInterface.removeColumn('crafting_bench_options', 'tier');
    await queryInterface.renameColumn(
      'crafting_bench_options',
      'required_level',
      'master_level',
    );

    await queryInterface.removeColumn('crafting_bench_options', 'recipe_ids');
    await queryInterface.removeColumn('crafting_bench_options', 'mod_family');
    await queryInterface.removeColumn(
      'crafting_bench_options',
      'maximum_map_tier',
    );
    await queryInterface.removeColumn('crafting_bench_options', 'keys1');
    await queryInterface.removeColumn(
      'crafting_bench_options',
      'hideout_np_cs_key',
    );
    await queryInterface.removeColumn(
      'crafting_bench_options',
      'crafting_bench_unlock_categories_key',
    );
    await queryInterface.removeColumn('crafting_bench_options', 'affix_type');
    await queryInterface.removeColumn(
      'crafting_bench_options',
      '_crafting_item_class_categories_cache',
    );
    await queryInterface.addColumn('crafting_bench_options', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('crafting_bench_options', 'npc_master_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('client_strings', 'unknown0');
    await queryInterface.removeColumn('client_strings', 'playstation_text');
    await queryInterface.removeColumn('chest_item_templates', 'unknown5');
    await queryInterface.removeColumn('chest_item_templates', 'unknown4');
    await queryInterface.removeColumn('chest_item_templates', 'chests_key');
    await queryInterface.addColumn('chest_item_templates', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('buff_visuals', 'epk_file');
    await queryInterface.removeColumn('buff_visuals', 'buff_name');
    await queryInterface.removeColumn('buff_visuals', 'buff_description');
    await queryInterface.addColumn('buff_visuals', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_visuals', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('buff_definitions', 'unknown6');
    await queryInterface.removeColumn('buff_definitions', 'unknown1');
    await queryInterface.removeColumn('buff_definitions', 'key0');
    await queryInterface.removeColumn('buff_definitions', 'id2');
    await queryInterface.removeColumn('buff_definitions', 'flag15');
    await queryInterface.removeColumn('buff_definitions', 'flag14');
    await queryInterface.removeColumn('buff_definitions', 'flag13');
    await queryInterface.addColumn('buff_definitions', 'unknown7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_definitions', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_definitions', 'flag9', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('bestiary_recipes', 'data0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.renameColumn(
      'bestiary_recipe_components',
      'rarity',
      'rarity_key',
    );
    await queryInterface.renameColumn('bestiary_groups', 'name', 'group_name');
    await queryInterface.renameColumn('bestiary_groups', 'id', 'name');
    await queryInterface.addColumn('bestiary_genus', 'unknown6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'bestiary_capturable_monsters',
      'unknown0',
    );
    await queryInterface.removeColumn('bestiary_capturable_monsters', 'flag3');
    await queryInterface.removeColumn('atlas_nodes', 'unknown4');
    await queryInterface.removeColumn('atlas_nodes', 'tier');
    await queryInterface.removeColumn('atlas_nodes', 'maps_key');
    await queryInterface.removeColumn('atlas_nodes', 'flavour_text_key');
    await queryInterface.removeColumn('atlas_nodes', '_atlas_sector_cache');
    await queryInterface.addColumn('atlas_nodes', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('atlas_nodes', 'flavour_text', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('advanced_skills_tutorials', 'keys1');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'key2');
    await queryInterface.removeColumn('advanced_skills_tutorials', 'key0');
    await queryInterface.removeColumn(
      'advanced_skills_tutorials',
      'international_bk2_file',
    );
    await queryInterface.removeColumn('advanced_skills_tutorials', 'id');
    await queryInterface.removeColumn(
      'advanced_skills_tutorials',
      'description',
    );
    await queryInterface.removeColumn(
      'advanced_skills_tutorials',
      'china_bk2_file',
    );
    await queryInterface.removeColumn(
      'advanced_skills_tutorials',
      'characters_key',
    );
    await queryInterface.addColumn('advanced_skills_tutorials', 'unknown9', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'unknown8', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'unknown7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'unknown6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'unknown4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('advanced_skills_tutorials', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('achievements', 'unknown2');
    await queryInterface.renameColumn('achievements', 'unknown1', 'unknown4');
    await queryInterface.removeColumn(
      'achievement_set_rewards',
      '_base_item_types_cache',
    );
    await queryInterface.addColumn(
      'achievement_set_rewards',
      'base_item_types_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.removeColumn('achievement_items', 'flag2');
    await queryInterface.removeColumn('achievement_items', 'flag1');
    await queryInterface.addIndex(
      'skill_surge_effects',
      [
        {
          attribute: 'misc_animated_key',
        },
      ],
      {
        indexName: 'index_misc_animated_key',
      },
    );
    await queryInterface.addIndex(
      'passive_skills',
      [
        {
          attribute: 'granted_buff_buff_definitions_key',
        },
      ],
      {
        indexName: 'index_granted_buff_buff_definitions_key',
      },
    );
    await queryInterface.addIndex(
      'n_p_c_talks',
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
      'n_p_c_masters',
      [
        {
          attribute: 'talisman_achievement_items_key',
        },
      ],
      {
        indexName: 'index_talisman_achievement_items_key',
      },
    );
    await queryInterface.addIndex(
      'n_p_c_masters',
      [
        {
          attribute: 'signature_mod_mods_key',
        },
      ],
      {
        indexName: 'index_signature_mod_mods_key',
      },
    );
    await queryInterface.addIndex(
      'n_p_c_masters',
      [
        {
          attribute: 'np_cs_key',
          length: 250,
        },
      ],
      {
        indexName: 'index_np_cs_key',
      },
    );
    await queryInterface.addIndex(
      'mission_tile_maps',
      [
        {
          attribute: 'mission_transition_tiles_key',
        },
      ],
      {
        indexName: 'index_mission_transition_tiles_key',
      },
    );
    await queryInterface.addIndex(
      'mission_tile_maps',
      [
        {
          attribute: 'npc_master_key',
        },
      ],
      {
        indexName: 'index_npc_master_key',
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
      'hideout_doodads',
      [
        {
          attribute: 'npc_master_key',
        },
      ],
      {
        indexName: 'index_npc_master_key',
      },
    );
    await queryInterface.addIndex(
      'hideouts',
      [
        {
          attribute: 'medium_world_areas_key',
        },
      ],
      {
        indexName: 'index_medium_world_areas_key',
      },
    );
    await queryInterface.addIndex(
      'hideouts',
      [
        {
          attribute: 'npc_master_key',
        },
      ],
      {
        indexName: 'index_npc_master_key',
      },
    );
    await queryInterface.addIndex(
      'crafting_bench_options',
      [
        {
          attribute: 'npc_master_key',
        },
      ],
      {
        indexName: 'index_npc_master_key',
      },
    );
    await queryInterface.addIndex(
      'achievement_set_rewards',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    await queryInterface.dropTable('unique_stash_types');
    await queryInterface.dropTable('unique_stash_layouts');
    await queryInterface.dropTable('unique_maps');
    await queryInterface.dropTable('table_monster_spawners');
    await queryInterface.dropTable('surge_types');
    await queryInterface.dropTable('skill_gem_info__characters');
    await queryInterface.dropTable('sigil_displays');
    await queryInterface.dropTable(
      'shop_payment_package__shop_package_platforms',
    );
    await queryInterface.dropTable('shop_forum_badges');
    await queryInterface.dropTable(
      'safeho_craft_spree__curre__safeh_craft_spree_curre',
    );
    await queryInterface.dropTable('safehouse_crafting_spree_currencies');
    await queryInterface.dropTable('safehouse_crafting_sprees');
    await queryInterface.dropTable('safehouse_b_y_o_craftings');
    await queryInterface.dropTable('recipe_unlock_objects');
    await queryInterface.dropTable(
      'recipe_unlock_display__crafting_item_class_categories',
    );
    await queryInterface.dropTable('recipe_unlock_displays');
    await queryInterface.dropTable('quest_types');
    await queryInterface.dropTable('quest_achievement__achievement_items');
    await queryInterface.dropTable('passive_skill__passive_skill_buffs');
    await queryInterface.dropTable('passive_skill_buffs');
    await queryInterface.dropTable('n_p_c_talk_console_quick_actions');
    await queryInterface.dropTable('n_p_c_shop_additional_item__item_classes');
    await queryInterface.dropTable('n_p_c_shop_additional_items');
    await queryInterface.dropTable('n_p_c_master_levels');
    await queryInterface.dropTable('n_p_c_master__spawn_weight__tags');
    await queryInterface.dropTable('n_p_c_follower_variations');
    await queryInterface.dropTable('n_p_c_additional_vendor_items');
    await queryInterface.dropTable('multi_part_achievement_areas');
    await queryInterface.dropTable('monster_spawner_groups_per_levels');
    await queryInterface.dropTable('monster_spawner_groups');
    await queryInterface.dropTable('mod_type__mod_sell_price_types');
    await queryInterface.dropTable('mission_favour_per_levels');
    await queryInterface.dropTable('master_hideout_levels');
    await queryInterface.dropTable(
      'map_purchase_cost__unique_purchase__base_item_types',
    );
    await queryInterface.dropTable(
      'map_purchase_cost__rare_purchase__base_item_types',
    );
    await queryInterface.dropTable(
      'map_purchase_cost__normal_purchase__base_item_types',
    );
    await queryInterface.dropTable(
      'map_purchase_cost__magic_purchase__base_item_types',
    );
    await queryInterface.dropTable('map_purchase_costs');
    await queryInterface.dropTable('map_fragment_families');
    await queryInterface.dropTable('map_devices');
    await queryInterface.dropTable('map_creation_informations');
    await queryInterface.dropTable('job_raid_brackets');
    await queryInterface.dropTable('job_assassination_spawner_groups');
    await queryInterface.dropTable('incursion_room__achievement_items');
    await queryInterface.dropTable('hideout_rarities');
    await queryInterface.dropTable('hideout_n_p_c__regular__n_p_cs');
    await queryInterface.dropTable('geometry_projectiles');
    await queryInterface.dropTable('fixed_missions');
    await queryInterface.dropTable('fixed_hideout_doodads');
    await queryInterface.dropTable('einhar_pack_fallbacks');
    await queryInterface.dropTable('einhar_missions');
    await queryInterface.dropTable(
      'crafting_item_class_category__item_classes',
    );
    await queryInterface.dropTable('crafting_item_class_categories');
    await queryInterface.dropTable(
      'crafting_bench_unlock_category__crafting_item_class_categories',
    );
    await queryInterface.dropTable('crafting_bench_unlock_categories');
    await queryInterface.dropTable(
      'crafting_bench_option__crafting_item_class_categories',
    );
    await queryInterface.dropTable('buff_stack_u_i_modes');
    await queryInterface.dropTable('breachstone_upgrades');
    await queryInterface.dropTable('betrayal_wall_life_scaling_per_levels');
    await queryInterface.dropTable('betrayal_upgrade_slots');
    await queryInterface.dropTable('betrayal_upgrades');
    await queryInterface.dropTable('betrayal_traitor_rewards');
    await queryInterface.dropTable('betrayal_target_life_scaling_per_levels');
    await queryInterface.dropTable('betrayal_target_job_achievements');
    await queryInterface.dropTable('betrayal_target_flags');
    await queryInterface.dropTable('betrayal_targets');
    await queryInterface.dropTable('betrayal_relationship_states');
    await queryInterface.dropTable('betrayal_ranks');
    await queryInterface.dropTable('betrayal_jobs');
    await queryInterface.dropTable('betrayal_forts');
    await queryInterface.dropTable('betrayal_flags');
    await queryInterface.dropTable('betrayal_dialogue_cues');
    await queryInterface.dropTable('betrayal_dialogues');
    await queryInterface.dropTable('betrayal_choice_actions');
    await queryInterface.dropTable('betrayal_choices');
    await queryInterface.dropTable('atlas_sector__spawn_weight__tags');
    await queryInterface.dropTable('atlas_sectors');
    await queryInterface.dropTable('atlas_quadrants');
    await queryInterface.dropTable('atlas_node__atlas_sectors');
    await queryInterface.dropTable('atlas_node_definitions');
    await queryInterface.dropTable('architect_life_scaling_per_levels');
    await queryInterface.dropTable('additional_life_scaling_per_levels');
    await queryInterface.dropTable('additional_life_scalings');
    await queryInterface.dropTable('achievement_set_reward__base_item_types');
    await queryInterface.dropTable('account_quest_flags');
  },
};
