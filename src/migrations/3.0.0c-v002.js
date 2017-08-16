module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.changeColumn('achievements', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievements', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievements', 'objective', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievements', 'unknown_unique', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievements', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievements', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievements', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievements', 'flag3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievements', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievements', 'flag4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievement_items', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievement_items', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_items', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_items', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievement_items', 'completions_required', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_items', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievement_set_rewards', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_set_rewards', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_sets_displays', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_sets_displays', 'title', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'displayed_name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'index3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'icon_dds_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'active_skills',
        'active_skill_target_types',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('active_skills', 'active_skill_types', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'website_description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'website_image', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('active_skills', 'unknown13', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('active_skills', 'skill_totem_id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('active_skills', 'is_manually_casted', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('active_skills', 'unknown19', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'class_no', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('ascendancies', 'coordinate_rect', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'rgb_flavour_text_colour', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'flavour_text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'ogg_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('atlas_nodes', 'x', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.FLOAT,
      }),
      queryInterface.changeColumn('atlas_nodes', 'y', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.FLOAT,
      }),
      queryInterface.changeColumn('atlas_nodes', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_nodes', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_nodes', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_nodes', 'flavour_text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('atlas_nodes', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('atlas_quest_items', 'quest_flags', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_quest_items', 'league_quest_flags', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_quest_items', 'map_tier', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('backend_errors', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('backend_errors', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('base_item_types', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('base_item_types', 'width', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('base_item_types', 'height', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('base_item_types', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('base_item_types', 'inherits_from', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('base_item_types', 'drop_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('base_item_types', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('base_item_types', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('base_item_types', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('base_item_types', 'unknown_unique', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('base_item_types', 'unknown20', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'base_item_types',
        'is_picked_up_by_monsters',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('base_item_types', 'data11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('base_item_types', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('beyond_demons', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('beyond_demons', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('bindable_virtual_keys', 'key_code', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('bindable_virtual_keys', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bindable_virtual_keys', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('blood_types', 'pet_file4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'key1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('blood_types', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'key2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('blood_types', 'pet_file7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bloodlines', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bloodlines', 'min_zone_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('bloodlines', 'max_zone_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('bloodlines', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('bloodlines', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bloodlines', 'unknown20', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('bloodlines', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('bloodlines', 'keys2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bloodlines', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_definitions', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_definitions', 'invisible', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'removable', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'buff_limit', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag10', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_definitions', 'is_recovery', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_visuals', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_visuals', 'buff_dds_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_visuals', 'epk_file1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_visuals', 'epk_file2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_visuals', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('buff_visuals', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('characters', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'act_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'base_max_life', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'base_max_mana', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'weapon_speed', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'min_damage', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'max_damage', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'max_attack_distance', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'icon', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'integer_id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'base_strength', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'base_dexterity', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'base_intelligence', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'unknown13', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'unknown14', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'unknown15', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'unknown16', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'character_size', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'intro_sound_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'unknown28', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'trait_description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_audio_events', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_audio_events', 'quest_state', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_audio_events', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_audio_events', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_audio_events', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('character_panel_description_modes', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'character_panel_description_modes',
        'unknown1',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'character_panel_description_modes',
        'format_string_positive',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'character_panel_description_modes',
        'format_string_negative',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('character_panel_stats', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_panel_stats', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_panel_stats', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('character_panel_stats', 'data4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_panel_tabs', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_panel_tabs', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_panel_tabs', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_items', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_start_items', 'sockets', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_items', 'inventory_index', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_items', 'slot_x', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_start_items', 'slot_y', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_start_items', 'stack_size', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_start_items', 'links', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_items', 'skill_gem_levels', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_items', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('character_start_items', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('character_start_quest_states', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'character_start_quest_states',
        'quest_states',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('character_start_quest_states', 'keys1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_quest_states', 'unknown9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_states', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_states', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_states', 'level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_start_states', 'is_pvp', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('character_start_states', 'key1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('character_start_states', 'unknown', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('character_start_state_sets', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_text_audios', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_text_audios', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_text_audios', 'sound_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chests', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chests', 'flag3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'flag4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chests', 'unknown_keys', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'unknown_values', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'flag5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chests', 'unknown19', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chests', 'key4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('chest_clusters', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_clusters', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_clusters', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chest_clusters', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chest_clusters', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chest_effects', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'normal_epk_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'normal_closed_ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'normal_open_ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'magic_epk_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'unique_epk_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'rare_epk_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'magic_closed_ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'unique_closed_ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'rare_closed_ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'magic_open_ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'unique_open_ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'rare_open_ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('client_strings', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('client_strings', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('clone_shot_variations', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('commands', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('commands', 'command', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('commands', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('commands', 'command2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('component_armours', 'armour', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('component_armours', 'evasion', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('component_armours', 'energy_shield', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'component_attribute_requirements',
        'req_str',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'component_attribute_requirements',
        'req_dex',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'component_attribute_requirements',
        'req_int',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('component_charges', 'max_charges', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('component_charges', 'per_charge', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'order', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'master_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'crafting_bench_options',
        'crafting_bench_custom_action',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('crafting_bench_options', 'sockets', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'socket_colours', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'links', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'item_quantity', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'is_disabled', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('currency_items', 'stacks', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_items', 'currency_use_type', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_items', 'action', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'directions', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('currency_items', 'cosmetic_type_name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'unknown17', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'currency_tab_stack_size', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_items', 'abbreviation', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('daily_missions', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('daily_missions', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_overrides', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('damage_particle_effects', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('damage_particle_effects', 'pet_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'flag_unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'flag_unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'flag_unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('default_monster_stats', 'display_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('default_monster_stats', 'damage', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.FLOAT,
      }),
      queryInterface.changeColumn('default_monster_stats', 'evasion', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('default_monster_stats', 'accuracy', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('default_monster_stats', 'life', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('default_monster_stats', 'experience', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('default_monster_stats', 'ally_life', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('descent_exiles', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('descent_exiles', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('descent_reward_chests', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('descent_starter_chests', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('descent_starter_chests', 'socket_colours', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_int_missions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_int_missions', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_missions', 'kill_target', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'fail_if_target_killed', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'kill_guards', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'fail_if_guards_killed', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'time_limit', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_missions', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_missions', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_missions', 'chest_flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'chest_flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn(
        'dex_int_missions',
        'fail_if_no_guards_left',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('dex_int_missions', 'timer', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_missions', 'flag7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('dex_int_missions', 'key1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('dex_int_mission_guards', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_int_mission_guards', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_guards', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_guards', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_guard_mods', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_int_mission_guard_mods', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn(
        'dex_int_mission_guard_mods',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('dex_int_mission_guard_mods', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_mission_guard_mods', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_guard_mods', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_targets', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_targets', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_targets', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_missions', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'magic_chance', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'rare_chance', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'unique_monster_count', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'rare_monster_count', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'magic_monster_pack_count', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_mission_monsters', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_mission_monsters', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_monsters', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_monsters', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('difficulties', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('difficulties', 'resistances', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('difficulties', 'minimum_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('difficulties', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('difficulties', 'prefix', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('display_minion_monster_types', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('divination_card_arts', 'virtual_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'divination_card_stash_tab_layouts',
        'is_enabled',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('drop_pools', 'group', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('drop_pools', 'weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('eclipse_mods', 'key', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('eclipse_mods', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('eclipse_mods', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('eclipse_mods', 'is_prefix', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('endless_ledge_chests', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('endless_ledge_chests', 'socket_colour', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'base_ambient_sound_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'base_env_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'corrupted_env_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'keys1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'environments',
        'corrupted_ambient_sound_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('environments', 'ambient_sound_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('essences', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown10', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown23', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'drop_level_minimum', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'drop_level_maximum', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'tier', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'unknown31', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'item_level_restriction', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'is_screaming_essence', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'x', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'y', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'int_id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'slot_width', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'slot_height', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'essence_stash_tab_layouts',
        'is_upgradable_essence_slot',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('essence_types', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('essence_types', 'essence_type', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_types', 'is_corrupted_essence', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('event_seasons', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('event_seasons', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('event_seasons', 'reward_command', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('event_season_rewards', 'point', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('event_season_rewards', 'reward_command', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('experience_levels', 'index0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('experience_levels', 'level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('experience_levels', 'experience', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'stat_values', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown10', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown12', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown23', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown24', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown25', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'exploding_storm_buffs',
        'is_only_spawning_near_player',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('extra_terrain_features', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flasks', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('flasks', 'group', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flasks', 'life_per_use', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flasks', 'mana_per_use', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flasks', 'recovery_time', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flasks', 'buff_stat_values', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('flavour_texts', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('flavour_texts', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flavour_texts', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('footprints', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('footprints', 'active_ao_files', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('footprints', 'idle_ao_files', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('game_constants', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('game_constants', 'value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('gem_tags', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('gem_tags', 'tag', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('global_audio_configs', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('global_audio_configs', 'value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('global_audio_configs', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('grandmasters', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('grandmasters', 'gm_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('grandmasters', 'ais_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('grandmasters', 'character_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('grandmasters', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'is_support', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'support_gem_letter', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'data2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('granted_effects', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects', 'cast_time', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects', 'flag3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat1_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat2_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat3_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat4_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat5_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat6_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat7_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat8_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'level_requirement',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'mana_multiplier',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'level_requirement2',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'level_requirement3',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'critical_strike_chance',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('granted_effects_per_levels', 'mana_cost', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'damage_effectiveness',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('granted_effects_per_levels', 'stored_uses', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'cooldown', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'cooldown_bypass_type',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('granted_effects_per_levels', 'unknown30a', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'vaal_souls', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'vaal_stored_uses',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
    ]);
    await Promise.all([
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'cooldown_group',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'mana_reservation_override',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('granted_effects_per_levels', 'unknown34', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'damage_multiplier',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('granted_effects_per_levels', 'unknown36', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'unknown37', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideouts', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('hideouts', 'unknown9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_doodads', 'variation_ao_files', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('hideout_doodads', 'favour_cost', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_doodads', 'master_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_doodads', 'is_non_master_doodad', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('hideout_doodads', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_doodads', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_doodads', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_interactables', 'object', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('impact_sound_data', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('impact_sound_data', 'sound', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('impact_sound_data', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('impact_sound_data', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('impact_sound_data', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('impact_sound_data', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('int_missions', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'monster_per_spawn_count', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'objective_count', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'flag4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag10', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'unknown13', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_mods', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('int_mission_mods', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_mods', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_mods', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_mods', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('int_mission_mods', 'data2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('int_mission_monsters', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('int_mission_monsters', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_monsters', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_monsters', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('invasion_monster_restrictions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('invasion_monster_restrictions', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('item_classes', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_classes', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_classes', 'category', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_experience_per_levels',
        'item_current_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('item_experience_per_levels', 'experience', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('item_themes', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_themes', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_effects', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_effects', 'dagger_epk_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_effects', 'bow_epk_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_effects',
        'one_handed_mace_epk_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'item_visual_effects',
        'one_handed_sword_epk_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('item_visual_effects', 'index5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_effects',
        'two_handed_sword_epk_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'item_visual_effects',
        'two_handed_staff_epk_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('item_visual_effects', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'item_visual_effects',
        'two_handed_mace_epk_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'item_visual_effects',
        'one_handed_axe_epk_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'item_visual_effects',
        'two_handed_axe_epk_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('item_visual_effects', 'claw_epk_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_effects', 'pet_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_effects', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('item_visual_identities', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'dds_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_identities',
        'unknown_unique_int',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('item_visual_identities', 'ao_file2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_identities',
        'marauder_sm_files',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('item_visual_identities', 'ranger_sm_files', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'witch_sm_files', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_identities',
        'duelist_dex_sm_files',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'item_visual_identities',
        'templar_sm_files',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('item_visual_identities', 'shadow_sm_files', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'scion_sm_files', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'marauder_shape', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'ranger_shape', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'witch_shape', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'duelist_shape', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'templar_shape', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'shadow_shape', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'scion_shape', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'unknown28', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('item_visual_identities', 'unknown29', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('item_visual_identities', 'sm_files', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'epk_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_identities',
        'is_alternate_art',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('item_visual_identities', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'keys2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'data3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'data4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('killstreak_thresholds', 'kills', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_areas', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_exclusion_groups', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_izaro_chests', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_izaro_chests', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'labyrinth_izaro_chests',
        'min_labyrinth_tier',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'labyrinth_izaro_chests',
        'max_labyrinth_tier',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('labyrinth_ladder_rewards', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_ladder_rewards', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_node_overrides', 'id1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_node_overrides', 'id2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_node_overrides', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_node_overrides', 'data2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'key1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'id2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'unknown13', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'flag3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'flag4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secret_effects', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secret_effects', 'buff_values', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secret_effects', 'ot_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_sections', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_sections', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('labyrinth_sections', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('labyrinth_sections', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('labyrinth_sections', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_section_layouts', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_section_layouts', 'flags1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_section_layouts', 'flags2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_trinkets', 'buff_values', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('league_flags', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('league_flags', 'image', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('maps', 'key2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('maps', 'regular_guild_character', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('maps', 'unique_guild_character', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('maps', 'tier', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('maps', 'shaped_area_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_connections', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_connections', 'restricted_area_text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_connections', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_connections', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_connections', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_device_recipes', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_device_recipes', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('map_device_recipes', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_inhabitants', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'position_x', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_pins', 'position_y', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_pins', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'notes', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'act', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_pins', 'index3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_pins', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('micro_migration_data', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('micro_migration_data', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('micro_migration_data', 'key1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn(
        'microtransaction_fireworks_variations',
        'ao_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'microtransaction_fireworks_variations',
        'flag0',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'microtransaction_portal_variations',
        'ao_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'microtransaction_portal_variations',
        'map_ao_file',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('minimap_icons', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('minimap_icons', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('minimap_icons', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('minimap_icons', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('minimap_icons', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('minimap_icons', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('misc_animateds', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('misc_animateds', 'ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('misc_animateds', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('misc_beams', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('misc_beams', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('misc_beams', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('misc_beams', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('misc_objects', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('misc_objects', 'effect_virtual_path', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('misc_objects', 'unknown_unique', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('misc_objects', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mission_transition_tiles', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mission_transition_tiles', 'tdt_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mission_transition_tiles', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mission_transition_tiles', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mission_transition_tiles', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'domain', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'generation_type', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'correct_group', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'stat1_min', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat1_max', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat2_min', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat2_max', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat3_min', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat3_max', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat4_min', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat4_max', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'buff_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'data2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'monster_metadata', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'data3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'data4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('mods', 'stat5_min', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat5_max', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'data5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'is_essence_only_modifier', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('mod_sell_price_types', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mod_types', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_additional_monster_drops', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_armours', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_armours', 'art_string_sm_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_group_entries', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'monster_group_entries',
        'monster_group_names_id',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_map_boss_difficulties',
        'map_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_map_boss_difficulties',
        'stat1_value',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_map_boss_difficulties',
        'stat2_value',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_map_boss_difficulties',
        'stat3_value',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_map_boss_difficulties',
        'stat4_value',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_map_difficulties', 'map_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_map_difficulties', 'stat1_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_map_difficulties', 'stat2_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_map_difficulties', 'stat3_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_map_difficulties', 'stat4_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_packs', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_packs', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_packs', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_packs', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_packs',
        'boss_monster_spawn_chance',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_packs', 'boss_monster_count', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_packs', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('monster_packs', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_packs', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_pack_entries', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_pack_entries', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('monster_pack_entries', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_resistances', 'fire_normal', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'cold_normal', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'lightning_normal', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'chaos_normal', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'fire_cruel', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'cold_cruel', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'lightning_cruel', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'chaos_cruel', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'fire_merciless', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'cold_merciless', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_resistances',
        'lightning_merciless',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_resistances', 'chaos_merciless', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_segments', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_segments', 'shapes', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_types', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_types', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_types', 'is_summoned', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('monster_types', 'armour', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_types', 'evasion', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_types', 'energy_shield_from_life', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_types', 'damage_spread', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'object_size', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_varieties',
        'minimum_attack_distance',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_varieties',
        'maximum_attack_distance',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_varieties', 'act_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'monster_varieties',
        'base_monster_type_index',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('monster_varieties', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown_index0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown_index1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'monster_varieties',
        'model_size_multiplier',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_varieties', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_varieties',
        'experience_multiplier',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_varieties', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown10', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_varieties',
        'critical_strike_chance',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_varieties', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'ais_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'stance', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'key2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('monster_varieties', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'damage_multiplier', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'life_multiplier', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'attack_speed', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'key1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown13', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown14', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown15', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown16', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown17', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown18', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown19', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown20', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown21', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown22', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown23', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'key3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('music', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('music', 'sound_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_cs', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_cs', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_cs', 'metadata', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_cs', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_cs', 'short_name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_cs', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_cs', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_audios', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_audios', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_audios', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'is_str_master', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'is_dex_master', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'is_int_master', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'hideout', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'key2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn(
        'n_p_c_master_experience_per_levels',
        'master_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'n_p_c_master_experience_per_levels',
        'experience',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'n_p_c_master_experience_per_levels',
        'item_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'n_p_c_master_experience_per_levels',
        'unknown5',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'n_p_c_master_experience_per_levels',
        'unknown6',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('n_p_c_shops', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'unknown_keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'unknown_values', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'unknown10', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'dialogue_option', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'script', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown12', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown15', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'script2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown25', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('n_p_c_talks', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown25c', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown26', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown27', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown30', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'flag3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'key2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'mono_audio_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'stereo_audio_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'has_stereo', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn(
        'normal_difficulty_master_weights',
        'master_id',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'normal_difficulty_master_weights',
        'unknown1',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'normal_difficulty_master_weights',
        'unknown2',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'normal_difficulty_master_weights',
        'unknown3',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'normal_difficulty_master_weights',
        'unknown4',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('notifications', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('notifications', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('notifications', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('notifications', 'message', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('notifications', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('notifications', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('notifications', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('passive_skills', 'icon_dds_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('passive_skills', 'stat1_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'stat2_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'stat3_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'stat4_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'passive_skill_graph_id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('passive_skills', 'is_keystone', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('passive_skills', 'is_notable', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('passive_skills', 'flavour_text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('passive_skills', 'is_just_icon', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('passive_skills', 'is_jewel_socket', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('passive_skills', 'key2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('passive_skills', 'buff_related_unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'buff_related_unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'passive_skills',
        'is_ascendancy_starting_node',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('passive_skills', 'skill_points_granted', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'is_multiple_choice', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn(
        'passive_skills',
        'is_multiple_choice_option',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('path_of_endurances', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('path_of_endurances', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('path_of_endurances', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('path_of_endurances', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('path_of_endurances', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('path_of_endurances', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('path_of_endurances', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('perandus_bosses', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_bosses', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_bosses', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_chests', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_chests', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_chests', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_chests', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('perandus_daemons', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('perandus_guards', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('perandus_guards', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_guards', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_guards', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_guards', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_guards', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('perandus_guards', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('pets', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('pets', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('pets', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('pets', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('preload_groups', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'loop_animation_id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'impact_animation_id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'projectile_speed', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('projectiles', 'index4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('projectiles', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('projectiles', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('projectiles', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('projectile_variations', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'prediction_text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'unknown_unique', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecies', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'flavour_text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'ogg_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'prophecy_chain_position', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecies', 'is_enabled', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('prophecies', 'seal_cost_normal', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecies', 'seal_cost_cruel', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecies', 'seal_cost_merciless', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecies', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('prophecy_chains', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecy_chains', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecy_chains', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecy_chains', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecy_chains', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecy_types', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecy_types', 'unknown_unique', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quests', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quests', 'act', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quests', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quests', 'quest_state', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quests', 'icon_dds_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quests', 'quest_id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quests', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quests', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('quests', 'is_quest', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
    ]);
    await Promise.all([
      queryInterface.changeColumn('quests', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('quests', 'unknown9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('quests', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quests', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quests', 'flag2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quests', 'flag3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quest_achievements', 'quest_state', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'quest_achievements',
        'is_hardcore_achievement',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'quest_achievements',
        'is_standard_achievement',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('quest_achievements', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'difficulty', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'item_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'rarity', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'unknown9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'socket_gems', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_rewards', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('quest_rewards', 'key1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('quest_rewards', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quest_states', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_states', 'quest_states', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quest_states', 'message', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_states', 'map_pins_texts', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'keys2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'quest_finished_ogg_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quest_states', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_static_rewards', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_static_rewards', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_static_rewards', 'stat_value', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_static_rewards', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_vendor_rewards', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_vendor_rewards', 'quest_state', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_vendor_rewards', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('races', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('races', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('races', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('races', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('races', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('races', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('races', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('races', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('race_areas', 'keys0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('race_areas', 'keys1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('race_times', 'index', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('race_times', 'start_unix_time', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('race_times', 'end_unix_time', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('random_unique_monsters', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT,
      }),
      queryInterface.changeColumn('random_unique_monsters', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'server', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'is_enabled', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('realms', 'server2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'short_name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('realms', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('rogue_exiles', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('runic_circles', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('runic_circles', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('runic_circles', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('runic_circles', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('runic_circles', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shield_types', 'block', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_categories', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_categories', 'client_text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_categories', 'client_jpg_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_categories', 'website_text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_categories', 'website_jpg_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_categories', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_countries', 'country_two_letter_code', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_countries', 'country', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_currencies', 'currency_code', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_currencies', 'currency_sign', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'small_art_jpg_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'youtube_video', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'large_art_jpg_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'description2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'daily_deal_art_jpg_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'unknown15', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_items', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shop_items', 'is_tencent_item', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shop_items', 'is_tradeable', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shop_item_prices', 'price', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'coins', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'available_flag', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn(
        'shop_payment_packages',
        'contains_beta_key',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('shop_payment_packages', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('shop_payment_packages', 'background_image', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn(
        'shop_payment_packages',
        'physical_item_points',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('shop_payment_package_items', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_payment_package_items', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_package_prices', 'price', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_regions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_tokens', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_tokens', 'type_id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_tokens', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrines', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrines', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrines', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrines', 'charges_shared', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shrines', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrines', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrines', 'description', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrines', 'unknown10', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrines', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrines', 'unknown14', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shrines', 'is_pvp_only', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shrines', 'unknown17', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shrines', 'is_lesser_shrine', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shrine_buffs', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrine_buffs', 'buff_stat_values', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrine_buffs', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('shrine_sounds', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrine_sounds', 'stereo_sound_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrine_sounds', 'mono_sound_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('skill_gems', 'str', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('skill_gems', 'dex', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('skill_gems', 'int', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('skill_gems', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('skill_totem_variations', 'totem_skin_id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('sound_effects', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('sound_effects', 'sound_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('sound_effects', 'sound_file_2_d', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('sound_effects', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('stats', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'is_local', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'is_weapon_local', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('stats', 'flag3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('stats', 'flag5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'flag6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'flag7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('stats', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_dex_int_missions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_dex_int_missions', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'has_objective_boss_kill',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'has_objective_full_clear',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('str_dex_int_missions', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_missions', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'has_objective_kill_exiles',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'has_objective_find_unique',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('str_dex_int_missions', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'has_objective_complete_master_mission',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'object_count_required',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'object_count_total',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'id',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'min_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'max_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'time_limit',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'has_time_bonus_per_kill',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'has_time_bonus_per_object_tagged',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'has_limited_portals',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'time_limit_bonus_from_objective',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'object_count',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_dex_int_mission_maps', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_maps', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_maps', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_mods', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_dex_int_mission_mods', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_mods', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_mods', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_mods', 'is_unique_map', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_dex_int_mission_unique_maps', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn(
        'str_dex_int_mission_unique_maps',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_unique_maps',
        'min_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_unique_maps',
        'max_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_dex_missions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_dex_missions', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'time_limit', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'dummy_count', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'dummy_spawn_timer', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'unknown12', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_archetypes', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'str_dex_mission_archetypes',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_dex_mission_archetypes', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_archetypes', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_mods', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_dex_mission_mods', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_mods', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_mods', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_special_mods', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'str_dex_mission_special_mods',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_dex_mission_special_mods', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_special_mods', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_special_mods', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('str_int_missions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_int_missions', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'f9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'has_time_limit', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_int_missions', 'time_limit', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'is_destroy_relic1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_int_missions', 'is_destroy_relic2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_int_missions', 'feed_required', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'f12', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_mission_monster_waves', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'wave_count',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'min_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'max_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'pack_timer',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'time_limit',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_int_mission_monster_waves', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'unknown13',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'unique_count',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_int_mission_relic_mods', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_int_mission_relic_mods', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_int_mission_relic_mods', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn(
        'str_int_mission_relic_mods',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_int_mission_relic_mods', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_mission_relic_mods', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_mission_relic_patterns', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'ally_relic_count',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_int_mission_relic_patterns', 'unknown', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'is_enemy_relic',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'is_ally_relic',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'min_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'max_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'enemy_relic_count',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_map_mods', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_map_mods', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_map_mods', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_map_mods', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_missions', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'f7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'f10', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'f11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'f12', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'f13', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'b1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_missions', 'b2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_mission_bosses', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_mission_bosses', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_bosses', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_bosses', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_map_mod_numbers', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'str_mission_map_mod_numbers',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_mission_map_mod_numbers', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_map_mod_numbers', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_map_mod_numbers', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_map_mod_numbers', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'str_mission_spirit_effects',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_mission_spirit_effects', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'str_mission_spirit_effects',
        'ground_effect_unknown0',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_effects',
        'ground_effect_unknown1',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_mission_spirit_effects', 'key3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'b1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'b2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'id',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'spawn_weight',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'min_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'max_level',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'key0',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'f7',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'f8',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'key2',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      ),
      queryInterface.changeColumn('strongboxes', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('strongboxes', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('strongboxes', 'is_cartographer_box', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('summoned_specific_barrels', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('summoned_specific_barrels', 'key1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('summoned_specific_barrels', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('summoned_specific_barrels', 'key2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('summoned_specific_monsters', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('summoned_specific_monsters', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('summoned_specific_monsters', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn(
        'summoned_specific_monsters_on_deaths',
        'id',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'summoned_specific_monsters_on_deaths',
        'unknown2',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'summoned_specific_monsters_on_deaths',
        'key1',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      ),
      queryInterface.changeColumn(
        'summoned_specific_monsters_on_deaths',
        'unknown4',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'summoned_specific_monsters_on_deaths',
        'unknown7',
        {
          allowNull: true,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
      ),
      queryInterface.changeColumn('supporter_pack_sets', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('supporter_pack_sets', 'format_title', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('supporter_pack_sets', 'background', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('supporter_pack_sets', 'time0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('supporter_pack_sets', 'time1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('tags', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('tags', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('talismans', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talismans', 'tier', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talismans', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('talismans', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('talismans', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('talismans', 'key1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('talismans', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_monster_mods', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_monster_mods', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_monster_mods', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('talisman_packs', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown10', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('terrain_plugins', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('terrain_plugins', 'unknown_unique', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('tips', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('tips', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('topologies', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('topologies', 'dgr_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('topologies', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('topologies', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('topologies', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('torment_spirits', 'min_zone_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('torment_spirits', 'max_zone_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('torment_spirits', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('torment_spirits', 'unknown13', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('trigger_spawners', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('trigger_spawners', 'data0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('trigger_spawners', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('trigger_spawners', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('trigger_spawners', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('unique_chests', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('unique_chests', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('unique_chests', 'spawn_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('unique_chests', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('unique_chests', 'ao_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('unique_chests', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('unique_chests', 'data2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('unique_chests', 'key0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('unique_chests', 'key1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('unique_jewel_limits', 'unique_items_key', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('unique_jewel_limits', 'limit', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('unique_sets', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('unique_sets', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('unique_sets', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('unique_sets', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('vote_states', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_states', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_types', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_types', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_types', 'accept_text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_types', 'reject_text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_types', 'unknown0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_graphs', 'connections', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_map_graphs', 'connections', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier1_name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier2_name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier3_name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier4_name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier1_art', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier2_art', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier3_art', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier4_art', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'spawn_chance', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'min_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'tier4_number', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'tier3_number', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'tier2_number', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'unknown9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'tier1_number', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'unknown1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'unknown2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'unknown3', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'unknown4', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'unknown5', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'critical', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'speed', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'damage_min', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'damage_max', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'range_max', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'null6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('words', 'wordlists_key', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('words', 'text', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('words', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('words', 'text2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('words', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'id', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'name', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'act', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_town', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'has_waypoint', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'area_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'has_doodads', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown6', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown7', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown8', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown9', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'loading_screen_dds_file', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'unknown11', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'data1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'unknown15', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown21', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown22', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown23', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_map', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown32', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown33', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown39', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown40', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'strongbox_spawn_chance', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'strongbox_max_count', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'strongbox_rarity_weight', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'is_town_area', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown49', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'max_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown50', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_merciless_vaal_area', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown52', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_hideout', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown53', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown54', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown55', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown56', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown_index', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'unknown59', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown60', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown61', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_vaal_area', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown64', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown65', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown66', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_labyrinth_airlock', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'is_labyrinth_area', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown73', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown74', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown75', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown76', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'unknown77', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown78', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown79', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'flag0', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'flag1', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown82', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown83', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'keys2', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'key0a', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('world_areas', 'key0b', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('world_areas', 'unknown88', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'unknown89', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown90', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown91', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown92', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown93', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('x_p_per_level_for_missions', 'zone_level', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('x_p_per_level_for_missions', 'experience', {
        allowNull: true,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.changeColumn('x_p_per_level_for_missions', 'experience', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('x_p_per_level_for_missions', 'zone_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown93', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown92', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown91', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown90', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown89', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown88', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'key0b', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('world_areas', 'key0a', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('world_areas', 'keys2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'unknown83', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown82', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown79', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown78', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown77', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown76', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'unknown75', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown74', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown73', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_labyrinth_area', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'is_labyrinth_airlock', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown66', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown65', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown64', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_vaal_area', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown61', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown60', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown59', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown_index', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'unknown56', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown55', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown54', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown53', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_hideout', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown52', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_merciless_vaal_area', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown50', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown49', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_town_area', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'strongbox_rarity_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'strongbox_max_count', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'strongbox_spawn_chance', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown40', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown39', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown33', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown32', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'is_map', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'unknown23', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown22', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown21', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown15', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'loading_screen_dds_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'unknown9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'has_doodads', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'area_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'has_waypoint', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'is_town', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('world_areas', 'act', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('world_areas', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('world_areas', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('words', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('words', 'text2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('words', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('words', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('words', 'wordlists_key', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'null6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'range_max', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'damage_max', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'damage_min', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'speed', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_types', 'critical', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('weapon_impact_sound_data', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'tier1_number', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'unknown9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'tier2_number', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'tier3_number', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'tier4_number', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'spawn_chance', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_numbers', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier4_art', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier3_art', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier2_art', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier1_art', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier4_name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier3_name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier2_name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'tier1_name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT,
      }),
      queryInterface.changeColumn('warbands_pack_monsters', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_map_graphs', 'connections', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('warbands_graphs', 'connections', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_types', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('vote_types', 'reject_text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_types', 'accept_text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_types', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_types', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_states', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('vote_states', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('unique_sets', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('unique_sets', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('unique_sets', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('unique_sets', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('unique_jewel_limits', 'limit', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('unique_jewel_limits', 'unique_items_key', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('unique_chests', 'key1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('unique_chests', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('unique_chests', 'data2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('unique_chests', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('unique_chests', 'ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('unique_chests', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('unique_chests', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('unique_chests', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('unique_chests', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('trigger_spawners', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('trigger_spawners', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('trigger_spawners', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('trigger_spawners', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('trigger_spawners', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('torment_spirits', 'unknown13', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('torment_spirits', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('torment_spirits', 'max_zone_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('torment_spirits', 'min_zone_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('topologies', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('topologies', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('topologies', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('topologies', 'dgr_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('topologies', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('tips', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('tips', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('terrain_plugins', 'unknown_unique', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('terrain_plugins', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown10', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_packs', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('talisman_monster_mods', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('talisman_monster_mods', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talisman_monster_mods', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talismans', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talismans', 'key1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('talismans', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('talismans', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('talismans', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('talismans', 'tier', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('talismans', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('tags', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('tags', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('supporter_pack_sets', 'time1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('supporter_pack_sets', 'time0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('supporter_pack_sets', 'background', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('supporter_pack_sets', 'format_title', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('supporter_pack_sets', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'summoned_specific_monsters_on_deaths',
        'unknown7',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER({
            unsigned: true,
          }),
        },
      ),
      queryInterface.changeColumn(
        'summoned_specific_monsters_on_deaths',
        'unknown4',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'summoned_specific_monsters_on_deaths',
        'key1',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      ),
      queryInterface.changeColumn(
        'summoned_specific_monsters_on_deaths',
        'unknown2',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'summoned_specific_monsters_on_deaths',
        'id',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('summoned_specific_monsters', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('summoned_specific_monsters', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('summoned_specific_monsters', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('summoned_specific_barrels', 'key2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('summoned_specific_barrels', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('summoned_specific_barrels', 'key1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('summoned_specific_barrels', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('strongboxes', 'is_cartographer_box', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('strongboxes', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('strongboxes', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'key2',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'f8',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'f7',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'key0',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BIGINT({
            unsigned: true,
          }),
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'max_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'min_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_secondary_effects',
        'id',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('str_mission_spirit_effects', 'b2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'b1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'key3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT,
      }),
      queryInterface.changeColumn(
        'str_mission_spirit_effects',
        'ground_effect_unknown1',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_mission_spirit_effects',
        'ground_effect_unknown0',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_mission_spirit_effects', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_spirit_effects', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_mission_spirit_effects',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_mission_spirit_effects', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_mission_map_mod_numbers', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_map_mod_numbers', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_map_mod_numbers', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_map_mod_numbers', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_mission_map_mod_numbers',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_mission_map_mod_numbers', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_mission_bosses', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_bosses', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_bosses', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_mission_bosses', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_missions', 'b2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_missions', 'b1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_missions', 'f13', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'f12', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'f11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'f10', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'f7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_missions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_map_mods', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_map_mods', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_map_mods', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_map_mods', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'enemy_relic_count',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'max_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'min_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'is_ally_relic',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'is_enemy_relic',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('str_int_mission_relic_patterns', 'unknown', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_int_mission_relic_patterns',
        'ally_relic_count',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_int_mission_relic_patterns', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_int_mission_relic_mods', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_mission_relic_mods', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_int_mission_relic_mods',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_int_mission_relic_mods', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_int_mission_relic_mods', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_int_mission_relic_mods', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'unique_count',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'unknown13',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('str_int_mission_monster_waves', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'time_limit',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'pack_timer',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'max_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'min_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_int_mission_monster_waves',
        'wave_count',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_int_mission_monster_waves', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_int_missions', 'f12', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'feed_required', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'is_destroy_relic2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_int_missions', 'is_destroy_relic1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_int_missions', 'time_limit', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'has_time_limit', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_int_missions', 'f9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_int_missions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_dex_mission_special_mods', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('str_dex_mission_special_mods', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_special_mods', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_dex_mission_special_mods',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_dex_mission_special_mods', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_dex_mission_mods', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_mods', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_mods', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_mods', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_dex_mission_archetypes', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_mission_archetypes', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_dex_mission_archetypes',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_dex_mission_archetypes', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_dex_missions', 'unknown12', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'dummy_spawn_timer', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'dummy_count', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'time_limit', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_missions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'str_dex_int_mission_unique_maps',
        'max_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_unique_maps',
        'min_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_unique_maps',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('str_dex_int_mission_unique_maps', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('str_dex_int_mission_mods', 'is_unique_map', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('str_dex_int_mission_mods', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_mods', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_mods', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_mods', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('str_dex_int_mission_maps', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_maps', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_mission_maps', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'object_count',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'time_limit_bonus_from_objective',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'has_limited_portals',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'has_time_bonus_per_object_tagged',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'has_time_bonus_per_kill',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'time_limit',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'max_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'min_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_mission_extra_requirements',
        'id',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'object_count_total',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'object_count_required',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'has_objective_complete_master_mission',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('str_dex_int_missions', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'has_objective_find_unique',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'has_objective_kill_exiles',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('str_dex_int_missions', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_missions', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'has_objective_full_clear',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'str_dex_int_missions',
        'has_objective_boss_kill',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('str_dex_int_missions', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('str_dex_int_missions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('stats', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('stats', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('stats', 'flag7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'flag6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'flag5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('stats', 'flag3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('stats', 'is_weapon_local', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'is_local', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('stats', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('sound_effects', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('sound_effects', 'sound_file_2_d', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('sound_effects', 'sound_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('sound_effects', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('skill_totem_variations', 'totem_skin_id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('skill_gems', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('skill_gems', 'int', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('skill_gems', 'dex', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('skill_gems', 'str', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrine_sounds', 'mono_sound_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrine_sounds', 'stereo_sound_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrine_sounds', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrine_buffs', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('shrine_buffs', 'buff_stat_values', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrine_buffs', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrines', 'is_lesser_shrine', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shrines', 'unknown17', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shrines', 'is_pvp_only', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shrines', 'unknown14', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shrines', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrines', 'unknown10', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrines', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrines', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrines', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrines', 'charges_shared', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shrines', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shrines', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shrines', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_tokens', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_tokens', 'type_id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_tokens', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_regions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_package_prices', 'price', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_payment_package_items', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_package_items', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'shop_payment_packages',
        'physical_item_points',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('shop_payment_packages', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'background_image', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('shop_payment_packages', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'shop_payment_packages',
        'contains_beta_key',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('shop_payment_packages', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'available_flag', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'coins', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_payment_packages', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_item_prices', 'price', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_items', 'is_tradeable', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shop_items', 'is_tencent_item', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shop_items', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('shop_items', 'unknown15', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_items', 'daily_deal_art_jpg_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'description2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'large_art_jpg_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'youtube_video', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'small_art_jpg_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_items', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_currencies', 'currency_sign', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_currencies', 'currency_code', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_countries', 'country', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_countries', 'country_two_letter_code', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_categories', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('shop_categories', 'website_jpg_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_categories', 'website_text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_categories', 'client_jpg_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_categories', 'client_text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shop_categories', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('shield_types', 'block', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('runic_circles', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('runic_circles', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('runic_circles', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('runic_circles', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('runic_circles', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('rogue_exiles', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('realms', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('realms', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('realms', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'short_name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'server2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'is_enabled', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('realms', 'server', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('realms', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('random_unique_monsters', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('random_unique_monsters', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT,
      }),
      queryInterface.changeColumn('race_times', 'end_unix_time', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('race_times', 'start_unix_time', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('race_times', 'index', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('race_areas', 'keys1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('race_areas', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('races', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('races', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('races', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('races', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('races', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('races', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('races', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('races', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_vendor_rewards', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quest_vendor_rewards', 'quest_state', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_vendor_rewards', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_static_rewards', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_static_rewards', 'stat_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_static_rewards', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_static_rewards', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_states', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quest_states', 'quest_finished_ogg_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'keys2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'map_pins_texts', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_states', 'message', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quest_states', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'quest_states', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_states', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quest_rewards', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'key1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('quest_rewards', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('quest_rewards', 'socket_gems', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quest_rewards', 'unknown9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'rarity', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'item_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_rewards', 'difficulty', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quest_achievements', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'quest_achievements',
        'is_standard_achievement',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'quest_achievements',
        'is_hardcore_achievement',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('quest_achievements', 'quest_state', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quests', 'flag3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quests', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quests', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quests', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quests', 'unknown9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('quests', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('quests', 'is_quest', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quests', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('quests', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('quests', 'quest_id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quests', 'icon_dds_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quests', 'quest_state', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quests', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('quests', 'act', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('quests', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecy_types', 'unknown_unique', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecy_types', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecy_chains', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecy_chains', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecy_chains', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecy_chains', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecy_chains', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('prophecies', 'seal_cost_merciless', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecies', 'seal_cost_cruel', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecies', 'seal_cost_normal', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecies', 'is_enabled', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
    ]);
    await Promise.all([
      queryInterface.changeColumn('prophecies', 'prophecy_chain_position', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecies', 'ogg_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'flavour_text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'unknown_unique', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('prophecies', 'prediction_text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('prophecies', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectile_variations', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('projectiles', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('projectiles', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('projectiles', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('projectiles', 'index4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'projectile_speed', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('projectiles', 'impact_animation_id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'loop_animation_id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('projectiles', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('preload_groups', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('pets', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('pets', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('pets', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('pets', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('perandus_guards', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_guards', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('perandus_guards', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_guards', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_guards', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_guards', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_guards', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('perandus_daemons', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_daemons', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_chests', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_chests', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_chests', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_chests', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_bosses', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_bosses', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('perandus_bosses', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('path_of_endurances', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('path_of_endurances', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('path_of_endurances', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('path_of_endurances', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('path_of_endurances', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('path_of_endurances', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('path_of_endurances', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'passive_skills',
        'is_multiple_choice_option',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('passive_skills', 'is_multiple_choice', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('passive_skills', 'skill_points_granted', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'passive_skills',
        'is_ascendancy_starting_node',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('passive_skills', 'buff_related_unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('passive_skills', 'buff_related_unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'key2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('passive_skills', 'is_jewel_socket', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('passive_skills', 'is_just_icon', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('passive_skills', 'flavour_text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('passive_skills', 'is_notable', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('passive_skills', 'is_keystone', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('passive_skills', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('passive_skills', 'passive_skill_graph_id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'stat4_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'stat3_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'stat2_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'stat1_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('passive_skills', 'icon_dds_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('passive_skills', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('notifications', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('notifications', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('notifications', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('notifications', 'message', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('notifications', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('notifications', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('notifications', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'normal_difficulty_master_weights',
        'unknown4',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'normal_difficulty_master_weights',
        'unknown3',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'normal_difficulty_master_weights',
        'unknown2',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'normal_difficulty_master_weights',
        'unknown1',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'normal_difficulty_master_weights',
        'master_id',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('n_p_c_text_audios', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'has_stereo', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'stereo_audio_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'mono_audio_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_text_audios', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'key2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'flag3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown30', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown27', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown26', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown25c', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown25', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'script2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown15', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown12', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'script', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'dialogue_option', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_talks', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'unknown10', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'unknown_values', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'unknown_keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_shops', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'n_p_c_master_experience_per_levels',
        'unknown6',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'n_p_c_master_experience_per_levels',
        'unknown5',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'n_p_c_master_experience_per_levels',
        'item_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'n_p_c_master_experience_per_levels',
        'experience',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'n_p_c_master_experience_per_levels',
        'master_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('n_p_c_masters', 'key2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('n_p_c_masters', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'hideout', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'is_int_master', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'is_dex_master', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'is_str_master', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('n_p_c_masters', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_audios', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_audios', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_c_audios', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_cs', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_cs', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_cs', 'short_name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_cs', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('n_p_cs', 'metadata', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_cs', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('n_p_cs', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('music', 'sound_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('music', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'key3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown23', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown22', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown21', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown20', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown19', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown18', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown17', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown16', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown15', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown14', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown13', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'key1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('monster_varieties', 'attack_speed', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'life_multiplier', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'damage_multiplier', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'key2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('monster_varieties', 'stance', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'ais_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_varieties',
        'critical_strike_chance',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_varieties', 'unknown10', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'monster_varieties',
        'experience_multiplier',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_varieties', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_varieties',
        'model_size_multiplier',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_varieties', 'unknown_index1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown_index0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_varieties',
        'base_monster_type_index',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('monster_varieties', 'ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_varieties', 'act_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'monster_varieties',
        'maximum_attack_distance',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_varieties',
        'minimum_attack_distance',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_varieties', 'object_size', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_varieties', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_types', 'damage_spread', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_types', 'energy_shield_from_life', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_types', 'evasion', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_types', 'armour', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_types', 'is_summoned', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('monster_types', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_types', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_segments', 'shapes', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_segments', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_resistances', 'chaos_merciless', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_resistances',
        'lightning_merciless',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_resistances', 'cold_merciless', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'fire_merciless', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'chaos_cruel', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'lightning_cruel', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'cold_cruel', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'fire_cruel', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'chaos_normal', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'lightning_normal', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'cold_normal', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'fire_normal', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_resistances', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_pack_entries', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_pack_entries', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('monster_pack_entries', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_packs', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_packs', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_packs', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('monster_packs', 'boss_monster_count', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_packs',
        'boss_monster_spawn_chance',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_packs', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_packs', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_packs', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_packs', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_map_difficulties', 'stat4_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_map_difficulties', 'stat3_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_map_difficulties', 'stat2_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_map_difficulties', 'stat1_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('monster_map_difficulties', 'map_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'monster_map_boss_difficulties',
        'stat4_value',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_map_boss_difficulties',
        'stat3_value',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_map_boss_difficulties',
        'stat2_value',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_map_boss_difficulties',
        'stat1_value',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_map_boss_difficulties',
        'map_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'monster_group_entries',
        'monster_group_names_id',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('monster_group_entries', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_armours', 'art_string_sm_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_armours', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('monster_additional_monster_drops', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mod_types', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mod_sell_price_types', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'is_essence_only_modifier', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('mods', 'data5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'stat5_max', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat5_min', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('mods', 'data4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'data3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'monster_metadata', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'data2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'buff_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat4_max', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat4_min', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat3_max', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat3_min', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat2_max', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat2_min', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat1_max', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'stat1_min', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'correct_group', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'generation_type', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mods', 'domain', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mods', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mission_transition_tiles', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mission_transition_tiles', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mission_transition_tiles', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('mission_transition_tiles', 'tdt_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('mission_transition_tiles', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('misc_objects', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('misc_objects', 'unknown_unique', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('misc_objects', 'effect_virtual_path', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('misc_objects', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('misc_beams', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('misc_beams', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('misc_beams', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('misc_beams', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('misc_animateds', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('misc_animateds', 'ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('misc_animateds', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('minimap_icons', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('minimap_icons', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('minimap_icons', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('minimap_icons', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('minimap_icons', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('minimap_icons', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'microtransaction_portal_variations',
        'map_ao_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'microtransaction_portal_variations',
        'ao_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'microtransaction_fireworks_variations',
        'flag0',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn(
        'microtransaction_fireworks_variations',
        'ao_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('micro_migration_data', 'key1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('micro_migration_data', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('micro_migration_data', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_pins', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_pins', 'index3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'act', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_pins', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'notes', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_pins', 'position_y', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_pins', 'position_x', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_pins', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_inhabitants', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_device_recipes', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_device_recipes', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('map_device_recipes', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_connections', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_connections', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_connections', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('map_connections', 'restricted_area_text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('map_connections', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('maps', 'shaped_area_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('maps', 'tier', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('maps', 'unique_guild_character', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('maps', 'regular_guild_character', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('maps', 'key2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('league_flags', 'image', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('league_flags', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_trinkets', 'buff_values', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_section_layouts', 'flags2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_section_layouts', 'flags1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_section_layouts', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_sections', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_sections', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('labyrinth_sections', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('labyrinth_sections', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('labyrinth_sections', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secret_effects', 'ot_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secret_effects', 'buff_values', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secret_effects', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'flag4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'flag3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'unknown13', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'id2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_secrets', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'key1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_rewards', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_node_overrides', 'data2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_node_overrides', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_node_overrides', 'id2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_node_overrides', 'id1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_ladder_rewards', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('labyrinth_ladder_rewards', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'labyrinth_izaro_chests',
        'max_labyrinth_tier',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'labyrinth_izaro_chests',
        'min_labyrinth_tier',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('labyrinth_izaro_chests', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_izaro_chests', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('labyrinth_exclusion_groups', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('labyrinth_areas', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('killstreak_thresholds', 'kills', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'data4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'data3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'keys2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('itemised_visual_effects', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn(
        'item_visual_identities',
        'is_alternate_art',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('item_visual_identities', 'epk_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'sm_files', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'unknown29', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('item_visual_identities', 'unknown28', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('item_visual_identities', 'scion_shape', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'shadow_shape', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'templar_shape', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'duelist_shape', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'witch_shape', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'ranger_shape', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'marauder_shape', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'scion_sm_files', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'shadow_sm_files', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_identities',
        'templar_sm_files',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'item_visual_identities',
        'duelist_dex_sm_files',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('item_visual_identities', 'witch_sm_files', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'ranger_sm_files', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_identities',
        'marauder_sm_files',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('item_visual_identities', 'ao_file2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_identities',
        'unknown_unique_int',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('item_visual_identities', 'ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'dds_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_identities', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_effects', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('item_visual_effects', 'pet_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_effects', 'claw_epk_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_effects',
        'two_handed_axe_epk_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'item_visual_effects',
        'one_handed_axe_epk_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'item_visual_effects',
        'two_handed_mace_epk_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('item_visual_effects', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'item_visual_effects',
        'two_handed_staff_epk_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'item_visual_effects',
        'two_handed_sword_epk_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('item_visual_effects', 'index5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'item_visual_effects',
        'one_handed_sword_epk_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'item_visual_effects',
        'one_handed_mace_epk_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('item_visual_effects', 'bow_epk_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_effects', 'dagger_epk_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_visual_effects', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_themes', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_themes', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_experience_per_levels', 'experience', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'item_experience_per_levels',
        'item_current_level',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('item_classes', 'category', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_classes', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('item_classes', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('invasion_monsters_per_areas', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('invasion_monster_restrictions', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('invasion_monster_restrictions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('int_mission_monsters', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_monsters', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_monsters', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_monsters', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('int_mission_mods', 'data2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('int_mission_mods', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('int_mission_mods', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_mods', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_mods', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_mission_mods', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('int_missions', 'unknown13', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'flag10', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'objective_count', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'monster_per_spawn_count', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'flag3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('int_missions', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('int_missions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('impact_sound_data', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('impact_sound_data', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('impact_sound_data', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('impact_sound_data', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('impact_sound_data', 'sound', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('impact_sound_data', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('hideout_interactables', 'object', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('hideout_doodads', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_doodads', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_doodads', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_doodads', 'is_non_master_doodad', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('hideout_doodads', 'master_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_doodads', 'favour_cost', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideout_doodads', 'variation_ao_files', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('hideouts', 'unknown9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('hideouts', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'unknown37', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'unknown36', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'damage_multiplier',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('granted_effects_per_levels', 'unknown34', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'mana_reservation_override',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'cooldown_group',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'vaal_stored_uses',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('granted_effects_per_levels', 'vaal_souls', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'unknown30a', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'cooldown_bypass_type',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('granted_effects_per_levels', 'cooldown', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stored_uses', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'damage_effectiveness',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('granted_effects_per_levels', 'mana_cost', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'critical_strike_chance',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'level_requirement3',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'level_requirement2',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'mana_multiplier',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'granted_effects_per_levels',
        'level_requirement',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat8_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat7_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat6_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat5_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat4_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat3_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat2_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects_per_levels', 'stat1_value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
    ]);
    await Promise.all([
      queryInterface.changeColumn('granted_effects_per_levels', 'level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects', 'flag3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects', 'cast_time', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('granted_effects', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects', 'data2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('granted_effects', 'support_gem_letter', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'data0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('granted_effects', 'is_support', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('granted_effects', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('grandmasters', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('grandmasters', 'character_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('grandmasters', 'ais_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('grandmasters', 'gm_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('grandmasters', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('global_audio_configs', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('global_audio_configs', 'value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('global_audio_configs', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('gem_tags', 'tag', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('gem_tags', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('game_constants', 'value', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('game_constants', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('footprints', 'idle_ao_files', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('footprints', 'active_ao_files', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('footprints', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('flavour_texts', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('flavour_texts', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flavour_texts', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('flasks', 'buff_stat_values', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('flasks', 'recovery_time', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flasks', 'mana_per_use', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flasks', 'life_per_use', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flasks', 'group', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('flasks', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('extra_terrain_features', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'exploding_storm_buffs',
        'is_only_spawning_near_player',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown25', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown24', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown23', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown12', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown10', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'stat_values', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('exploding_storm_buffs', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('experience_levels', 'experience', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('experience_levels', 'level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('experience_levels', 'index0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('event_season_rewards', 'reward_command', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('event_season_rewards', 'point', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('event_seasons', 'reward_command', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('event_seasons', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('event_seasons', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('essence_types', 'is_corrupted_essence', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('essence_types', 'essence_type', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_types', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'essence_stash_tab_layouts',
        'is_upgradable_essence_slot',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'slot_height', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'slot_width', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'int_id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'y', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'x', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essence_stash_tab_layouts', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('essences', 'is_screaming_essence', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('essences', 'item_level_restriction', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'unknown31', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'tier', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'drop_level_maximum', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'drop_level_minimum', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'unknown23', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('essences', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown10', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('essences', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('environments', 'ambient_sound_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'environments',
        'corrupted_ambient_sound_file',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('environments', 'keys1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'corrupted_env_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'base_env_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'base_ambient_sound_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('environments', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('endless_ledge_chests', 'socket_colour', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('endless_ledge_chests', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('eclipse_mods', 'is_prefix', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('eclipse_mods', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('eclipse_mods', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('eclipse_mods', 'key', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('drop_pools', 'weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('drop_pools', 'group', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'divination_card_stash_tab_layouts',
        'is_enabled',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('divination_card_arts', 'virtual_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('display_minion_monster_types', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('difficulties', 'prefix', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('difficulties', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('difficulties', 'minimum_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('difficulties', 'resistances', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('difficulties', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_mission_trackings', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_mission_monsters', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_monsters', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_monsters', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_monsters', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_mission_mods', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_missions', 'magic_monster_pack_count', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'rare_monster_count', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'unique_monster_count', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'rare_chance', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'magic_chance', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_missions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_int_mission_targets', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_targets', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_targets', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_guard_mods', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_guard_mods', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_guard_mods', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn(
        'dex_int_mission_guard_mods',
        'spawn_weight',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('dex_int_mission_guard_mods', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('dex_int_mission_guard_mods', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_int_mission_guards', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_guards', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_guards', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_mission_guards', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('dex_int_missions', 'key1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('dex_int_missions', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('dex_int_missions', 'flag7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'timer', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'dex_int_missions',
        'fail_if_no_guards_left',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('dex_int_missions', 'chest_flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'chest_flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_missions', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_missions', 'time_limit', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_missions', 'fail_if_guards_killed', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'kill_guards', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'fail_if_target_killed', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'kill_target', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('dex_int_missions', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('dex_int_missions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('descent_starter_chests', 'socket_colours', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('descent_starter_chests', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('descent_reward_chests', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('descent_exiles', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('descent_exiles', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('default_monster_stats', 'ally_life', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('default_monster_stats', 'experience', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('default_monster_stats', 'life', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('default_monster_stats', 'accuracy', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('default_monster_stats', 'evasion', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('default_monster_stats', 'damage', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.FLOAT,
      }),
      queryInterface.changeColumn('default_monster_stats', 'display_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'flag_unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'flag_unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'flag_unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('daresso_pit_fights', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('damage_particle_effects', 'pet_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('damage_particle_effects', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('daily_overrides', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('daily_missions', 'spawn_weight', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('daily_missions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_stash_tab_layouts', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'abbreviation', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'currency_tab_stack_size', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_items', 'unknown17', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'cosmetic_type_name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('currency_items', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'directions', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'action', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('currency_items', 'currency_use_type', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('currency_items', 'stacks', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'is_disabled', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'item_quantity', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'links', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'socket_colours', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'sockets', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'crafting_bench_options',
        'crafting_bench_custom_action',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('crafting_bench_options', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'master_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('crafting_bench_options', 'order', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('component_charges', 'per_charge', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('component_charges', 'max_charges', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn(
        'component_attribute_requirements',
        'req_int',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'component_attribute_requirements',
        'req_dex',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'component_attribute_requirements',
        'req_str',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.changeColumn('component_armours', 'energy_shield', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('component_armours', 'evasion', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('component_armours', 'armour', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('commands', 'command2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('commands', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('commands', 'command', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('commands', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('clone_shot_variations', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('client_strings', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('client_strings', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'rare_open_ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'unique_open_ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'magic_open_ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'rare_closed_ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'unique_closed_ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'magic_closed_ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'rare_epk_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'unique_epk_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'magic_epk_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'normal_open_ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'normal_closed_ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'normal_epk_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_effects', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_clusters', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chest_clusters', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chest_clusters', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chest_clusters', 'data1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chest_clusters', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'key4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('chests', 'max_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chests', 'unknown19', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'min_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chests', 'flag5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'unknown_values', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'unknown_keys', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chests', 'flag4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'flag3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chests', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('chests', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('chests', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('chests', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_text_audios', 'sound_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_text_audios', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_text_audios', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_state_sets', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_states', 'unknown', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('character_start_states', 'key1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('character_start_states', 'is_pvp', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('character_start_states', 'level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_start_states', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_states', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_quest_states', 'unknown9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_quest_states', 'keys1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'character_start_quest_states',
        'quest_states',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('character_start_quest_states', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_items', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('character_start_items', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('character_start_items', 'skill_gem_levels', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_items', 'links', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_items', 'stack_size', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_start_items', 'slot_y', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_start_items', 'slot_x', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_start_items', 'inventory_index', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_items', 'sockets', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_start_items', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_panel_tabs', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_panel_tabs', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_panel_tabs', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_panel_stats', 'data4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_panel_stats', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('character_panel_stats', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_panel_stats', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'character_panel_description_modes',
        'format_string_negative',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'character_panel_description_modes',
        'format_string_positive',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn(
        'character_panel_description_modes',
        'unknown1',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('character_panel_description_modes', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('character_audio_events', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('character_audio_events', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_audio_events', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_audio_events', 'quest_state', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('character_audio_events', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'trait_description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'unknown28', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'intro_sound_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'character_size', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'unknown16', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'unknown15', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'unknown14', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'unknown13', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'base_intelligence', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'base_dexterity', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'base_strength', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'integer_id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'icon', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'max_attack_distance', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'max_damage', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'min_damage', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'weapon_speed', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'base_max_mana', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'base_max_life', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('characters', 'act_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'ao_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('characters', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_visuals', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_visuals', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('buff_visuals', 'epk_file2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_visuals', 'epk_file1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_visuals', 'buff_dds_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_visuals', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_definitions', 'is_recovery', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'unknown0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag10', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'buff_limit', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'unknown7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('buff_definitions', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_definitions', 'removable', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'invisible', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('buff_definitions', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('buff_definitions', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bloodlines', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('bloodlines', 'keys2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bloodlines', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('bloodlines', 'unknown20', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('bloodlines', 'unknown11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bloodlines', 'unknown8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('bloodlines', 'max_zone_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('bloodlines', 'min_zone_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('bloodlines', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file9', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file8', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file7', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'key2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('blood_types', 'keys0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'key1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('blood_types', 'pet_file6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('blood_types', 'pet_file3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'pet_file1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('blood_types', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bindable_virtual_keys', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bindable_virtual_keys', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('bindable_virtual_keys', 'key_code', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('beyond_demons', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('beyond_demons', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('base_item_types', 'key0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BIGINT({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('base_item_types', 'data11', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'base_item_types',
        'is_picked_up_by_monsters',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.BOOLEAN,
        },
      ),
      queryInterface.changeColumn('base_item_types', 'unknown20', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('base_item_types', 'unknown_unique', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER({
          unsigned: true,
        }),
      }),
      queryInterface.changeColumn('base_item_types', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('base_item_types', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('base_item_types', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('base_item_types', 'drop_level', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('base_item_types', 'inherits_from', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('base_item_types', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('base_item_types', 'height', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('base_item_types', 'width', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('base_item_types', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('backend_errors', 'text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('backend_errors', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('atlas_quest_items', 'map_tier', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_quest_items', 'league_quest_flags', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_quest_items', 'quest_flags', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_nodes', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('atlas_nodes', 'flavour_text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('atlas_nodes', 'unknown6', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_nodes', 'unknown5', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_nodes', 'unknown4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('atlas_nodes', 'y', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.FLOAT,
      }),
      queryInterface.changeColumn('atlas_nodes', 'x', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.FLOAT,
      }),
      queryInterface.changeColumn('ascendancies', 'ogg_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'flavour_text', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'rgb_flavour_text_colour', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'coordinate_rect', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('ascendancies', 'class_no', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('ascendancies', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'unknown19', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'is_manually_casted', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('active_skills', 'skill_totem_id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('active_skills', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('active_skills', 'unknown13', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('active_skills', 'website_image', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'website_description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'active_skill_types', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn(
        'active_skills',
        'active_skill_target_types',
        {
          allowNull: false,
          primaryKey: false,
          type: Sequelize.TEXT,
        },
      ),
      queryInterface.changeColumn('active_skills', 'icon_dds_file', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'index3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'displayed_name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('active_skills', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievement_sets_displays', 'title', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievement_sets_displays', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_set_rewards', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_set_rewards', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_items', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievement_items', 'completions_required', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_items', 'name', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievement_items', 'unknown2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_items', 'unknown1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievement_items', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievements', 'flag4', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievements', 'unknown3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievements', 'flag3', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievements', 'flag2', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievements', 'flag1', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievements', 'flag0', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.changeColumn('achievements', 'unknown_unique', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      }),
      queryInterface.changeColumn('achievements', 'objective', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievements', 'description', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('achievements', 'id', {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.TEXT,
      }),
    ]);
  },
};
