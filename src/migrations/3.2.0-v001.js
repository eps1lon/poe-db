module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'archetype_rewards',
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
        key1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        bk2_file: {
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
      'base_item_type__identify__achievement_items',
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
      'bestiary_capturable_monsters',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        name: {
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
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        icon_small: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        icon: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
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
        bestiary_groups_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        boss_monster_varieties_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        bestiary_genus_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        bestiary_capturable_monsters_key: {
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
      'bestiary_encounters',
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
        spawn_weight: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        monster_spawner_id: {
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
    await queryInterface.createTable(
      'bestiary_families',
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
        icon: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        icon_small: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        illustration: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        page_art: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flavour_text: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        key0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
      'bestiary_genus',
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
        name2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        icon: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
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
        bestiary_groups_key: {
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
      'bestiary_groups',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
        illustraiton: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        group_name: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        icon: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        icon_small: {
          allowNull: true,
          primaryKey: false,
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
        bestiary_families_key: {
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
      'bestiary_group__achievement_items',
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
        bestiary_group_row: {
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
      'bestiary_nets',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
      'bestiary_recipes',
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
        description: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        notes: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        hint_text: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        data0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        _bestiary_recipe_component_cache: {
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
    await queryInterface.createTable(
      'bestiary_recipe_components',
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
        min_level: {
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
        bestiary_families_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        bestiary_groups_key: {
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
        bestiary_genus_key: {
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
      'bestiary_recipe__achievement_items',
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
        bestiary_recipe_row: {
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
      'bestiary_recipe__bestiary_recipe_components',
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
        bestiary_recipe_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        bestiary_recipe_component_row: {
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
      'bestiary_recipe_item_creations',
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
        command: {
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
        bestiary_recipes_key: {
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
      'bonus_master_exps',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        quest_state: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        bonus_experience: {
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
      'geometry_attack_shapes',
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
      'geometry_attack_target_types',
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
      'geometry_attack_variations',
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
        flag1: {
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
      'map_fragment_mods',
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
    await queryInterface.createTable(
      'microtransaction_periodic_character_effect_variations',
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
        ao_file: {
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
      'multi_part_achievements',
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
        unknown4: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
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
      'net_tiers',
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
    await queryInterface.removeIndex('maps', 'index_maps_key');
    await queryInterface.removeIndex('maps', 'index_atlas_completion_maps_key');
    await queryInterface.removeIndex(
      'maps',
      'index_atlas_completion_unique_maps_key',
    );
    await queryInterface.removeIndex('maps', 'index_map_series_key');
    await queryInterface.removeIndex(
      'quest_achievements',
      'index_achievement_items_key',
    );
    await queryInterface.removeIndex(
      'str_dex_int_missions',
      'index_npc_talk_key',
    );
    await queryInterface.removeIndex(
      'str_dex_int_missions',
      'index_monster_packs_key',
    );
    await queryInterface.addColumn('achievements', 'flag5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('achievements', 'flag6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('achievements', 'flag7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('archetypes', 'background_image_file', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.renameColumn('atlas_nodes', 'unknown4', 'unknown0');
    await queryInterface.renameColumn('atlas_nodes', 'unknown5', 'unknown1');
    await queryInterface.renameColumn('atlas_nodes', 'unknown6', 'unknown2');
    await queryInterface.addColumn('atlas_nodes', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'base_item_types',
      '_identify_rare_achievement_items_cache',
    );
    await queryInterface.renameColumn(
      'base_item_types',
      'inflection',
      'unknown3',
    );
    await queryInterface.addColumn(
      'base_item_types',
      '_identify_achievement_items_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('base_item_types', 'is_blessing', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('buff_visuals', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.renameColumn('granted_effects', 'unknown2', 'data3');
    await queryInterface.addColumn('granted_effects', 'data4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('maps', 'atlas_completion_maps_key');
    await queryInterface.removeColumn(
      'maps',
      'atlas_completion_unique_maps_key',
    );
    await queryInterface.removeColumn('maps', 'map_series_key');
    await queryInterface.removeColumn('maps', 'maps_key');
    await queryInterface.addColumn('maps', 'maps_key1', {
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
    await queryInterface.addColumn('maps', 'maps_key3', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('maps', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn(
      'microtransaction_combine_forumulas',
      'unknown1',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn('misc_animateds', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn('n_p_c_shops', 'unknown1', 'unknown0');
    await queryInterface.renameColumn('n_p_c_shops', 'unknown10', 'unknown1');
    await queryInterface.renameColumn('n_p_c_shops', 'unknown11', 'keys1');
    await queryInterface.addColumn('n_p_c_shops', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('n_p_c_text_audios', 'inflection');
    await queryInterface.addColumn('n_p_c_text_audios', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.renameColumn('pantheon_souls', 'unknown2', 'unknown0');
    await queryInterface.addColumn('pantheon_souls', 'key1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('pantheon_souls', 'key2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.renameColumn(
      'passive_skills',
      'stat5_value',
      'unknown0',
    );
    await queryInterface.addColumn('passive_skills', 'buff_related_unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn(
      'quest_achievements',
      'achievement_items_key',
    );
    await queryInterface.removeColumn('quest_achievements', 'data0');
    await queryInterface.removeColumn('quest_achievements', 'flag0');
    await queryInterface.removeColumn(
      'quest_achievements',
      'is_hardcore_achievement',
    );
    await queryInterface.removeColumn(
      'quest_achievements',
      'is_standard_achievement',
    );
    await queryInterface.addColumn(
      'quest_achievements',
      'achievement_items_keys',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('quest_achievements', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('quest_achievements', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('quest_achievements', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('quest_rewards', 'unknown5');
    await queryInterface.removeColumn('quest_rewards', 'unknown9');
    await queryInterface.addColumn('quest_rewards', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('quest_rewards', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('quest_rewards', 'keys0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('quest_rewards', 'unknown6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.renameColumn('quests', 'flag0', 'flag1');
    await queryInterface.renameColumn('quests', 'unknown1', 'flag0');
    await queryInterface.addColumn(
      'str_dex_int_mission_extra_requirements',
      'data0',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'str_dex_int_mission_extra_requirements',
      'flag0',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      },
    );
    await queryInterface.addColumn(
      'str_dex_int_mission_extra_requirements',
      'unknown0',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.removeColumn(
      'str_dex_int_missions',
      '_achievement_items_cache',
    );
    await queryInterface.removeColumn(
      'str_dex_int_missions',
      'has_objective_boss_kill',
    );
    await queryInterface.removeColumn(
      'str_dex_int_missions',
      'has_objective_complete_master_mission',
    );
    await queryInterface.removeColumn(
      'str_dex_int_missions',
      'has_objective_find_unique',
    );
    await queryInterface.removeColumn(
      'str_dex_int_missions',
      'has_objective_full_clear',
    );
    await queryInterface.removeColumn(
      'str_dex_int_missions',
      'has_objective_kill_exiles',
    );
    await queryInterface.removeColumn(
      'str_dex_int_missions',
      'monster_packs_key',
    );
    await queryInterface.removeColumn('str_dex_int_missions', 'npc_talk_key');
    await queryInterface.removeColumn(
      'str_dex_int_missions',
      'object_count_required',
    );
    await queryInterface.removeColumn(
      'str_dex_int_missions',
      'object_count_total',
    );
    await queryInterface.removeColumn('str_dex_int_missions', 'unknown4');
    await queryInterface.removeColumn('str_dex_int_missions', 'unknown5');
    await queryInterface.addColumn('str_dex_int_missions', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('str_dex_int_missions', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('str_dex_int_missions', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('str_dex_int_missions', 'key1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('str_dex_int_missions', 'key2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('str_dex_int_missions', 'key3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('str_dex_int_missions', 'key4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('str_dex_int_missions', 'key5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('str_dex_int_missions', 'key6', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('str_dex_int_missions', 'unknown12', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('str_dex_int_missions', 'unknown13', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('str_dex_int_missions', 'unknown14', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('str_dex_int_missions', 'unknown15', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('words', 'inflection');
    await queryInterface.addColumn('words', 'unknown8', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('world_areas', 'harbinger_count');
    await queryInterface.removeColumn('world_areas', 'harbinger_spawn_chance');
    await queryInterface.addColumn('world_areas', 'bestiary_unknown100', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'bestiary_unknown101', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'bestiary_unknown99', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'unknown94', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'unknown95', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'unknown96', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addIndex(
      'base_item_type__identify__achievement_items',
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
      'bestiary_capturable_monsters',
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
      'bestiary_capturable_monsters',
      [
        {
          attribute: 'bestiary_groups_key',
        },
      ],
      {
        indexName: 'index_bestiary_groups_key',
      },
    );
    await queryInterface.addIndex(
      'bestiary_capturable_monsters',
      [
        {
          attribute: 'boss_monster_varieties_key',
        },
      ],
      {
        indexName: 'index_boss_monster_varieties_key',
      },
    );
    await queryInterface.addIndex(
      'bestiary_capturable_monsters',
      [
        {
          attribute: 'bestiary_genus_key',
        },
      ],
      {
        indexName: 'index_bestiary_genus_key',
      },
    );
    await queryInterface.addIndex(
      'bestiary_capturable_monsters',
      [
        {
          attribute: 'bestiary_capturable_monsters_key',
        },
      ],
      {
        indexName: 'index_bestiary_capturable_monsters_key',
      },
    );
    await queryInterface.addIndex(
      'bestiary_encounters',
      [
        {
          attribute: 'monster_packs_key',
        },
      ],
      {
        indexName: 'index_monster_packs_key',
      },
    );
    await queryInterface.addIndex(
      'bestiary_genus',
      [
        {
          attribute: 'bestiary_groups_key',
        },
      ],
      {
        indexName: 'index_bestiary_groups_key',
      },
    );
    await queryInterface.addIndex(
      'bestiary_groups',
      [
        {
          attribute: 'bestiary_families_key',
        },
      ],
      {
        indexName: 'index_bestiary_families_key',
      },
    );
    await queryInterface.addIndex(
      'bestiary_group__achievement_items',
      [
        {
          attribute: 'bestiary_group_row',
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
      'bestiary_nets',
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
      'bestiary_recipe_components',
      [
        {
          attribute: 'bestiary_families_key',
        },
      ],
      {
        indexName: 'index_bestiary_families_key',
      },
    );
    await queryInterface.addIndex(
      'bestiary_recipe_components',
      [
        {
          attribute: 'bestiary_groups_key',
        },
      ],
      {
        indexName: 'index_bestiary_groups_key',
      },
    );
    await queryInterface.addIndex(
      'bestiary_recipe_components',
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
      'bestiary_recipe_components',
      [
        {
          attribute: 'bestiary_genus_key',
        },
      ],
      {
        indexName: 'index_bestiary_genus_key',
      },
    );
    await queryInterface.addIndex(
      'bestiary_recipe__achievement_items',
      [
        {
          attribute: 'bestiary_recipe_row',
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
      'bestiary_recipe__bestiary_recipe_components',
      [
        {
          attribute: 'bestiary_recipe_row',
        },
        {
          attribute: 'bestiary_recipe_component_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'bestiary_recipe_item_creations',
      [
        {
          attribute: 'bestiary_recipes_key',
        },
      ],
      {
        indexName: 'index_bestiary_recipes_key',
      },
    );
    await queryInterface.addIndex(
      'bonus_master_exps',
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
          attribute: 'maps_key3',
        },
      ],
      {
        indexName: 'index_maps_key3',
      },
    );
    await queryInterface.addIndex(
      'map_fragment_mods',
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
      'map_fragment_mods',
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
      'multi_part_achievements',
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
      'net_tiers',
      [
        {
          attribute: 'base_item_types_key',
        },
      ],
      {
        indexName: 'index_base_item_types_key',
      },
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('net_tiers', 'index_base_item_types_key');
    await queryInterface.removeIndex(
      'multi_part_achievements',
      'index_achievement_items_key',
    );
    await queryInterface.removeIndex('map_fragment_mods', 'index_mods_key');
    await queryInterface.removeIndex(
      'map_fragment_mods',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex('maps', 'index_maps_key3');
    await queryInterface.removeIndex('maps', 'index_maps_key2');
    await queryInterface.removeIndex('maps', 'index_maps_key1');
    await queryInterface.removeIndex(
      'bonus_master_exps',
      'index_npc_master_key',
    );
    await queryInterface.removeIndex(
      'bestiary_recipe_item_creations',
      'index_bestiary_recipes_key',
    );
    await queryInterface.removeIndex(
      'bestiary_recipe__bestiary_recipe_components',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'bestiary_recipe__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'bestiary_recipe_components',
      'index_bestiary_genus_key',
    );
    await queryInterface.removeIndex(
      'bestiary_recipe_components',
      'index_mods_key',
    );
    await queryInterface.removeIndex(
      'bestiary_recipe_components',
      'index_bestiary_groups_key',
    );
    await queryInterface.removeIndex(
      'bestiary_recipe_components',
      'index_bestiary_families_key',
    );
    await queryInterface.removeIndex(
      'bestiary_nets',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex(
      'bestiary_group__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'bestiary_groups',
      'index_bestiary_families_key',
    );
    await queryInterface.removeIndex(
      'bestiary_genus',
      'index_bestiary_groups_key',
    );
    await queryInterface.removeIndex(
      'bestiary_encounters',
      'index_monster_packs_key',
    );
    await queryInterface.removeIndex(
      'bestiary_capturable_monsters',
      'index_bestiary_capturable_monsters_key',
    );
    await queryInterface.removeIndex(
      'bestiary_capturable_monsters',
      'index_bestiary_genus_key',
    );
    await queryInterface.removeIndex(
      'bestiary_capturable_monsters',
      'index_boss_monster_varieties_key',
    );
    await queryInterface.removeIndex(
      'bestiary_capturable_monsters',
      'index_bestiary_groups_key',
    );
    await queryInterface.removeIndex(
      'bestiary_capturable_monsters',
      'index_monster_varieties_key',
    );
    await queryInterface.removeIndex(
      'base_item_type__identify__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.removeColumn('world_areas', 'unknown96');
    await queryInterface.removeColumn('world_areas', 'unknown95');
    await queryInterface.removeColumn('world_areas', 'unknown94');
    await queryInterface.removeColumn('world_areas', 'bestiary_unknown99');
    await queryInterface.removeColumn('world_areas', 'bestiary_unknown101');
    await queryInterface.removeColumn('world_areas', 'bestiary_unknown100');
    await queryInterface.addColumn('world_areas', 'harbinger_spawn_chance', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'harbinger_count', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('words', 'unknown8');
    await queryInterface.addColumn('words', 'inflection', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('str_dex_int_missions', 'unknown15');
    await queryInterface.removeColumn('str_dex_int_missions', 'unknown14');
    await queryInterface.removeColumn('str_dex_int_missions', 'unknown13');
    await queryInterface.removeColumn('str_dex_int_missions', 'unknown12');
    await queryInterface.removeColumn('str_dex_int_missions', 'key6');
    await queryInterface.removeColumn('str_dex_int_missions', 'key5');
    await queryInterface.removeColumn('str_dex_int_missions', 'key4');
    await queryInterface.removeColumn('str_dex_int_missions', 'key3');
    await queryInterface.removeColumn('str_dex_int_missions', 'key2');
    await queryInterface.removeColumn('str_dex_int_missions', 'key1');
    await queryInterface.removeColumn('str_dex_int_missions', 'flag2');
    await queryInterface.removeColumn('str_dex_int_missions', 'flag1');
    await queryInterface.removeColumn('str_dex_int_missions', 'flag0');
    await queryInterface.addColumn('str_dex_int_missions', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('str_dex_int_missions', 'unknown4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn(
      'str_dex_int_missions',
      'object_count_total',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'str_dex_int_missions',
      'object_count_required',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn('str_dex_int_missions', 'npc_talk_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'str_dex_int_missions',
      'monster_packs_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn(
      'str_dex_int_missions',
      'has_objective_kill_exiles',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      },
    );
    await queryInterface.addColumn(
      'str_dex_int_missions',
      'has_objective_full_clear',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      },
    );
    await queryInterface.addColumn(
      'str_dex_int_missions',
      'has_objective_find_unique',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      },
    );
    await queryInterface.addColumn(
      'str_dex_int_missions',
      'has_objective_complete_master_mission',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      },
    );
    await queryInterface.addColumn(
      'str_dex_int_missions',
      'has_objective_boss_kill',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      },
    );
    await queryInterface.addColumn(
      'str_dex_int_missions',
      '_achievement_items_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.removeColumn(
      'str_dex_int_mission_extra_requirements',
      'unknown0',
    );
    await queryInterface.removeColumn(
      'str_dex_int_mission_extra_requirements',
      'flag0',
    );
    await queryInterface.removeColumn(
      'str_dex_int_mission_extra_requirements',
      'data0',
    );
    await queryInterface.renameColumn('quests', 'flag0', 'unknown1');
    await queryInterface.renameColumn('quests', 'flag1', 'flag0');
    await queryInterface.removeColumn('quest_rewards', 'unknown6');
    await queryInterface.removeColumn('quest_rewards', 'keys0');
    await queryInterface.removeColumn('quest_rewards', 'flag2');
    await queryInterface.removeColumn('quest_rewards', 'flag1');
    await queryInterface.addColumn('quest_rewards', 'unknown9', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('quest_rewards', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('quest_achievements', 'unknown3');
    await queryInterface.removeColumn('quest_achievements', 'unknown0');
    await queryInterface.removeColumn('quest_achievements', 'key0');
    await queryInterface.removeColumn(
      'quest_achievements',
      'achievement_items_keys',
    );
    await queryInterface.addColumn(
      'quest_achievements',
      'is_standard_achievement',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'quest_achievements',
      'is_hardcore_achievement',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn('quest_achievements', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('quest_achievements', 'data0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn(
      'quest_achievements',
      'achievement_items_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.removeColumn(
      'passive_skills',
      'buff_related_unknown2',
    );
    await queryInterface.renameColumn(
      'passive_skills',
      'unknown0',
      'stat5_value',
    );
    await queryInterface.removeColumn('pantheon_souls', 'key2');
    await queryInterface.removeColumn('pantheon_souls', 'key1');
    await queryInterface.renameColumn('pantheon_souls', 'unknown0', 'unknown2');
    await queryInterface.removeColumn('n_p_c_text_audios', 'unknown0');
    await queryInterface.addColumn('n_p_c_text_audios', 'inflection', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.renameColumn('n_p_c_shops', 'unknown0', 'unknown1');
    await queryInterface.renameColumn('n_p_c_shops', 'unknown1', 'unknown10');
    await queryInterface.renameColumn('n_p_c_shops', 'keys1', 'unknown11');
    await queryInterface.removeColumn('n_p_c_shops', 'unknown3');
    await queryInterface.removeColumn('misc_animateds', 'unknown0');
    await queryInterface.removeColumn(
      'microtransaction_combine_forumulas',
      'unknown1',
    );
    await queryInterface.removeColumn('maps', 'unknown0');
    await queryInterface.removeColumn('maps', 'maps_key3');
    await queryInterface.removeColumn('maps', 'maps_key2');
    await queryInterface.removeColumn('maps', 'maps_key1');
    await queryInterface.addColumn('maps', 'maps_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('maps', 'map_series_key', {
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
    await queryInterface.addColumn('maps', 'atlas_completion_maps_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('granted_effects', 'data4');
    await queryInterface.renameColumn('granted_effects', 'data3', 'unknown2');
    await queryInterface.removeColumn('buff_visuals', 'key0');
    await queryInterface.renameColumn(
      'base_item_types',
      'unknown3',
      'inflection',
    );
    await queryInterface.removeColumn('base_item_types', 'is_blessing');
    await queryInterface.removeColumn(
      'base_item_types',
      '_identify_achievement_items_cache',
    );
    await queryInterface.addColumn(
      'base_item_types',
      '_identify_rare_achievement_items_cache',
      {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    );

    await queryInterface.renameColumn('atlas_nodes', 'unknown2', 'unknown6');
    await queryInterface.renameColumn('atlas_nodes', 'unknown1', 'unknown5');
    await queryInterface.renameColumn('atlas_nodes', 'unknown0', 'unknown4');
    await queryInterface.removeColumn('atlas_nodes', 'unknown3');
    await queryInterface.removeColumn('archetypes', 'background_image_file');
    await queryInterface.removeColumn('achievements', 'flag7');
    await queryInterface.removeColumn('achievements', 'flag6');
    await queryInterface.removeColumn('achievements', 'flag5');
    await queryInterface.addIndex(
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
    await queryInterface.addIndex(
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
    await queryInterface.addIndex(
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
          attribute: 'maps_key',
        },
      ],
      {
        indexName: 'index_maps_key',
      },
    );
    await queryInterface.dropTable('net_tiers');
    await queryInterface.dropTable('multi_part_achievements');
    await queryInterface.dropTable(
      'microtransaction_periodic_character_effect_variations',
    );
    await queryInterface.dropTable('map_fragment_mods');
    await queryInterface.dropTable('geometry_attack_variations');
    await queryInterface.dropTable('geometry_attack_target_types');
    await queryInterface.dropTable('geometry_attack_shapes');
    await queryInterface.dropTable('bonus_master_exps');
    await queryInterface.dropTable('bestiary_recipe_item_creations');
    await queryInterface.dropTable(
      'bestiary_recipe__bestiary_recipe_components',
    );
    await queryInterface.dropTable('bestiary_recipe__achievement_items');
    await queryInterface.dropTable('bestiary_recipe_components');
    await queryInterface.dropTable('bestiary_recipes');
    await queryInterface.dropTable('bestiary_nets');
    await queryInterface.dropTable('bestiary_group__achievement_items');
    await queryInterface.dropTable('bestiary_groups');
    await queryInterface.dropTable('bestiary_genus');
    await queryInterface.dropTable('bestiary_families');
    await queryInterface.dropTable('bestiary_encounters');
    await queryInterface.dropTable('bestiary_capturable_monsters');
    await queryInterface.dropTable(
      'base_item_type__identify__achievement_items',
    );
    await queryInterface.dropTable('archetype_rewards');
  },
};
