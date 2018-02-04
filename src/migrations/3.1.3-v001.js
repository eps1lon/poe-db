module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'abyss_objects',
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
        metadata_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown6: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        keys0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
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
        key0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
        unknown20: {
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
      'abyss_regions',
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
      'abyss_themes',
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
      'archetypes',
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
        passive_skill_tree_url: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ascendancy_class_name: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ui_image_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tutorial_video_bk_file: {
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
        unknown2: {
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
        characters_key: {
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
      'atlas_influence_outcomes',
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
        key0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        _mods_cache: {
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
      'atlas_influence_outcome__mods',
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
        atlas_influence_outcome_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mod_row: {
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
      'base_item_type__identify_magic__achievement_items',
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
        base_item_type_row: {
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
      'base_item_type__identify_rare__achievement_items',
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
        base_item_type_row: {
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
      'buff_visual__misc_animated1s',
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
        buff_visual_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        misc_animated_row: {
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
      'buff_visual__misc_animated2s',
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
        buff_visual_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        misc_animated_row: {
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
      'elder_boss_arenas',
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
        _achievement_items_cache: {
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
      'elder_boss_arena__achievement_items',
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
        elder_boss_arena_row: {
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
      'elder_map_boss_overrides',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        terrain_metadata: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _monster_varieties_cache: {
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
      'elder_map_boss_override__monster_varieties',
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
        elder_map_boss_override_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_variety_row: {
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
      'fragment_stash_tab_layouts',
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
        pos_x: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        pos_y: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        order: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        size_x: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        size_y: {
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
      'map_series',
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
      'microtransaction_combine_forumulas',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        _ingredients_base_item_types_cache: {
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
        result_base_item_types_key: {
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
      'microtransaction_combine_forumula__ingredients__base_item_types',
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
        microtransaction_combine_forumula_row: {
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
      'monster_mortars',
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
          type: Sequelize.INTEGER,
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
        key1: {
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
      'monster_projectile_attacks',
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
      'monster_projectile_spells',
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
          type: Sequelize.INTEGER,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'passive_skill_stat_categories',
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
      'passive_skill_tree_tutorials',
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
        choice_a_description: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        choice_b_description: {
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
        choice_a_passive_tree_url: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        choice_b_passive_tree_url: {
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
        characters_key: {
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
      'shaper_memory_fragments',
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
      'shaper_orbs',
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
      'starting_passive_skills',
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
        passive_skills: {
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
      'unique_map_infos',
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
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown2: {
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
    await queryInterface.removeIndex(
      'atlas_nodes',
      'index_default_item_visual_identity_key',
    );
    await queryInterface.removeIndex(
      'atlas_nodes',
      'index_shaped_item_visual_identity_key',
    );
    await queryInterface.removeIndex('buff_visuals', 'index_misc_animated_key');
    await queryInterface.removeIndex(
      'buff_visuals',
      'index_misc_animated_key2',
    );
    await queryInterface.removeIndex('maps', 'index_maps_key1');
    await queryInterface.removeIndex('maps', 'index_maps_key2');
    await queryInterface.removeIndex('maps', 'index_maps_key3');
    await queryInterface.removeColumn(
      'atlas_nodes',
      'default_item_visual_identity_key',
    );
    await queryInterface.removeColumn(
      'atlas_nodes',
      'shaped_item_visual_identity_key',
    );
    await queryInterface.addColumn('atlas_nodes', 'item_visual_identity_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('base_item_types', 'data11');
    await queryInterface.removeColumn('base_item_types', 'key0');
    await queryInterface.addColumn(
      'base_item_types',
      '_identify_magic_achievement_items_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'base_item_types',
      '_identify_rare_achievement_items_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'base_item_types',
      'fragment_base_item_types_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('base_item_types', 'item_themes_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('buff_definitions', 'flag11', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('buff_visuals', 'epk_file1');
    await queryInterface.removeColumn('buff_visuals', 'epk_file2');
    await queryInterface.removeColumn('buff_visuals', 'key0');
    await queryInterface.removeColumn('buff_visuals', 'key1');
    await queryInterface.removeColumn('buff_visuals', 'misc_animated_key');
    await queryInterface.removeColumn('buff_visuals', 'misc_animated_key2');
    await queryInterface.removeColumn('buff_visuals', 'unknown1');
    await queryInterface.removeColumn('buff_visuals', 'unknown6');
    await queryInterface.addColumn('buff_visuals', '_misc_animated1_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('buff_visuals', '_misc_animated2_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('buff_visuals', 'epk_files1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('buff_visuals', 'epk_files2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('character_start_items', 'unknown2');
    await queryInterface.addColumn('character_start_items', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('character_start_items', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('character_start_items', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('crafting_bench_options', 'flag0');
    await queryInterface.addColumn('crafting_bench_options', 'is_area_option', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('default_monster_stats', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('default_monster_stats', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.FLOAT,
    });
    await queryInterface.addColumn('default_monster_stats', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.FLOAT,
    });
    await queryInterface.addColumn('default_monster_stats', 'unknown4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('harbingers', 'unknown2');
    await queryInterface.addColumn('harbingers', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_classes', 'elder_tags_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('item_classes', 'shaper_tags_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('item_visual_identities', 'unknown28');
    await queryInterface.removeColumn('item_visual_identities', 'unknown29');
    await queryInterface.removeColumn('item_visual_identities', 'unknown30');
    await queryInterface.addColumn(
      'item_visual_identities',
      'animation_location',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('item_visual_identities', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'labyrinth_trinkets',
      '_labyrinth_secrets_cache',
    );
    await queryInterface.addColumn(
      'labyrinth_trinkets',
      'labyrinth_secrets_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.removeColumn('maps', 'map_iteration');
    await queryInterface.removeColumn('maps', 'maps_key1');
    await queryInterface.removeColumn('maps', 'maps_key2');
    await queryInterface.removeColumn('maps', 'maps_key3');
    await queryInterface.addColumn('maps', 'atlas_completion_maps_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('maps', 'atlas_completion_unique_maps_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('maps', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('maps', 'map_series_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('maps', 'maps_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('mods', 'stat6_max', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('mods', 'stat6_min', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('mods', 'stats_key6', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('mods', 'tier_text', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('monster_types', 'is_large_abyss_monster', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('monster_types', 'is_small_abyss_monster', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('quest_achievements', 'quest_state');
    await queryInterface.removeColumn('quest_achievements', 'unknown1');
    await queryInterface.addColumn('quest_achievements', 'data0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('quest_achievements', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('quest_achievements', 'quest_states', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('shop_items', 'unknown15');
    await queryInterface.addColumn('shop_items', 'string0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('shop_payment_packages', 'x_box_id');
    await queryInterface.addColumn('shop_payment_packages', 'unknown6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('skill_gems', 'consumed_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('stats', 'unknown3');
    await queryInterface.addColumn('stats', 'flag8', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('stats', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('stats', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'abyss_regular_chance', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'abyss_special_chance', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn(
      'world_areas',
      'twinned_boss_kill_achievement_items_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('world_areas', 'unknown98', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('zana_quests', 'unknown7');
    await queryInterface.removeColumn('zana_quests', 'unknown8');
    await queryInterface.removeColumn('zana_quests', 'unknown9');
    await queryInterface.addColumn('zana_quests', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('zana_quests', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addIndex(
      'archetypes',
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
      'atlas_influence_outcome__mods',
      [
        {
          attribute: 'atlas_influence_outcome_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'atlas_nodes',
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
      'base_item_types',
      [
        {
          attribute: 'item_themes_key',
        },
      ],
      {
        indexName: 'index_item_themes_key',
      },
    );
    await queryInterface.addIndex(
      'base_item_types',
      [
        {
          attribute: 'fragment_base_item_types_key',
        },
      ],
      {
        indexName: 'index_fragment_base_item_types_key',
      },
    );
    await queryInterface.addIndex(
      'base_item_type__identify_magic__achievement_items',
      [
        {
          attribute: 'base_item_type_row',
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
      'base_item_type__identify_rare__achievement_items',
      [
        {
          attribute: 'base_item_type_row',
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
      'buff_visual__misc_animated1s',
      [
        {
          attribute: 'buff_visual_row',
        },
        {
          attribute: 'misc_animated_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'buff_visual__misc_animated2s',
      [
        {
          attribute: 'buff_visual_row',
        },
        {
          attribute: 'misc_animated_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'elder_boss_arenas',
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
      'elder_boss_arena__achievement_items',
      [
        {
          attribute: 'elder_boss_arena_row',
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
      'elder_map_boss_overrides',
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
      'elder_map_boss_override__monster_varieties',
      [
        {
          attribute: 'elder_map_boss_override_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'fragment_stash_tab_layouts',
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
      'item_classes',
      [
        {
          attribute: 'elder_tags_key',
        },
      ],
      {
        indexName: 'index_elder_tags_key',
      },
    );
    await queryInterface.addIndex(
      'item_classes',
      [
        {
          attribute: 'shaper_tags_key',
        },
      ],
      {
        indexName: 'index_shaper_tags_key',
      },
    );
    await queryInterface.addIndex(
      'labyrinth_trinkets',
      [
        {
          attribute: 'labyrinth_secrets_key',
        },
      ],
      {
        indexName: 'index_labyrinth_secrets_key',
      },
    );
    await queryInterface.addIndex(
      'maps',
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
      'maps',
      [
        {
          attribute: 'atlas_completion_maps_key',
        },
      ],
      {
        indexName: 'index_atlas_completion_maps_key',
      },
    );
    await queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'atlas_completion_unique_maps_key',
        },
      ],
      {
        indexName: 'index_atlas_completion_unique_maps_key',
      },
    );
    await queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'map_series_key',
        },
      ],
      {
        indexName: 'index_map_series_key',
      },
    );
    await queryInterface.addIndex(
      'microtransaction_combine_forumulas',
      [
        {
          attribute: 'result_base_item_types_key',
        },
      ],
      {
        indexName: 'index_result_base_item_types_key',
      },
    );
    await queryInterface.addIndex(
      'microtransaction_combine_forumula__ingredients__base_item_types',
      [
        {
          attribute: 'microtransaction_combine_forumula_row',
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
      'mods',
      [
        {
          attribute: 'stats_key6',
        },
      ],
      {
        indexName: 'index_stats_key6',
      },
    );
    await queryInterface.addIndex(
      'passive_skill_tree_tutorials',
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
      'shaper_orbs',
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
          attribute: 'consumed_mods_key',
        },
      ],
      {
        indexName: 'index_consumed_mods_key',
      },
    );
    await queryInterface.addIndex(
      'world_areas',
      [
        {
          attribute: 'twinned_boss_kill_achievement_items_key',
        },
      ],
      {
        indexName: 'index_twinned_boss_kill_achievement_items_key',
      },
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(
      'world_areas',
      'index_twinned_boss_kill_achievement_items_key',
    );
    await queryInterface.removeIndex('skill_gems', 'index_consumed_mods_key');
    await queryInterface.removeIndex(
      'shaper_orbs',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex(
      'passive_skill_tree_tutorials',
      'index_characters_key',
    );
    await queryInterface.removeIndex('mods', 'index_stats_key6');
    await queryInterface.removeIndex(
      'microtransaction_combine_forumula__ingredients__base_item_types',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'microtransaction_combine_forumulas',
      'index_result_base_item_types_key',
    );
    await queryInterface.removeIndex('maps', 'index_map_series_key');
    await queryInterface.removeIndex(
      'maps',
      'index_atlas_completion_unique_maps_key',
    );
    await queryInterface.removeIndex('maps', 'index_atlas_completion_maps_key');
    await queryInterface.removeIndex('maps', 'index_maps_key');
    await queryInterface.removeIndex(
      'labyrinth_trinkets',
      'index_labyrinth_secrets_key',
    );
    await queryInterface.removeIndex('item_classes', 'index_shaper_tags_key');
    await queryInterface.removeIndex('item_classes', 'index_elder_tags_key');
    await queryInterface.removeIndex(
      'fragment_stash_tab_layouts',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex(
      'elder_map_boss_override__monster_varieties',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'elder_map_boss_overrides',
      'index_world_areas_key',
    );
    await queryInterface.removeIndex(
      'elder_boss_arena__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'elder_boss_arenas',
      'index_world_areas_key',
    );
    await queryInterface.removeIndex(
      'buff_visual__misc_animated2s',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'buff_visual__misc_animated1s',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'base_item_type__identify_rare__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'base_item_type__identify_magic__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'base_item_types',
      'index_fragment_base_item_types_key',
    );
    await queryInterface.removeIndex(
      'base_item_types',
      'index_item_themes_key',
    );
    await queryInterface.removeIndex(
      'atlas_nodes',
      'index_item_visual_identity_key',
    );
    await queryInterface.removeIndex(
      'atlas_influence_outcome__mods',
      'composite primary_alias',
    );
    await queryInterface.removeIndex('archetypes', 'index_characters_key');
    await queryInterface.removeColumn('zana_quests', 'flag2');
    await queryInterface.removeColumn('zana_quests', 'flag1');
    await queryInterface.addColumn('zana_quests', 'unknown9', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('zana_quests', 'unknown8', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('zana_quests', 'unknown7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('world_areas', 'unknown98');
    await queryInterface.removeColumn(
      'world_areas',
      'twinned_boss_kill_achievement_items_key',
    );
    await queryInterface.removeColumn('world_areas', 'abyss_special_chance');
    await queryInterface.removeColumn('world_areas', 'abyss_regular_chance');
    await queryInterface.removeColumn('stats', 'unknown1');
    await queryInterface.removeColumn('stats', 'key0');
    await queryInterface.removeColumn('stats', 'flag8');
    await queryInterface.addColumn('stats', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('skill_gems', 'consumed_mods_key');
    await queryInterface.removeColumn('shop_payment_packages', 'unknown6');
    await queryInterface.addColumn('shop_payment_packages', 'x_box_id', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('shop_items', 'string0');
    await queryInterface.addColumn('shop_items', 'unknown15', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('quest_achievements', 'quest_states');
    await queryInterface.removeColumn('quest_achievements', 'flag0');
    await queryInterface.removeColumn('quest_achievements', 'data0');
    await queryInterface.addColumn('quest_achievements', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('quest_achievements', 'quest_state', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'monster_types',
      'is_small_abyss_monster',
    );
    await queryInterface.removeColumn(
      'monster_types',
      'is_large_abyss_monster',
    );
    await queryInterface.removeColumn('mods', 'tier_text');
    await queryInterface.removeColumn('mods', 'stats_key6');
    await queryInterface.removeColumn('mods', 'stat6_min');
    await queryInterface.removeColumn('mods', 'stat6_max');
    await queryInterface.removeColumn('maps', 'maps_key');
    await queryInterface.removeColumn('maps', 'map_series_key');
    await queryInterface.removeColumn('maps', 'flag0');
    await queryInterface.removeColumn(
      'maps',
      'atlas_completion_unique_maps_key',
    );
    await queryInterface.removeColumn('maps', 'atlas_completion_maps_key');
    await queryInterface.addColumn('maps', 'maps_key3', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('maps', 'maps_key2', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('maps', 'maps_key1', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('maps', 'map_iteration', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'labyrinth_trinkets',
      'labyrinth_secrets_key',
    );
    await queryInterface.addColumn(
      'labyrinth_trinkets',
      '_labyrinth_secrets_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.removeColumn('item_visual_identities', 'unknown1');
    await queryInterface.removeColumn('item_visual_identities', 'unknown0');
    await queryInterface.removeColumn(
      'item_visual_identities',
      'animation_location',
    );
    await queryInterface.addColumn('item_visual_identities', 'unknown30', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown29', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('item_visual_identities', 'unknown28', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('item_classes', 'shaper_tags_key');
    await queryInterface.removeColumn('item_classes', 'elder_tags_key');
    await queryInterface.removeColumn('harbingers', 'unknown0');
    await queryInterface.addColumn('harbingers', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('default_monster_stats', 'unknown4');
    await queryInterface.removeColumn('default_monster_stats', 'unknown3');
    await queryInterface.removeColumn('default_monster_stats', 'unknown2');
    await queryInterface.removeColumn('default_monster_stats', 'unknown1');
    await queryInterface.removeColumn(
      'crafting_bench_options',
      'is_area_option',
    );
    await queryInterface.addColumn('crafting_bench_options', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('character_start_items', 'unknown0');
    await queryInterface.removeColumn('character_start_items', 'flag2');
    await queryInterface.removeColumn('character_start_items', 'flag1');
    await queryInterface.addColumn('character_start_items', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('buff_visuals', 'epk_files2');
    await queryInterface.removeColumn('buff_visuals', 'epk_files1');
    await queryInterface.removeColumn('buff_visuals', '_misc_animated2_cache');
    await queryInterface.removeColumn('buff_visuals', '_misc_animated1_cache');
    await queryInterface.addColumn('buff_visuals', 'unknown6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_visuals', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('buff_visuals', 'misc_animated_key2', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('buff_visuals', 'misc_animated_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('buff_visuals', 'key1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('buff_visuals', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('buff_visuals', 'epk_file2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('buff_visuals', 'epk_file1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('buff_definitions', 'flag11');
    await queryInterface.removeColumn('base_item_types', 'item_themes_key');
    await queryInterface.removeColumn(
      'base_item_types',
      'fragment_base_item_types_key',
    );
    await queryInterface.removeColumn(
      'base_item_types',
      '_identify_rare_achievement_items_cache',
    );
    await queryInterface.removeColumn(
      'base_item_types',
      '_identify_magic_achievement_items_cache',
    );
    await queryInterface.addColumn('base_item_types', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('base_item_types', 'data11', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn(
      'atlas_nodes',
      'item_visual_identity_key',
    );
    await queryInterface.addColumn(
      'atlas_nodes',
      'shaped_item_visual_identity_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn(
      'atlas_nodes',
      'default_item_visual_identity_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'maps_key3',
        },
      ],
      {
        indexName: 'index_maps_key3',
      },
    );
    await queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'maps_key2',
        },
      ],
      {
        indexName: 'index_maps_key2',
      },
    );
    await queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'maps_key1',
        },
      ],
      {
        indexName: 'index_maps_key1',
      },
    );
    await queryInterface.addIndex(
      'buff_visuals',
      [
        {
          attribute: 'misc_animated_key2',
        },
      ],
      {
        indexName: 'index_misc_animated_key2',
      },
    );
    await queryInterface.addIndex(
      'buff_visuals',
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
      'atlas_nodes',
      [
        {
          attribute: 'shaped_item_visual_identity_key',
        },
      ],
      {
        indexName: 'index_shaped_item_visual_identity_key',
      },
    );
    await queryInterface.addIndex(
      'atlas_nodes',
      [
        {
          attribute: 'default_item_visual_identity_key',
        },
      ],
      {
        indexName: 'index_default_item_visual_identity_key',
      },
    );
    await queryInterface.dropTable('unique_map_infos');
    await queryInterface.dropTable('starting_passive_skills');
    await queryInterface.dropTable('shaper_orbs');
    await queryInterface.dropTable('shaper_memory_fragments');
    await queryInterface.dropTable('passive_skill_tree_tutorials');
    await queryInterface.dropTable('passive_skill_stat_categories');
    await queryInterface.dropTable('monster_projectile_spells');
    await queryInterface.dropTable('monster_projectile_attacks');
    await queryInterface.dropTable('monster_mortars');
    await queryInterface.dropTable(
      'microtransaction_combine_forumula__ingredients__base_item_types',
    );
    await queryInterface.dropTable('microtransaction_combine_forumulas');
    await queryInterface.dropTable('map_series');
    await queryInterface.dropTable('fragment_stash_tab_layouts');
    await queryInterface.dropTable(
      'elder_map_boss_override__monster_varieties',
    );
    await queryInterface.dropTable('elder_map_boss_overrides');
    await queryInterface.dropTable('elder_boss_arena__achievement_items');
    await queryInterface.dropTable('elder_boss_arenas');
    await queryInterface.dropTable('buff_visual__misc_animated2s');
    await queryInterface.dropTable('buff_visual__misc_animated1s');
    await queryInterface.dropTable(
      'base_item_type__identify_rare__achievement_items',
    );
    await queryInterface.dropTable(
      'base_item_type__identify_magic__achievement_items',
    );
    await queryInterface.dropTable('atlas_influence_outcome__mods');
    await queryInterface.dropTable('atlas_influence_outcomes');
    await queryInterface.dropTable('archetypes');
    await queryInterface.dropTable('abyss_themes');
    await queryInterface.dropTable('abyss_regions');
    await queryInterface.dropTable('abyss_objects');
  },
};
