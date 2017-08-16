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
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'achievement_items',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        completions_required: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
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
        achievements_key: {
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
    queryInterface.createTable(
      'achievement_sets',
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
    queryInterface.createTable(
      'achievement_set_rewards',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
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
        achievement_sets_display_key: {
          allowNull: true,
          type: Sequelize.INTEGER,
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
    queryInterface.createTable(
      'achievement_sets_displays',
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
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
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
    queryInterface.createTable(
      'active_skills',
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
        displayed_name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        index3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        icon_dds_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        active_skill_target_types: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        active_skill_types: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        website_description: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        website_image: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown13: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        skill_totem_id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_manually_casted: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown19: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _weapon_restriction_item_classes_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _input_stat_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _output_stat_cache: {
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
    queryInterface.createTable(
      'active_skill_habtm_input_stats',
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
        active_skill_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat_row: {
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
    queryInterface.createTable(
      'active_skill_habtm_output_stats',
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
        active_skill_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat_row: {
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
    queryInterface.createTable(
      'active_skill_habtm_weapon_restriction_itemclasses',
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
        active_skill_row: {
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
    queryInterface.createTable(
      'active_skill_target_types',
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
    queryInterface.createTable(
      'active_skill_types',
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
    queryInterface.createTable(
      'armour_classes',
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
    queryInterface.createTable(
      'armour_surface_types',
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
    queryInterface.createTable(
      'armour_types',
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
    queryInterface.createTable(
      'ascendancies',
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
        class_no: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        coordinate_rect: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        rgb_flavour_text_colour: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flavour_text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ogg_file: {
          allowNull: false,
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
    queryInterface.createTable(
      'atlas_nodes',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        x: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.FLOAT,
        },
        y: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.FLOAT,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flavour_text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _atlas_node_cache: {
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
        default_item_visual_identity_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shaped_item_visual_identity_key: {
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
    queryInterface.createTable(
      'atlas_node_habtm_atlas_nodes',
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
        source_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        target_row: {
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
    queryInterface.createTable(
      'atlas_quest_items',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        quest_flags: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        league_quest_flags: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        map_tier: {
          allowNull: false,
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
    queryInterface.createTable(
      'attributes',
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
    queryInterface.createTable(
      'backend_errors',
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
        text: {
          allowNull: false,
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
    queryInterface.createTable(
      'base_item_types',
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
        width: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        height: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        inherits_from: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        drop_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown_unique: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        unknown20: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        is_picked_up_by_monsters: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        data11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        _implicit_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _normal_purchase_base_item_types_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _magic_purchase_base_item_types_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _vendor_recipe_achievement_items_cache: {
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
        item_classes_key: {
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
        sound_effects_key: {
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
        equip_achievement_items_key: {
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
    queryInterface.createTable(
      'base_item_type_habtm_implicit_mods',
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
    queryInterface.createTable(
      'base_item_type_habtm_magic_purchase_baseitemtypes',
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
        source_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        target_row: {
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
    queryInterface.createTable(
      'base_item_type_habtm_normal_purchase_baseitemtypes',
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
        source_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        target_row: {
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
    queryInterface.createTable(
      'base_item_type_habtm_rare_purchase_baseitemtypes',
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
        source_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        target_row: {
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
    queryInterface.createTable(
      'base_item_type_habtm_tags',
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
    queryInterface.createTable(
      'base_item_type_habtm_unique_purchase_baseitemtypes',
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
        source_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        target_row: {
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
    queryInterface.createTable(
      'base_item_type_habtm_vendor_recipe_achievementitems',
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
    queryInterface.createTable(
      'beyond_demons',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
    queryInterface.createTable(
      'bindable_virtual_keys',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key_code: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        id: {
          allowNull: false,
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
    queryInterface.createTable(
      'blood_types',
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
        pet_file1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        pet_file2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        pet_file3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        pet_file4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        pet_file5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        pet_file6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        pet_file7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        pet_file8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        pet_file9: {
          allowNull: false,
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
    queryInterface.createTable(
      'bloodlines',
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
        min_zone_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_zone_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown20: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        keys2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _spawn_weight_tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _item_weight_tags_cache: {
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
        buff_definitions_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'bloodline_habtm_item_weight_tags',
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
        bloodline_row: {
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
    queryInterface.createTable(
      'bloodline_habtm_mods',
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
        bloodline_row: {
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
    queryInterface.createTable(
      'bloodline_habtm_spawn_weight_tags',
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
        bloodline_row: {
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
    queryInterface.createTable(
      'buff_categories',
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
    queryInterface.createTable(
      'buff_definitions',
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
        invisible: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        removable: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
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
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        buff_limit: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag10: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        is_recovery: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _stats_cache: {
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
        maximum_stats_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        current_stats_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        buff_visuals_key: {
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
    queryInterface.createTable(
      'buff_definition_habtm_stats',
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
        buff_definition_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat_row: {
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
    queryInterface.createTable(
      'buff_groups',
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
    queryInterface.createTable(
      'buff_merge_modes',
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
    queryInterface.createTable(
      'buff_visuals',
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
        buff_dds_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        epk_file1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        epk_file2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _preload_groups_cache: {
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
        misc_animated_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        misc_animated_key2: {
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
    queryInterface.createTable(
      'buff_visual_habtm_preload_groups',
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
        preload_group_row: {
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
    queryInterface.createTable(
      'buff_visual_orb_types',
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
    queryInterface.createTable(
      'characters',
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
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        act_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        base_max_life: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        base_max_mana: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        weapon_speed: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_damage: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_damage: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_attack_distance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        icon: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        integer_id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        base_strength: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        base_dexterity: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        base_intelligence: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown13: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown14: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown15: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown16: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        character_size: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        intro_sound_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown28: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        trait_description: {
          allowNull: false,
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
        start_skill_gem_base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        start_weapon_base_item_types_key: {
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
    queryInterface.createTable(
      'character_audio_events',
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
        quest_state: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _marauder_character_text_audio_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _ranger_character_text_audio_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _witch_character_text_audio_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _duelist_character_text_audio_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _shadow_character_text_audio_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _templar_character_text_audio_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _scion_character_text_audio_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _goddess_character_text_audio_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _jack_the_axe_character_text_audio_cache: {
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
    queryInterface.createTable(
      'character_audio_event_habtm_duelist_charactertextaudios',
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
        character_audio_event_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_text_audio_row: {
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
    queryInterface.createTable(
      'character_audio_event_habtm_goddess_charactertextaudios',
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
        character_audio_event_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_text_audio_row: {
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
    queryInterface.createTable(
      'character_audio_event_habtm_jack_the_axe_charactertextaudios',
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
        character_audio_event_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_text_audio_row: {
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
    queryInterface.createTable(
      'character_audio_event_habtm_marauder_charactertextaudios',
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
        character_audio_event_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_text_audio_row: {
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
    queryInterface.createTable(
      'character_audio_event_habtm_ranger_charactertextaudios',
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
        character_audio_event_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_text_audio_row: {
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
    queryInterface.createTable(
      'character_audio_event_habtm_scion_charactertextaudios',
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
        character_audio_event_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_text_audio_row: {
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
    queryInterface.createTable(
      'character_audio_event_habtm_shadow_charactertextaudios',
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
        character_audio_event_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_text_audio_row: {
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
    queryInterface.createTable(
      'character_audio_event_habtm_templar_charactertextaudios',
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
        character_audio_event_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_text_audio_row: {
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
    queryInterface.createTable(
      'character_audio_event_habtm_witch_charactertextaudios',
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
        character_audio_event_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_text_audio_row: {
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
    queryInterface.createTable(
      'character_panel_description_modes',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        format_string_positive: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        format_string_negative: {
          allowNull: false,
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
    queryInterface.createTable(
      'character_panel_stats',
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
        text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        data4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _stats1_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _stats2_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _stats3_cache: {
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
        character_panel_description_modes_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_panel_tabs_key: {
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
    queryInterface.createTable(
      'character_panel_stat_contexts',
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
    queryInterface.createTable(
      'character_panel_stat_habtm_stats1s',
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
        character_panel_stat_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat_row: {
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
    queryInterface.createTable(
      'character_panel_stat_habtm_stats2s',
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
        character_panel_stat_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat_row: {
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
    queryInterface.createTable(
      'character_panel_stat_habtm_stats3s',
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
        character_panel_stat_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat_row: {
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
    queryInterface.createTable(
      'character_panel_tabs',
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
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        text: {
          allowNull: false,
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
    queryInterface.createTable(
      'character_start_items',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        sockets: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        inventory_index: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        slot_x: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        slot_y: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stack_size: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        links: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        skill_gem_levels: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        _socketed_skill_gems_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
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
        character_start_states_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
    queryInterface.createTable(
      'character_start_item_habtm_mods',
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
        character_start_item_row: {
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
    queryInterface.createTable(
      'character_start_item_habtm_socketed_skillgems',
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
        character_start_item_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        skill_gem_row: {
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
    queryInterface.createTable(
      'character_start_quest_states',
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
        quest_states: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        keys1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _quest_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _map_pins_cache: {
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
    queryInterface.createTable(
      'character_start_quest_state_habtm_map_pins',
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
        character_start_quest_state_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        map_pin_row: {
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
    queryInterface.createTable(
      'character_start_quest_state_habtm_quests',
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
        character_start_quest_state_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        quest_row: {
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
    queryInterface.createTable(
      'character_start_states',
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
        level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_pvp: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        key1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        _passive_skills_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _normal_character_start_quest_state_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _cruel_character_start_quest_state_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _merciless_character_start_quest_state_cache: {
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
        characters_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_start_state_set_key: {
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
    queryInterface.createTable(
      'character_start_state_habtm_cruel_characterstartqueststates',
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
        character_start_state_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_start_quest_state_row: {
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
    queryInterface.createTable(
      'character_start_state_habtm_merciless_characterstartqueststates',
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
        character_start_state_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_start_quest_state_row: {
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
    queryInterface.createTable(
      'character_start_state_habtm_normal_characterstartqueststates',
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
        character_start_state_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        character_start_quest_state_row: {
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
    queryInterface.createTable(
      'character_start_state_habtm_passive_skills',
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
        character_start_state_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        passive_skill_row: {
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
    queryInterface.createTable(
      'character_start_state_sets',
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
    queryInterface.createTable(
      'character_text_audios',
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
        text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        sound_file: {
          allowNull: false,
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
    queryInterface.createTable(
      'chests',
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
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
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
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown_keys: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown_values: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown19: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        _mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _tags_cache: {
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
        base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        chest_effects_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        corrupt_achievement_items_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        currency_use_achievement_items_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        encounter_achievement_items_key: {
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
    queryInterface.createTable(
      'chest_clusters',
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
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _chests_cache: {
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
    queryInterface.createTable(
      'chest_cluster_habtm_chests',
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
        chest_cluster_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        chest_row: {
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
    queryInterface.createTable(
      'chest_effects',
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
        normal_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        normal_closed_ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        normal_open_ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        magic_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unique_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        rare_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        magic_closed_ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unique_closed_ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        rare_closed_ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        magic_open_ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unique_open_ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        rare_open_ao_file: {
          allowNull: false,
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
    queryInterface.createTable(
      'chest_habtm_mods',
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
        chest_row: {
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
    queryInterface.createTable(
      'chest_habtm_tags',
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
        chest_row: {
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
    queryInterface.createTable(
      'client_strings',
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
        text: {
          allowNull: false,
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
    queryInterface.createTable(
      'clone_shot_variations',
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
    queryInterface.createTable(
      'commands',
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
        command: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        command2: {
          allowNull: false,
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
    queryInterface.createTable(
      'component_armours',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        armour: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        evasion: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        energy_shield: {
          allowNull: false,
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
          type: Sequelize.TEXT,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'component_attribute_requirements',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        req_str: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        req_dex: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        req_int: {
          allowNull: false,
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
          type: Sequelize.TEXT,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'component_charges',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        max_charges: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        per_charge: {
          allowNull: false,
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
          type: Sequelize.TEXT,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'cooldown_bypass_types',
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
    queryInterface.createTable(
      'cooldown_groups',
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
    queryInterface.createTable(
      'crafting_bench_custom_actions',
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
    queryInterface.createTable(
      'crafting_bench_options',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        order: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        master_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        crafting_bench_custom_action: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        sockets: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        socket_colours: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        links: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        item_quantity: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        is_disabled: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _cost_base_item_types_cache: {
          allowNull: false,
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
        npc_master_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'crafting_bench_option_habtm_cost_baseitemtypes',
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
          type: Sequelize.INTEGER({
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
    queryInterface.createTable(
      'crafting_bench_option_habtm_item_classes',
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
    queryInterface.createTable(
      'currency_items',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stacks: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        currency_use_type: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        action: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        directions: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        cosmetic_type_name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown17: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        currency_tab_stack_size: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        abbreviation: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _usage_achievement_items_cache: {
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
        base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        full_stack_base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        possession_achievement_items_key: {
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
    queryInterface.createTable(
      'currency_item_habtm_usage_achievementitems',
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
        currency_item_row: {
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
    queryInterface.createTable(
      'currency_stash_tab_layouts',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
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
    queryInterface.createTable(
      'currency_use_types',
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
    queryInterface.createTable(
      'daily_missions',
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
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        description: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _characters_cache: {
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
        npc_talk_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        pvp_types_key: {
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
    queryInterface.createTable(
      'daily_mission_habtm_characters',
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
        daily_mission_row: {
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
    queryInterface.createTable(
      'daily_overrides',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: false,
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
        daily_missions_keys: {
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
    queryInterface.createTable(
      'damage_particle_effects',
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
        pet_file: {
          allowNull: false,
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
    queryInterface.createTable(
      'dances',
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
        base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
    queryInterface.createTable(
      'daresso_pit_fights',
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
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag_unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag_unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag_unknown3: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'defaults',
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
    queryInterface.createTable(
      'default_monster_stats',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        display_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        damage: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.FLOAT,
        },
        evasion: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        accuracy: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        life: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        experience: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        ally_life: {
          allowNull: false,
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
        difficulty_key: {
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
    queryInterface.createTable(
      'descent_exiles',
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
        unknown7: {
          allowNull: false,
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
        characters_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'descent_reward_chests',
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
        _base_item_types1_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types2_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types3_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types4_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types5_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types6_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types7_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types8_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types9_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types10_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types11_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types12_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types13_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types14_cache: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types1s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types10s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types11s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types12s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types13s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types14s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types2s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types3s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types4s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types5s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types6s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types7s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types8s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_reward_chest_habtm_base_item_types9s',
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
        descent_reward_chest_row: {
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
    queryInterface.createTable(
      'descent_starter_chests',
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
        socket_colours: {
          allowNull: false,
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
        characters_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        base_item_types_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'dex_int_missions',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        kill_target: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        fail_if_target_killed: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        kill_guards: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        fail_if_guards_killed: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        time_limit: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        chest_flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        chest_flag1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        fail_if_no_guards_left: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        timer: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
        hostage_monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_talk_key: {
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
    queryInterface.createTable(
      'dex_int_mission_guards',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
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
        monster_packs_key: {
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
    queryInterface.createTable(
      'dex_int_mission_guard_mods',
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
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
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
    queryInterface.createTable(
      'dex_int_mission_habtm_achievement_items',
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
        dex_int_mission_row: {
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
    queryInterface.createTable(
      'dex_int_mission_targets',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
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
    queryInterface.createTable(
      'dex_missions',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        magic_chance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        rare_chance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unique_monster_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        rare_monster_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        magic_monster_pack_count: {
          allowNull: false,
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
    queryInterface.createTable(
      'dex_mission_mods',
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
        spawn_weight: {
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
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag2: {
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
        mods_key: {
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
    queryInterface.createTable(
      'dex_mission_monsters',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _monster_packs_cache: {
          allowNull: false,
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
        boss_monster_varieties_key: {
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
    queryInterface.createTable(
      'dex_mission_monster_habtm_monster_packs',
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
        dex_mission_monster_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_pack_row: {
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
    queryInterface.createTable(
      'dex_mission_monster_habtm_monster_varieties',
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
        dex_mission_monster_row: {
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
    queryInterface.createTable(
      'dex_mission_trackings',
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
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag1: {
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
        npc_talk_key: {
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
    queryInterface.createTable(
      'difficulties',
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
        resistances: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        minimum_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        prefix: {
          allowNull: false,
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
    queryInterface.createTable(
      'display_minion_monster_types',
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
    queryInterface.createTable(
      'divination_card_arts',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        virtual_file: {
          allowNull: false,
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
    queryInterface.createTable(
      'divination_card_stash_tab_layouts',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        is_enabled: {
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
    queryInterface.createTable(
      'drop_pools',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        group: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        weight: {
          allowNull: false,
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
    queryInterface.createTable(
      'eclipse_mods',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_prefix: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
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
        mods_key: {
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
    queryInterface.createTable(
      'eclipse_mod_habtm_spawn_weight_tags',
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
        eclipse_mod_row: {
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
    queryInterface.createTable(
      'effectivenesses',
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
    queryInterface.createTable(
      'effectiveness_cost_constants',
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
    queryInterface.createTable(
      'endless_ledge_chests',
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
        socket_colour: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _base_item_types_cache: {
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
    queryInterface.createTable(
      'endless_ledge_chest_habtm_base_item_types',
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
        endless_ledge_chest_row: {
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
    queryInterface.createTable(
      'environments',
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
        base_ambient_sound_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        base_env_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        corrupted_env_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        keys1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        corrupted_ambient_sound_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ambient_sound_file: {
          allowNull: false,
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
    queryInterface.createTable(
      'essences',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown10: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown23: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        drop_level_minimum: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        drop_level_maximum: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        tier: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown31: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        item_level_restriction: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_screaming_essence: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _monster_mods_cache: {
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
        base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mods_key1: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mods_key2: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        quiver_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        amulet1_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        belt1_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        belt3_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        gloves1_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        boots1_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        body_armour1_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        helmet1_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shield1_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        essence_type_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '1_hand_mods_key1': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mods_key13: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mods_key14: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mods_key15: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '2_hand_mods_key1': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        boots3_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        ranged_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        helmet2_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        body_armour2_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        boots2_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        gloves2_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        bow_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        wand_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '2_hand_mods_key2': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '2_hand_mods_key3': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '2_hand_mods_key4': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '2_hand_mods_key5': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '1_hand_mods_key2': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '1_hand_mods_key3': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '1_hand_mods_key4': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '1_hand_mods_key5': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '1_hand_mods_key6': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '1_hand_mods_key7': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '1_hand_mods_key8': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '1_hand_mods_key9': {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        belt2_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        amulet2_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        ring_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mods_key41: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shield2_mods_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mods_key43: {
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
    queryInterface.createTable(
      'essence_habtm_monster_mods',
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
        essence_row: {
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
    queryInterface.createTable(
      'essence_stash_tab_layouts',
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
        x: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        y: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        int_id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        slot_width: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        slot_height: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_upgradable_essence_slot: {
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
    queryInterface.createTable(
      'essence_types',
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
        essence_type: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_corrupted_essence: {
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
        words_key: {
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
    queryInterface.createTable(
      'event_seasons',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        reward_command: {
          allowNull: false,
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
    queryInterface.createTable(
      'event_season_rewards',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        point: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        reward_command: {
          allowNull: false,
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
        event_season_key: {
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
    queryInterface.createTable(
      'experience_levels',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        index0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        experience: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
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
    queryInterface.createTable(
      'exploding_storm_buffs',
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
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat_values: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown10: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown12: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown23: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown24: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown25: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_only_spawning_near_player: {
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
        buff_definitions_key1: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        friendly_monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        misc_objects_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        misc_animated_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        buff_visuals_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        enemy_monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        buff_definitions_key2: {
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
    queryInterface.createTable(
      'extra_terrain_features',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown7: {
          allowNull: false,
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
    queryInterface.createTable(
      'extra_terrain_feature_families',
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
    queryInterface.createTable(
      'flasks',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        group: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        life_per_use: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        mana_per_use: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        recovery_time: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        buff_stat_values: {
          allowNull: false,
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
        base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
    queryInterface.createTable(
      'flask_types',
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
    queryInterface.createTable(
      'flavour_texts',
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
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        text: {
          allowNull: false,
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
    queryInterface.createTable(
      'footprints',
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
        active_ao_files: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        idle_ao_files: {
          allowNull: false,
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
    queryInterface.createTable(
      'game_constants',
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
        value: {
          allowNull: false,
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
    queryInterface.createTable(
      'gem_tags',
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
        tag: {
          allowNull: false,
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
    queryInterface.createTable(
      'gem_types',
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
    queryInterface.createTable(
      'global_audio_configs',
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
        value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'global_quest_flags',
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
    queryInterface.createTable(
      'grandmasters',
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
        gm_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ais_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        character_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
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
    queryInterface.createTable(
      'grandmaster_habtm_mods',
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
        grandmaster_row: {
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
    queryInterface.createTable(
      'granted_effects',
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
        is_support: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        data0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        support_gem_letter: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        cast_time: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
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
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        active_skills_key: {
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
    queryInterface.createTable(
      'granted_effect_groups',
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
    queryInterface.createTable(
      'granted_effects_per_levels',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat1_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat2_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat3_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat4_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat5_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat6_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat7_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat8_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        level_requirement: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        mana_multiplier: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        level_requirement2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        level_requirement3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        critical_strike_chance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        mana_cost: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        damage_effectiveness: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stored_uses: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        cooldown: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        cooldown_bypass_type: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown30a: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        vaal_souls: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        vaal_stored_uses: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        cooldown_group: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        mana_reservation_override: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown34: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        damage_multiplier: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown36: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown37: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _stats_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _quality_stats_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _stats2_cache: {
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
        granted_effects_key: {
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
    queryInterface.createTable(
      'granted_effects_per_level_habtm_quality_stats',
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
        granted_effects_per_level_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat_row: {
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
    queryInterface.createTable(
      'granted_effects_per_level_habtm_stats',
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
        granted_effects_per_level_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat_row: {
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
    queryInterface.createTable(
      'granted_effects_per_level_habtm_stats2s',
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
        granted_effects_per_level_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat_row: {
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
    queryInterface.createTable(
      'hideouts',
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
        unknown9: {
          allowNull: false,
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
        small_world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_master_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        medium_world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        large_world_areas_key: {
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
    queryInterface.createTable(
      'hideout_doodads',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        variation_ao_files: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        favour_cost: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        master_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_non_master_doodad: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
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
    queryInterface.createTable(
      'hideout_interactables',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        object: {
          allowNull: false,
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
    queryInterface.createTable(
      'impact_sound_data',
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
        sound: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
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
    queryInterface.createTable(
      'int_missions',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
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
        unknown8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        monster_per_spawn_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        objective_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag10: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown13: {
          allowNull: false,
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
        npc_talk_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'int_mission_mods',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        data2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
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
    queryInterface.createTable(
      'int_mission_mod_habtm_mods',
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
        int_mission_mod_row: {
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
    queryInterface.createTable(
      'int_mission_monsters',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _objective_monster_varieties_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'int_mission_monster_habtm_achievement_items',
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
        int_mission_monster_row: {
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
    queryInterface.createTable(
      'int_mission_monster_habtm_objective_monstervarieties',
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
        int_mission_monster_row: {
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
    queryInterface.createTable(
      'invasion_monster_groups',
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
    queryInterface.createTable(
      'invasion_monster_restrictions',
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
        data0: {
          allowNull: false,
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
    queryInterface.createTable(
      'invasion_monster_restriction_habtm_monster_varieties',
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
        invasion_monster_restriction_row: {
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
    queryInterface.createTable(
      'invasion_monster_roles',
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
    queryInterface.createTable(
      'invasion_monsters_per_areas',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _monster_varieties1_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _monster_varieties2_cache: {
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
    queryInterface.createTable(
      'invasion_monsters_per_area_habtm_monster_varieties1s',
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
        invasion_monsters_per_area_row: {
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
    queryInterface.createTable(
      'invasion_monsters_per_area_habtm_monster_varieties2s',
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
        invasion_monsters_per_area_row: {
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
    queryInterface.createTable(
      'item_classes',
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
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        category: {
          allowNull: false,
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
    queryInterface.createTable(
      'item_experience_per_levels',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        item_current_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        experience: {
          allowNull: false,
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
    queryInterface.createTable(
      'item_themes',
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
        name: {
          allowNull: false,
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
    queryInterface.createTable(
      'item_visual_effects',
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
        dagger_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        bow_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        one_handed_mace_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        one_handed_sword_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        index5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        two_handed_sword_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        two_handed_staff_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        two_handed_mace_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        one_handed_axe_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        two_handed_axe_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        claw_epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        pet_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag1: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'item_visual_identities',
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
        dds_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown_unique_int: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        ao_file2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        marauder_sm_files: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ranger_sm_files: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        witch_sm_files: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        duelist_dex_sm_files: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        templar_sm_files: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        shadow_sm_files: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        scion_sm_files: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        marauder_shape: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ranger_shape: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        witch_shape: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        duelist_shape: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        templar_shape: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        shadow_shape: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        scion_shape: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown28: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown29: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        sm_files: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        epk_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        is_alternate_art: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _pickup_achievement_items_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _identify_achievement_items_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _corrupt_achievement_items_cache: {
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
        sound_effects_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        create_corrupted_jewel_achievement_items_key: {
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
    queryInterface.createTable(
      'item_visual_identity_habtm_corrupt_achievementitems',
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
        item_visual_identity_row: {
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
    queryInterface.createTable(
      'item_visual_identity_habtm_identify_achievementitems',
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
        item_visual_identity_row: {
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
    queryInterface.createTable(
      'item_visual_identity_habtm_pickup_achievementitems',
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
        item_visual_identity_row: {
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
    queryInterface.createTable(
      'itemised_visual_effects',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        keys2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        data3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data4: {
          allowNull: false,
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
        base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        item_visual_effect_key: {
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
        item_visual_identity_key2: {
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
    queryInterface.createTable(
      'killstreak_thresholds',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        kills: {
          allowNull: false,
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
    queryInterface.createTable(
      'labyrinth_areas',
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
        _normal_world_areas_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _cruel_world_areas_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _merciless_world_areas_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _endgame_world_areas_cache: {
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
    queryInterface.createTable(
      'labyrinth_area_habtm_cruel_worldareas',
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
        labyrinth_area_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'labyrinth_area_habtm_endgame_worldareas',
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
        labyrinth_area_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'labyrinth_area_habtm_merciless_worldareas',
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
        labyrinth_area_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'labyrinth_area_habtm_normal_worldareas',
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
        labyrinth_area_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'labyrinth_exclusion_groups',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown1: {
          allowNull: false,
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
    queryInterface.createTable(
      'labyrinth_izaro_chests',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_labyrinth_tier: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_labyrinth_tier: {
          allowNull: false,
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
    queryInterface.createTable(
      'labyrinth_ladder_rewards',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key0: {
          allowNull: false,
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
    queryInterface.createTable(
      'labyrinth_node_overrides',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        id1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        id2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data2: {
          allowNull: false,
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
    queryInterface.createTable(
      'labyrinth_rewards',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown8: {
          allowNull: false,
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
    queryInterface.createTable(
      'labyrinth_secrets',
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
        id2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown13: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        flag1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        flag3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        flag4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _labyrinth_secret_effects0_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _labyrinth_secret_effects1_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _labyrinth_secret_effects2_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _labyrinth_secret_effects3_cache: {
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
    queryInterface.createTable(
      'labyrinth_secret_effects',
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
        buff_values: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ot_file: {
          allowNull: false,
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
        monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        buff_buff_definitions_key: {
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
    queryInterface.createTable(
      'labyrinth_secret_habtm_labyrinth_secret_effects0s',
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
        labyrinth_secret_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        labyrinth_secret_effect_row: {
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
    queryInterface.createTable(
      'labyrinth_secret_habtm_labyrinth_secret_effects1s',
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
        labyrinth_secret_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        labyrinth_secret_effect_row: {
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
    queryInterface.createTable(
      'labyrinth_secret_habtm_labyrinth_secret_effects2s',
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
        labyrinth_secret_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        labyrinth_secret_effect_row: {
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
    queryInterface.createTable(
      'labyrinth_secret_habtm_labyrinth_secret_effects3s',
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
        labyrinth_secret_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        labyrinth_secret_effect_row: {
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
    queryInterface.createTable(
      'labyrinth_secret_locations',
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
    queryInterface.createTable(
      'labyrinth_sections',
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
        key0: {
          allowNull: false,
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
    queryInterface.createTable(
      'labyrinth_section_layouts',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flags1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flags2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _labyrinth_section_layout_cache: {
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
        labyrinth_section_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        labyrinth_secrets_key0: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        labyrinth_secrets_key1: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        labyrinth_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        labyrinth_node_overrides_key: {
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
    queryInterface.createTable(
      'labyrinth_section_layout_habtm_labyrinth_section_layouts',
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
        source_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        target_row: {
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
    queryInterface.createTable(
      'labyrinth_trinkets',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        buff_values: {
          allowNull: false,
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
        base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        labyrinth_secrets_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        buff_buff_definitions_key: {
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
    queryInterface.createTable(
      'league_categories',
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
    queryInterface.createTable(
      'league_flags',
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
        image: {
          allowNull: false,
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
    queryInterface.createTable(
      'league_quest_flags',
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
    queryInterface.createTable(
      'league_trophies',
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
    queryInterface.createTable(
      'maps',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        regular_guild_character: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unique_guild_character: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tier: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        shaped_area_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _monster_packs_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _higher_tier_maps_base_item_types_cache: {
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
        base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        regular_world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unique_world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        map_upgrade_base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shaped_base_maps_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        maps_key1: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        maps_key2: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        maps_key3: {
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
    queryInterface.createTable(
      'map_connections',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        restricted_area_text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
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
        map_pins_key0: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        map_pins_key1: {
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
    queryInterface.createTable(
      'map_device_recipes',
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
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _base_item_types_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _world_areas_cache: {
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
    queryInterface.createTable(
      'map_device_recipe_habtm_base_item_types',
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
        map_device_recipe_row: {
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
    queryInterface.createTable(
      'map_device_recipe_habtm_world_areas',
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
        map_device_recipe_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'map_habtm_higher_tier_maps_baseitemtypes',
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
        map_row: {
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
    queryInterface.createTable(
      'map_habtm_monster_packs',
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
        map_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_pack_row: {
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
    queryInterface.createTable(
      'map_inhabitants',
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
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        stats_key: {
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
    queryInterface.createTable(
      'map_pins',
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
        position_x: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        position_y: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        notes: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        act: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        index3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _normal_world_areas_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _merciless_world_areas_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _cruel_world_areas_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _world_areas_cache: {
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
        normal_waypoint_world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        cruel_waypoint_world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        merciless_waypoint_world_areas_key: {
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
    queryInterface.createTable(
      'map_pin_habtm_cruel_worldareas',
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
        map_pin_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'map_pin_habtm_merciless_worldareas',
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
        map_pin_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'map_pin_habtm_normal_worldareas',
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
        map_pin_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'map_pin_habtm_world_areas',
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
        map_pin_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'map_stash_tab_layouts',
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
    queryInterface.createTable(
      'micro_migration_data',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key1: {
          allowNull: false,
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
    queryInterface.createTable(
      'microtransaction_character_portrait_variations',
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
    queryInterface.createTable(
      'microtransaction_fireworks_variations',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
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
    queryInterface.createTable(
      'microtransaction_portal_variations',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        map_ao_file: {
          allowNull: false,
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
    queryInterface.createTable(
      'microtransaction_slot_ids',
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
    queryInterface.createTable(
      'microtransaction_social_frame_variations',
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
    queryInterface.createTable(
      'minimap_icons',
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
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
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
    queryInterface.createTable(
      'misc_animateds',
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
        ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _preload_groups_cache: {
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
    queryInterface.createTable(
      'misc_animated_habtm_preload_groups',
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
        misc_animated_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        preload_group_row: {
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
    queryInterface.createTable(
      'misc_beams',
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
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _preload_groups_cache: {
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
    queryInterface.createTable(
      'misc_beam_habtm_preload_groups',
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
        misc_beam_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        preload_group_row: {
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
    queryInterface.createTable(
      'misc_objects',
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
        effect_virtual_path: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown_unique: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _preload_groups_cache: {
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
    queryInterface.createTable(
      'misc_object_habtm_preload_groups',
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
        misc_object_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        preload_group_row: {
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
    queryInterface.createTable(
      'mission_tile_maps',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        _world_areas_cache: {
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
        npc_master_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        mission_transition_tiles_key: {
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
    queryInterface.createTable(
      'mission_tile_map_habtm_world_areas',
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
        mission_tile_map_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'mission_transition_tiles',
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
        tdt_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
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
    queryInterface.createTable(
      'mods',
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
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        domain: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        generation_type: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        correct_group: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        stat1_min: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat1_max: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat2_min: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat2_max: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat3_min: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat3_max: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat4_min: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat4_max: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        buff_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        monster_metadata: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stat5_min: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat5_max: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        is_essence_only_modifier: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _spawn_weight_tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _generation_weight_tags_cache: {
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
        mod_type_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stats_key1: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stats_key2: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stats_key3: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stats_key4: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        buff_definitions_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        granted_effects_per_level_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stats_key5: {
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
    queryInterface.createTable(
      'mod_aura_flags',
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
    queryInterface.createTable(
      'mod_domains',
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
    queryInterface.createTable(
      'mod_families',
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
    queryInterface.createTable(
      'mod_generation_types',
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
    queryInterface.createTable(
      'mod_habtm_generation_weight_tags',
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
        mod_row: {
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
    queryInterface.createTable(
      'mod_habtm_spawn_weight_tags',
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
          type: Sequelize.INTEGER({
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
        mod_row: {
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
    queryInterface.createTable(
      'mod_habtm_tags',
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
        mod_row: {
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
    queryInterface.createTable(
      'mod_sell_prices',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        _base_item_types_cache: {
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
        mod_sell_price_types_key: {
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
    queryInterface.createTable(
      'mod_sell_price_habtm_base_item_types',
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
        mod_sell_price_row: {
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
    queryInterface.createTable(
      'mod_sell_price_types',
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
    queryInterface.createTable(
      'mod_types',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _mod_sell_prices_cache: {
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
    queryInterface.createTable(
      'mod_type_habtm_mod_sell_prices',
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
        mod_sell_price_row: {
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
    queryInterface.createTable(
      'monster_additional_monster_drops',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        keys0: {
          allowNull: false,
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
    queryInterface.createTable(
      'monster_armours',
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
        art_string_sm_file: {
          allowNull: false,
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
    queryInterface.createTable(
      'monster_behaviors',
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
    queryInterface.createTable(
      'monster_flee_conditions',
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
    queryInterface.createTable(
      'monster_group_entries',
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
        monster_group_names_id: {
          allowNull: false,
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
    queryInterface.createTable(
      'monster_group_names',
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
    queryInterface.createTable(
      'monster_map_boss_difficulties',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        map_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat1_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat2_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat3_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat4_value: {
          allowNull: false,
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
        stats_key2: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stats_key3: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stats_key4: {
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
    queryInterface.createTable(
      'monster_map_difficulties',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        map_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat1_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat2_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat3_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat4_value: {
          allowNull: false,
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
        stats_key2: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stats_key3: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        stats_key4: {
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
    queryInterface.createTable(
      'monster_packs',
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
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        boss_monster_spawn_chance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        boss_monster_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _world_areas_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _boss_monster_monster_varieties_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _tags_cache: {
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
    queryInterface.createTable(
      'monster_pack_entries',
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
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown1: {
          allowNull: false,
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
        monster_packs_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'monster_pack_habtm_boss_monster_monstervarieties',
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
        monster_pack_row: {
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
    queryInterface.createTable(
      'monster_pack_habtm_tags',
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
        monster_pack_row: {
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
    queryInterface.createTable(
      'monster_pack_habtm_world_areas',
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
        monster_pack_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        world_area_row: {
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
    queryInterface.createTable(
      'monster_resistances',
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
        fire_normal: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        cold_normal: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        lightning_normal: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        chaos_normal: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        fire_cruel: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        cold_cruel: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        lightning_cruel: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        chaos_cruel: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        fire_merciless: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        cold_merciless: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        lightning_merciless: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        chaos_merciless: {
          allowNull: false,
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
    queryInterface.createTable(
      'monster_scaling_by_levels',
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
    queryInterface.createTable(
      'monster_segments',
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
        shapes: {
          allowNull: false,
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
    queryInterface.createTable(
      'monster_sizes',
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
    queryInterface.createTable(
      'monster_types',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_summoned: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        armour: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        evasion: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        energy_shield_from_life: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        damage_spread: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _tags_cache: {
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
        monster_resistances_key: {
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
    queryInterface.createTable(
      'monster_type_habtm_tags',
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
        monster_type_row: {
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
    queryInterface.createTable(
      'monster_varieties',
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
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        object_size: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        minimum_attack_distance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        maximum_attack_distance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        act_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        base_monster_type_index: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown_index0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown_index1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        model_size_multiplier: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        experience_multiplier: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown10: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        critical_strike_chance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        ais_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        stance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        damage_multiplier: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        life_multiplier: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        attack_speed: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown13: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown14: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown15: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown16: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown17: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown18: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown19: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown20: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown21: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown22: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        unknown23: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        _mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _granted_effects_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _mods2_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _weapon1_item_visual_identity_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _weapon2_item_visual_identity_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _achievement_items_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _special_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _achievement_items2_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _normal_achievement_items_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _merciless_achievement_items_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _cruel_achievement_items_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _normal_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _cruel_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _merciless_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _kill_rare_in_normal_achievement_items_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _kill_rare_in_cruel_achievement_items_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _kill_rare_in_merciless_achievement_items_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _count_kills_achievement_items_cache: {
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
        monster_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        back_item_visual_identity_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        main_hand_item_classes_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        off_hand_item_classes_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        helmet_item_visual_identity_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        flashback_achievement_items_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_segments_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_armours_key: {
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
        achievement_items_key4: {
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
    queryInterface.createTable(
      'monster_variety_habtm_achievement_items',
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_achievement_items2s',
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_count_kills_achievementitems',
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_cruel_achievementitems',
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
        mods_key: {
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_cruel_mods',
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
        achievement_items_key: {
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_granted_effects',
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
        monster_variety_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        granted_effect_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_kill_rare_in_cruel_achievementitems',
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_kill_rare_in_merciless_achievementitems',
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_kill_rare_in_normal_achievementitems',
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_merciless_achievementitems',
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
        mods_key: {
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_merciless_mods',
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
        achievement_items_key: {
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_mods',
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_mods2s',
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_normal_achievementitems',
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
        mods_key: {
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_normal_mods',
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
        achievement_items_key: {
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_special_mods',
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_tags',
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
        monster_variety_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_weapon1_itemvisualidentities',
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
        monster_variety_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        item_visual_identity_row: {
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
    queryInterface.createTable(
      'monster_variety_habtm_weapon2_itemvisualidentities',
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
        monster_variety_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        item_visual_identity_row: {
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
    queryInterface.createTable(
      'music',
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
        sound_file: {
          allowNull: false,
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
    queryInterface.createTable(
      'mystery_boxes',
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
    queryInterface.createTable(
      'mystery_packs',
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
    queryInterface.createTable(
      'mystery_pack_items',
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
    queryInterface.createTable(
      'n_p_cs',
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
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        metadata: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        short_name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown8: {
          allowNull: false,
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
        npc_shop_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_audio_key1: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_audio_key2: {
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
    queryInterface.createTable(
      'n_p_c_audios',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown2: {
          allowNull: false,
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
    queryInterface.createTable(
      'n_p_c_masters',
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
        is_str_master: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_dex_master: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_int_master: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        hideout: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        _signature_mod_spawn_weight_tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _unknown_weight_tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _master_level5_achievement_items_cache: {
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
        np_cs_key: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        signature_mod_mods_key: {
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
        talisman_achievement_items_key: {
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
    queryInterface.createTable(
      'n_p_c_master_experience_per_levels',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        master_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        experience: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        item_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown6: {
          allowNull: false,
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
    queryInterface.createTable(
      'n_p_c_master_habtm_master_level5_achievementitems',
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
        npc_master_row: {
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
    queryInterface.createTable(
      'n_p_c_master_habtm_signature_mod_spawn_weight_tags',
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
          type: Sequelize.INTEGER({
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
    queryInterface.createTable(
      'n_p_c_master_habtm_unknown_weight_tags',
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
          type: Sequelize.INTEGER({
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
    queryInterface.createTable(
      'n_p_c_shops',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown_keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown_values: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown10: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _sold_item_tags_cache: {
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
    queryInterface.createTable(
      'n_p_c_shop_habtm_sold_item_tags',
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
        weight: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
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
        npc_shop_row: {
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
    queryInterface.createTable(
      'n_p_c_talks',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        dialogue_option: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        script: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown12: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown15: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        script2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
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
        data5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown25: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        flag2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown25c: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown26: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown27: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown30: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        key2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _npc_text_audio_cache: {
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
        npc_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        quest_key: {
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
    queryInterface.createTable(
      'n_p_c_talk_categories',
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
    queryInterface.createTable(
      'n_p_c_talk_habtm_n_p_c_text_audios',
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
        npc_talk_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_text_audio_row: {
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
    queryInterface.createTable(
      'n_p_c_text_audios',
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
        text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        mono_audio_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        stereo_audio_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        has_stereo: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag0: {
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
    queryInterface.createTable(
      'normal_difficulty_master_weights',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        master_id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
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
    queryInterface.createTable(
      'notifications',
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
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        message: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown4: {
          allowNull: false,
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
    queryInterface.createTable(
      'old_map_stash_tab_layouts',
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
    queryInterface.createTable(
      'orientations',
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
    queryInterface.createTable(
      'p_v_p_types',
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
    queryInterface.createTable(
      'passive_jewel_slots',
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
        passive_skills_key: {
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
    queryInterface.createTable(
      'passive_skills',
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
        icon_dds_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        stat1_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat2_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat3_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat4_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        passive_skill_graph_id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        is_keystone: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_notable: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flavour_text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        is_just_icon: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_jewel_socket: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        key2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        buff_related_unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        buff_related_unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        is_ascendancy_starting_node: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        skill_points_granted: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_multiple_choice: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_multiple_choice_option: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _stats_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _characters_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _reminder_client_strings_cache: {
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
        achievement_items_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        granted_buff_buff_definitions_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        ascendancy_key: {
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
    queryInterface.createTable(
      'passive_skill_habtm_characters',
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
    queryInterface.createTable(
      'passive_skill_habtm_reminder_clientstrings',
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
        client_string_row: {
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
    queryInterface.createTable(
      'passive_skill_habtm_stats',
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
        stat_row: {
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
    queryInterface.createTable(
      'path_of_endurances',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
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
    queryInterface.createTable(
      'path_of_endurance_habtm_mods',
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
        path_of_endurance_row: {
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
    queryInterface.createTable(
      'per_level_values',
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
    queryInterface.createTable(
      'perandus_bosses',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        spawn_weight: {
          allowNull: false,
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
    queryInterface.createTable(
      'perandus_chests',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
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
    queryInterface.createTable(
      'perandus_daemons',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown7: {
          allowNull: false,
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
    queryInterface.createTable(
      'perandus_guards',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _monster_packs_cache: {
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
    queryInterface.createTable(
      'perandus_guard_habtm_monster_packs',
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
        perandus_guard_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_pack_row: {
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
    queryInterface.createTable(
      'pets',
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
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
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
    queryInterface.createTable(
      'preload_groups',
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
    queryInterface.createTable(
      'preload_priorities',
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
    queryInterface.createTable(
      'projectiles',
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
        ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        loop_animation_id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        impact_animation_id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        projectile_speed: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        index4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
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
    queryInterface.createTable(
      'projectile_variations',
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
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        projectile_key: {
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
    queryInterface.createTable(
      'prophecies',
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
        prediction_text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown_unique: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flavour_text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ogg_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        prophecy_chain_position: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_enabled: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        seal_cost_normal: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        seal_cost_cruel: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        seal_cost_merciless: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _quest_tracker_client_strings_cache: {
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
        prophecy_chain_key: {
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
    queryInterface.createTable(
      'prophecy_chains',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
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
    queryInterface.createTable(
      'prophecy_habtm_quest_tracker_clientstrings',
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
        prophecy_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        client_string_row: {
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
    queryInterface.createTable(
      'prophecy_types',
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
        unknown_unique: {
          allowNull: false,
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
    queryInterface.createTable(
      'quests',
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
        act: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        quest_state: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        icon_dds_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        quest_id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        is_quest: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        unknown9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
        flag1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
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
    queryInterface.createTable(
      'quest_achievements',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        quest_state: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_hardcore_achievement: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_standard_achievement: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown1: {
          allowNull: false,
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
        achievement_items_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        difficulties_key: {
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
    queryInterface.createTable(
      'quest_flags',
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
    queryInterface.createTable(
      'quest_rewards',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        difficulty: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        item_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        rarity: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        socket_gems: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
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
        quest_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        characters_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
    queryInterface.createTable(
      'quest_states',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        quest_states: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        message: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        map_pins_texts: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        keys2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        quest_finished_ogg_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _map_pins1_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _map_pins2_cache: {
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
        quest_key: {
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
    queryInterface.createTable(
      'quest_state_habtm_map_pins1s',
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
        quest_state_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        map_pin_row: {
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
    queryInterface.createTable(
      'quest_state_habtm_map_pins2s',
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
        quest_state_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        map_pin_row: {
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
    queryInterface.createTable(
      'quest_static_rewards',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stat_value: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
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
        stats_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        difficulty_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        quest_key: {
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
    queryInterface.createTable(
      'quest_vendor_rewards',
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
          type: Sequelize.INTEGER,
        },
        quest_state: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _characters_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _base_item_types_cache: {
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
        npc_key: {
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
    queryInterface.createTable(
      'quest_vendor_reward_habtm_base_item_types',
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
        quest_vendor_reward_row: {
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
    queryInterface.createTable(
      'quest_vendor_reward_habtm_characters',
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
        quest_vendor_reward_row: {
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
    queryInterface.createTable(
      'races',
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
        data0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
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
    queryInterface.createTable(
      'race_areas',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        keys0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        keys1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
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
        races_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'race_area_habtm_mods',
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
        race_area_row: {
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
    queryInterface.createTable(
      'race_times',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        index: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        start_unix_time: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        end_unix_time: {
          allowNull: false,
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
        races_key: {
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
    queryInterface.createTable(
      'random_unique_monsters',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT,
        },
        data0: {
          allowNull: false,
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
    queryInterface.createTable(
      'rarities',
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
    queryInterface.createTable(
      'realms',
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
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        server: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        is_enabled: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        server2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        short_name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
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
    queryInterface.createTable(
      'relative_importance_constants',
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
    queryInterface.createTable(
      'rogue_exiles',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        flag0: {
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
    queryInterface.createTable(
      'runic_circles',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
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
    queryInterface.createTable(
      'shield_types',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        block: {
          allowNull: false,
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
    queryInterface.createTable(
      'shop_categories',
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
        client_text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        client_jpg_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        website_text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        website_jpg_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown5: {
          allowNull: false,
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
        applied_to_base_item_types_key: {
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
    queryInterface.createTable(
      'shop_countries',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        country_two_letter_code: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        country: {
          allowNull: false,
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
        shop_currency_key: {
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
    queryInterface.createTable(
      'shop_currencies',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        currency_code: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        currency_sign: {
          allowNull: false,
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
    queryInterface.createTable(
      'shop_items',
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
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        small_art_jpg_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        youtube_video: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        large_art_jpg_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        daily_deal_art_jpg_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown15: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_tencent_item: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_tradeable: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _package_shop_item_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _shop_category_cache: {
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
    queryInterface.createTable(
      'shop_item_habtm_package_shopitems',
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
        source_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        target_row: {
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
    queryInterface.createTable(
      'shop_item_habtm_shop_categories',
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
        shop_item_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shop_category_row: {
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
    queryInterface.createTable(
      'shop_item_prices',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        price: {
          allowNull: false,
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
        shop_item_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shop_region_key: {
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
    queryInterface.createTable(
      'shop_payment_packages',
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
        text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        coins: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        available_flag: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        contains_beta_key: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        data0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        background_image: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        physical_item_points: {
          allowNull: false,
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
        upgrade_shop_payment_package_key: {
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
    queryInterface.createTable(
      'shop_payment_package_items',
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
          type: Sequelize.INTEGER,
        },
        unknown0: {
          allowNull: false,
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
        shop_payment_package_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shop_item_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shop_token_key: {
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
    queryInterface.createTable(
      'shop_payment_package_prices',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        price: {
          allowNull: false,
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
        shop_payment_package_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shop_country_key: {
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
    queryInterface.createTable(
      'shop_regions',
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
    queryInterface.createTable(
      'shop_tokens',
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
        type_id: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: false,
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
    queryInterface.createTable(
      'shrines',
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
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        charges_shared: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        description: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown10: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown14: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_pvp_only: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown17: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_lesser_shrine: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
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
        player_shrine_buffs_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_shrine_buffs_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        summon_monster_monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        summon_player_monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        shrine_sounds_key: {
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
    queryInterface.createTable(
      'shrine_buffs',
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
        buff_stat_values: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0: {
          allowNull: false,
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
    queryInterface.createTable(
      'shrine_habtm_achievement_items',
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
        shrine_row: {
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
    queryInterface.createTable(
      'shrine_sounds',
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
        stereo_sound_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        mono_sound_file: {
          allowNull: false,
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
    queryInterface.createTable(
      'skill_gems',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        str: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        dex: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        int: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        _gem_tags_cache: {
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
        base_item_types_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        granted_effects_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        vaal_variant_base_item_types_key: {
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
    queryInterface.createTable(
      'skill_gem_habtm_gem_tags',
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
        skill_gem_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        gem_tag_row: {
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
    queryInterface.createTable(
      'skill_totems',
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
    queryInterface.createTable(
      'skill_totem_variations',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        totem_skin_id: {
          allowNull: false,
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
        skill_totems_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'sound_effects',
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
        sound_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        sound_file_2_d: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown3: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'stats',
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
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_local: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_weapon_local: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        flag7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown0: {
          allowNull: false,
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
        main_hand_alias_stats_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        off_hand_alias_stats_key: {
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
    queryInterface.createTable(
      'stat_description_functions',
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
    queryInterface.createTable(
      'stat_semantics',
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
    queryInterface.createTable(
      'str_dex_int_missions',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        has_objective_boss_kill: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        has_objective_full_clear: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        has_objective_kill_exiles: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        has_objective_find_unique: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        has_objective_complete_master_mission: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        object_count_required: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        object_count_total: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _extra_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
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
        npc_talk_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_packs_key: {
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
    queryInterface.createTable(
      'str_dex_int_mission_extra_requirements',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        time_limit: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        has_time_bonus_per_kill: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        has_time_bonus_per_object_tagged: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        has_limited_portals: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        time_limit_bonus_from_objective: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        object_count: {
          allowNull: false,
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
        npc_talk_key: {
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
    queryInterface.createTable(
      'str_dex_int_mission_habtm_achievement_items',
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
        str_dex_int_mission_row: {
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
    queryInterface.createTable(
      'str_dex_int_mission_habtm_extra_mods',
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
        str_dex_int_mission_row: {
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
    queryInterface.createTable(
      'str_dex_int_mission_maps',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _map_boss_monster_varieties_cache: {
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
    queryInterface.createTable(
      'str_dex_int_mission_map_habtm_map_boss_monstervarieties',
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
        str_dex_int_mission_map_row: {
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
    queryInterface.createTable(
      'str_dex_int_mission_mods',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_unique_map: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
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
    queryInterface.createTable(
      'str_dex_int_mission_mod_habtm_mods',
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
        str_dex_int_mission_mod_row: {
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
    queryInterface.createTable(
      'str_dex_int_mission_unique_maps',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _map_boss_monster_varieties_cache: {
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
    queryInterface.createTable(
      'str_dex_int_mission_unique_map_habtm_map_boss_monstervarieties',
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
        str_dex_int_mission_unique_map_row: {
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
    queryInterface.createTable(
      'str_dex_int_mission_unique_map_habtm_mods',
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
        str_dex_int_mission_unique_map_row: {
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
    queryInterface.createTable(
      'str_dex_missions',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        time_limit: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        dummy_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        dummy_spawn_timer: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown12: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _allies_monster_varieties_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _traps_monster_varieties_cache: {
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
        dummy_monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_talk_key: {
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
    queryInterface.createTable(
      'str_dex_mission_archetypes',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
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
    queryInterface.createTable(
      'str_dex_mission_habtm_allies_monstervarieties',
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
        str_dex_mission_row: {
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
    queryInterface.createTable(
      'str_dex_mission_habtm_mods',
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
        str_dex_mission_row: {
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
    queryInterface.createTable(
      'str_dex_mission_habtm_traps_monstervarieties',
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
        str_dex_mission_row: {
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
    queryInterface.createTable(
      'str_dex_mission_mods',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
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
    queryInterface.createTable(
      'str_dex_mission_mod_habtm_mods',
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
        str_dex_mission_mod_row: {
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
    queryInterface.createTable(
      'str_dex_mission_special_mods',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key0: {
          allowNull: false,
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
    queryInterface.createTable(
      'str_dex_mission_special_mod_habtm_mods',
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
        str_dex_mission_special_mod_row: {
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
    queryInterface.createTable(
      'str_int_missions',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        f9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        has_time_limit: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        time_limit: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_destroy_relic1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_destroy_relic2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        feed_required: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        f12: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _relic_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
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
        relic_monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_talk_key: {
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
    queryInterface.createTable(
      'str_int_mission_habtm_achievement_items',
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
        str_int_mission_row: {
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
    queryInterface.createTable(
      'str_int_mission_habtm_relic_mods',
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
        str_int_mission_row: {
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
    queryInterface.createTable(
      'str_int_mission_monster_waves',
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
        wave_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        pack_timer: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        time_limit: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown13: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unique_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _unique_monster_varieties_cache: {
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
        monster_packs_key: {
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
    queryInterface.createTable(
      'str_int_mission_monster_wave_habtm_unique_monstervarieties',
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
        str_int_mission_monster_wave_row: {
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
    queryInterface.createTable(
      'str_int_mission_relic_mods',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
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
    queryInterface.createTable(
      'str_int_mission_relic_mod_habtm_mods',
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
        str_int_mission_relic_mod_row: {
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
    queryInterface.createTable(
      'str_int_mission_relic_patterns',
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
        ally_relic_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_enemy_relic: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_ally_relic: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        enemy_relic_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _relic_mods_cache: {
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
    queryInterface.createTable(
      'str_int_mission_relic_pattern_habtm_relic_mods',
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
        str_int_mission_relic_pattern_row: {
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
    queryInterface.createTable(
      'str_map_mods',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
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
        mods_key: {
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
    queryInterface.createTable(
      'str_missions',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        f7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        f10: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        f11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        f12: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        f13: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        b1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        b2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
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
        npc_talk_key: {
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
    queryInterface.createTable(
      'str_mission_bosses',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
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
    queryInterface.createTable(
      'str_mission_habtm_mods',
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
        str_mission_row: {
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
    queryInterface.createTable(
      'str_mission_map_mod_numbers',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
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
    queryInterface.createTable(
      'str_mission_spirit_effects',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ground_effect_unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        ground_effect_unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT,
        },
        b1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        b2: {
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
        summon_monster_varieties_keys: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        ground_effect_monster_varieties_keys: {
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
    queryInterface.createTable(
      'str_mission_spirit_secondary_effects',
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
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        f7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        f8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key2: {
          allowNull: false,
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
    queryInterface.createTable(
      'strongboxes',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_cartographer_box: {
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
    queryInterface.createTable(
      'summoned_specific_barrels',
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
        key1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key2: {
          allowNull: false,
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
    queryInterface.createTable(
      'summoned_specific_monsters',
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
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key0: {
          allowNull: false,
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
    queryInterface.createTable(
      'summoned_specific_monsters_on_deaths',
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
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
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
    queryInterface.createTable(
      'supporter_pack_sets',
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
        format_title: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        background: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        time0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        time1: {
          allowNull: false,
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
    queryInterface.createTable(
      'tags',
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
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
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
    queryInterface.createTable(
      'talismans',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        tier: {
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
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown11: {
          allowNull: false,
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
        mods_key: {
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
    queryInterface.createTable(
      'talisman_monster_mods',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        key0: {
          allowNull: false,
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
    queryInterface.createTable(
      'talisman_packs',
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
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown10: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _monster_packs_cache: {
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
        monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_packs_key: {
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
    queryInterface.createTable(
      'talisman_pack_habtm_monster_packs',
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
        talisman_pack_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        monster_pack_row: {
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
    queryInterface.createTable(
      'terrain_plugins',
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
        unknown_unique: {
          allowNull: false,
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
    queryInterface.createTable(
      'tips',
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
        text: {
          allowNull: false,
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
    queryInterface.createTable(
      'topologies',
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
        dgr_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
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
        environments_key: {
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
    queryInterface.createTable(
      'torment_spirits',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        min_zone_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_zone_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown13: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _spirit_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _touched_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _possessed_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _mods0_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _mods1_cache: {
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
        monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        summoned_monster_monster_varieties_key: {
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
    queryInterface.createTable(
      'torment_spirit_habtm_mods0s',
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
        torment_spirit_row: {
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
    queryInterface.createTable(
      'torment_spirit_habtm_mods1s',
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
        torment_spirit_row: {
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
    queryInterface.createTable(
      'torment_spirit_habtm_possessed_mods',
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
        torment_spirit_row: {
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
    queryInterface.createTable(
      'torment_spirit_habtm_spirit_mods',
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
        torment_spirit_row: {
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
    queryInterface.createTable(
      'torment_spirit_habtm_touched_mods',
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
        torment_spirit_row: {
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
    queryInterface.createTable(
      'trigger_spawners',
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
        data0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'unique_chests',
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
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        spawn_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        ao_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        data2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key1: {
          allowNull: false,
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
        chests_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    queryInterface.createTable(
      'unique_chest_habtm_mods',
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
        unique_chest_row: {
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
    queryInterface.createTable(
      'unique_jewel_limits',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unique_items_key: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        limit: {
          allowNull: false,
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
    queryInterface.createTable(
      'unique_sets',
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
        unknown0: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
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
        words_key: {
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
    queryInterface.createTable(
      'unique_set_names',
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
    queryInterface.createTable(
      'vote_states',
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
        text: {
          allowNull: false,
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
    queryInterface.createTable(
      'vote_types',
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
        text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        accept_text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        reject_text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown0: {
          allowNull: false,
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
    queryInterface.createTable(
      'warbands_graphs',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        connections: {
          allowNull: false,
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
    queryInterface.createTable(
      'warbands_map_graphs',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        connections: {
          allowNull: false,
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
    queryInterface.createTable(
      'warbands_pack_monsters',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        tier1_name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tier2_name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tier3_name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tier4_name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tier1_art: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tier2_art: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tier3_art: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        tier4_art: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _tier4_monster_varieties_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _tier3_monster_varieties_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _tier2_monster_varieties_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _tier1_monster_varieties_cache: {
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
    queryInterface.createTable(
      'warbands_pack_monster_habtm_tier1_monstervarieties',
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
        warbands_pack_monster_row: {
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
    queryInterface.createTable(
      'warbands_pack_monster_habtm_tier2_monstervarieties',
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
        warbands_pack_monster_row: {
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
    queryInterface.createTable(
      'warbands_pack_monster_habtm_tier3_monstervarieties',
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
        warbands_pack_monster_row: {
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
    queryInterface.createTable(
      'warbands_pack_monster_habtm_tier4_monstervarieties',
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
        warbands_pack_monster_row: {
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
    queryInterface.createTable(
      'warbands_pack_numbers',
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
        spawn_chance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        tier4_number: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        tier3_number: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        tier2_number: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        tier1_number: {
          allowNull: false,
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
    queryInterface.createTable(
      'weapon_armour_commons',
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
    queryInterface.createTable(
      'weapon_classes',
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
    queryInterface.createTable(
      'weapon_damage_scalings',
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
    queryInterface.createTable(
      'weapon_impact_sound_data',
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
        unknown1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown3: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown4: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown5: {
          allowNull: false,
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
    queryInterface.createTable(
      'weapon_sound_types',
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
    queryInterface.createTable(
      'weapon_types',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        critical: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        speed: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        damage_min: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        damage_max: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        range_max: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        null6: {
          allowNull: false,
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
    queryInterface.createTable(
      'words',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        wordlists_key: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        text: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        text2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown8: {
          allowNull: false,
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
    queryInterface.createTable(
      'word_habtm_spawn_weight_tags',
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
          type: Sequelize.INTEGER({
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
        word_row: {
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
    queryInterface.createTable(
      'wordlists',
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
    queryInterface.createTable(
      'world_areas',
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
        name: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        act: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_town: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        has_waypoint: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        area_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        has_doodads: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown6: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown7: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown8: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown9: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        loading_screen_dds_file: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown11: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data1: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown15: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown21: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown22: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown23: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_map: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown32: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown33: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown39: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown40: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        strongbox_spawn_chance: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        strongbox_max_count: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        strongbox_rarity_weight: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        is_town_area: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown49: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        max_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown50: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_merciless_vaal_area: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown52: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_hideout: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown53: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown54: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown55: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown56: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown_index: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown59: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown60: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown61: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_vaal_area: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown64: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown65: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown66: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_labyrinth_airlock: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        is_labyrinth_area: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown73: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown74: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown75: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown76: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown77: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown78: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown79: {
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
        unknown82: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown83: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        keys2: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        key0a: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        key0b: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        unknown88: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown89: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown90: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown91: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown92: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown93: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _connections_world_areas_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _topologies_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _bosses_monster_varieties_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _monsters_monster_varieties_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _spawn_weight_tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _full_clear_achievement_items_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _vaal_area_world_areas_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _area_type_tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _1_cache: {
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
        parent_town_world_areas_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        difficulties_key: {
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
        twinned_full_clear_achievement_items_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        enter_achievement_items_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        '8_mods_full_clear_achievement_items_key': {
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
    queryInterface.createTable(
      'world_area_habtm1s',
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
        world_area_row: {
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
    queryInterface.createTable(
      'world_area_habtm_area_type_tags',
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
        world_area_row: {
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
    queryInterface.createTable(
      'world_area_habtm_bosses_monstervarieties',
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
        world_area_row: {
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
    queryInterface.createTable(
      'world_area_habtm_connections_worldareas',
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
        source_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        target_row: {
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
    queryInterface.createTable(
      'world_area_habtm_full_clear_achievementitems',
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
        world_area_row: {
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
    queryInterface.createTable(
      'world_area_habtm_mods',
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
        world_area_row: {
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
    queryInterface.createTable(
      'world_area_habtm_monsters_monstervarieties',
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
        world_area_row: {
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
    queryInterface.createTable(
      'world_area_habtm_spawn_weight_tags',
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
          type: Sequelize.INTEGER({
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
        world_area_row: {
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
    queryInterface.createTable(
      'world_area_habtm_tags',
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
        world_area_row: {
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
    queryInterface.createTable(
      'world_area_habtm_topologies',
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
        world_area_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        topology_row: {
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
    queryInterface.createTable(
      'world_area_habtm_vaal_area_worldareas',
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
        spawn_chance: {
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
        source_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        target_row: {
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
    queryInterface.createTable(
      'x_p_per_level_for_missions',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        zone_level: {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        experience: {
          allowNull: false,
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
    queryInterface.addIndex(
      'achievements',
      [
        {
          attribute: 'achievement_sets_display_key',
        },
      ],
      {
        indexName: 'index_achievement_sets_display_key',
      },
    );
    queryInterface.addIndex(
      'achievement_items',
      [
        {
          attribute: 'achievements_key',
        },
      ],
      {
        indexName: 'index_achievements_key',
      },
    );
    queryInterface.addIndex(
      'achievement_set_rewards',
      [
        {
          attribute: 'achievement_sets_display_key',
        },
      ],
      {
        indexName: 'index_achievement_sets_display_key',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'active_skill_habtm_input_stats',
      [
        {
          attribute: 'active_skill_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'active_skill_habtm_output_stats',
      [
        {
          attribute: 'active_skill_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'active_skill_habtm_weapon_restriction_itemclasses',
      [
        {
          attribute: 'active_skill_row',
        },
        {
          attribute: 'item_class_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'armour_types',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'ascendancies',
      [
        {
          attribute: 'characters_key',
        },
      ],
      {
        indexName: 'index_characters_key',
      },
    );
    queryInterface.addIndex(
      'atlas_nodes',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'atlas_node_habtm_atlas_nodes',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'atlas_quest_items',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'atlas_quest_items',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'base_item_types',
      [
        {
          attribute: 'item_classes_key',
        },
      ],
      {
        indexName: 'index_item_classes_key',
      },
    );
    queryInterface.addIndex(
      'base_item_types',
      [
        {
          attribute: 'flavour_text_key',
        },
      ],
      {
        indexName: 'index_flavour_text_key',
      },
    );
    queryInterface.addIndex(
      'base_item_types',
      [
        {
          attribute: 'sound_effects_key',
        },
      ],
      {
        indexName: 'index_sound_effects_key',
      },
    );
    queryInterface.addIndex(
      'base_item_types',
      [
        {
          attribute: 'item_visual_identity_key',
        },
      ],
      {
        indexName: 'index_item_visual_identity_key',
      },
    );
    queryInterface.addIndex(
      'base_item_types',
      [
        {
          attribute: 'equip_achievement_items_key',
        },
      ],
      {
        indexName: 'index_equip_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'base_item_type_habtm_implicit_mods',
      [
        {
          attribute: 'base_item_type_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'base_item_type_habtm_magic_purchase_baseitemtypes',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'base_item_type_habtm_normal_purchase_baseitemtypes',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'base_item_type_habtm_rare_purchase_baseitemtypes',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'base_item_type_habtm_tags',
      [
        {
          attribute: 'base_item_type_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'base_item_type_habtm_unique_purchase_baseitemtypes',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'base_item_type_habtm_vendor_recipe_achievementitems',
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
    queryInterface.addIndex(
      'beyond_demons',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'bloodlines',
      [
        {
          attribute: 'buff_definitions_key',
        },
      ],
      {
        indexName: 'index_buff_definitions_key',
      },
    );
    queryInterface.addIndex(
      'bloodlines',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'bloodline_habtm_item_weight_tags',
      [
        {
          attribute: 'bloodline_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'bloodline_habtm_mods',
      [
        {
          attribute: 'bloodline_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'bloodline_habtm_spawn_weight_tags',
      [
        {
          attribute: 'bloodline_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'buff_definitions',
      [
        {
          attribute: 'maximum_stats_key',
        },
      ],
      {
        indexName: 'index_maximum_stats_key',
      },
    );
    queryInterface.addIndex(
      'buff_definitions',
      [
        {
          attribute: 'current_stats_key',
        },
      ],
      {
        indexName: 'index_current_stats_key',
      },
    );
    queryInterface.addIndex(
      'buff_definitions',
      [
        {
          attribute: 'buff_visuals_key',
        },
      ],
      {
        indexName: 'index_buff_visuals_key',
      },
    );
    queryInterface.addIndex(
      'buff_definition_habtm_stats',
      [
        {
          attribute: 'buff_definition_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'buff_visual_habtm_preload_groups',
      [
        {
          attribute: 'buff_visual_row',
        },
        {
          attribute: 'preload_group_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'characters',
      [
        {
          attribute: 'start_skill_gem_base_item_types_key',
        },
      ],
      {
        indexName: 'index_start_skill_gem_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'characters',
      [
        {
          attribute: 'start_weapon_base_item_types_key',
        },
      ],
      {
        indexName: 'index_start_weapon_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'character_audio_event_habtm_duelist_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_audio_event_habtm_goddess_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_audio_event_habtm_jack_the_axe_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_audio_event_habtm_marauder_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_audio_event_habtm_ranger_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_audio_event_habtm_scion_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_audio_event_habtm_shadow_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_audio_event_habtm_templar_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_audio_event_habtm_witch_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_panel_stats',
      [
        {
          attribute: 'character_panel_description_modes_key',
        },
      ],
      {
        indexName: 'index_character_panel_description_modes_key',
      },
    );
    queryInterface.addIndex(
      'character_panel_stats',
      [
        {
          attribute: 'character_panel_tabs_key',
        },
      ],
      {
        indexName: 'index_character_panel_tabs_key',
      },
    );
    queryInterface.addIndex(
      'character_panel_stat_habtm_stats1s',
      [
        {
          attribute: 'character_panel_stat_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_panel_stat_habtm_stats2s',
      [
        {
          attribute: 'character_panel_stat_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_panel_stat_habtm_stats3s',
      [
        {
          attribute: 'character_panel_stat_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_start_items',
      [
        {
          attribute: 'character_start_states_key',
        },
      ],
      {
        indexName: 'index_character_start_states_key',
      },
    );
    queryInterface.addIndex(
      'character_start_items',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'character_start_item_habtm_mods',
      [
        {
          attribute: 'character_start_item_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_start_item_habtm_socketed_skillgems',
      [
        {
          attribute: 'character_start_item_row',
        },
        {
          attribute: 'skill_gem_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_start_quest_state_habtm_map_pins',
      [
        {
          attribute: 'character_start_quest_state_row',
        },
        {
          attribute: 'map_pin_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_start_quest_state_habtm_quests',
      [
        {
          attribute: 'character_start_quest_state_row',
        },
        {
          attribute: 'quest_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_start_states',
      [
        {
          attribute: 'characters_key',
        },
      ],
      {
        indexName: 'index_characters_key',
      },
    );
    queryInterface.addIndex(
      'character_start_states',
      [
        {
          attribute: 'character_start_state_set_key',
        },
      ],
      {
        indexName: 'index_character_start_state_set_key',
      },
    );
    queryInterface.addIndex(
      'character_start_state_habtm_cruel_characterstartqueststates',
      [
        {
          attribute: 'character_start_state_row',
        },
        {
          attribute: 'character_start_quest_state_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_start_state_habtm_merciless_characterstartqueststates',
      [
        {
          attribute: 'character_start_state_row',
        },
        {
          attribute: 'character_start_quest_state_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_start_state_habtm_normal_characterstartqueststates',
      [
        {
          attribute: 'character_start_state_row',
        },
        {
          attribute: 'character_start_quest_state_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'character_start_state_habtm_passive_skills',
      [
        {
          attribute: 'character_start_state_row',
        },
        {
          attribute: 'passive_skill_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'chests',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'chests',
      [
        {
          attribute: 'chest_effects_key',
        },
      ],
      {
        indexName: 'index_chest_effects_key',
      },
    );
    queryInterface.addIndex(
      'chests',
      [
        {
          attribute: 'corrupt_achievement_items_key',
        },
      ],
      {
        indexName: 'index_corrupt_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'chests',
      [
        {
          attribute: 'currency_use_achievement_items_key',
        },
      ],
      {
        indexName: 'index_currency_use_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'chests',
      [
        {
          attribute: 'encounter_achievement_items_key',
        },
      ],
      {
        indexName: 'index_encounter_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'chest_cluster_habtm_chests',
      [
        {
          attribute: 'chest_cluster_row',
        },
        {
          attribute: 'chest_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'chest_habtm_mods',
      [
        {
          attribute: 'chest_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'chest_habtm_tags',
      [
        {
          attribute: 'chest_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'clone_shot_variations',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'component_armours',
      [
        {
          attribute: 'base_item_types_key',
          length: 250,
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'component_attribute_requirements',
      [
        {
          attribute: 'base_item_types_key',
          length: 250,
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'component_charges',
      [
        {
          attribute: 'base_item_types_key',
          length: 250,
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'crafting_bench_options',
      [
        {
          attribute: 'mods_key',
        },
      ],
      {
        indexName: 'index_mods_key',
      },
    );
    queryInterface.addIndex(
      'crafting_bench_option_habtm_cost_baseitemtypes',
      [
        {
          attribute: 'crafting_bench_option_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'crafting_bench_option_habtm_item_classes',
      [
        {
          attribute: 'crafting_bench_option_row',
        },
        {
          attribute: 'item_class_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'currency_items',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'currency_items',
      [
        {
          attribute: 'full_stack_base_item_types_key',
        },
      ],
      {
        indexName: 'index_full_stack_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'currency_items',
      [
        {
          attribute: 'possession_achievement_items_key',
        },
      ],
      {
        indexName: 'index_possession_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'currency_item_habtm_usage_achievementitems',
      [
        {
          attribute: 'currency_item_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'currency_stash_tab_layouts',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'daily_missions',
      [
        {
          attribute: 'npc_talk_key',
        },
      ],
      {
        indexName: 'index_npc_talk_key',
      },
    );
    queryInterface.addIndex(
      'daily_missions',
      [
        {
          attribute: 'pvp_types_key',
        },
      ],
      {
        indexName: 'index_pvp_types_key',
      },
    );
    queryInterface.addIndex(
      'daily_mission_habtm_characters',
      [
        {
          attribute: 'daily_mission_row',
        },
        {
          attribute: 'character_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'daily_overrides',
      [
        {
          attribute: 'daily_missions_keys',
        },
      ],
      {
        indexName: 'index_daily_missions_keys',
      },
    );
    queryInterface.addIndex(
      'dances',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'dances',
      [
        {
          attribute: 'characters_key',
        },
      ],
      {
        indexName: 'index_characters_key',
      },
    );
    queryInterface.addIndex(
      'default_monster_stats',
      [
        {
          attribute: 'difficulty_key',
        },
      ],
      {
        indexName: 'index_difficulty_key',
      },
    );
    queryInterface.addIndex(
      'descent_exiles',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'descent_exiles',
      [
        {
          attribute: 'characters_key',
        },
      ],
      {
        indexName: 'index_characters_key',
      },
    );
    queryInterface.addIndex(
      'descent_exiles',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chests',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types1s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types10s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types11s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types12s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types13s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types14s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types2s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types3s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types4s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types5s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types6s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types7s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types8s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_reward_chest_habtm_base_item_types9s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'descent_starter_chests',
      [
        {
          attribute: 'characters_key',
        },
      ],
      {
        indexName: 'index_characters_key',
      },
    );
    queryInterface.addIndex(
      'descent_starter_chests',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'descent_starter_chests',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'dex_int_missions',
      [
        {
          attribute: 'hostage_monster_varieties_key',
        },
      ],
      {
        indexName: 'index_hostage_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'dex_int_missions',
      [
        {
          attribute: 'npc_talk_key',
        },
      ],
      {
        indexName: 'index_npc_talk_key',
      },
    );
    queryInterface.addIndex(
      'dex_int_mission_guards',
      [
        {
          attribute: 'monster_packs_key',
        },
      ],
      {
        indexName: 'index_monster_packs_key',
      },
    );
    queryInterface.addIndex(
      'dex_int_mission_habtm_achievement_items',
      [
        {
          attribute: 'dex_int_mission_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'dex_int_mission_targets',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'dex_mission_mods',
      [
        {
          attribute: 'mods_key',
        },
      ],
      {
        indexName: 'index_mods_key',
      },
    );
    queryInterface.addIndex(
      'dex_mission_monsters',
      [
        {
          attribute: 'boss_monster_varieties_key',
        },
      ],
      {
        indexName: 'index_boss_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'dex_mission_monster_habtm_monster_packs',
      [
        {
          attribute: 'dex_mission_monster_row',
        },
        {
          attribute: 'monster_pack_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'dex_mission_monster_habtm_monster_varieties',
      [
        {
          attribute: 'dex_mission_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'dex_mission_trackings',
      [
        {
          attribute: 'npc_talk_key',
        },
      ],
      {
        indexName: 'index_npc_talk_key',
      },
    );
    queryInterface.addIndex(
      'display_minion_monster_types',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'divination_card_arts',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'divination_card_stash_tab_layouts',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'eclipse_mods',
      [
        {
          attribute: 'mods_key',
        },
      ],
      {
        indexName: 'index_mods_key',
      },
    );
    queryInterface.addIndex(
      'eclipse_mod_habtm_spawn_weight_tags',
      [
        {
          attribute: 'eclipse_mod_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'endless_ledge_chests',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'endless_ledge_chest_habtm_base_item_types',
      [
        {
          attribute: 'endless_ledge_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'mods_key1',
        },
      ],
      {
        indexName: 'index_mods_key1',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'mods_key2',
        },
      ],
      {
        indexName: 'index_mods_key2',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'quiver_mods_key',
        },
      ],
      {
        indexName: 'index_quiver_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'amulet1_mods_key',
        },
      ],
      {
        indexName: 'index_amulet1_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'belt1_mods_key',
        },
      ],
      {
        indexName: 'index_belt1_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'belt3_mods_key',
        },
      ],
      {
        indexName: 'index_belt3_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'gloves1_mods_key',
        },
      ],
      {
        indexName: 'index_gloves1_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'boots1_mods_key',
        },
      ],
      {
        indexName: 'index_boots1_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'body_armour1_mods_key',
        },
      ],
      {
        indexName: 'index_body_armour1_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'helmet1_mods_key',
        },
      ],
      {
        indexName: 'index_helmet1_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'shield1_mods_key',
        },
      ],
      {
        indexName: 'index_shield1_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'essence_type_key',
        },
      ],
      {
        indexName: 'index_essence_type_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '1_hand_mods_key1',
        },
      ],
      {
        indexName: 'index_1_hand_mods_key1',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'mods_key13',
        },
      ],
      {
        indexName: 'index_mods_key13',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'mods_key14',
        },
      ],
      {
        indexName: 'index_mods_key14',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'mods_key15',
        },
      ],
      {
        indexName: 'index_mods_key15',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '2_hand_mods_key1',
        },
      ],
      {
        indexName: 'index_2_hand_mods_key1',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'boots3_mods_key',
        },
      ],
      {
        indexName: 'index_boots3_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'ranged_mods_key',
        },
      ],
      {
        indexName: 'index_ranged_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'helmet2_mods_key',
        },
      ],
      {
        indexName: 'index_helmet2_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'body_armour2_mods_key',
        },
      ],
      {
        indexName: 'index_body_armour2_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'boots2_mods_key',
        },
      ],
      {
        indexName: 'index_boots2_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'gloves2_mods_key',
        },
      ],
      {
        indexName: 'index_gloves2_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'bow_mods_key',
        },
      ],
      {
        indexName: 'index_bow_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'wand_mods_key',
        },
      ],
      {
        indexName: 'index_wand_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '2_hand_mods_key2',
        },
      ],
      {
        indexName: 'index_2_hand_mods_key2',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '2_hand_mods_key3',
        },
      ],
      {
        indexName: 'index_2_hand_mods_key3',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '2_hand_mods_key4',
        },
      ],
      {
        indexName: 'index_2_hand_mods_key4',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '2_hand_mods_key5',
        },
      ],
      {
        indexName: 'index_2_hand_mods_key5',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '1_hand_mods_key2',
        },
      ],
      {
        indexName: 'index_1_hand_mods_key2',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '1_hand_mods_key3',
        },
      ],
      {
        indexName: 'index_1_hand_mods_key3',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '1_hand_mods_key4',
        },
      ],
      {
        indexName: 'index_1_hand_mods_key4',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '1_hand_mods_key5',
        },
      ],
      {
        indexName: 'index_1_hand_mods_key5',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '1_hand_mods_key6',
        },
      ],
      {
        indexName: 'index_1_hand_mods_key6',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '1_hand_mods_key7',
        },
      ],
      {
        indexName: 'index_1_hand_mods_key7',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '1_hand_mods_key8',
        },
      ],
      {
        indexName: 'index_1_hand_mods_key8',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: '1_hand_mods_key9',
        },
      ],
      {
        indexName: 'index_1_hand_mods_key9',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'belt2_mods_key',
        },
      ],
      {
        indexName: 'index_belt2_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'amulet2_mods_key',
        },
      ],
      {
        indexName: 'index_amulet2_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'ring_mods_key',
        },
      ],
      {
        indexName: 'index_ring_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'mods_key41',
        },
      ],
      {
        indexName: 'index_mods_key41',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'shield2_mods_key',
        },
      ],
      {
        indexName: 'index_shield2_mods_key',
      },
    );
    queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'mods_key43',
        },
      ],
      {
        indexName: 'index_mods_key43',
      },
    );
    queryInterface.addIndex(
      'essence_habtm_monster_mods',
      [
        {
          attribute: 'essence_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'essence_stash_tab_layouts',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'essence_types',
      [
        {
          attribute: 'words_key',
        },
      ],
      {
        indexName: 'index_words_key',
      },
    );
    queryInterface.addIndex(
      'event_season_rewards',
      [
        {
          attribute: 'event_season_key',
        },
      ],
      {
        indexName: 'index_event_season_key',
      },
    );
    queryInterface.addIndex(
      'exploding_storm_buffs',
      [
        {
          attribute: 'buff_definitions_key1',
        },
      ],
      {
        indexName: 'index_buff_definitions_key1',
      },
    );
    queryInterface.addIndex(
      'exploding_storm_buffs',
      [
        {
          attribute: 'friendly_monster_varieties_key',
        },
      ],
      {
        indexName: 'index_friendly_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'exploding_storm_buffs',
      [
        {
          attribute: 'misc_objects_key',
        },
      ],
      {
        indexName: 'index_misc_objects_key',
      },
    );
    queryInterface.addIndex(
      'exploding_storm_buffs',
      [
        {
          attribute: 'misc_animated_key',
        },
      ],
      {
        indexName: 'index_misc_animated_key',
      },
    );
    queryInterface.addIndex(
      'exploding_storm_buffs',
      [
        {
          attribute: 'buff_visuals_key',
        },
      ],
      {
        indexName: 'index_buff_visuals_key',
      },
    );
    queryInterface.addIndex(
      'exploding_storm_buffs',
      [
        {
          attribute: 'enemy_monster_varieties_key',
        },
      ],
      {
        indexName: 'index_enemy_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'exploding_storm_buffs',
      [
        {
          attribute: 'buff_definitions_key2',
        },
      ],
      {
        indexName: 'index_buff_definitions_key2',
      },
    );
    queryInterface.addIndex(
      'flasks',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'flasks',
      [
        {
          attribute: 'buff_definitions_key',
        },
      ],
      {
        indexName: 'index_buff_definitions_key',
      },
    );
    queryInterface.addIndex(
      'grandmaster_habtm_mods',
      [
        {
          attribute: 'grandmaster_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'granted_effects',
      [
        {
          attribute: 'active_skills_key',
        },
      ],
      {
        indexName: 'index_active_skills_key',
      },
    );
    queryInterface.addIndex(
      'granted_effects_per_levels',
      [
        {
          attribute: 'granted_effects_key',
        },
      ],
      {
        indexName: 'index_granted_effects_key',
      },
    );
    queryInterface.addIndex(
      'granted_effects_per_level_habtm_quality_stats',
      [
        {
          attribute: 'granted_effects_per_level_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'granted_effects_per_level_habtm_stats',
      [
        {
          attribute: 'granted_effects_per_level_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'granted_effects_per_level_habtm_stats2s',
      [
        {
          attribute: 'granted_effects_per_level_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'hideouts',
      [
        {
          attribute: 'small_world_areas_key',
        },
      ],
      {
        indexName: 'index_small_world_areas_key',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'hideouts',
      [
        {
          attribute: 'large_world_areas_key',
        },
      ],
      {
        indexName: 'index_large_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'hideout_doodads',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'hideout_interactables',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'int_missions',
      [
        {
          attribute: 'npc_talk_key',
        },
      ],
      {
        indexName: 'index_npc_talk_key',
      },
    );
    queryInterface.addIndex(
      'int_missions',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'int_mission_mods',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'int_mission_mod_habtm_mods',
      [
        {
          attribute: 'int_mission_mod_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'int_mission_monster_habtm_achievement_items',
      [
        {
          attribute: 'int_mission_monster_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'int_mission_monster_habtm_objective_monstervarieties',
      [
        {
          attribute: 'int_mission_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'invasion_monster_restrictions',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'invasion_monster_restriction_habtm_monster_varieties',
      [
        {
          attribute: 'invasion_monster_restriction_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'invasion_monsters_per_areas',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'invasion_monsters_per_area_habtm_monster_varieties1s',
      [
        {
          attribute: 'invasion_monsters_per_area_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'invasion_monsters_per_area_habtm_monster_varieties2s',
      [
        {
          attribute: 'invasion_monsters_per_area_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'item_experience_per_levels',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'item_visual_identities',
      [
        {
          attribute: 'sound_effects_key',
        },
      ],
      {
        indexName: 'index_sound_effects_key',
      },
    );
    queryInterface.addIndex(
      'item_visual_identities',
      [
        {
          attribute: 'create_corrupted_jewel_achievement_items_key',
        },
      ],
      {
        indexName: 'index_create_corrupted_jewel_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'item_visual_identity_habtm_corrupt_achievementitems',
      [
        {
          attribute: 'item_visual_identity_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'item_visual_identity_habtm_identify_achievementitems',
      [
        {
          attribute: 'item_visual_identity_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'item_visual_identity_habtm_pickup_achievementitems',
      [
        {
          attribute: 'item_visual_identity_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'itemised_visual_effects',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'itemised_visual_effects',
      [
        {
          attribute: 'item_visual_effect_key',
        },
      ],
      {
        indexName: 'index_item_visual_effect_key',
      },
    );
    queryInterface.addIndex(
      'itemised_visual_effects',
      [
        {
          attribute: 'item_visual_identity_key1',
        },
      ],
      {
        indexName: 'index_item_visual_identity_key1',
      },
    );
    queryInterface.addIndex(
      'itemised_visual_effects',
      [
        {
          attribute: 'item_visual_identity_key2',
        },
      ],
      {
        indexName: 'index_item_visual_identity_key2',
      },
    );
    queryInterface.addIndex(
      'killstreak_thresholds',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'killstreak_thresholds',
      [
        {
          attribute: 'achievement_items_key',
        },
      ],
      {
        indexName: 'index_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'labyrinth_area_habtm_cruel_worldareas',
      [
        {
          attribute: 'labyrinth_area_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'labyrinth_area_habtm_endgame_worldareas',
      [
        {
          attribute: 'labyrinth_area_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'labyrinth_area_habtm_merciless_worldareas',
      [
        {
          attribute: 'labyrinth_area_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'labyrinth_area_habtm_normal_worldareas',
      [
        {
          attribute: 'labyrinth_area_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'labyrinth_izaro_chests',
      [
        {
          attribute: 'chests_key',
        },
      ],
      {
        indexName: 'index_chests_key',
      },
    );
    queryInterface.addIndex(
      'labyrinth_secrets',
      [
        {
          attribute: 'achievement_items_key',
        },
      ],
      {
        indexName: 'index_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'labyrinth_secret_effects',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'labyrinth_secret_effects',
      [
        {
          attribute: 'buff_buff_definitions_key',
        },
      ],
      {
        indexName: 'index_buff_buff_definitions_key',
      },
    );
    queryInterface.addIndex(
      'labyrinth_secret_habtm_labyrinth_secret_effects0s',
      [
        {
          attribute: 'labyrinth_secret_row',
        },
        {
          attribute: 'labyrinth_secret_effect_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'labyrinth_secret_habtm_labyrinth_secret_effects1s',
      [
        {
          attribute: 'labyrinth_secret_row',
        },
        {
          attribute: 'labyrinth_secret_effect_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'labyrinth_secret_habtm_labyrinth_secret_effects2s',
      [
        {
          attribute: 'labyrinth_secret_row',
        },
        {
          attribute: 'labyrinth_secret_effect_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'labyrinth_secret_habtm_labyrinth_secret_effects3s',
      [
        {
          attribute: 'labyrinth_secret_row',
        },
        {
          attribute: 'labyrinth_secret_effect_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'labyrinth_section_layouts',
      [
        {
          attribute: 'labyrinth_section_key',
        },
      ],
      {
        indexName: 'index_labyrinth_section_key',
      },
    );
    queryInterface.addIndex(
      'labyrinth_section_layouts',
      [
        {
          attribute: 'labyrinth_secrets_key0',
        },
      ],
      {
        indexName: 'index_labyrinth_secrets_key0',
      },
    );
    queryInterface.addIndex(
      'labyrinth_section_layouts',
      [
        {
          attribute: 'labyrinth_secrets_key1',
        },
      ],
      {
        indexName: 'index_labyrinth_secrets_key1',
      },
    );
    queryInterface.addIndex(
      'labyrinth_section_layouts',
      [
        {
          attribute: 'labyrinth_areas_key',
        },
      ],
      {
        indexName: 'index_labyrinth_areas_key',
      },
    );
    queryInterface.addIndex(
      'labyrinth_section_layouts',
      [
        {
          attribute: 'labyrinth_node_overrides_key',
        },
      ],
      {
        indexName: 'index_labyrinth_node_overrides_key',
      },
    );
    queryInterface.addIndex(
      'labyrinth_section_layout_habtm_labyrinth_section_layouts',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'labyrinth_trinkets',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'labyrinth_trinkets',
      [
        {
          attribute: 'buff_buff_definitions_key',
        },
      ],
      {
        indexName: 'index_buff_buff_definitions_key',
      },
    );
    queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'regular_world_areas_key',
        },
      ],
      {
        indexName: 'index_regular_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'unique_world_areas_key',
        },
      ],
      {
        indexName: 'index_unique_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'map_upgrade_base_item_types_key',
        },
      ],
      {
        indexName: 'index_map_upgrade_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'shaped_base_maps_key',
        },
      ],
      {
        indexName: 'index_shaped_base_maps_key',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
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
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'map_connections',
      [
        {
          attribute: 'map_pins_key0',
        },
      ],
      {
        indexName: 'index_map_pins_key0',
      },
    );
    queryInterface.addIndex(
      'map_connections',
      [
        {
          attribute: 'map_pins_key1',
        },
      ],
      {
        indexName: 'index_map_pins_key1',
      },
    );
    queryInterface.addIndex(
      'map_device_recipe_habtm_base_item_types',
      [
        {
          attribute: 'map_device_recipe_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'map_device_recipe_habtm_world_areas',
      [
        {
          attribute: 'map_device_recipe_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'map_habtm_higher_tier_maps_baseitemtypes',
      [
        {
          attribute: 'map_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'map_habtm_monster_packs',
      [
        {
          attribute: 'map_row',
        },
        {
          attribute: 'monster_pack_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'map_inhabitants',
      [
        {
          attribute: 'stats_key',
        },
      ],
      {
        indexName: 'index_stats_key',
      },
    );
    queryInterface.addIndex(
      'map_pins',
      [
        {
          attribute: 'normal_waypoint_world_areas_key',
        },
      ],
      {
        indexName: 'index_normal_waypoint_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'map_pins',
      [
        {
          attribute: 'cruel_waypoint_world_areas_key',
        },
      ],
      {
        indexName: 'index_cruel_waypoint_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'map_pins',
      [
        {
          attribute: 'merciless_waypoint_world_areas_key',
        },
      ],
      {
        indexName: 'index_merciless_waypoint_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'map_pin_habtm_cruel_worldareas',
      [
        {
          attribute: 'map_pin_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'map_pin_habtm_merciless_worldareas',
      [
        {
          attribute: 'map_pin_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'map_pin_habtm_normal_worldareas',
      [
        {
          attribute: 'map_pin_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'map_pin_habtm_world_areas',
      [
        {
          attribute: 'map_pin_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'micro_migration_data',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'microtransaction_fireworks_variations',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'microtransaction_portal_variations',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'microtransaction_social_frame_variations',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'misc_animated_habtm_preload_groups',
      [
        {
          attribute: 'misc_animated_row',
        },
        {
          attribute: 'preload_group_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'misc_beam_habtm_preload_groups',
      [
        {
          attribute: 'misc_beam_row',
        },
        {
          attribute: 'preload_group_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'misc_object_habtm_preload_groups',
      [
        {
          attribute: 'misc_object_row',
        },
        {
          attribute: 'preload_group_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'mission_tile_map_habtm_world_areas',
      [
        {
          attribute: 'mission_tile_map_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'mods',
      [
        {
          attribute: 'mod_type_key',
        },
      ],
      {
        indexName: 'index_mod_type_key',
      },
    );
    queryInterface.addIndex(
      'mods',
      [
        {
          attribute: 'stats_key1',
        },
      ],
      {
        indexName: 'index_stats_key1',
      },
    );
    queryInterface.addIndex(
      'mods',
      [
        {
          attribute: 'stats_key2',
        },
      ],
      {
        indexName: 'index_stats_key2',
      },
    );
    queryInterface.addIndex(
      'mods',
      [
        {
          attribute: 'stats_key3',
        },
      ],
      {
        indexName: 'index_stats_key3',
      },
    );
    queryInterface.addIndex(
      'mods',
      [
        {
          attribute: 'stats_key4',
        },
      ],
      {
        indexName: 'index_stats_key4',
      },
    );
    queryInterface.addIndex(
      'mods',
      [
        {
          attribute: 'buff_definitions_key',
        },
      ],
      {
        indexName: 'index_buff_definitions_key',
      },
    );
    queryInterface.addIndex(
      'mods',
      [
        {
          attribute: 'granted_effects_per_level_key',
        },
      ],
      {
        indexName: 'index_granted_effects_per_level_key',
      },
    );
    queryInterface.addIndex(
      'mods',
      [
        {
          attribute: 'stats_key5',
        },
      ],
      {
        indexName: 'index_stats_key5',
      },
    );
    queryInterface.addIndex(
      'mods',
      [
        {
          attribute: 'achievement_items_key',
        },
      ],
      {
        indexName: 'index_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'mod_habtm_generation_weight_tags',
      [
        {
          attribute: 'mod_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'mod_habtm_spawn_weight_tags',
      [
        {
          attribute: 'mod_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'mod_habtm_tags',
      [
        {
          attribute: 'mod_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'mod_sell_prices',
      [
        {
          attribute: 'mod_sell_price_types_key',
        },
      ],
      {
        indexName: 'index_mod_sell_price_types_key',
      },
    );
    queryInterface.addIndex(
      'mod_sell_price_habtm_base_item_types',
      [
        {
          attribute: 'mod_sell_price_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'mod_type_habtm_mod_sell_prices',
      [
        {
          attribute: 'mod_type_row',
        },
        {
          attribute: 'mod_sell_price_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_additional_monster_drops',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'monster_group_entries',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'monster_map_boss_difficulties',
      [
        {
          attribute: 'stats_key1',
        },
      ],
      {
        indexName: 'index_stats_key1',
      },
    );
    queryInterface.addIndex(
      'monster_map_boss_difficulties',
      [
        {
          attribute: 'stats_key2',
        },
      ],
      {
        indexName: 'index_stats_key2',
      },
    );
    queryInterface.addIndex(
      'monster_map_boss_difficulties',
      [
        {
          attribute: 'stats_key3',
        },
      ],
      {
        indexName: 'index_stats_key3',
      },
    );
    queryInterface.addIndex(
      'monster_map_boss_difficulties',
      [
        {
          attribute: 'stats_key4',
        },
      ],
      {
        indexName: 'index_stats_key4',
      },
    );
    queryInterface.addIndex(
      'monster_map_difficulties',
      [
        {
          attribute: 'stats_key1',
        },
      ],
      {
        indexName: 'index_stats_key1',
      },
    );
    queryInterface.addIndex(
      'monster_map_difficulties',
      [
        {
          attribute: 'stats_key2',
        },
      ],
      {
        indexName: 'index_stats_key2',
      },
    );
    queryInterface.addIndex(
      'monster_map_difficulties',
      [
        {
          attribute: 'stats_key3',
        },
      ],
      {
        indexName: 'index_stats_key3',
      },
    );
    queryInterface.addIndex(
      'monster_map_difficulties',
      [
        {
          attribute: 'stats_key4',
        },
      ],
      {
        indexName: 'index_stats_key4',
      },
    );
    queryInterface.addIndex(
      'monster_pack_entries',
      [
        {
          attribute: 'monster_packs_key',
        },
      ],
      {
        indexName: 'index_monster_packs_key',
      },
    );
    queryInterface.addIndex(
      'monster_pack_entries',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'monster_pack_habtm_boss_monster_monstervarieties',
      [
        {
          attribute: 'monster_pack_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_pack_habtm_tags',
      [
        {
          attribute: 'monster_pack_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_pack_habtm_world_areas',
      [
        {
          attribute: 'monster_pack_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_types',
      [
        {
          attribute: 'monster_resistances_key',
        },
      ],
      {
        indexName: 'index_monster_resistances_key',
      },
    );
    queryInterface.addIndex(
      'monster_type_habtm_tags',
      [
        {
          attribute: 'monster_type_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_varieties',
      [
        {
          attribute: 'monster_types_key',
        },
      ],
      {
        indexName: 'index_monster_types_key',
      },
    );
    queryInterface.addIndex(
      'monster_varieties',
      [
        {
          attribute: 'back_item_visual_identity_key',
        },
      ],
      {
        indexName: 'index_back_item_visual_identity_key',
      },
    );
    queryInterface.addIndex(
      'monster_varieties',
      [
        {
          attribute: 'main_hand_item_classes_key',
        },
      ],
      {
        indexName: 'index_main_hand_item_classes_key',
      },
    );
    queryInterface.addIndex(
      'monster_varieties',
      [
        {
          attribute: 'off_hand_item_classes_key',
        },
      ],
      {
        indexName: 'index_off_hand_item_classes_key',
      },
    );
    queryInterface.addIndex(
      'monster_varieties',
      [
        {
          attribute: 'helmet_item_visual_identity_key',
        },
      ],
      {
        indexName: 'index_helmet_item_visual_identity_key',
      },
    );
    queryInterface.addIndex(
      'monster_varieties',
      [
        {
          attribute: 'flashback_achievement_items_key',
        },
      ],
      {
        indexName: 'index_flashback_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'monster_varieties',
      [
        {
          attribute: 'monster_segments_key',
        },
      ],
      {
        indexName: 'index_monster_segments_key',
      },
    );
    queryInterface.addIndex(
      'monster_varieties',
      [
        {
          attribute: 'monster_armours_key',
        },
      ],
      {
        indexName: 'index_monster_armours_key',
      },
    );
    queryInterface.addIndex(
      'monster_varieties',
      [
        {
          attribute: 'achievement_items_key',
        },
      ],
      {
        indexName: 'index_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'monster_varieties',
      [
        {
          attribute: 'achievement_items_key4',
        },
      ],
      {
        indexName: 'index_achievement_items_key4',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_achievement_items',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_achievement_items2s',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_count_kills_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_cruel_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_cruel_mods',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_granted_effects',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'granted_effect_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_kill_rare_in_cruel_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_kill_rare_in_merciless_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_kill_rare_in_normal_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_merciless_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_merciless_mods',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_mods',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_mods2s',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_normal_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_normal_mods',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_special_mods',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_tags',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_weapon1_itemvisualidentities',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'item_visual_identity_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'monster_variety_habtm_weapon2_itemvisualidentities',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'item_visual_identity_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'mystery_boxes',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'n_p_cs',
      [
        {
          attribute: 'npc_master_key',
        },
      ],
      {
        indexName: 'index_npc_master_key',
      },
    );
    queryInterface.addIndex(
      'n_p_cs',
      [
        {
          attribute: 'npc_shop_key',
        },
      ],
      {
        indexName: 'index_npc_shop_key',
      },
    );
    queryInterface.addIndex(
      'n_p_cs',
      [
        {
          attribute: 'npc_audio_key1',
        },
      ],
      {
        indexName: 'index_npc_audio_key1',
      },
    );
    queryInterface.addIndex(
      'n_p_cs',
      [
        {
          attribute: 'npc_audio_key2',
        },
      ],
      {
        indexName: 'index_npc_audio_key2',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'n_p_c_masters',
      [
        {
          attribute: 'achievement_items_key',
        },
      ],
      {
        indexName: 'index_achievement_items_key',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'n_p_c_master_experience_per_levels',
      [
        {
          attribute: 'npc_master_key',
        },
      ],
      {
        indexName: 'index_npc_master_key',
      },
    );
    queryInterface.addIndex(
      'n_p_c_master_habtm_master_level5_achievementitems',
      [
        {
          attribute: 'npc_master_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'n_p_c_master_habtm_signature_mod_spawn_weight_tags',
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
    queryInterface.addIndex(
      'n_p_c_master_habtm_unknown_weight_tags',
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
    queryInterface.addIndex(
      'n_p_c_shop_habtm_sold_item_tags',
      [
        {
          attribute: 'npc_shop_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'n_p_c_talks',
      [
        {
          attribute: 'npc_key',
        },
      ],
      {
        indexName: 'index_npc_key',
      },
    );
    queryInterface.addIndex(
      'n_p_c_talks',
      [
        {
          attribute: 'quest_key',
        },
      ],
      {
        indexName: 'index_quest_key',
      },
    );
    queryInterface.addIndex(
      'n_p_c_talk_habtm_n_p_c_text_audios',
      [
        {
          attribute: 'npc_talk_row',
        },
        {
          attribute: 'npc_text_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'n_p_c_text_audios',
      [
        {
          attribute: 'characters_key',
        },
      ],
      {
        indexName: 'index_characters_key',
      },
    );
    queryInterface.addIndex(
      'passive_jewel_slots',
      [
        {
          attribute: 'passive_skills_key',
        },
      ],
      {
        indexName: 'index_passive_skills_key',
      },
    );
    queryInterface.addIndex(
      'passive_skills',
      [
        {
          attribute: 'achievement_items_key',
        },
      ],
      {
        indexName: 'index_achievement_items_key',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'passive_skills',
      [
        {
          attribute: 'ascendancy_key',
        },
      ],
      {
        indexName: 'index_ascendancy_key',
      },
    );
    queryInterface.addIndex(
      'passive_skill_habtm_characters',
      [
        {
          attribute: 'passive_skill_row',
        },
        {
          attribute: 'character_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'passive_skill_habtm_reminder_clientstrings',
      [
        {
          attribute: 'passive_skill_row',
        },
        {
          attribute: 'client_string_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'passive_skill_habtm_stats',
      [
        {
          attribute: 'passive_skill_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'path_of_endurance_habtm_mods',
      [
        {
          attribute: 'path_of_endurance_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'perandus_bosses',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'perandus_chests',
      [
        {
          attribute: 'chests_key',
        },
      ],
      {
        indexName: 'index_chests_key',
      },
    );
    queryInterface.addIndex(
      'perandus_daemons',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'perandus_guard_habtm_monster_packs',
      [
        {
          attribute: 'perandus_guard_row',
        },
        {
          attribute: 'monster_pack_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'pets',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'projectile_variations',
      [
        {
          attribute: 'projectile_key',
        },
      ],
      {
        indexName: 'index_projectile_key',
      },
    );
    queryInterface.addIndex(
      'prophecies',
      [
        {
          attribute: 'prophecy_chain_key',
        },
      ],
      {
        indexName: 'index_prophecy_chain_key',
      },
    );
    queryInterface.addIndex(
      'prophecy_habtm_quest_tracker_clientstrings',
      [
        {
          attribute: 'prophecy_row',
        },
        {
          attribute: 'client_string_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'quest_achievements',
      [
        {
          attribute: 'achievement_items_key',
        },
      ],
      {
        indexName: 'index_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'quest_achievements',
      [
        {
          attribute: 'difficulties_key',
        },
      ],
      {
        indexName: 'index_difficulties_key',
      },
    );
    queryInterface.addIndex(
      'quest_rewards',
      [
        {
          attribute: 'quest_key',
        },
      ],
      {
        indexName: 'index_quest_key',
      },
    );
    queryInterface.addIndex(
      'quest_rewards',
      [
        {
          attribute: 'characters_key',
        },
      ],
      {
        indexName: 'index_characters_key',
      },
    );
    queryInterface.addIndex(
      'quest_rewards',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'quest_states',
      [
        {
          attribute: 'quest_key',
        },
      ],
      {
        indexName: 'index_quest_key',
      },
    );
    queryInterface.addIndex(
      'quest_state_habtm_map_pins1s',
      [
        {
          attribute: 'quest_state_row',
        },
        {
          attribute: 'map_pin_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'quest_state_habtm_map_pins2s',
      [
        {
          attribute: 'quest_state_row',
        },
        {
          attribute: 'map_pin_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'quest_static_rewards',
      [
        {
          attribute: 'stats_key',
        },
      ],
      {
        indexName: 'index_stats_key',
      },
    );
    queryInterface.addIndex(
      'quest_static_rewards',
      [
        {
          attribute: 'difficulty_key',
        },
      ],
      {
        indexName: 'index_difficulty_key',
      },
    );
    queryInterface.addIndex(
      'quest_static_rewards',
      [
        {
          attribute: 'quest_key',
        },
      ],
      {
        indexName: 'index_quest_key',
      },
    );
    queryInterface.addIndex(
      'quest_vendor_rewards',
      [
        {
          attribute: 'npc_key',
        },
      ],
      {
        indexName: 'index_npc_key',
      },
    );
    queryInterface.addIndex(
      'quest_vendor_reward_habtm_base_item_types',
      [
        {
          attribute: 'quest_vendor_reward_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'quest_vendor_reward_habtm_characters',
      [
        {
          attribute: 'quest_vendor_reward_row',
        },
        {
          attribute: 'character_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'race_areas',
      [
        {
          attribute: 'races_key',
        },
      ],
      {
        indexName: 'index_races_key',
      },
    );
    queryInterface.addIndex(
      'race_areas',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'race_area_habtm_mods',
      [
        {
          attribute: 'race_area_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'race_times',
      [
        {
          attribute: 'races_key',
        },
      ],
      {
        indexName: 'index_races_key',
      },
    );
    queryInterface.addIndex(
      'rogue_exiles',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'shield_types',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'shop_categories',
      [
        {
          attribute: 'applied_to_base_item_types_key',
        },
      ],
      {
        indexName: 'index_applied_to_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'shop_countries',
      [
        {
          attribute: 'shop_currency_key',
        },
      ],
      {
        indexName: 'index_shop_currency_key',
      },
    );
    queryInterface.addIndex(
      'shop_item_habtm_package_shopitems',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'shop_item_habtm_shop_categories',
      [
        {
          attribute: 'shop_item_row',
        },
        {
          attribute: 'shop_category_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'shop_item_prices',
      [
        {
          attribute: 'shop_item_key',
        },
      ],
      {
        indexName: 'index_shop_item_key',
      },
    );
    queryInterface.addIndex(
      'shop_item_prices',
      [
        {
          attribute: 'shop_region_key',
        },
      ],
      {
        indexName: 'index_shop_region_key',
      },
    );
    queryInterface.addIndex(
      'shop_payment_packages',
      [
        {
          attribute: 'upgrade_shop_payment_package_key',
        },
      ],
      {
        indexName: 'index_upgrade_shop_payment_package_key',
      },
    );
    queryInterface.addIndex(
      'shop_payment_package_items',
      [
        {
          attribute: 'shop_payment_package_key',
        },
      ],
      {
        indexName: 'index_shop_payment_package_key',
      },
    );
    queryInterface.addIndex(
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
    queryInterface.addIndex(
      'shop_payment_package_items',
      [
        {
          attribute: 'shop_token_key',
        },
      ],
      {
        indexName: 'index_shop_token_key',
      },
    );
    queryInterface.addIndex(
      'shop_payment_package_prices',
      [
        {
          attribute: 'shop_payment_package_key',
        },
      ],
      {
        indexName: 'index_shop_payment_package_key',
      },
    );
    queryInterface.addIndex(
      'shop_payment_package_prices',
      [
        {
          attribute: 'shop_country_key',
        },
      ],
      {
        indexName: 'index_shop_country_key',
      },
    );
    queryInterface.addIndex(
      'shrines',
      [
        {
          attribute: 'player_shrine_buffs_key',
        },
      ],
      {
        indexName: 'index_player_shrine_buffs_key',
      },
    );
    queryInterface.addIndex(
      'shrines',
      [
        {
          attribute: 'monster_shrine_buffs_key',
        },
      ],
      {
        indexName: 'index_monster_shrine_buffs_key',
      },
    );
    queryInterface.addIndex(
      'shrines',
      [
        {
          attribute: 'summon_monster_monster_varieties_key',
        },
      ],
      {
        indexName: 'index_summon_monster_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'shrines',
      [
        {
          attribute: 'summon_player_monster_varieties_key',
        },
      ],
      {
        indexName: 'index_summon_player_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'shrines',
      [
        {
          attribute: 'shrine_sounds_key',
        },
      ],
      {
        indexName: 'index_shrine_sounds_key',
      },
    );
    queryInterface.addIndex(
      'shrine_buffs',
      [
        {
          attribute: 'buff_definitions_key',
        },
      ],
      {
        indexName: 'index_buff_definitions_key',
      },
    );
    queryInterface.addIndex(
      'shrine_habtm_achievement_items',
      [
        {
          attribute: 'shrine_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'skill_gems',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'skill_gems',
      [
        {
          attribute: 'granted_effects_key',
        },
      ],
      {
        indexName: 'index_granted_effects_key',
      },
    );
    queryInterface.addIndex(
      'skill_gems',
      [
        {
          attribute: 'vaal_variant_base_item_types_key',
        },
      ],
      {
        indexName: 'index_vaal_variant_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'skill_gem_habtm_gem_tags',
      [
        {
          attribute: 'skill_gem_row',
        },
        {
          attribute: 'gem_tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'skill_totem_variations',
      [
        {
          attribute: 'skill_totems_key',
        },
      ],
      {
        indexName: 'index_skill_totems_key',
      },
    );
    queryInterface.addIndex(
      'skill_totem_variations',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'stats',
      [
        {
          attribute: 'main_hand_alias_stats_key',
        },
      ],
      {
        indexName: 'index_main_hand_alias_stats_key',
      },
    );
    queryInterface.addIndex(
      'stats',
      [
        {
          attribute: 'off_hand_alias_stats_key',
        },
      ],
      {
        indexName: 'index_off_hand_alias_stats_key',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_missions',
      [
        {
          attribute: 'npc_talk_key',
        },
      ],
      {
        indexName: 'index_npc_talk_key',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_missions',
      [
        {
          attribute: 'monster_packs_key',
        },
      ],
      {
        indexName: 'index_monster_packs_key',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_mission_extra_requirements',
      [
        {
          attribute: 'npc_talk_key',
        },
      ],
      {
        indexName: 'index_npc_talk_key',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_mission_habtm_achievement_items',
      [
        {
          attribute: 'str_dex_int_mission_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_mission_habtm_extra_mods',
      [
        {
          attribute: 'str_dex_int_mission_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_mission_maps',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_mission_map_habtm_map_boss_monstervarieties',
      [
        {
          attribute: 'str_dex_int_mission_map_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_mission_mod_habtm_mods',
      [
        {
          attribute: 'str_dex_int_mission_mod_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_mission_unique_maps',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_mission_unique_map_habtm_map_boss_monstervarieties',
      [
        {
          attribute: 'str_dex_int_mission_unique_map_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_dex_int_mission_unique_map_habtm_mods',
      [
        {
          attribute: 'str_dex_int_mission_unique_map_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_dex_missions',
      [
        {
          attribute: 'dummy_monster_varieties_key',
        },
      ],
      {
        indexName: 'index_dummy_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'str_dex_missions',
      [
        {
          attribute: 'npc_talk_key',
        },
      ],
      {
        indexName: 'index_npc_talk_key',
      },
    );
    queryInterface.addIndex(
      'str_dex_mission_archetypes',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'str_dex_mission_habtm_allies_monstervarieties',
      [
        {
          attribute: 'str_dex_mission_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_dex_mission_habtm_mods',
      [
        {
          attribute: 'str_dex_mission_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_dex_mission_habtm_traps_monstervarieties',
      [
        {
          attribute: 'str_dex_mission_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_dex_mission_mod_habtm_mods',
      [
        {
          attribute: 'str_dex_mission_mod_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_dex_mission_special_mod_habtm_mods',
      [
        {
          attribute: 'str_dex_mission_special_mod_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_int_missions',
      [
        {
          attribute: 'relic_monster_varieties_key',
        },
      ],
      {
        indexName: 'index_relic_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'str_int_missions',
      [
        {
          attribute: 'npc_talk_key',
        },
      ],
      {
        indexName: 'index_npc_talk_key',
      },
    );
    queryInterface.addIndex(
      'str_int_mission_habtm_achievement_items',
      [
        {
          attribute: 'str_int_mission_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_int_mission_habtm_relic_mods',
      [
        {
          attribute: 'str_int_mission_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_int_mission_monster_waves',
      [
        {
          attribute: 'monster_packs_key',
        },
      ],
      {
        indexName: 'index_monster_packs_key',
      },
    );
    queryInterface.addIndex(
      'str_int_mission_monster_wave_habtm_unique_monstervarieties',
      [
        {
          attribute: 'str_int_mission_monster_wave_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_int_mission_relic_mod_habtm_mods',
      [
        {
          attribute: 'str_int_mission_relic_mod_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_int_mission_relic_pattern_habtm_relic_mods',
      [
        {
          attribute: 'str_int_mission_relic_pattern_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_map_mods',
      [
        {
          attribute: 'mods_key',
        },
      ],
      {
        indexName: 'index_mods_key',
      },
    );
    queryInterface.addIndex(
      'str_missions',
      [
        {
          attribute: 'npc_talk_key',
        },
      ],
      {
        indexName: 'index_npc_talk_key',
      },
    );
    queryInterface.addIndex(
      'str_mission_bosses',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'str_mission_habtm_mods',
      [
        {
          attribute: 'str_mission_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'str_mission_spirit_effects',
      [
        {
          attribute: 'summon_monster_varieties_keys',
        },
      ],
      {
        indexName: 'index_summon_monster_varieties_keys',
      },
    );
    queryInterface.addIndex(
      'str_mission_spirit_effects',
      [
        {
          attribute: 'ground_effect_monster_varieties_keys',
        },
      ],
      {
        indexName: 'index_ground_effect_monster_varieties_keys',
      },
    );
    queryInterface.addIndex(
      'str_mission_spirit_secondary_effects',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'strongboxes',
      [
        {
          attribute: 'chests_key',
        },
      ],
      {
        indexName: 'index_chests_key',
      },
    );
    queryInterface.addIndex(
      'summoned_specific_barrels',
      [
        {
          attribute: 'chests_key',
        },
      ],
      {
        indexName: 'index_chests_key',
      },
    );
    queryInterface.addIndex(
      'summoned_specific_monsters',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'summoned_specific_monsters_on_deaths',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'talismans',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'talismans',
      [
        {
          attribute: 'mods_key',
        },
      ],
      {
        indexName: 'index_mods_key',
      },
    );
    queryInterface.addIndex(
      'talisman_packs',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'talisman_packs',
      [
        {
          attribute: 'monster_packs_key',
        },
      ],
      {
        indexName: 'index_monster_packs_key',
      },
    );
    queryInterface.addIndex(
      'talisman_pack_habtm_monster_packs',
      [
        {
          attribute: 'talisman_pack_row',
        },
        {
          attribute: 'monster_pack_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'topologies',
      [
        {
          attribute: 'environments_key',
        },
      ],
      {
        indexName: 'index_environments_key',
      },
    );
    queryInterface.addIndex(
      'torment_spirits',
      [
        {
          attribute: 'monster_varieties_key',
        },
      ],
      {
        indexName: 'index_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'torment_spirits',
      [
        {
          attribute: 'summoned_monster_monster_varieties_key',
        },
      ],
      {
        indexName: 'index_summoned_monster_monster_varieties_key',
      },
    );
    queryInterface.addIndex(
      'torment_spirit_habtm_mods0s',
      [
        {
          attribute: 'torment_spirit_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'torment_spirit_habtm_mods1s',
      [
        {
          attribute: 'torment_spirit_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'torment_spirit_habtm_possessed_mods',
      [
        {
          attribute: 'torment_spirit_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'torment_spirit_habtm_spirit_mods',
      [
        {
          attribute: 'torment_spirit_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'torment_spirit_habtm_touched_mods',
      [
        {
          attribute: 'torment_spirit_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'unique_chests',
      [
        {
          attribute: 'chests_key',
        },
      ],
      {
        indexName: 'index_chests_key',
      },
    );
    queryInterface.addIndex(
      'unique_chests',
      [
        {
          attribute: 'words_key',
        },
      ],
      {
        indexName: 'index_words_key',
      },
    );
    queryInterface.addIndex(
      'unique_chest_habtm_mods',
      [
        {
          attribute: 'unique_chest_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'unique_sets',
      [
        {
          attribute: 'words_key',
        },
      ],
      {
        indexName: 'index_words_key',
      },
    );
    queryInterface.addIndex(
      'warbands_graphs',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'warbands_map_graphs',
      [
        {
          attribute: 'world_areas_key',
        },
      ],
      {
        indexName: 'index_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'warbands_pack_monster_habtm_tier1_monstervarieties',
      [
        {
          attribute: 'warbands_pack_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'warbands_pack_monster_habtm_tier2_monstervarieties',
      [
        {
          attribute: 'warbands_pack_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'warbands_pack_monster_habtm_tier3_monstervarieties',
      [
        {
          attribute: 'warbands_pack_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'warbands_pack_monster_habtm_tier4_monstervarieties',
      [
        {
          attribute: 'warbands_pack_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'weapon_types',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
    queryInterface.addIndex(
      'word_habtm_spawn_weight_tags',
      [
        {
          attribute: 'word_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_areas',
      [
        {
          attribute: 'parent_town_world_areas_key',
        },
      ],
      {
        indexName: 'index_parent_town_world_areas_key',
      },
    );
    queryInterface.addIndex(
      'world_areas',
      [
        {
          attribute: 'difficulties_key',
        },
      ],
      {
        indexName: 'index_difficulties_key',
      },
    );
    queryInterface.addIndex(
      'world_areas',
      [
        {
          attribute: 'achievement_items_key',
        },
      ],
      {
        indexName: 'index_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'world_areas',
      [
        {
          attribute: 'twinned_full_clear_achievement_items_key',
        },
      ],
      {
        indexName: 'index_twinned_full_clear_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'world_areas',
      [
        {
          attribute: 'enter_achievement_items_key',
        },
      ],
      {
        indexName: 'index_enter_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'world_areas',
      [
        {
          attribute: '8_mods_full_clear_achievement_items_key',
        },
      ],
      {
        indexName: 'index_8_mods_full_clear_achievement_items_key',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm1s',
      [
        {
          attribute: 'world_area_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm_area_type_tags',
      [
        {
          attribute: 'world_area_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm_bosses_monstervarieties',
      [
        {
          attribute: 'world_area_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm_connections_worldareas',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm_full_clear_achievementitems',
      [
        {
          attribute: 'world_area_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm_mods',
      [
        {
          attribute: 'world_area_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm_monsters_monstervarieties',
      [
        {
          attribute: 'world_area_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm_spawn_weight_tags',
      [
        {
          attribute: 'world_area_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm_tags',
      [
        {
          attribute: 'world_area_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm_topologies',
      [
        {
          attribute: 'world_area_row',
        },
        {
          attribute: 'topology_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    queryInterface.addIndex(
      'world_area_habtm_vaal_area_worldareas',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeIndex('world_area_habtm_vaal_area_worldareas', [
      {
        attribute: 'source_row',
      },
      {
        attribute: 'target_row',
      },
    ]);
    queryInterface.removeIndex('world_area_habtm_topologies', [
      {
        attribute: 'world_area_row',
      },
      {
        attribute: 'topology_row',
      },
    ]);
    queryInterface.removeIndex('world_area_habtm_tags', [
      {
        attribute: 'world_area_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('world_area_habtm_spawn_weight_tags', [
      {
        attribute: 'world_area_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('world_area_habtm_monsters_monstervarieties', [
      {
        attribute: 'world_area_row',
      },
      {
        attribute: 'monster_variety_row',
      },
    ]);
    queryInterface.removeIndex('world_area_habtm_mods', [
      {
        attribute: 'world_area_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('world_area_habtm_full_clear_achievementitems', [
      {
        attribute: 'world_area_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex('world_area_habtm_connections_worldareas', [
      {
        attribute: 'source_row',
      },
      {
        attribute: 'target_row',
      },
    ]);
    queryInterface.removeIndex('world_area_habtm_bosses_monstervarieties', [
      {
        attribute: 'world_area_row',
      },
      {
        attribute: 'monster_variety_row',
      },
    ]);
    queryInterface.removeIndex('world_area_habtm_area_type_tags', [
      {
        attribute: 'world_area_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('world_area_habtm1s', [
      {
        attribute: 'world_area_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex('world_areas', [
      {
        attribute: '8_mods_full_clear_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('world_areas', [
      {
        attribute: 'enter_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('world_areas', [
      {
        attribute: 'twinned_full_clear_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('world_areas', [
      {
        attribute: 'achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('world_areas', [
      {
        attribute: 'difficulties_key',
      },
    ]);
    queryInterface.removeIndex('world_areas', [
      {
        attribute: 'parent_town_world_areas_key',
      },
    ]);
    queryInterface.removeIndex('word_habtm_spawn_weight_tags', [
      {
        attribute: 'word_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('weapon_types', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex(
      'warbands_pack_monster_habtm_tier4_monstervarieties',
      [
        {
          attribute: 'warbands_pack_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'warbands_pack_monster_habtm_tier3_monstervarieties',
      [
        {
          attribute: 'warbands_pack_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'warbands_pack_monster_habtm_tier2_monstervarieties',
      [
        {
          attribute: 'warbands_pack_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'warbands_pack_monster_habtm_tier1_monstervarieties',
      [
        {
          attribute: 'warbands_pack_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex('warbands_map_graphs', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('warbands_graphs', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('unique_sets', [
      {
        attribute: 'words_key',
      },
    ]);
    queryInterface.removeIndex('unique_chest_habtm_mods', [
      {
        attribute: 'unique_chest_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('unique_chests', [
      {
        attribute: 'words_key',
      },
    ]);
    queryInterface.removeIndex('unique_chests', [
      {
        attribute: 'chests_key',
      },
    ]);
    queryInterface.removeIndex('torment_spirit_habtm_touched_mods', [
      {
        attribute: 'torment_spirit_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('torment_spirit_habtm_spirit_mods', [
      {
        attribute: 'torment_spirit_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('torment_spirit_habtm_possessed_mods', [
      {
        attribute: 'torment_spirit_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('torment_spirit_habtm_mods1s', [
      {
        attribute: 'torment_spirit_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('torment_spirit_habtm_mods0s', [
      {
        attribute: 'torment_spirit_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('torment_spirits', [
      {
        attribute: 'summoned_monster_monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('torment_spirits', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('topologies', [
      {
        attribute: 'environments_key',
      },
    ]);
    queryInterface.removeIndex('talisman_pack_habtm_monster_packs', [
      {
        attribute: 'talisman_pack_row',
      },
      {
        attribute: 'monster_pack_row',
      },
    ]);
    queryInterface.removeIndex('talisman_packs', [
      {
        attribute: 'monster_packs_key',
      },
    ]);
    queryInterface.removeIndex('talisman_packs', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('talismans', [
      {
        attribute: 'mods_key',
      },
    ]);
    queryInterface.removeIndex('talismans', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('summoned_specific_monsters_on_deaths', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('summoned_specific_monsters', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('summoned_specific_barrels', [
      {
        attribute: 'chests_key',
      },
    ]);
    queryInterface.removeIndex('strongboxes', [
      {
        attribute: 'chests_key',
      },
    ]);
    queryInterface.removeIndex('str_mission_spirit_secondary_effects', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('str_mission_spirit_effects', [
      {
        attribute: 'ground_effect_monster_varieties_keys',
      },
    ]);
    queryInterface.removeIndex('str_mission_spirit_effects', [
      {
        attribute: 'summon_monster_varieties_keys',
      },
    ]);
    queryInterface.removeIndex('str_mission_habtm_mods', [
      {
        attribute: 'str_mission_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('str_mission_bosses', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('str_missions', [
      {
        attribute: 'npc_talk_key',
      },
    ]);
    queryInterface.removeIndex('str_map_mods', [
      {
        attribute: 'mods_key',
      },
    ]);
    queryInterface.removeIndex(
      'str_int_mission_relic_pattern_habtm_relic_mods',
      [
        {
          attribute: 'str_int_mission_relic_pattern_row',
        },
        {
          attribute: 'mod_row',
        },
      ],
    );
    queryInterface.removeIndex('str_int_mission_relic_mod_habtm_mods', [
      {
        attribute: 'str_int_mission_relic_mod_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex(
      'str_int_mission_monster_wave_habtm_unique_monstervarieties',
      [
        {
          attribute: 'str_int_mission_monster_wave_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex('str_int_mission_monster_waves', [
      {
        attribute: 'monster_packs_key',
      },
    ]);
    queryInterface.removeIndex('str_int_mission_habtm_relic_mods', [
      {
        attribute: 'str_int_mission_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('str_int_mission_habtm_achievement_items', [
      {
        attribute: 'str_int_mission_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex('str_int_missions', [
      {
        attribute: 'npc_talk_key',
      },
    ]);
    queryInterface.removeIndex('str_int_missions', [
      {
        attribute: 'relic_monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('str_dex_mission_special_mod_habtm_mods', [
      {
        attribute: 'str_dex_mission_special_mod_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('str_dex_mission_mod_habtm_mods', [
      {
        attribute: 'str_dex_mission_mod_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('str_dex_mission_habtm_traps_monstervarieties', [
      {
        attribute: 'str_dex_mission_row',
      },
      {
        attribute: 'monster_variety_row',
      },
    ]);
    queryInterface.removeIndex('str_dex_mission_habtm_mods', [
      {
        attribute: 'str_dex_mission_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex(
      'str_dex_mission_habtm_allies_monstervarieties',
      [
        {
          attribute: 'str_dex_mission_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex('str_dex_mission_archetypes', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('str_dex_missions', [
      {
        attribute: 'npc_talk_key',
      },
    ]);
    queryInterface.removeIndex('str_dex_missions', [
      {
        attribute: 'dummy_monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('str_dex_int_mission_unique_map_habtm_mods', [
      {
        attribute: 'str_dex_int_mission_unique_map_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex(
      'str_dex_int_mission_unique_map_habtm_map_boss_monstervarieties',
      [
        {
          attribute: 'str_dex_int_mission_unique_map_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex('str_dex_int_mission_unique_maps', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('str_dex_int_mission_mod_habtm_mods', [
      {
        attribute: 'str_dex_int_mission_mod_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex(
      'str_dex_int_mission_map_habtm_map_boss_monstervarieties',
      [
        {
          attribute: 'str_dex_int_mission_map_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex('str_dex_int_mission_maps', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('str_dex_int_mission_habtm_extra_mods', [
      {
        attribute: 'str_dex_int_mission_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('str_dex_int_mission_habtm_achievement_items', [
      {
        attribute: 'str_dex_int_mission_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex('str_dex_int_mission_extra_requirements', [
      {
        attribute: 'npc_talk_key',
      },
    ]);
    queryInterface.removeIndex('str_dex_int_missions', [
      {
        attribute: 'monster_packs_key',
      },
    ]);
    queryInterface.removeIndex('str_dex_int_missions', [
      {
        attribute: 'npc_talk_key',
      },
    ]);
    queryInterface.removeIndex('stats', [
      {
        attribute: 'off_hand_alias_stats_key',
      },
    ]);
    queryInterface.removeIndex('stats', [
      {
        attribute: 'main_hand_alias_stats_key',
      },
    ]);
    queryInterface.removeIndex('skill_totem_variations', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('skill_totem_variations', [
      {
        attribute: 'skill_totems_key',
      },
    ]);
    queryInterface.removeIndex('skill_gem_habtm_gem_tags', [
      {
        attribute: 'skill_gem_row',
      },
      {
        attribute: 'gem_tag_row',
      },
    ]);
    queryInterface.removeIndex('skill_gems', [
      {
        attribute: 'vaal_variant_base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('skill_gems', [
      {
        attribute: 'granted_effects_key',
      },
    ]);
    queryInterface.removeIndex('skill_gems', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('shrine_habtm_achievement_items', [
      {
        attribute: 'shrine_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex('shrine_buffs', [
      {
        attribute: 'buff_definitions_key',
      },
    ]);
    queryInterface.removeIndex('shrines', [
      {
        attribute: 'shrine_sounds_key',
      },
    ]);
    queryInterface.removeIndex('shrines', [
      {
        attribute: 'summon_player_monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('shrines', [
      {
        attribute: 'summon_monster_monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('shrines', [
      {
        attribute: 'monster_shrine_buffs_key',
      },
    ]);
    queryInterface.removeIndex('shrines', [
      {
        attribute: 'player_shrine_buffs_key',
      },
    ]);
    queryInterface.removeIndex('shop_payment_package_prices', [
      {
        attribute: 'shop_country_key',
      },
    ]);
    queryInterface.removeIndex('shop_payment_package_prices', [
      {
        attribute: 'shop_payment_package_key',
      },
    ]);
    queryInterface.removeIndex('shop_payment_package_items', [
      {
        attribute: 'shop_token_key',
      },
    ]);
    queryInterface.removeIndex('shop_payment_package_items', [
      {
        attribute: 'shop_item_key',
      },
    ]);
    queryInterface.removeIndex('shop_payment_package_items', [
      {
        attribute: 'shop_payment_package_key',
      },
    ]);
    queryInterface.removeIndex('shop_payment_packages', [
      {
        attribute: 'upgrade_shop_payment_package_key',
      },
    ]);
    queryInterface.removeIndex('shop_item_prices', [
      {
        attribute: 'shop_region_key',
      },
    ]);
    queryInterface.removeIndex('shop_item_prices', [
      {
        attribute: 'shop_item_key',
      },
    ]);
    queryInterface.removeIndex('shop_item_habtm_shop_categories', [
      {
        attribute: 'shop_item_row',
      },
      {
        attribute: 'shop_category_row',
      },
    ]);
    queryInterface.removeIndex('shop_item_habtm_package_shopitems', [
      {
        attribute: 'source_row',
      },
      {
        attribute: 'target_row',
      },
    ]);
    queryInterface.removeIndex('shop_countries', [
      {
        attribute: 'shop_currency_key',
      },
    ]);
    queryInterface.removeIndex('shop_categories', [
      {
        attribute: 'applied_to_base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('shield_types', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('rogue_exiles', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('race_times', [
      {
        attribute: 'races_key',
      },
    ]);
    queryInterface.removeIndex('race_area_habtm_mods', [
      {
        attribute: 'race_area_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('race_areas', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('race_areas', [
      {
        attribute: 'races_key',
      },
    ]);
    queryInterface.removeIndex('quest_vendor_reward_habtm_characters', [
      {
        attribute: 'quest_vendor_reward_row',
      },
      {
        attribute: 'character_row',
      },
    ]);
    queryInterface.removeIndex('quest_vendor_reward_habtm_base_item_types', [
      {
        attribute: 'quest_vendor_reward_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('quest_vendor_rewards', [
      {
        attribute: 'npc_key',
      },
    ]);
    queryInterface.removeIndex('quest_static_rewards', [
      {
        attribute: 'quest_key',
      },
    ]);
    queryInterface.removeIndex('quest_static_rewards', [
      {
        attribute: 'difficulty_key',
      },
    ]);
    queryInterface.removeIndex('quest_static_rewards', [
      {
        attribute: 'stats_key',
      },
    ]);
    queryInterface.removeIndex('quest_state_habtm_map_pins2s', [
      {
        attribute: 'quest_state_row',
      },
      {
        attribute: 'map_pin_row',
      },
    ]);
    queryInterface.removeIndex('quest_state_habtm_map_pins1s', [
      {
        attribute: 'quest_state_row',
      },
      {
        attribute: 'map_pin_row',
      },
    ]);
    queryInterface.removeIndex('quest_states', [
      {
        attribute: 'quest_key',
      },
    ]);
    queryInterface.removeIndex('quest_rewards', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('quest_rewards', [
      {
        attribute: 'characters_key',
      },
    ]);
    queryInterface.removeIndex('quest_rewards', [
      {
        attribute: 'quest_key',
      },
    ]);
    queryInterface.removeIndex('quest_achievements', [
      {
        attribute: 'difficulties_key',
      },
    ]);
    queryInterface.removeIndex('quest_achievements', [
      {
        attribute: 'achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('prophecy_habtm_quest_tracker_clientstrings', [
      {
        attribute: 'prophecy_row',
      },
      {
        attribute: 'client_string_row',
      },
    ]);
    queryInterface.removeIndex('prophecies', [
      {
        attribute: 'prophecy_chain_key',
      },
    ]);
    queryInterface.removeIndex('projectile_variations', [
      {
        attribute: 'projectile_key',
      },
    ]);
    queryInterface.removeIndex('pets', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('perandus_guard_habtm_monster_packs', [
      {
        attribute: 'perandus_guard_row',
      },
      {
        attribute: 'monster_pack_row',
      },
    ]);
    queryInterface.removeIndex('perandus_daemons', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('perandus_chests', [
      {
        attribute: 'chests_key',
      },
    ]);
    queryInterface.removeIndex('perandus_bosses', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('path_of_endurance_habtm_mods', [
      {
        attribute: 'path_of_endurance_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('passive_skill_habtm_stats', [
      {
        attribute: 'passive_skill_row',
      },
      {
        attribute: 'stat_row',
      },
    ]);
    queryInterface.removeIndex('passive_skill_habtm_reminder_clientstrings', [
      {
        attribute: 'passive_skill_row',
      },
      {
        attribute: 'client_string_row',
      },
    ]);
    queryInterface.removeIndex('passive_skill_habtm_characters', [
      {
        attribute: 'passive_skill_row',
      },
      {
        attribute: 'character_row',
      },
    ]);
    queryInterface.removeIndex('passive_skills', [
      {
        attribute: 'ascendancy_key',
      },
    ]);
    queryInterface.removeIndex('passive_skills', [
      {
        attribute: 'granted_buff_buff_definitions_key',
      },
    ]);
    queryInterface.removeIndex('passive_skills', [
      {
        attribute: 'achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('passive_jewel_slots', [
      {
        attribute: 'passive_skills_key',
      },
    ]);
    queryInterface.removeIndex('n_p_c_text_audios', [
      {
        attribute: 'characters_key',
      },
    ]);
    queryInterface.removeIndex('n_p_c_talk_habtm_n_p_c_text_audios', [
      {
        attribute: 'npc_talk_row',
      },
      {
        attribute: 'npc_text_audio_row',
      },
    ]);
    queryInterface.removeIndex('n_p_c_talks', [
      {
        attribute: 'quest_key',
      },
    ]);
    queryInterface.removeIndex('n_p_c_talks', [
      {
        attribute: 'npc_key',
      },
    ]);
    queryInterface.removeIndex('n_p_c_shop_habtm_sold_item_tags', [
      {
        attribute: 'npc_shop_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('n_p_c_master_habtm_unknown_weight_tags', [
      {
        attribute: 'npc_master_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex(
      'n_p_c_master_habtm_signature_mod_spawn_weight_tags',
      [
        {
          attribute: 'npc_master_row',
        },
        {
          attribute: 'tag_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'n_p_c_master_habtm_master_level5_achievementitems',
      [
        {
          attribute: 'npc_master_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex('n_p_c_master_experience_per_levels', [
      {
        attribute: 'npc_master_key',
      },
    ]);
    queryInterface.removeIndex('n_p_c_masters', [
      {
        attribute: 'talisman_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('n_p_c_masters', [
      {
        attribute: 'achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('n_p_c_masters', [
      {
        attribute: 'signature_mod_mods_key',
      },
    ]);
    queryInterface.removeIndex('n_p_c_masters', [
      {
        attribute: 'np_cs_key',
        length: 250,
      },
    ]);
    queryInterface.removeIndex('n_p_cs', [
      {
        attribute: 'npc_audio_key2',
      },
    ]);
    queryInterface.removeIndex('n_p_cs', [
      {
        attribute: 'npc_audio_key1',
      },
    ]);
    queryInterface.removeIndex('n_p_cs', [
      {
        attribute: 'npc_shop_key',
      },
    ]);
    queryInterface.removeIndex('n_p_cs', [
      {
        attribute: 'npc_master_key',
      },
    ]);
    queryInterface.removeIndex('mystery_boxes', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex(
      'monster_variety_habtm_weapon2_itemvisualidentities',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'item_visual_identity_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'monster_variety_habtm_weapon1_itemvisualidentities',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'item_visual_identity_row',
        },
      ],
    );
    queryInterface.removeIndex('monster_variety_habtm_tags', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('monster_variety_habtm_special_mods', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('monster_variety_habtm_normal_mods', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex(
      'monster_variety_habtm_normal_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex('monster_variety_habtm_mods2s', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('monster_variety_habtm_mods', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('monster_variety_habtm_merciless_mods', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex(
      'monster_variety_habtm_merciless_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'monster_variety_habtm_kill_rare_in_normal_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'monster_variety_habtm_kill_rare_in_merciless_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'monster_variety_habtm_kill_rare_in_cruel_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex('monster_variety_habtm_granted_effects', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'granted_effect_row',
      },
    ]);
    queryInterface.removeIndex('monster_variety_habtm_cruel_mods', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('monster_variety_habtm_cruel_achievementitems', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex(
      'monster_variety_habtm_count_kills_achievementitems',
      [
        {
          attribute: 'monster_variety_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex('monster_variety_habtm_achievement_items2s', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex('monster_variety_habtm_achievement_items', [
      {
        attribute: 'monster_variety_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex('monster_varieties', [
      {
        attribute: 'achievement_items_key4',
      },
    ]);
    queryInterface.removeIndex('monster_varieties', [
      {
        attribute: 'achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('monster_varieties', [
      {
        attribute: 'monster_armours_key',
      },
    ]);
    queryInterface.removeIndex('monster_varieties', [
      {
        attribute: 'monster_segments_key',
      },
    ]);
    queryInterface.removeIndex('monster_varieties', [
      {
        attribute: 'flashback_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('monster_varieties', [
      {
        attribute: 'helmet_item_visual_identity_key',
      },
    ]);
    queryInterface.removeIndex('monster_varieties', [
      {
        attribute: 'off_hand_item_classes_key',
      },
    ]);
    queryInterface.removeIndex('monster_varieties', [
      {
        attribute: 'main_hand_item_classes_key',
      },
    ]);
    queryInterface.removeIndex('monster_varieties', [
      {
        attribute: 'back_item_visual_identity_key',
      },
    ]);
    queryInterface.removeIndex('monster_varieties', [
      {
        attribute: 'monster_types_key',
      },
    ]);
    queryInterface.removeIndex('monster_type_habtm_tags', [
      {
        attribute: 'monster_type_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('monster_types', [
      {
        attribute: 'monster_resistances_key',
      },
    ]);
    queryInterface.removeIndex('monster_pack_habtm_world_areas', [
      {
        attribute: 'monster_pack_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('monster_pack_habtm_tags', [
      {
        attribute: 'monster_pack_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex(
      'monster_pack_habtm_boss_monster_monstervarieties',
      [
        {
          attribute: 'monster_pack_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex('monster_pack_entries', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('monster_pack_entries', [
      {
        attribute: 'monster_packs_key',
      },
    ]);
    queryInterface.removeIndex('monster_map_difficulties', [
      {
        attribute: 'stats_key4',
      },
    ]);
    queryInterface.removeIndex('monster_map_difficulties', [
      {
        attribute: 'stats_key3',
      },
    ]);
    queryInterface.removeIndex('monster_map_difficulties', [
      {
        attribute: 'stats_key2',
      },
    ]);
    queryInterface.removeIndex('monster_map_difficulties', [
      {
        attribute: 'stats_key1',
      },
    ]);
    queryInterface.removeIndex('monster_map_boss_difficulties', [
      {
        attribute: 'stats_key4',
      },
    ]);
    queryInterface.removeIndex('monster_map_boss_difficulties', [
      {
        attribute: 'stats_key3',
      },
    ]);
    queryInterface.removeIndex('monster_map_boss_difficulties', [
      {
        attribute: 'stats_key2',
      },
    ]);
    queryInterface.removeIndex('monster_map_boss_difficulties', [
      {
        attribute: 'stats_key1',
      },
    ]);
    queryInterface.removeIndex('monster_group_entries', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('monster_additional_monster_drops', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('mod_type_habtm_mod_sell_prices', [
      {
        attribute: 'mod_type_row',
      },
      {
        attribute: 'mod_sell_price_row',
      },
    ]);
    queryInterface.removeIndex('mod_sell_price_habtm_base_item_types', [
      {
        attribute: 'mod_sell_price_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('mod_sell_prices', [
      {
        attribute: 'mod_sell_price_types_key',
      },
    ]);
    queryInterface.removeIndex('mod_habtm_tags', [
      {
        attribute: 'mod_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('mod_habtm_spawn_weight_tags', [
      {
        attribute: 'mod_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('mod_habtm_generation_weight_tags', [
      {
        attribute: 'mod_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('mods', [
      {
        attribute: 'achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('mods', [
      {
        attribute: 'stats_key5',
      },
    ]);
    queryInterface.removeIndex('mods', [
      {
        attribute: 'granted_effects_per_level_key',
      },
    ]);
    queryInterface.removeIndex('mods', [
      {
        attribute: 'buff_definitions_key',
      },
    ]);
    queryInterface.removeIndex('mods', [
      {
        attribute: 'stats_key4',
      },
    ]);
    queryInterface.removeIndex('mods', [
      {
        attribute: 'stats_key3',
      },
    ]);
    queryInterface.removeIndex('mods', [
      {
        attribute: 'stats_key2',
      },
    ]);
    queryInterface.removeIndex('mods', [
      {
        attribute: 'stats_key1',
      },
    ]);
    queryInterface.removeIndex('mods', [
      {
        attribute: 'mod_type_key',
      },
    ]);
    queryInterface.removeIndex('mission_tile_map_habtm_world_areas', [
      {
        attribute: 'mission_tile_map_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('mission_tile_maps', [
      {
        attribute: 'mission_transition_tiles_key',
      },
    ]);
    queryInterface.removeIndex('mission_tile_maps', [
      {
        attribute: 'npc_master_key',
      },
    ]);
    queryInterface.removeIndex('misc_object_habtm_preload_groups', [
      {
        attribute: 'misc_object_row',
      },
      {
        attribute: 'preload_group_row',
      },
    ]);
    queryInterface.removeIndex('misc_beam_habtm_preload_groups', [
      {
        attribute: 'misc_beam_row',
      },
      {
        attribute: 'preload_group_row',
      },
    ]);
    queryInterface.removeIndex('misc_animated_habtm_preload_groups', [
      {
        attribute: 'misc_animated_row',
      },
      {
        attribute: 'preload_group_row',
      },
    ]);
    queryInterface.removeIndex('microtransaction_social_frame_variations', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('microtransaction_portal_variations', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('microtransaction_fireworks_variations', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('micro_migration_data', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('map_pin_habtm_world_areas', [
      {
        attribute: 'map_pin_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('map_pin_habtm_normal_worldareas', [
      {
        attribute: 'map_pin_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('map_pin_habtm_merciless_worldareas', [
      {
        attribute: 'map_pin_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('map_pin_habtm_cruel_worldareas', [
      {
        attribute: 'map_pin_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('map_pins', [
      {
        attribute: 'merciless_waypoint_world_areas_key',
      },
    ]);
    queryInterface.removeIndex('map_pins', [
      {
        attribute: 'cruel_waypoint_world_areas_key',
      },
    ]);
    queryInterface.removeIndex('map_pins', [
      {
        attribute: 'normal_waypoint_world_areas_key',
      },
    ]);
    queryInterface.removeIndex('map_inhabitants', [
      {
        attribute: 'stats_key',
      },
    ]);
    queryInterface.removeIndex('map_habtm_monster_packs', [
      {
        attribute: 'map_row',
      },
      {
        attribute: 'monster_pack_row',
      },
    ]);
    queryInterface.removeIndex('map_habtm_higher_tier_maps_baseitemtypes', [
      {
        attribute: 'map_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('map_device_recipe_habtm_world_areas', [
      {
        attribute: 'map_device_recipe_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('map_device_recipe_habtm_base_item_types', [
      {
        attribute: 'map_device_recipe_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('map_connections', [
      {
        attribute: 'map_pins_key1',
      },
    ]);
    queryInterface.removeIndex('map_connections', [
      {
        attribute: 'map_pins_key0',
      },
    ]);
    queryInterface.removeIndex('maps', [
      {
        attribute: 'maps_key3',
      },
    ]);
    queryInterface.removeIndex('maps', [
      {
        attribute: 'maps_key2',
      },
    ]);
    queryInterface.removeIndex('maps', [
      {
        attribute: 'maps_key1',
      },
    ]);
    queryInterface.removeIndex('maps', [
      {
        attribute: 'shaped_base_maps_key',
      },
    ]);
    queryInterface.removeIndex('maps', [
      {
        attribute: 'map_upgrade_base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('maps', [
      {
        attribute: 'unique_world_areas_key',
      },
    ]);
    queryInterface.removeIndex('maps', [
      {
        attribute: 'regular_world_areas_key',
      },
    ]);
    queryInterface.removeIndex('maps', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('labyrinth_trinkets', [
      {
        attribute: 'buff_buff_definitions_key',
      },
    ]);
    queryInterface.removeIndex('labyrinth_trinkets', [
      {
        attribute: 'labyrinth_secrets_key',
      },
    ]);
    queryInterface.removeIndex('labyrinth_trinkets', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex(
      'labyrinth_section_layout_habtm_labyrinth_section_layouts',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
    );
    queryInterface.removeIndex('labyrinth_section_layouts', [
      {
        attribute: 'labyrinth_node_overrides_key',
      },
    ]);
    queryInterface.removeIndex('labyrinth_section_layouts', [
      {
        attribute: 'labyrinth_areas_key',
      },
    ]);
    queryInterface.removeIndex('labyrinth_section_layouts', [
      {
        attribute: 'labyrinth_secrets_key1',
      },
    ]);
    queryInterface.removeIndex('labyrinth_section_layouts', [
      {
        attribute: 'labyrinth_secrets_key0',
      },
    ]);
    queryInterface.removeIndex('labyrinth_section_layouts', [
      {
        attribute: 'labyrinth_section_key',
      },
    ]);
    queryInterface.removeIndex(
      'labyrinth_secret_habtm_labyrinth_secret_effects3s',
      [
        {
          attribute: 'labyrinth_secret_row',
        },
        {
          attribute: 'labyrinth_secret_effect_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'labyrinth_secret_habtm_labyrinth_secret_effects2s',
      [
        {
          attribute: 'labyrinth_secret_row',
        },
        {
          attribute: 'labyrinth_secret_effect_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'labyrinth_secret_habtm_labyrinth_secret_effects1s',
      [
        {
          attribute: 'labyrinth_secret_row',
        },
        {
          attribute: 'labyrinth_secret_effect_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'labyrinth_secret_habtm_labyrinth_secret_effects0s',
      [
        {
          attribute: 'labyrinth_secret_row',
        },
        {
          attribute: 'labyrinth_secret_effect_row',
        },
      ],
    );
    queryInterface.removeIndex('labyrinth_secret_effects', [
      {
        attribute: 'buff_buff_definitions_key',
      },
    ]);
    queryInterface.removeIndex('labyrinth_secret_effects', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('labyrinth_secrets', [
      {
        attribute: 'achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('labyrinth_izaro_chests', [
      {
        attribute: 'chests_key',
      },
    ]);
    queryInterface.removeIndex('labyrinth_area_habtm_normal_worldareas', [
      {
        attribute: 'labyrinth_area_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('labyrinth_area_habtm_merciless_worldareas', [
      {
        attribute: 'labyrinth_area_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('labyrinth_area_habtm_endgame_worldareas', [
      {
        attribute: 'labyrinth_area_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('labyrinth_area_habtm_cruel_worldareas', [
      {
        attribute: 'labyrinth_area_row',
      },
      {
        attribute: 'world_area_row',
      },
    ]);
    queryInterface.removeIndex('killstreak_thresholds', [
      {
        attribute: 'achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('killstreak_thresholds', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('itemised_visual_effects', [
      {
        attribute: 'item_visual_identity_key2',
      },
    ]);
    queryInterface.removeIndex('itemised_visual_effects', [
      {
        attribute: 'item_visual_identity_key1',
      },
    ]);
    queryInterface.removeIndex('itemised_visual_effects', [
      {
        attribute: 'item_visual_effect_key',
      },
    ]);
    queryInterface.removeIndex('itemised_visual_effects', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex(
      'item_visual_identity_habtm_pickup_achievementitems',
      [
        {
          attribute: 'item_visual_identity_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'item_visual_identity_habtm_identify_achievementitems',
      [
        {
          attribute: 'item_visual_identity_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'item_visual_identity_habtm_corrupt_achievementitems',
      [
        {
          attribute: 'item_visual_identity_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex('item_visual_identities', [
      {
        attribute: 'create_corrupted_jewel_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('item_visual_identities', [
      {
        attribute: 'sound_effects_key',
      },
    ]);
    queryInterface.removeIndex('item_experience_per_levels', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex(
      'invasion_monsters_per_area_habtm_monster_varieties2s',
      [
        {
          attribute: 'invasion_monsters_per_area_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'invasion_monsters_per_area_habtm_monster_varieties1s',
      [
        {
          attribute: 'invasion_monsters_per_area_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex('invasion_monsters_per_areas', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex(
      'invasion_monster_restriction_habtm_monster_varieties',
      [
        {
          attribute: 'invasion_monster_restriction_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex('invasion_monster_restrictions', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex(
      'int_mission_monster_habtm_objective_monstervarieties',
      [
        {
          attribute: 'int_mission_monster_row',
        },
        {
          attribute: 'monster_variety_row',
        },
      ],
    );
    queryInterface.removeIndex('int_mission_monster_habtm_achievement_items', [
      {
        attribute: 'int_mission_monster_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex('int_mission_mod_habtm_mods', [
      {
        attribute: 'int_mission_mod_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('int_mission_mods', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('int_missions', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('int_missions', [
      {
        attribute: 'npc_talk_key',
      },
    ]);
    queryInterface.removeIndex('hideout_interactables', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('hideout_doodads', [
      {
        attribute: 'npc_master_key',
      },
    ]);
    queryInterface.removeIndex('hideout_doodads', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('hideouts', [
      {
        attribute: 'large_world_areas_key',
      },
    ]);
    queryInterface.removeIndex('hideouts', [
      {
        attribute: 'medium_world_areas_key',
      },
    ]);
    queryInterface.removeIndex('hideouts', [
      {
        attribute: 'npc_master_key',
      },
    ]);
    queryInterface.removeIndex('hideouts', [
      {
        attribute: 'small_world_areas_key',
      },
    ]);
    queryInterface.removeIndex('granted_effects_per_level_habtm_stats2s', [
      {
        attribute: 'granted_effects_per_level_row',
      },
      {
        attribute: 'stat_row',
      },
    ]);
    queryInterface.removeIndex('granted_effects_per_level_habtm_stats', [
      {
        attribute: 'granted_effects_per_level_row',
      },
      {
        attribute: 'stat_row',
      },
    ]);
    queryInterface.removeIndex(
      'granted_effects_per_level_habtm_quality_stats',
      [
        {
          attribute: 'granted_effects_per_level_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
    );
    queryInterface.removeIndex('granted_effects_per_levels', [
      {
        attribute: 'granted_effects_key',
      },
    ]);
    queryInterface.removeIndex('granted_effects', [
      {
        attribute: 'active_skills_key',
      },
    ]);
    queryInterface.removeIndex('grandmaster_habtm_mods', [
      {
        attribute: 'grandmaster_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('flasks', [
      {
        attribute: 'buff_definitions_key',
      },
    ]);
    queryInterface.removeIndex('flasks', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('exploding_storm_buffs', [
      {
        attribute: 'buff_definitions_key2',
      },
    ]);
    queryInterface.removeIndex('exploding_storm_buffs', [
      {
        attribute: 'enemy_monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('exploding_storm_buffs', [
      {
        attribute: 'buff_visuals_key',
      },
    ]);
    queryInterface.removeIndex('exploding_storm_buffs', [
      {
        attribute: 'misc_animated_key',
      },
    ]);
    queryInterface.removeIndex('exploding_storm_buffs', [
      {
        attribute: 'misc_objects_key',
      },
    ]);
    queryInterface.removeIndex('exploding_storm_buffs', [
      {
        attribute: 'friendly_monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('exploding_storm_buffs', [
      {
        attribute: 'buff_definitions_key1',
      },
    ]);
    queryInterface.removeIndex('event_season_rewards', [
      {
        attribute: 'event_season_key',
      },
    ]);
    queryInterface.removeIndex('essence_types', [
      {
        attribute: 'words_key',
      },
    ]);
    queryInterface.removeIndex('essence_stash_tab_layouts', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('essence_habtm_monster_mods', [
      {
        attribute: 'essence_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'mods_key43',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'shield2_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'mods_key41',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'ring_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'amulet2_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'belt2_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '1_hand_mods_key9',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '1_hand_mods_key8',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '1_hand_mods_key7',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '1_hand_mods_key6',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '1_hand_mods_key5',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '1_hand_mods_key4',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '1_hand_mods_key3',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '1_hand_mods_key2',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '2_hand_mods_key5',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '2_hand_mods_key4',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '2_hand_mods_key3',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '2_hand_mods_key2',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'wand_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'bow_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'gloves2_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'boots2_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'body_armour2_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'helmet2_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'ranged_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'boots3_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '2_hand_mods_key1',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'mods_key15',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'mods_key14',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'mods_key13',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: '1_hand_mods_key1',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'essence_type_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'shield1_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'helmet1_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'body_armour1_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'boots1_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'gloves1_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'belt3_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'belt1_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'amulet1_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'quiver_mods_key',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'mods_key2',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'mods_key1',
      },
    ]);
    queryInterface.removeIndex('essences', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('endless_ledge_chest_habtm_base_item_types', [
      {
        attribute: 'endless_ledge_chest_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('endless_ledge_chests', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('eclipse_mod_habtm_spawn_weight_tags', [
      {
        attribute: 'eclipse_mod_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('eclipse_mods', [
      {
        attribute: 'mods_key',
      },
    ]);
    queryInterface.removeIndex('divination_card_stash_tab_layouts', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('divination_card_arts', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('display_minion_monster_types', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('dex_mission_trackings', [
      {
        attribute: 'npc_talk_key',
      },
    ]);
    queryInterface.removeIndex('dex_mission_monster_habtm_monster_varieties', [
      {
        attribute: 'dex_mission_monster_row',
      },
      {
        attribute: 'monster_variety_row',
      },
    ]);
    queryInterface.removeIndex('dex_mission_monster_habtm_monster_packs', [
      {
        attribute: 'dex_mission_monster_row',
      },
      {
        attribute: 'monster_pack_row',
      },
    ]);
    queryInterface.removeIndex('dex_mission_monsters', [
      {
        attribute: 'boss_monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('dex_mission_mods', [
      {
        attribute: 'mods_key',
      },
    ]);
    queryInterface.removeIndex('dex_int_mission_targets', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('dex_int_mission_habtm_achievement_items', [
      {
        attribute: 'dex_int_mission_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex('dex_int_mission_guards', [
      {
        attribute: 'monster_packs_key',
      },
    ]);
    queryInterface.removeIndex('dex_int_missions', [
      {
        attribute: 'npc_talk_key',
      },
    ]);
    queryInterface.removeIndex('dex_int_missions', [
      {
        attribute: 'hostage_monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('descent_starter_chests', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('descent_starter_chests', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('descent_starter_chests', [
      {
        attribute: 'characters_key',
      },
    ]);
    queryInterface.removeIndex('descent_reward_chest_habtm_base_item_types9s', [
      {
        attribute: 'descent_reward_chest_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('descent_reward_chest_habtm_base_item_types8s', [
      {
        attribute: 'descent_reward_chest_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('descent_reward_chest_habtm_base_item_types7s', [
      {
        attribute: 'descent_reward_chest_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('descent_reward_chest_habtm_base_item_types6s', [
      {
        attribute: 'descent_reward_chest_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('descent_reward_chest_habtm_base_item_types5s', [
      {
        attribute: 'descent_reward_chest_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('descent_reward_chest_habtm_base_item_types4s', [
      {
        attribute: 'descent_reward_chest_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('descent_reward_chest_habtm_base_item_types3s', [
      {
        attribute: 'descent_reward_chest_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('descent_reward_chest_habtm_base_item_types2s', [
      {
        attribute: 'descent_reward_chest_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex(
      'descent_reward_chest_habtm_base_item_types14s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'descent_reward_chest_habtm_base_item_types13s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'descent_reward_chest_habtm_base_item_types12s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'descent_reward_chest_habtm_base_item_types11s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'descent_reward_chest_habtm_base_item_types10s',
      [
        {
          attribute: 'descent_reward_chest_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
    );
    queryInterface.removeIndex('descent_reward_chest_habtm_base_item_types1s', [
      {
        attribute: 'descent_reward_chest_row',
      },
      {
        attribute: 'base_item_type_row',
      },
    ]);
    queryInterface.removeIndex('descent_reward_chests', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('descent_exiles', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('descent_exiles', [
      {
        attribute: 'characters_key',
      },
    ]);
    queryInterface.removeIndex('descent_exiles', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('default_monster_stats', [
      {
        attribute: 'difficulty_key',
      },
    ]);
    queryInterface.removeIndex('dances', [
      {
        attribute: 'characters_key',
      },
    ]);
    queryInterface.removeIndex('dances', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('daily_overrides', [
      {
        attribute: 'daily_missions_keys',
      },
    ]);
    queryInterface.removeIndex('daily_mission_habtm_characters', [
      {
        attribute: 'daily_mission_row',
      },
      {
        attribute: 'character_row',
      },
    ]);
    queryInterface.removeIndex('daily_missions', [
      {
        attribute: 'pvp_types_key',
      },
    ]);
    queryInterface.removeIndex('daily_missions', [
      {
        attribute: 'npc_talk_key',
      },
    ]);
    queryInterface.removeIndex('currency_stash_tab_layouts', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('currency_item_habtm_usage_achievementitems', [
      {
        attribute: 'currency_item_row',
      },
      {
        attribute: 'achievement_item_row',
      },
    ]);
    queryInterface.removeIndex('currency_items', [
      {
        attribute: 'possession_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('currency_items', [
      {
        attribute: 'full_stack_base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('currency_items', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('crafting_bench_option_habtm_item_classes', [
      {
        attribute: 'crafting_bench_option_row',
      },
      {
        attribute: 'item_class_row',
      },
    ]);
    queryInterface.removeIndex(
      'crafting_bench_option_habtm_cost_baseitemtypes',
      [
        {
          attribute: 'crafting_bench_option_row',
        },
        {
          attribute: 'base_item_type_row',
        },
      ],
    );
    queryInterface.removeIndex('crafting_bench_options', [
      {
        attribute: 'mods_key',
      },
    ]);
    queryInterface.removeIndex('crafting_bench_options', [
      {
        attribute: 'npc_master_key',
      },
    ]);
    queryInterface.removeIndex('component_charges', [
      {
        attribute: 'base_item_types_key',
        length: 250,
      },
    ]);
    queryInterface.removeIndex('component_attribute_requirements', [
      {
        attribute: 'base_item_types_key',
        length: 250,
      },
    ]);
    queryInterface.removeIndex('component_armours', [
      {
        attribute: 'base_item_types_key',
        length: 250,
      },
    ]);
    queryInterface.removeIndex('clone_shot_variations', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('chest_habtm_tags', [
      {
        attribute: 'chest_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('chest_habtm_mods', [
      {
        attribute: 'chest_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('chest_cluster_habtm_chests', [
      {
        attribute: 'chest_cluster_row',
      },
      {
        attribute: 'chest_row',
      },
    ]);
    queryInterface.removeIndex('chests', [
      {
        attribute: 'encounter_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('chests', [
      {
        attribute: 'currency_use_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('chests', [
      {
        attribute: 'corrupt_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('chests', [
      {
        attribute: 'chest_effects_key',
      },
    ]);
    queryInterface.removeIndex('chests', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('character_start_state_habtm_passive_skills', [
      {
        attribute: 'character_start_state_row',
      },
      {
        attribute: 'passive_skill_row',
      },
    ]);
    queryInterface.removeIndex(
      'character_start_state_habtm_normal_characterstartqueststates',
      [
        {
          attribute: 'character_start_state_row',
        },
        {
          attribute: 'character_start_quest_state_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'character_start_state_habtm_merciless_characterstartqueststates',
      [
        {
          attribute: 'character_start_state_row',
        },
        {
          attribute: 'character_start_quest_state_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'character_start_state_habtm_cruel_characterstartqueststates',
      [
        {
          attribute: 'character_start_state_row',
        },
        {
          attribute: 'character_start_quest_state_row',
        },
      ],
    );
    queryInterface.removeIndex('character_start_states', [
      {
        attribute: 'character_start_state_set_key',
      },
    ]);
    queryInterface.removeIndex('character_start_states', [
      {
        attribute: 'characters_key',
      },
    ]);
    queryInterface.removeIndex('character_start_quest_state_habtm_quests', [
      {
        attribute: 'character_start_quest_state_row',
      },
      {
        attribute: 'quest_row',
      },
    ]);
    queryInterface.removeIndex('character_start_quest_state_habtm_map_pins', [
      {
        attribute: 'character_start_quest_state_row',
      },
      {
        attribute: 'map_pin_row',
      },
    ]);
    queryInterface.removeIndex(
      'character_start_item_habtm_socketed_skillgems',
      [
        {
          attribute: 'character_start_item_row',
        },
        {
          attribute: 'skill_gem_row',
        },
      ],
    );
    queryInterface.removeIndex('character_start_item_habtm_mods', [
      {
        attribute: 'character_start_item_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('character_start_items', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('character_start_items', [
      {
        attribute: 'character_start_states_key',
      },
    ]);
    queryInterface.removeIndex('character_panel_stat_habtm_stats3s', [
      {
        attribute: 'character_panel_stat_row',
      },
      {
        attribute: 'stat_row',
      },
    ]);
    queryInterface.removeIndex('character_panel_stat_habtm_stats2s', [
      {
        attribute: 'character_panel_stat_row',
      },
      {
        attribute: 'stat_row',
      },
    ]);
    queryInterface.removeIndex('character_panel_stat_habtm_stats1s', [
      {
        attribute: 'character_panel_stat_row',
      },
      {
        attribute: 'stat_row',
      },
    ]);
    queryInterface.removeIndex('character_panel_stats', [
      {
        attribute: 'character_panel_tabs_key',
      },
    ]);
    queryInterface.removeIndex('character_panel_stats', [
      {
        attribute: 'character_panel_description_modes_key',
      },
    ]);
    queryInterface.removeIndex(
      'character_audio_event_habtm_witch_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'character_audio_event_habtm_templar_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'character_audio_event_habtm_shadow_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'character_audio_event_habtm_scion_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'character_audio_event_habtm_ranger_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'character_audio_event_habtm_marauder_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'character_audio_event_habtm_jack_the_axe_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'character_audio_event_habtm_goddess_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'character_audio_event_habtm_duelist_charactertextaudios',
      [
        {
          attribute: 'character_audio_event_row',
        },
        {
          attribute: 'character_text_audio_row',
        },
      ],
    );
    queryInterface.removeIndex('characters', [
      {
        attribute: 'start_weapon_base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('characters', [
      {
        attribute: 'start_skill_gem_base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('buff_visual_habtm_preload_groups', [
      {
        attribute: 'buff_visual_row',
      },
      {
        attribute: 'preload_group_row',
      },
    ]);
    queryInterface.removeIndex('buff_visuals', [
      {
        attribute: 'misc_animated_key2',
      },
    ]);
    queryInterface.removeIndex('buff_visuals', [
      {
        attribute: 'misc_animated_key',
      },
    ]);
    queryInterface.removeIndex('buff_definition_habtm_stats', [
      {
        attribute: 'buff_definition_row',
      },
      {
        attribute: 'stat_row',
      },
    ]);
    queryInterface.removeIndex('buff_definitions', [
      {
        attribute: 'buff_visuals_key',
      },
    ]);
    queryInterface.removeIndex('buff_definitions', [
      {
        attribute: 'current_stats_key',
      },
    ]);
    queryInterface.removeIndex('buff_definitions', [
      {
        attribute: 'maximum_stats_key',
      },
    ]);
    queryInterface.removeIndex('bloodline_habtm_spawn_weight_tags', [
      {
        attribute: 'bloodline_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('bloodline_habtm_mods', [
      {
        attribute: 'bloodline_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('bloodline_habtm_item_weight_tags', [
      {
        attribute: 'bloodline_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex('bloodlines', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex('bloodlines', [
      {
        attribute: 'buff_definitions_key',
      },
    ]);
    queryInterface.removeIndex('beyond_demons', [
      {
        attribute: 'monster_varieties_key',
      },
    ]);
    queryInterface.removeIndex(
      'base_item_type_habtm_vendor_recipe_achievementitems',
      [
        {
          attribute: 'base_item_type_row',
        },
        {
          attribute: 'achievement_item_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'base_item_type_habtm_unique_purchase_baseitemtypes',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
    );
    queryInterface.removeIndex('base_item_type_habtm_tags', [
      {
        attribute: 'base_item_type_row',
      },
      {
        attribute: 'tag_row',
      },
    ]);
    queryInterface.removeIndex(
      'base_item_type_habtm_rare_purchase_baseitemtypes',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'base_item_type_habtm_normal_purchase_baseitemtypes',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
    );
    queryInterface.removeIndex(
      'base_item_type_habtm_magic_purchase_baseitemtypes',
      [
        {
          attribute: 'source_row',
        },
        {
          attribute: 'target_row',
        },
      ],
    );
    queryInterface.removeIndex('base_item_type_habtm_implicit_mods', [
      {
        attribute: 'base_item_type_row',
      },
      {
        attribute: 'mod_row',
      },
    ]);
    queryInterface.removeIndex('base_item_types', [
      {
        attribute: 'equip_achievement_items_key',
      },
    ]);
    queryInterface.removeIndex('base_item_types', [
      {
        attribute: 'item_visual_identity_key',
      },
    ]);
    queryInterface.removeIndex('base_item_types', [
      {
        attribute: 'sound_effects_key',
      },
    ]);
    queryInterface.removeIndex('base_item_types', [
      {
        attribute: 'flavour_text_key',
      },
    ]);
    queryInterface.removeIndex('base_item_types', [
      {
        attribute: 'item_classes_key',
      },
    ]);
    queryInterface.removeIndex('atlas_quest_items', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('atlas_quest_items', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('atlas_node_habtm_atlas_nodes', [
      {
        attribute: 'source_row',
      },
      {
        attribute: 'target_row',
      },
    ]);
    queryInterface.removeIndex('atlas_nodes', [
      {
        attribute: 'shaped_item_visual_identity_key',
      },
    ]);
    queryInterface.removeIndex('atlas_nodes', [
      {
        attribute: 'default_item_visual_identity_key',
      },
    ]);
    queryInterface.removeIndex('atlas_nodes', [
      {
        attribute: 'world_areas_key',
      },
    ]);
    queryInterface.removeIndex('ascendancies', [
      {
        attribute: 'characters_key',
      },
    ]);
    queryInterface.removeIndex('armour_types', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex(
      'active_skill_habtm_weapon_restriction_itemclasses',
      [
        {
          attribute: 'active_skill_row',
        },
        {
          attribute: 'item_class_row',
        },
      ],
    );
    queryInterface.removeIndex('active_skill_habtm_output_stats', [
      {
        attribute: 'active_skill_row',
      },
      {
        attribute: 'stat_row',
      },
    ]);
    queryInterface.removeIndex('active_skill_habtm_input_stats', [
      {
        attribute: 'active_skill_row',
      },
      {
        attribute: 'stat_row',
      },
    ]);
    queryInterface.removeIndex('achievement_set_rewards', [
      {
        attribute: 'base_item_types_key',
      },
    ]);
    queryInterface.removeIndex('achievement_set_rewards', [
      {
        attribute: 'achievement_sets_display_key',
      },
    ]);
    queryInterface.removeIndex('achievement_items', [
      {
        attribute: 'achievements_key',
      },
    ]);
    queryInterface.removeIndex('achievements', [
      {
        attribute: 'achievement_sets_display_key',
      },
    ]);
    queryInterface.dropTable('x_p_per_level_for_missions');
    queryInterface.dropTable('world_area_habtm_vaal_area_worldareas');
    queryInterface.dropTable('world_area_habtm_topologies');
    queryInterface.dropTable('world_area_habtm_tags');
    queryInterface.dropTable('world_area_habtm_spawn_weight_tags');
    queryInterface.dropTable('world_area_habtm_monsters_monstervarieties');
    queryInterface.dropTable('world_area_habtm_mods');
    queryInterface.dropTable('world_area_habtm_full_clear_achievementitems');
    queryInterface.dropTable('world_area_habtm_connections_worldareas');
    queryInterface.dropTable('world_area_habtm_bosses_monstervarieties');
    queryInterface.dropTable('world_area_habtm_area_type_tags');
    queryInterface.dropTable('world_area_habtm1s');
    queryInterface.dropTable('world_areas');
    queryInterface.dropTable('wordlists');
    queryInterface.dropTable('word_habtm_spawn_weight_tags');
    queryInterface.dropTable('words');
    queryInterface.dropTable('weapon_types');
    queryInterface.dropTable('weapon_sound_types');
    queryInterface.dropTable('weapon_impact_sound_data');
    queryInterface.dropTable('weapon_damage_scalings');
    queryInterface.dropTable('weapon_classes');
    queryInterface.dropTable('weapon_armour_commons');
    queryInterface.dropTable('warbands_pack_numbers');
    queryInterface.dropTable(
      'warbands_pack_monster_habtm_tier4_monstervarieties',
    );
    queryInterface.dropTable(
      'warbands_pack_monster_habtm_tier3_monstervarieties',
    );
    queryInterface.dropTable(
      'warbands_pack_monster_habtm_tier2_monstervarieties',
    );
    queryInterface.dropTable(
      'warbands_pack_monster_habtm_tier1_monstervarieties',
    );
    queryInterface.dropTable('warbands_pack_monsters');
    queryInterface.dropTable('warbands_map_graphs');
    queryInterface.dropTable('warbands_graphs');
    queryInterface.dropTable('vote_types');
    queryInterface.dropTable('vote_states');
    queryInterface.dropTable('unique_set_names');
    queryInterface.dropTable('unique_sets');
    queryInterface.dropTable('unique_jewel_limits');
    queryInterface.dropTable('unique_chest_habtm_mods');
    queryInterface.dropTable('unique_chests');
    queryInterface.dropTable('trigger_spawners');
    queryInterface.dropTable('torment_spirit_habtm_touched_mods');
    queryInterface.dropTable('torment_spirit_habtm_spirit_mods');
    queryInterface.dropTable('torment_spirit_habtm_possessed_mods');
    queryInterface.dropTable('torment_spirit_habtm_mods1s');
    queryInterface.dropTable('torment_spirit_habtm_mods0s');
    queryInterface.dropTable('torment_spirits');
    queryInterface.dropTable('topologies');
    queryInterface.dropTable('tips');
    queryInterface.dropTable('terrain_plugins');
    queryInterface.dropTable('talisman_pack_habtm_monster_packs');
    queryInterface.dropTable('talisman_packs');
    queryInterface.dropTable('talisman_monster_mods');
    queryInterface.dropTable('talismans');
    queryInterface.dropTable('tags');
    queryInterface.dropTable('supporter_pack_sets');
    queryInterface.dropTable('summoned_specific_monsters_on_deaths');
    queryInterface.dropTable('summoned_specific_monsters');
    queryInterface.dropTable('summoned_specific_barrels');
    queryInterface.dropTable('strongboxes');
    queryInterface.dropTable('str_mission_spirit_secondary_effects');
    queryInterface.dropTable('str_mission_spirit_effects');
    queryInterface.dropTable('str_mission_map_mod_numbers');
    queryInterface.dropTable('str_mission_habtm_mods');
    queryInterface.dropTable('str_mission_bosses');
    queryInterface.dropTable('str_missions');
    queryInterface.dropTable('str_map_mods');
    queryInterface.dropTable('str_int_mission_relic_pattern_habtm_relic_mods');
    queryInterface.dropTable('str_int_mission_relic_patterns');
    queryInterface.dropTable('str_int_mission_relic_mod_habtm_mods');
    queryInterface.dropTable('str_int_mission_relic_mods');
    queryInterface.dropTable(
      'str_int_mission_monster_wave_habtm_unique_monstervarieties',
    );
    queryInterface.dropTable('str_int_mission_monster_waves');
    queryInterface.dropTable('str_int_mission_habtm_relic_mods');
    queryInterface.dropTable('str_int_mission_habtm_achievement_items');
    queryInterface.dropTable('str_int_missions');
    queryInterface.dropTable('str_dex_mission_special_mod_habtm_mods');
    queryInterface.dropTable('str_dex_mission_special_mods');
    queryInterface.dropTable('str_dex_mission_mod_habtm_mods');
    queryInterface.dropTable('str_dex_mission_mods');
    queryInterface.dropTable('str_dex_mission_habtm_traps_monstervarieties');
    queryInterface.dropTable('str_dex_mission_habtm_mods');
    queryInterface.dropTable('str_dex_mission_habtm_allies_monstervarieties');
    queryInterface.dropTable('str_dex_mission_archetypes');
    queryInterface.dropTable('str_dex_missions');
    queryInterface.dropTable('str_dex_int_mission_unique_map_habtm_mods');
    queryInterface.dropTable(
      'str_dex_int_mission_unique_map_habtm_map_boss_monstervarieties',
    );
    queryInterface.dropTable('str_dex_int_mission_unique_maps');
    queryInterface.dropTable('str_dex_int_mission_mod_habtm_mods');
    queryInterface.dropTable('str_dex_int_mission_mods');
    queryInterface.dropTable(
      'str_dex_int_mission_map_habtm_map_boss_monstervarieties',
    );
    queryInterface.dropTable('str_dex_int_mission_maps');
    queryInterface.dropTable('str_dex_int_mission_habtm_extra_mods');
    queryInterface.dropTable('str_dex_int_mission_habtm_achievement_items');
    queryInterface.dropTable('str_dex_int_mission_extra_requirements');
    queryInterface.dropTable('str_dex_int_missions');
    queryInterface.dropTable('stat_semantics');
    queryInterface.dropTable('stat_description_functions');
    queryInterface.dropTable('stats');
    queryInterface.dropTable('sound_effects');
    queryInterface.dropTable('skill_totem_variations');
    queryInterface.dropTable('skill_totems');
    queryInterface.dropTable('skill_gem_habtm_gem_tags');
    queryInterface.dropTable('skill_gems');
    queryInterface.dropTable('shrine_sounds');
    queryInterface.dropTable('shrine_habtm_achievement_items');
    queryInterface.dropTable('shrine_buffs');
    queryInterface.dropTable('shrines');
    queryInterface.dropTable('shop_tokens');
    queryInterface.dropTable('shop_regions');
    queryInterface.dropTable('shop_payment_package_prices');
    queryInterface.dropTable('shop_payment_package_items');
    queryInterface.dropTable('shop_payment_packages');
    queryInterface.dropTable('shop_item_prices');
    queryInterface.dropTable('shop_item_habtm_shop_categories');
    queryInterface.dropTable('shop_item_habtm_package_shopitems');
    queryInterface.dropTable('shop_items');
    queryInterface.dropTable('shop_currencies');
    queryInterface.dropTable('shop_countries');
    queryInterface.dropTable('shop_categories');
    queryInterface.dropTable('shield_types');
    queryInterface.dropTable('runic_circles');
    queryInterface.dropTable('rogue_exiles');
    queryInterface.dropTable('relative_importance_constants');
    queryInterface.dropTable('realms');
    queryInterface.dropTable('rarities');
    queryInterface.dropTable('random_unique_monsters');
    queryInterface.dropTable('race_times');
    queryInterface.dropTable('race_area_habtm_mods');
    queryInterface.dropTable('race_areas');
    queryInterface.dropTable('races');
    queryInterface.dropTable('quest_vendor_reward_habtm_characters');
    queryInterface.dropTable('quest_vendor_reward_habtm_base_item_types');
    queryInterface.dropTable('quest_vendor_rewards');
    queryInterface.dropTable('quest_static_rewards');
    queryInterface.dropTable('quest_state_habtm_map_pins2s');
    queryInterface.dropTable('quest_state_habtm_map_pins1s');
    queryInterface.dropTable('quest_states');
    queryInterface.dropTable('quest_rewards');
    queryInterface.dropTable('quest_flags');
    queryInterface.dropTable('quest_achievements');
    queryInterface.dropTable('quests');
    queryInterface.dropTable('prophecy_types');
    queryInterface.dropTable('prophecy_habtm_quest_tracker_clientstrings');
    queryInterface.dropTable('prophecy_chains');
    queryInterface.dropTable('prophecies');
    queryInterface.dropTable('projectile_variations');
    queryInterface.dropTable('projectiles');
    queryInterface.dropTable('preload_priorities');
    queryInterface.dropTable('preload_groups');
    queryInterface.dropTable('pets');
    queryInterface.dropTable('perandus_guard_habtm_monster_packs');
    queryInterface.dropTable('perandus_guards');
    queryInterface.dropTable('perandus_daemons');
    queryInterface.dropTable('perandus_chests');
    queryInterface.dropTable('perandus_bosses');
    queryInterface.dropTable('per_level_values');
    queryInterface.dropTable('path_of_endurance_habtm_mods');
    queryInterface.dropTable('path_of_endurances');
    queryInterface.dropTable('passive_skill_habtm_stats');
    queryInterface.dropTable('passive_skill_habtm_reminder_clientstrings');
    queryInterface.dropTable('passive_skill_habtm_characters');
    queryInterface.dropTable('passive_skills');
    queryInterface.dropTable('passive_jewel_slots');
    queryInterface.dropTable('p_v_p_types');
    queryInterface.dropTable('orientations');
    queryInterface.dropTable('old_map_stash_tab_layouts');
    queryInterface.dropTable('notifications');
    queryInterface.dropTable('normal_difficulty_master_weights');
    queryInterface.dropTable('n_p_c_text_audios');
    queryInterface.dropTable('n_p_c_talk_habtm_n_p_c_text_audios');
    queryInterface.dropTable('n_p_c_talk_categories');
    queryInterface.dropTable('n_p_c_talks');
    queryInterface.dropTable('n_p_c_shop_habtm_sold_item_tags');
    queryInterface.dropTable('n_p_c_shops');
    queryInterface.dropTable('n_p_c_master_habtm_unknown_weight_tags');
    queryInterface.dropTable(
      'n_p_c_master_habtm_signature_mod_spawn_weight_tags',
    );
    queryInterface.dropTable(
      'n_p_c_master_habtm_master_level5_achievementitems',
    );
    queryInterface.dropTable('n_p_c_master_experience_per_levels');
    queryInterface.dropTable('n_p_c_masters');
    queryInterface.dropTable('n_p_c_audios');
    queryInterface.dropTable('n_p_cs');
    queryInterface.dropTable('mystery_pack_items');
    queryInterface.dropTable('mystery_packs');
    queryInterface.dropTable('mystery_boxes');
    queryInterface.dropTable('music');
    queryInterface.dropTable(
      'monster_variety_habtm_weapon2_itemvisualidentities',
    );
    queryInterface.dropTable(
      'monster_variety_habtm_weapon1_itemvisualidentities',
    );
    queryInterface.dropTable('monster_variety_habtm_tags');
    queryInterface.dropTable('monster_variety_habtm_special_mods');
    queryInterface.dropTable('monster_variety_habtm_normal_mods');
    queryInterface.dropTable('monster_variety_habtm_normal_achievementitems');
    queryInterface.dropTable('monster_variety_habtm_mods2s');
    queryInterface.dropTable('monster_variety_habtm_mods');
    queryInterface.dropTable('monster_variety_habtm_merciless_mods');
    queryInterface.dropTable(
      'monster_variety_habtm_merciless_achievementitems',
    );
    queryInterface.dropTable(
      'monster_variety_habtm_kill_rare_in_normal_achievementitems',
    );
    queryInterface.dropTable(
      'monster_variety_habtm_kill_rare_in_merciless_achievementitems',
    );
    queryInterface.dropTable(
      'monster_variety_habtm_kill_rare_in_cruel_achievementitems',
    );
    queryInterface.dropTable('monster_variety_habtm_granted_effects');
    queryInterface.dropTable('monster_variety_habtm_cruel_mods');
    queryInterface.dropTable('monster_variety_habtm_cruel_achievementitems');
    queryInterface.dropTable(
      'monster_variety_habtm_count_kills_achievementitems',
    );
    queryInterface.dropTable('monster_variety_habtm_achievement_items2s');
    queryInterface.dropTable('monster_variety_habtm_achievement_items');
    queryInterface.dropTable('monster_varieties');
    queryInterface.dropTable('monster_type_habtm_tags');
    queryInterface.dropTable('monster_types');
    queryInterface.dropTable('monster_sizes');
    queryInterface.dropTable('monster_segments');
    queryInterface.dropTable('monster_scaling_by_levels');
    queryInterface.dropTable('monster_resistances');
    queryInterface.dropTable('monster_pack_habtm_world_areas');
    queryInterface.dropTable('monster_pack_habtm_tags');
    queryInterface.dropTable(
      'monster_pack_habtm_boss_monster_monstervarieties',
    );
    queryInterface.dropTable('monster_pack_entries');
    queryInterface.dropTable('monster_packs');
    queryInterface.dropTable('monster_map_difficulties');
    queryInterface.dropTable('monster_map_boss_difficulties');
    queryInterface.dropTable('monster_group_names');
    queryInterface.dropTable('monster_group_entries');
    queryInterface.dropTable('monster_flee_conditions');
    queryInterface.dropTable('monster_behaviors');
    queryInterface.dropTable('monster_armours');
    queryInterface.dropTable('monster_additional_monster_drops');
    queryInterface.dropTable('mod_type_habtm_mod_sell_prices');
    queryInterface.dropTable('mod_types');
    queryInterface.dropTable('mod_sell_price_types');
    queryInterface.dropTable('mod_sell_price_habtm_base_item_types');
    queryInterface.dropTable('mod_sell_prices');
    queryInterface.dropTable('mod_habtm_tags');
    queryInterface.dropTable('mod_habtm_spawn_weight_tags');
    queryInterface.dropTable('mod_habtm_generation_weight_tags');
    queryInterface.dropTable('mod_generation_types');
    queryInterface.dropTable('mod_families');
    queryInterface.dropTable('mod_domains');
    queryInterface.dropTable('mod_aura_flags');
    queryInterface.dropTable('mods');
    queryInterface.dropTable('mission_transition_tiles');
    queryInterface.dropTable('mission_tile_map_habtm_world_areas');
    queryInterface.dropTable('mission_tile_maps');
    queryInterface.dropTable('misc_object_habtm_preload_groups');
    queryInterface.dropTable('misc_objects');
    queryInterface.dropTable('misc_beam_habtm_preload_groups');
    queryInterface.dropTable('misc_beams');
    queryInterface.dropTable('misc_animated_habtm_preload_groups');
    queryInterface.dropTable('misc_animateds');
    queryInterface.dropTable('minimap_icons');
    queryInterface.dropTable('microtransaction_social_frame_variations');
    queryInterface.dropTable('microtransaction_slot_ids');
    queryInterface.dropTable('microtransaction_portal_variations');
    queryInterface.dropTable('microtransaction_fireworks_variations');
    queryInterface.dropTable('microtransaction_character_portrait_variations');
    queryInterface.dropTable('micro_migration_data');
    queryInterface.dropTable('map_stash_tab_layouts');
    queryInterface.dropTable('map_pin_habtm_world_areas');
    queryInterface.dropTable('map_pin_habtm_normal_worldareas');
    queryInterface.dropTable('map_pin_habtm_merciless_worldareas');
    queryInterface.dropTable('map_pin_habtm_cruel_worldareas');
    queryInterface.dropTable('map_pins');
    queryInterface.dropTable('map_inhabitants');
    queryInterface.dropTable('map_habtm_monster_packs');
    queryInterface.dropTable('map_habtm_higher_tier_maps_baseitemtypes');
    queryInterface.dropTable('map_device_recipe_habtm_world_areas');
    queryInterface.dropTable('map_device_recipe_habtm_base_item_types');
    queryInterface.dropTable('map_device_recipes');
    queryInterface.dropTable('map_connections');
    queryInterface.dropTable('maps');
    queryInterface.dropTable('league_trophies');
    queryInterface.dropTable('league_quest_flags');
    queryInterface.dropTable('league_flags');
    queryInterface.dropTable('league_categories');
    queryInterface.dropTable('labyrinth_trinkets');
    queryInterface.dropTable(
      'labyrinth_section_layout_habtm_labyrinth_section_layouts',
    );
    queryInterface.dropTable('labyrinth_section_layouts');
    queryInterface.dropTable('labyrinth_sections');
    queryInterface.dropTable('labyrinth_secret_locations');
    queryInterface.dropTable(
      'labyrinth_secret_habtm_labyrinth_secret_effects3s',
    );
    queryInterface.dropTable(
      'labyrinth_secret_habtm_labyrinth_secret_effects2s',
    );
    queryInterface.dropTable(
      'labyrinth_secret_habtm_labyrinth_secret_effects1s',
    );
    queryInterface.dropTable(
      'labyrinth_secret_habtm_labyrinth_secret_effects0s',
    );
    queryInterface.dropTable('labyrinth_secret_effects');
    queryInterface.dropTable('labyrinth_secrets');
    queryInterface.dropTable('labyrinth_rewards');
    queryInterface.dropTable('labyrinth_node_overrides');
    queryInterface.dropTable('labyrinth_ladder_rewards');
    queryInterface.dropTable('labyrinth_izaro_chests');
    queryInterface.dropTable('labyrinth_exclusion_groups');
    queryInterface.dropTable('labyrinth_area_habtm_normal_worldareas');
    queryInterface.dropTable('labyrinth_area_habtm_merciless_worldareas');
    queryInterface.dropTable('labyrinth_area_habtm_endgame_worldareas');
    queryInterface.dropTable('labyrinth_area_habtm_cruel_worldareas');
    queryInterface.dropTable('labyrinth_areas');
    queryInterface.dropTable('killstreak_thresholds');
    queryInterface.dropTable('itemised_visual_effects');
    queryInterface.dropTable(
      'item_visual_identity_habtm_pickup_achievementitems',
    );
    queryInterface.dropTable(
      'item_visual_identity_habtm_identify_achievementitems',
    );
    queryInterface.dropTable(
      'item_visual_identity_habtm_corrupt_achievementitems',
    );
    queryInterface.dropTable('item_visual_identities');
    queryInterface.dropTable('item_visual_effects');
    queryInterface.dropTable('item_themes');
    queryInterface.dropTable('item_experience_per_levels');
    queryInterface.dropTable('item_classes');
    queryInterface.dropTable(
      'invasion_monsters_per_area_habtm_monster_varieties2s',
    );
    queryInterface.dropTable(
      'invasion_monsters_per_area_habtm_monster_varieties1s',
    );
    queryInterface.dropTable('invasion_monsters_per_areas');
    queryInterface.dropTable('invasion_monster_roles');
    queryInterface.dropTable(
      'invasion_monster_restriction_habtm_monster_varieties',
    );
    queryInterface.dropTable('invasion_monster_restrictions');
    queryInterface.dropTable('invasion_monster_groups');
    queryInterface.dropTable(
      'int_mission_monster_habtm_objective_monstervarieties',
    );
    queryInterface.dropTable('int_mission_monster_habtm_achievement_items');
    queryInterface.dropTable('int_mission_monsters');
    queryInterface.dropTable('int_mission_mod_habtm_mods');
    queryInterface.dropTable('int_mission_mods');
    queryInterface.dropTable('int_missions');
    queryInterface.dropTable('impact_sound_data');
    queryInterface.dropTable('hideout_interactables');
    queryInterface.dropTable('hideout_doodads');
    queryInterface.dropTable('hideouts');
    queryInterface.dropTable('granted_effects_per_level_habtm_stats2s');
    queryInterface.dropTable('granted_effects_per_level_habtm_stats');
    queryInterface.dropTable('granted_effects_per_level_habtm_quality_stats');
    queryInterface.dropTable('granted_effects_per_levels');
    queryInterface.dropTable('granted_effect_groups');
    queryInterface.dropTable('granted_effects');
    queryInterface.dropTable('grandmaster_habtm_mods');
    queryInterface.dropTable('grandmasters');
    queryInterface.dropTable('global_quest_flags');
    queryInterface.dropTable('global_audio_configs');
    queryInterface.dropTable('gem_types');
    queryInterface.dropTable('gem_tags');
    queryInterface.dropTable('game_constants');
    queryInterface.dropTable('footprints');
    queryInterface.dropTable('flavour_texts');
    queryInterface.dropTable('flask_types');
    queryInterface.dropTable('flasks');
    queryInterface.dropTable('extra_terrain_feature_families');
    queryInterface.dropTable('extra_terrain_features');
    queryInterface.dropTable('exploding_storm_buffs');
    queryInterface.dropTable('experience_levels');
    queryInterface.dropTable('event_season_rewards');
    queryInterface.dropTable('event_seasons');
    queryInterface.dropTable('essence_types');
    queryInterface.dropTable('essence_stash_tab_layouts');
    queryInterface.dropTable('essence_habtm_monster_mods');
    queryInterface.dropTable('essences');
    queryInterface.dropTable('environments');
    queryInterface.dropTable('endless_ledge_chest_habtm_base_item_types');
    queryInterface.dropTable('endless_ledge_chests');
    queryInterface.dropTable('effectiveness_cost_constants');
    queryInterface.dropTable('effectivenesses');
    queryInterface.dropTable('eclipse_mod_habtm_spawn_weight_tags');
    queryInterface.dropTable('eclipse_mods');
    queryInterface.dropTable('drop_pools');
    queryInterface.dropTable('divination_card_stash_tab_layouts');
    queryInterface.dropTable('divination_card_arts');
    queryInterface.dropTable('display_minion_monster_types');
    queryInterface.dropTable('difficulties');
    queryInterface.dropTable('dex_mission_trackings');
    queryInterface.dropTable('dex_mission_monster_habtm_monster_varieties');
    queryInterface.dropTable('dex_mission_monster_habtm_monster_packs');
    queryInterface.dropTable('dex_mission_monsters');
    queryInterface.dropTable('dex_mission_mods');
    queryInterface.dropTable('dex_missions');
    queryInterface.dropTable('dex_int_mission_targets');
    queryInterface.dropTable('dex_int_mission_habtm_achievement_items');
    queryInterface.dropTable('dex_int_mission_guard_mods');
    queryInterface.dropTable('dex_int_mission_guards');
    queryInterface.dropTable('dex_int_missions');
    queryInterface.dropTable('descent_starter_chests');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types9s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types8s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types7s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types6s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types5s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types4s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types3s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types2s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types14s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types13s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types12s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types11s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types10s');
    queryInterface.dropTable('descent_reward_chest_habtm_base_item_types1s');
    queryInterface.dropTable('descent_reward_chests');
    queryInterface.dropTable('descent_exiles');
    queryInterface.dropTable('default_monster_stats');
    queryInterface.dropTable('defaults');
    queryInterface.dropTable('daresso_pit_fights');
    queryInterface.dropTable('dances');
    queryInterface.dropTable('damage_particle_effects');
    queryInterface.dropTable('daily_overrides');
    queryInterface.dropTable('daily_mission_habtm_characters');
    queryInterface.dropTable('daily_missions');
    queryInterface.dropTable('currency_use_types');
    queryInterface.dropTable('currency_stash_tab_layouts');
    queryInterface.dropTable('currency_item_habtm_usage_achievementitems');
    queryInterface.dropTable('currency_items');
    queryInterface.dropTable('crafting_bench_option_habtm_item_classes');
    queryInterface.dropTable('crafting_bench_option_habtm_cost_baseitemtypes');
    queryInterface.dropTable('crafting_bench_options');
    queryInterface.dropTable('crafting_bench_custom_actions');
    queryInterface.dropTable('cooldown_groups');
    queryInterface.dropTable('cooldown_bypass_types');
    queryInterface.dropTable('component_charges');
    queryInterface.dropTable('component_attribute_requirements');
    queryInterface.dropTable('component_armours');
    queryInterface.dropTable('commands');
    queryInterface.dropTable('clone_shot_variations');
    queryInterface.dropTable('client_strings');
    queryInterface.dropTable('chest_habtm_tags');
    queryInterface.dropTable('chest_habtm_mods');
    queryInterface.dropTable('chest_effects');
    queryInterface.dropTable('chest_cluster_habtm_chests');
    queryInterface.dropTable('chest_clusters');
    queryInterface.dropTable('chests');
    queryInterface.dropTable('character_text_audios');
    queryInterface.dropTable('character_start_state_sets');
    queryInterface.dropTable('character_start_state_habtm_passive_skills');
    queryInterface.dropTable(
      'character_start_state_habtm_normal_characterstartqueststates',
    );
    queryInterface.dropTable(
      'character_start_state_habtm_merciless_characterstartqueststates',
    );
    queryInterface.dropTable(
      'character_start_state_habtm_cruel_characterstartqueststates',
    );
    queryInterface.dropTable('character_start_states');
    queryInterface.dropTable('character_start_quest_state_habtm_quests');
    queryInterface.dropTable('character_start_quest_state_habtm_map_pins');
    queryInterface.dropTable('character_start_quest_states');
    queryInterface.dropTable('character_start_item_habtm_socketed_skillgems');
    queryInterface.dropTable('character_start_item_habtm_mods');
    queryInterface.dropTable('character_start_items');
    queryInterface.dropTable('character_panel_tabs');
    queryInterface.dropTable('character_panel_stat_habtm_stats3s');
    queryInterface.dropTable('character_panel_stat_habtm_stats2s');
    queryInterface.dropTable('character_panel_stat_habtm_stats1s');
    queryInterface.dropTable('character_panel_stat_contexts');
    queryInterface.dropTable('character_panel_stats');
    queryInterface.dropTable('character_panel_description_modes');
    queryInterface.dropTable(
      'character_audio_event_habtm_witch_charactertextaudios',
    );
    queryInterface.dropTable(
      'character_audio_event_habtm_templar_charactertextaudios',
    );
    queryInterface.dropTable(
      'character_audio_event_habtm_shadow_charactertextaudios',
    );
    queryInterface.dropTable(
      'character_audio_event_habtm_scion_charactertextaudios',
    );
    queryInterface.dropTable(
      'character_audio_event_habtm_ranger_charactertextaudios',
    );
    queryInterface.dropTable(
      'character_audio_event_habtm_marauder_charactertextaudios',
    );
    queryInterface.dropTable(
      'character_audio_event_habtm_jack_the_axe_charactertextaudios',
    );
    queryInterface.dropTable(
      'character_audio_event_habtm_goddess_charactertextaudios',
    );
    queryInterface.dropTable(
      'character_audio_event_habtm_duelist_charactertextaudios',
    );
    queryInterface.dropTable('character_audio_events');
    queryInterface.dropTable('characters');
    queryInterface.dropTable('buff_visual_orb_types');
    queryInterface.dropTable('buff_visual_habtm_preload_groups');
    queryInterface.dropTable('buff_visuals');
    queryInterface.dropTable('buff_merge_modes');
    queryInterface.dropTable('buff_groups');
    queryInterface.dropTable('buff_definition_habtm_stats');
    queryInterface.dropTable('buff_definitions');
    queryInterface.dropTable('buff_categories');
    queryInterface.dropTable('bloodline_habtm_spawn_weight_tags');
    queryInterface.dropTable('bloodline_habtm_mods');
    queryInterface.dropTable('bloodline_habtm_item_weight_tags');
    queryInterface.dropTable('bloodlines');
    queryInterface.dropTable('blood_types');
    queryInterface.dropTable('bindable_virtual_keys');
    queryInterface.dropTable('beyond_demons');
    queryInterface.dropTable(
      'base_item_type_habtm_vendor_recipe_achievementitems',
    );
    queryInterface.dropTable(
      'base_item_type_habtm_unique_purchase_baseitemtypes',
    );
    queryInterface.dropTable('base_item_type_habtm_tags');
    queryInterface.dropTable(
      'base_item_type_habtm_rare_purchase_baseitemtypes',
    );
    queryInterface.dropTable(
      'base_item_type_habtm_normal_purchase_baseitemtypes',
    );
    queryInterface.dropTable(
      'base_item_type_habtm_magic_purchase_baseitemtypes',
    );
    queryInterface.dropTable('base_item_type_habtm_implicit_mods');
    queryInterface.dropTable('base_item_types');
    queryInterface.dropTable('backend_errors');
    queryInterface.dropTable('attributes');
    queryInterface.dropTable('atlas_quest_items');
    queryInterface.dropTable('atlas_node_habtm_atlas_nodes');
    queryInterface.dropTable('atlas_nodes');
    queryInterface.dropTable('ascendancies');
    queryInterface.dropTable('armour_types');
    queryInterface.dropTable('armour_surface_types');
    queryInterface.dropTable('armour_classes');
    queryInterface.dropTable('active_skill_types');
    queryInterface.dropTable('active_skill_target_types');
    queryInterface.dropTable(
      'active_skill_habtm_weapon_restriction_itemclasses',
    );
    queryInterface.dropTable('active_skill_habtm_output_stats');
    queryInterface.dropTable('active_skill_habtm_input_stats');
    queryInterface.dropTable('active_skills');
    queryInterface.dropTable('achievement_sets_displays');
    queryInterface.dropTable('achievement_set_rewards');
    queryInterface.dropTable('achievement_sets');
    queryInterface.dropTable('achievement_items');
    queryInterface.dropTable('achievements');
  },
};
