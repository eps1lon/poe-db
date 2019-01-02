const { underscore } = require('../util');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'advanced_skills_tutorials',
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
      'animations',
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
      'custom_league_mods',
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
        data0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'custom_league_properties',
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
      'delve_azurite_shops',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        spawn_weight: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        cost: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_depth: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        is_enabled: {
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
      'delve_biomes',
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
        ui_image: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        data3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        '2_d_art': {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _world_areas_cache: {
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
      'delve_biome__achievement_items',
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
        delve_biome_row: {
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
      'delve_biome__world_areas',
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
        delve_biome_row: {
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
    await queryInterface.createTable(
      'delve_catchup_depths',
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
      'delve_crafting_modifiers',
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
        unknown0: {
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
        keys9: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        _mods_0_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _unknown_tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _mods_1_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _delve_crafting_tags0_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _delve_crafting_tags1_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _sell_price_mods_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _weight_tags_cache: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        _delve_crafting_modifier_descriptions_cache: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'delve_crafting_modifier_descriptions',
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
      'delve_crafting_modifier__delve_crafting_modifier_descriptions',
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
        delve_crafting_modifier_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        delve_crafting_modifier_description_row: {
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
      'delve_crafting_modifier__delve_crafting_tags0s',
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
        delve_crafting_modifier_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        delve_crafting_tag_row: {
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
      'delve_crafting_modifier__delve_crafting_tags1s',
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
        delve_crafting_modifier_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        delve_crafting_tag_row: {
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
      'delve_crafting_modifier__mods_0s',
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
        keys1: {
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
        delve_crafting_modifier_row: {
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
      'delve_crafting_modifier__mods_1s',
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
        keys0: {
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
        delve_crafting_modifier_row: {
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
      'delve_crafting_modifier__sell_price__mods',
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
        delve_crafting_modifier_row: {
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
      'delve_crafting_modifier__unknown__tags',
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
        delve_crafting_modifier_row: {
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
      'delve_crafting_modifier__weight__tags',
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
        delve_crafting_modifier_row: {
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
      'delve_crafting_tags',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        item_class: {
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
        tags_key: {
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
      'delve_dynamites',
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
        key1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
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
        unknown16: {
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
        flare_misc_objects_key: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        dynamite_misc_objects_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'delve_features',
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
        spawn_weight: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        image: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        min_tier: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        tier: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        min_depth: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        description: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown11: {
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
      'delve_feature__achievement_items',
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
        delve_feature_row: {
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
      'delve_feature_rewards',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        delve_rewards_key: {
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
        delve_features_key: {
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
      'delve_flares',
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
      'delve_level_scalings',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        depth: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        monster_level: {
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
        monster_level2: {
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
        darkness_resistance: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        light_radius: {
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
      'delve_monster_spawners',
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
          type: Sequelize.INTEGER,
        },
        unknown2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
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
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag2: {
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
        flag7: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag8: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag9: {
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
        flag10: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag11: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown19: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        script: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        flag12: {
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
      'delve_resource_per_levels',
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
        resources: {
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
      'delve_rooms',
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
        arm_file: {
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
        delve_features_key: {
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
      'delve_upgrades',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        upgrade_level: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        stats_values: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        cost: {
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
        delve_upgrade_type_key: {
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
      'delve_upgrade__stats',
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
        delve_upgrade_row: {
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
    await queryInterface.createTable(
      'delve_upgrade_types',
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
      'drop_effects',
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
      'execute_g_e_a_ls',
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
        keys0: {
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
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
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
        unknown11: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
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
        flag3: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown18: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag4: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown19: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag5: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown22: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown20: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag6: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        unknown23: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        metadata_i_ds: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        script_command: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown28: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown29: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown30: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown31: {
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
      'ground_effects',
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
        _misc_objects_cache: {
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
        ground_effect_types_key: {
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
      'ground_effect__misc_objects',
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
        ground_effect_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        misc_object_row: {
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
      'ground_effect_types',
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
      'league_infos',
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
        panel_image: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        header_image: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        screenshots: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        unknown6: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
        item_images: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        hover_images: {
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
      'melees',
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
        claw_epk_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        one_hand_epk_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        two_hand_epk_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        staff_main_hand_epk_file: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        staff_off_hand_epk_file: {
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
        claw_epk_file2: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        one_hand_epk_file2: {
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
      'microtransaction_rarity_displays',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        rarity: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        image_file: {
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
      'mod_type__tags',
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
      'monster_skills_alive_deads',
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
      'monster_skills_attack_spells',
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
      'monster_skills_hulls',
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
      'monster_skills_targets',
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
      'move_daemons',
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
        key0: {
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
        flag0: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        flag2: {
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
        unknown21: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown22: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown23: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown24: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown27: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
        unknown25: {
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
      'n_p_c__n_p_c_audio1s',
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
        npc_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_audio_row: {
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
      'n_p_c__n_p_c_audio2s',
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
        npc_row: {
          allowNull: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        npc_audio_row: {
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
      'quest_state_calcuations',
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
      'session_quest_flags',
      {
        row: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
        quest_flag: {
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
      'skill_gem_infos',
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
        video_url1: {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
        video_url2: {
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
        skill_gems_key: {
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
      'skill_surge_effects',
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
        granted_effects_key: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'skill_trap_variations',
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
        metadata: {
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
      'suicide_explosions',
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
        key1: {
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
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        engine: 'MYISAM',
      },
    );
    await queryInterface.createTable(
      'super_shaper_influences',
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
    await queryInterface.removeIndex('essences', 'index_quiver_mods_key');
    await queryInterface.removeIndex('essences', [
      'display_1_hand_weapon_mods_key',
    ]);
    await queryInterface.removeIndex('essences', [
      'display_2_hand_weapon_mods_key',
    ]);
    await queryInterface.removeIndex('essences', [
      'display_2_hand_melee_weapon_mods_key',
    ]);
    await queryInterface.removeIndex('essences', ['display_ranged_mods_key']);
    await queryInterface.removeIndex('essences', ['2_hand_sword_mods_key']);
    await queryInterface.removeIndex('essences', ['2_hand_axe_mods_key']);
    await queryInterface.removeIndex('essences', ['2_hand_mace_mods_key']);
    await queryInterface.removeIndex('essences', ['1_hand_sword_mods_key']);
    await queryInterface.removeIndex('essences', [
      '1_hand_thrusting_sword_mods_key',
    ]);
    await queryInterface.removeIndex('essences', ['1_hand_axe_mods_key']);
    await queryInterface.removeIndex('essences', ['1_hand_mace_mods_key']);
    await queryInterface.removeIndex('essences', ['amulet_mods_key']);
    await queryInterface.removeIndex('essences', ['display_jewellry_mods_key']);
    await queryInterface.removeIndex('essences', ['display_item_mods_key']);
    await queryInterface.removeIndex('maps', 'index_maps_key1');
    await queryInterface.removeIndex('n_p_cs', 'index_npc_audio_key1');
    await queryInterface.removeIndex('n_p_cs', 'index_npc_audio_key2');
    await queryInterface.removeColumn('active_skills', 'unknown19');
    await queryInterface.addColumn('active_skills', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('active_skills', 'flag3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn(
      'active_skills',
      'minion_active_skill_types',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('archetypes', 'archetype_image', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('buff_definitions', 'flag12', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('chest_item_templates', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('chest_item_templates', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('chests', 'inherits_from', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('crafting_bench_options', 'unknown1');
    await queryInterface.addColumn('crafting_bench_options', 'data0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('crafting_bench_options', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('currency_items', 'key', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('currency_items', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('essences', '1_hand_axe_mods_key');
    await queryInterface.removeColumn('essences', '1_hand_mace_mods_key');
    await queryInterface.removeColumn('essences', '1_hand_sword_mods_key');
    await queryInterface.removeColumn(
      'essences',
      '1_hand_thrusting_sword_mods_key',
    );
    await queryInterface.removeColumn('essences', '2_hand_axe_mods_key');
    await queryInterface.removeColumn('essences', '2_hand_mace_mods_key');
    await queryInterface.removeColumn('essences', '2_hand_sword_mods_key');
    await queryInterface.removeColumn('essences', 'amulet_mods_key');
    await queryInterface.removeColumn(
      'essences',
      'display_1_hand_weapon_mods_key',
    );
    await queryInterface.removeColumn(
      'essences',
      'display_2_hand_melee_weapon_mods_key',
    );
    await queryInterface.removeColumn(
      'essences',
      'display_2_hand_weapon_mods_key',
    );
    await queryInterface.removeColumn('essences', 'display_item_mods_key');
    await queryInterface.removeColumn('essences', 'display_jewellry_mods_key');
    await queryInterface.removeColumn('essences', 'display_ranged_mods_key');
    await queryInterface.removeColumn('essences', 'quiver_mods_key');
    await queryInterface.removeColumn('essences', 'tier');
    await queryInterface.addColumn('essences', 'amulets_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', 'display_items_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', 'display_jewellery_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'essences',
      'display_one_hand_weapon_mods_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('essences', 'display_quiver_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'essences',
      'display_ranged_weapon_mods_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn(
      'essences',
      'display_two_hand_melee_weapon_mods_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn(
      'essences',
      'display_two_hand_weapon_mods_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('essences', 'level', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('essences', 'one_hand_axe_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', 'one_hand_mace_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', 'one_hand_sword_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'essences',
      'one_hand_thrusting_sword_mods_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('essences', 'two_hand_axe_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', 'two_hand_mace_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', 'two_hand_sword_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('extra_terrain_features', 'unknown3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('granted_effects', 'data0');
    await queryInterface.removeColumn('granted_effects', 'data1');
    await queryInterface.removeColumn('granted_effects', 'data2');
    await queryInterface.removeColumn('granted_effects', 'flag0');
    await queryInterface.addColumn(
      'granted_effects',
      'added_active_skill_types',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'granted_effects',
      'allowed_active_skill_types',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn(
      'granted_effects',
      'excluded_active_skill_types',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('granted_effects', 'key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('granted_effects', 'supports_gems_only', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn(
      'granted_effects_per_levels',
      'vaal_soul_gain_prevention_time',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'level_relative_player_scalings',
      'monster_level',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'level_relative_player_scalings',
      'player_level',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'level_relative_player_scalings',
      'unknown2',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'level_relative_player_scalings',
      'unknown3',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'level_relative_player_scalings',
      'unknown4',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'level_relative_player_scalings',
      'unknown5',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'level_relative_player_scalings',
      'unknown6',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'level_relative_player_scalings',
      'unknown7',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.removeColumn('maps', 'maps_key1');
    await queryInterface.removeColumn('maps', 'unknown0');
    await queryInterface.addColumn('maps', 'map_series_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('maps', 'upgraded_from_maps_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('mod_types', '_tags_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('monster_mortars', 'unknown1');
    await queryInterface.addColumn('monster_mortars', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('monster_mortars', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('monster_mortars', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('monster_mortars', 'flag3', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('monster_mortars', 'flag4', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('monster_mortars', 'key2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('monster_projectile_spells', 'unknown0');
    await queryInterface.addColumn('monster_projectile_spells', 'key1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('monster_varieties', 'unknown14');
    await queryInterface.addColumn('monster_varieties', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('monster_varieties', 'flag2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn(
      'monster_varieties',
      'sink_animation_ao_file',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.addColumn('monster_varieties', 'unknown101', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('n_p_c_audios', 'unknown2');
    await queryInterface.addColumn('n_p_c_audios', 'data0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_audios', 'data1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_c_audios', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_c_talks', 'flag5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('n_p_cs', 'npc_audio_key1');
    await queryInterface.removeColumn('n_p_cs', 'npc_audio_key2');
    await queryInterface.removeColumn('n_p_cs', 'unknown5');
    await queryInterface.removeColumn('n_p_cs', 'unknown7');
    await queryInterface.removeColumn('n_p_cs', 'unknown8');
    await queryInterface.addColumn('n_p_cs', '_npc_audio1_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_cs', '_npc_audio2_cache', {
      allowNull: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('n_p_cs', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_cs', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn(
      'passive_skills',
      'buff_related_unknown2',
    );
    await queryInterface.addColumn(
      'passive_skills',
      'granted_buff_stat_values',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      },
    );
    await queryInterface.removeColumn('quest_states', 'unknown2');
    await queryInterface.addColumn('quest_states', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn(
      'quest_states',
      'quest_state_calcuation_key',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
    );
    await queryInterface.addColumn(
      'str_dex_int_mission_extra_requirements',
      'key0',
      {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('tutorials', 'flag1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('world_areas', 'delve_key0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('world_areas', 'delve_unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('world_areas', 'delve_unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addIndex(
      'delve_azurite_shops',
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
      'delve_biome__achievement_items',
      [
        {
          attribute: 'delve_biome_row',
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
      'delve_biome__world_areas',
      [
        {
          attribute: 'delve_biome_row',
        },
        {
          attribute: 'world_area_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'delve_crafting_modifiers',
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
      'delve_crafting_modifier__delve_crafting_modifier_descriptions',
      [
        {
          attribute: 'delve_crafting_modifier_row',
        },
        {
          attribute: 'delve_crafting_modifier_description_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'delve_crafting_modifier__delve_crafting_tags0s',
      [
        {
          attribute: 'delve_crafting_modifier_row',
        },
        {
          attribute: 'delve_crafting_tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'delve_crafting_modifier__delve_crafting_tags1s',
      [
        {
          attribute: 'delve_crafting_modifier_row',
        },
        {
          attribute: 'delve_crafting_tag_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'delve_crafting_modifier__mods_0s',
      [
        {
          attribute: 'delve_crafting_modifier_row',
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
      'delve_crafting_modifier__mods_1s',
      [
        {
          attribute: 'delve_crafting_modifier_row',
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
      'delve_crafting_modifier__sell_price__mods',
      [
        {
          attribute: 'delve_crafting_modifier_row',
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
      'delve_crafting_modifier__unknown__tags',
      [
        {
          attribute: 'delve_crafting_modifier_row',
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
      'delve_crafting_modifier__weight__tags',
      [
        {
          attribute: 'delve_crafting_modifier_row',
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
      'delve_crafting_tags',
      [
        {
          attribute: 'tags_key',
        },
      ],
      {
        indexName: 'index_tags_key',
      },
    );
    await queryInterface.addIndex(
      'delve_dynamites',
      [
        {
          attribute: 'flare_misc_objects_key',
        },
      ],
      {
        indexName: 'index_flare_misc_objects_key',
      },
    );
    await queryInterface.addIndex(
      'delve_dynamites',
      [
        {
          attribute: 'dynamite_misc_objects_key',
        },
      ],
      {
        indexName: 'index_dynamite_misc_objects_key',
      },
    );
    await queryInterface.addIndex(
      'delve_dynamites',
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
      'delve_features',
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
      'delve_feature__achievement_items',
      [
        {
          attribute: 'delve_feature_row',
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
      'delve_feature_rewards',
      [
        {
          attribute: 'delve_features_key',
        },
      ],
      {
        indexName: 'index_delve_features_key',
      },
    );
    await queryInterface.addIndex(
      'delve_rooms',
      [
        {
          attribute: 'delve_features_key',
        },
      ],
      {
        indexName: 'index_delve_features_key',
      },
    );
    await queryInterface.addIndex(
      'delve_upgrades',
      [
        {
          attribute: 'delve_upgrade_type_key',
        },
      ],
      {
        indexName: 'index_delve_upgrade_type_key',
      },
    );
    await queryInterface.addIndex(
      'delve_upgrades',
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
      'delve_upgrade__stats',
      [
        {
          attribute: 'delve_upgrade_row',
        },
        {
          attribute: 'stat_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'display_quiver_mods_key',
        },
      ],
      {
        indexName: 'index_display_quiver_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'display_one_hand_weapon_mods_key',
        },
      ],
      {
        indexName: 'index_display_one_hand_weapon_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'display_two_hand_weapon_mods_key',
        },
      ],
      {
        indexName: 'index_display_two_hand_weapon_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'display_two_hand_melee_weapon_mods_key',
        },
      ],
      {
        indexName: 'index_display_two_hand_melee_weapon_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'display_ranged_weapon_mods_key',
        },
      ],
      {
        indexName: 'index_display_ranged_weapon_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'two_hand_sword_mods_key',
        },
      ],
      {
        indexName: 'index_two_hand_sword_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'two_hand_axe_mods_key',
        },
      ],
      {
        indexName: 'index_two_hand_axe_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'two_hand_mace_mods_key',
        },
      ],
      {
        indexName: 'index_two_hand_mace_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'one_hand_sword_mods_key',
        },
      ],
      {
        indexName: 'index_one_hand_sword_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'one_hand_thrusting_sword_mods_key',
        },
      ],
      {
        indexName: 'index_one_hand_thrusting_sword_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'one_hand_axe_mods_key',
        },
      ],
      {
        indexName: 'index_one_hand_axe_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'one_hand_mace_mods_key',
        },
      ],
      {
        indexName: 'index_one_hand_mace_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'amulets_mods_key',
        },
      ],
      {
        indexName: 'index_amulets_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'display_jewellery_mods_key',
        },
      ],
      {
        indexName: 'index_display_jewellery_mods_key',
      },
    );
    await queryInterface.addIndex(
      'essences',
      [
        {
          attribute: 'display_items_mods_key',
        },
      ],
      {
        indexName: 'index_display_items_mods_key',
      },
    );
    await queryInterface.addIndex(
      'ground_effects',
      [
        {
          attribute: 'ground_effect_types_key',
        },
      ],
      {
        indexName: 'index_ground_effect_types_key',
      },
    );
    await queryInterface.addIndex(
      'ground_effect__misc_objects',
      [
        {
          attribute: 'ground_effect_row',
        },
        {
          attribute: 'misc_object_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'maps',
      [
        {
          attribute: 'upgraded_from_maps_key',
        },
      ],
      {
        indexName: 'index_upgraded_from_maps_key',
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
      'mod_type__tags',
      [
        {
          attribute: 'mod_type_row',
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
      'n_p_c__n_p_c_audio1s',
      [
        {
          attribute: 'npc_row',
        },
        {
          attribute: 'npc_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'n_p_c__n_p_c_audio2s',
      [
        {
          attribute: 'npc_row',
        },
        {
          attribute: 'npc_audio_row',
        },
      ],
      {
        indexName: 'composite primary_alias',
      },
    );
    await queryInterface.addIndex(
      'skill_gem_infos',
      [
        {
          attribute: 'skill_gems_key',
        },
      ],
      {
        indexName: 'index_skill_gems_key',
      },
    );
    await queryInterface.addIndex(
      'skill_surge_effects',
      [
        {
          attribute: 'granted_effects_key',
        },
      ],
      {
        indexName: 'index_granted_effects_key',
      },
    );
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(
      'skill_surge_effects',
      'index_misc_animated_key',
    );
    await queryInterface.removeIndex(
      'skill_surge_effects',
      'index_granted_effects_key',
    );
    await queryInterface.removeIndex('skill_gem_infos', 'index_skill_gems_key');
    await queryInterface.removeIndex(
      'n_p_c__n_p_c_audio2s',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'n_p_c__n_p_c_audio1s',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'mod_type__tags',
      'composite primary_alias',
    );
    await queryInterface.removeIndex('maps', 'index_map_series_key');
    await queryInterface.removeIndex('maps', 'index_upgraded_from_maps_key');
    await queryInterface.removeIndex(
      'ground_effect__misc_objects',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'ground_effects',
      'index_ground_effect_types_key',
    );
    await queryInterface.removeIndex(
      'essences',
      'index_display_items_mods_key',
    );
    await queryInterface.removeIndex(
      'essences',
      'index_display_jewellery_mods_key',
    );
    await queryInterface.removeIndex('essences', 'index_amulets_mods_key');
    await queryInterface.removeIndex(
      'essences',
      'index_one_hand_mace_mods_key',
    );
    await queryInterface.removeIndex('essences', 'index_one_hand_axe_mods_key');
    await queryInterface.removeIndex(
      'essences',
      'index_one_hand_thrusting_sword_mods_key',
    );
    await queryInterface.removeIndex(
      'essences',
      'index_one_hand_sword_mods_key',
    );
    await queryInterface.removeIndex(
      'essences',
      'index_two_hand_mace_mods_key',
    );
    await queryInterface.removeIndex('essences', 'index_two_hand_axe_mods_key');
    await queryInterface.removeIndex(
      'essences',
      'index_two_hand_sword_mods_key',
    );
    await queryInterface.removeIndex(
      'essences',
      'index_display_ranged_weapon_mods_key',
    );
    await queryInterface.removeIndex(
      'essences',
      'index_display_two_hand_melee_weapon_mods_key',
    );
    await queryInterface.removeIndex(
      'essences',
      'index_display_two_hand_weapon_mods_key',
    );
    await queryInterface.removeIndex(
      'essences',
      'index_display_one_hand_weapon_mods_key',
    );
    await queryInterface.removeIndex(
      'essences',
      'index_display_quiver_mods_key',
    );
    await queryInterface.removeIndex(
      'delve_upgrade__stats',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_upgrades',
      'index_achievement_items_key',
    );
    await queryInterface.removeIndex(
      'delve_upgrades',
      'index_delve_upgrade_type_key',
    );
    await queryInterface.removeIndex('delve_rooms', 'index_delve_features_key');
    await queryInterface.removeIndex(
      'delve_feature_rewards',
      'index_delve_features_key',
    );
    await queryInterface.removeIndex(
      'delve_feature__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.removeIndex('delve_features', 'index_world_areas_key');
    await queryInterface.removeIndex(
      'delve_dynamites',
      'index_misc_animated_key',
    );
    await queryInterface.removeIndex(
      'delve_dynamites',
      'index_dynamite_misc_objects_key',
    );
    await queryInterface.removeIndex(
      'delve_dynamites',
      'index_flare_misc_objects_key',
    );
    await queryInterface.removeIndex('delve_crafting_tags', 'index_tags_key');
    await queryInterface.removeIndex(
      'delve_crafting_modifier__weight__tags',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_crafting_modifier__unknown__tags',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_crafting_modifier__sell_price__mods',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_crafting_modifier__mods_1s',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_crafting_modifier__mods_0s',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_crafting_modifier__delve_crafting_tags1s',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_crafting_modifier__delve_crafting_tags0s',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_crafting_modifier__delve_crafting_modifier_descriptions',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_crafting_modifiers',
      'index_base_item_types_key',
    );
    await queryInterface.removeIndex(
      'delve_biome__world_areas',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_biome__achievement_items',
      'composite primary_alias',
    );
    await queryInterface.removeIndex(
      'delve_azurite_shops',
      'index_base_item_types_key',
    );
    await queryInterface.removeColumn('world_areas', 'delve_unknown1');
    await queryInterface.removeColumn('world_areas', 'delve_unknown0');
    await queryInterface.removeColumn('world_areas', 'delve_key0');
    await queryInterface.removeColumn('tutorials', 'flag1');
    await queryInterface.removeColumn(
      'str_dex_int_mission_extra_requirements',
      'key0',
    );
    await queryInterface.removeColumn(
      'quest_states',
      'quest_state_calcuation_key',
    );
    await queryInterface.removeColumn('quest_states', 'flag1');
    await queryInterface.addColumn('quest_states', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn(
      'passive_skills',
      'granted_buff_stat_values',
    );
    await queryInterface.addColumn('passive_skills', 'buff_related_unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('n_p_cs', 'unknown1');
    await queryInterface.removeColumn('n_p_cs', 'unknown0');
    await queryInterface.removeColumn('n_p_cs', '_npc_audio2_cache');
    await queryInterface.removeColumn('n_p_cs', '_npc_audio1_cache');
    await queryInterface.addColumn('n_p_cs', 'unknown8', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_cs', 'unknown7', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_cs', 'unknown5', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('n_p_cs', 'npc_audio_key2', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('n_p_cs', 'npc_audio_key1', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('n_p_c_talks', 'flag5');
    await queryInterface.removeColumn('n_p_c_audios', 'unknown0');
    await queryInterface.removeColumn('n_p_c_audios', 'data1');
    await queryInterface.removeColumn('n_p_c_audios', 'data0');
    await queryInterface.addColumn('n_p_c_audios', 'unknown2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('monster_varieties', 'unknown101');
    await queryInterface.removeColumn(
      'monster_varieties',
      'sink_animation_ao_file',
    );
    await queryInterface.removeColumn('monster_varieties', 'flag2');
    await queryInterface.removeColumn('monster_varieties', 'flag1');
    await queryInterface.addColumn('monster_varieties', 'unknown14', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('monster_projectile_spells', 'key1');
    await queryInterface.addColumn('monster_projectile_spells', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('monster_mortars', 'key2');
    await queryInterface.removeColumn('monster_mortars', 'flag4');
    await queryInterface.removeColumn('monster_mortars', 'flag3');
    await queryInterface.removeColumn('monster_mortars', 'flag2');
    await queryInterface.removeColumn('monster_mortars', 'flag1');
    await queryInterface.removeColumn('monster_mortars', 'flag0');
    await queryInterface.addColumn('monster_mortars', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('mod_types', '_tags_cache');
    await queryInterface.removeColumn('maps', 'upgraded_from_maps_key');
    await queryInterface.removeColumn('maps', 'map_series_key');
    await queryInterface.addColumn('maps', 'unknown0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('maps', 'maps_key1', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn(
      'level_relative_player_scalings',
      'unknown7',
    );
    await queryInterface.removeColumn(
      'level_relative_player_scalings',
      'unknown6',
    );
    await queryInterface.removeColumn(
      'level_relative_player_scalings',
      'unknown5',
    );
    await queryInterface.removeColumn(
      'level_relative_player_scalings',
      'unknown4',
    );
    await queryInterface.removeColumn(
      'level_relative_player_scalings',
      'unknown3',
    );
    await queryInterface.removeColumn(
      'level_relative_player_scalings',
      'unknown2',
    );
    await queryInterface.removeColumn(
      'level_relative_player_scalings',
      'player_level',
    );
    await queryInterface.removeColumn(
      'level_relative_player_scalings',
      'monster_level',
    );
    await queryInterface.removeColumn(
      'granted_effects_per_levels',
      'vaal_soul_gain_prevention_time',
    );
    await queryInterface.removeColumn('granted_effects', 'supports_gems_only');
    await queryInterface.removeColumn('granted_effects', 'key0');
    await queryInterface.removeColumn(
      'granted_effects',
      'excluded_active_skill_types',
    );
    await queryInterface.removeColumn(
      'granted_effects',
      'allowed_active_skill_types',
    );
    await queryInterface.removeColumn(
      'granted_effects',
      'added_active_skill_types',
    );
    await queryInterface.addColumn('granted_effects', 'flag0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('granted_effects', 'data2', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('granted_effects', 'data1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('granted_effects', 'data0', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('extra_terrain_features', 'unknown3');
    await queryInterface.removeColumn('extra_terrain_features', 'unknown2');
    await queryInterface.removeColumn('essences', 'two_hand_sword_mods_key');
    await queryInterface.removeColumn('essences', 'two_hand_mace_mods_key');
    await queryInterface.removeColumn('essences', 'two_hand_axe_mods_key');
    await queryInterface.removeColumn(
      'essences',
      'one_hand_thrusting_sword_mods_key',
    );
    await queryInterface.removeColumn('essences', 'one_hand_sword_mods_key');
    await queryInterface.removeColumn('essences', 'one_hand_mace_mods_key');
    await queryInterface.removeColumn('essences', 'one_hand_axe_mods_key');
    await queryInterface.removeColumn('essences', 'level');
    await queryInterface.removeColumn(
      'essences',
      'display_two_hand_weapon_mods_key',
    );
    await queryInterface.removeColumn(
      'essences',
      'display_two_hand_melee_weapon_mods_key',
    );
    await queryInterface.removeColumn(
      'essences',
      'display_ranged_weapon_mods_key',
    );
    await queryInterface.removeColumn('essences', 'display_quiver_mods_key');
    await queryInterface.removeColumn(
      'essences',
      'display_one_hand_weapon_mods_key',
    );
    await queryInterface.removeColumn('essences', 'display_jewellery_mods_key');
    await queryInterface.removeColumn('essences', 'display_items_mods_key');
    await queryInterface.removeColumn('essences', 'amulets_mods_key');
    await queryInterface.addColumn('essences', 'tier', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('essences', 'quiver_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', 'display_ranged_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', 'display_jewellry_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', 'display_item_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'essences',
      'display_2_hand_weapon_mods_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn(
      'essences',
      'display_2_hand_melee_weapon_mods_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn(
      'essences',
      'display_1_hand_weapon_mods_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('essences', 'amulet_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', '2_hand_sword_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', '2_hand_mace_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', '2_hand_axe_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn(
      'essences',
      '1_hand_thrusting_sword_mods_key',
      {
        allowNull: true,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      },
    );
    await queryInterface.addColumn('essences', '1_hand_sword_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', '1_hand_mace_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.addColumn('essences', '1_hand_axe_mods_key', {
      allowNull: true,
      type: Sequelize.BIGINT({
        unsigned: true,
      }),
    });
    await queryInterface.removeColumn('currency_items', 'key0');
    await queryInterface.removeColumn('currency_items', 'key');
    await queryInterface.removeColumn('crafting_bench_options', 'unknown0');
    await queryInterface.removeColumn('crafting_bench_options', 'data0');
    await queryInterface.addColumn('crafting_bench_options', 'unknown1', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.removeColumn('chests', 'inherits_from');
    await queryInterface.removeColumn('chest_item_templates', 'unknown3');
    await queryInterface.removeColumn('chest_item_templates', 'unknown2');
    await queryInterface.removeColumn('buff_definitions', 'flag12');
    await queryInterface.removeColumn('archetypes', 'archetype_image');
    await queryInterface.removeColumn(
      'active_skills',
      'minion_active_skill_types',
    );
    await queryInterface.removeColumn('active_skills', 'flag3');
    await queryInterface.removeColumn('active_skills', 'flag2');
    await queryInterface.addColumn('active_skills', 'unknown19', {
      allowNull: true,
      primaryKey: false,
      type: Sequelize.TEXT,
    });
    await queryInterface.addIndex(
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
    await queryInterface.addIndex(
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
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Item_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Jewellry_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('Amulet_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('1HandMace_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('1HandAxe_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('1HandThrustingSword_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('1HandSword_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('2HandMace_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('2HandAxe_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('2HandSword_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Ranged_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_2HandMeleeWeapon_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_2HandWeapon_ModsKey')],
    });
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_1HandWeapon_ModsKey')],
    });
    await queryInterface.addIndex(
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
    await queryInterface.dropTable('super_shaper_influences');
    await queryInterface.dropTable('suicide_explosions');
    await queryInterface.dropTable('skill_trap_variations');
    await queryInterface.dropTable('skill_surge_effects');
    await queryInterface.dropTable('skill_gem_infos');
    await queryInterface.dropTable('session_quest_flags');
    await queryInterface.dropTable('quest_state_calcuations');
    await queryInterface.dropTable('n_p_c__n_p_c_audio2s');
    await queryInterface.dropTable('n_p_c__n_p_c_audio1s');
    await queryInterface.dropTable('move_daemons');
    await queryInterface.dropTable('monster_skills_targets');
    await queryInterface.dropTable('monster_skills_hulls');
    await queryInterface.dropTable('monster_skills_attack_spells');
    await queryInterface.dropTable('monster_skills_alive_deads');
    await queryInterface.dropTable('mod_type__tags');
    await queryInterface.dropTable('microtransaction_rarity_displays');
    await queryInterface.dropTable('melees');
    await queryInterface.dropTable('league_infos');
    await queryInterface.dropTable('ground_effect_types');
    await queryInterface.dropTable('ground_effect__misc_objects');
    await queryInterface.dropTable('ground_effects');
    await queryInterface.dropTable('execute_g_e_a_ls');
    await queryInterface.dropTable('drop_effects');
    await queryInterface.dropTable('delve_upgrade_types');
    await queryInterface.dropTable('delve_upgrade__stats');
    await queryInterface.dropTable('delve_upgrades');
    await queryInterface.dropTable('delve_rooms');
    await queryInterface.dropTable('delve_resource_per_levels');
    await queryInterface.dropTable('delve_monster_spawners');
    await queryInterface.dropTable('delve_level_scalings');
    await queryInterface.dropTable('delve_flares');
    await queryInterface.dropTable('delve_feature_rewards');
    await queryInterface.dropTable('delve_feature__achievement_items');
    await queryInterface.dropTable('delve_features');
    await queryInterface.dropTable('delve_dynamites');
    await queryInterface.dropTable('delve_crafting_tags');
    await queryInterface.dropTable('delve_crafting_modifier__weight__tags');
    await queryInterface.dropTable('delve_crafting_modifier__unknown__tags');
    await queryInterface.dropTable('delve_crafting_modifier__sell_price__mods');
    await queryInterface.dropTable('delve_crafting_modifier__mods_1s');
    await queryInterface.dropTable('delve_crafting_modifier__mods_0s');
    await queryInterface.dropTable(
      'delve_crafting_modifier__delve_crafting_tags1s',
    );
    await queryInterface.dropTable(
      'delve_crafting_modifier__delve_crafting_tags0s',
    );
    await queryInterface.dropTable(
      'delve_crafting_modifier__delve_crafting_modifier_descriptions',
    );
    await queryInterface.dropTable('delve_crafting_modifier_descriptions');
    await queryInterface.dropTable('delve_crafting_modifiers');
    await queryInterface.dropTable('delve_catchup_depths');
    await queryInterface.dropTable('delve_biome__world_areas');
    await queryInterface.dropTable('delve_biome__achievement_items');
    await queryInterface.dropTable('delve_biomes');
    await queryInterface.dropTable('delve_azurite_shops');
    await queryInterface.dropTable('custom_league_properties');
    await queryInterface.dropTable('custom_league_mods');
    await queryInterface.dropTable('animations');
    await queryInterface.dropTable('advanced_skills_tutorials');
  },
};
