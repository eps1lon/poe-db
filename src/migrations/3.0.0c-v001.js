module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          objective: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown_unique: {
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
          unknown3: {
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
      ),
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
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          completions_required: {
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          title: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          displayed_name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          index3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          icon_dds_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          active_skill_target_types: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          active_skill_types: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          website_description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          website_image: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown13: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          skill_totem_id: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_manually_casted: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown19: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'active_skill__input__stats',
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
      ),
      queryInterface.createTable(
        'active_skill__output__stats',
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
      ),
      queryInterface.createTable(
        'active_skill__weapon_restriction__item_classes',
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
      ),
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
      ),
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
      ),
      queryInterface.createTable(
        'area_transition_animations',
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
          bow_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          two_hand_sword_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          two_hand_mace_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown6: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          sword_and_dagger_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          dagger_and_sword_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          dagger_and_dagger_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          sword_and_sword_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown11: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown12: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          claw_and_claw_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          claw_and_dagger_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          claw_and_dagger_animation2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          claw_and_shield_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          dagger_and_claw_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          dagger_and_shield_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          sword_and_claw_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          sword_and_shield_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          staff_animation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown22: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown23: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          wand_and_shield_animation: {
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
      ),
      queryInterface.createTable(
        'area_transition_animation_types',
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
      ),
      queryInterface.createTable(
        'area_transition_infos',
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
          key4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          key5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          key6: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          key7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          key8: {
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
          unknown24: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          keys1: {
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
      ),
      queryInterface.createTable(
        'area_types',
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
      ),
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          class_no: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          coordinate_rect: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          rgb_flavour_text_colour: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flavour_text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ogg_file: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          y: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
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
      ),
      queryInterface.createTable(
        'atlas_node__atlas_nodes',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          league_quest_flags: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          map_tier: {
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          inherits_from: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          drop_level: {
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
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown_unique: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_picked_up_by_monsters: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          data11: {
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
      ),
      queryInterface.createTable(
        'base_item_type__implicit__mods',
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
      ),
      queryInterface.createTable(
        'base_item_type__magic_purchase__base_item_types',
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
      ),
      queryInterface.createTable(
        'base_item_type__normal_purchase__base_item_types',
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
      ),
      queryInterface.createTable(
        'base_item_type__rare_purchase__base_item_types',
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
      ),
      queryInterface.createTable(
        'base_item_type__tags',
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
      ),
      queryInterface.createTable(
        'base_item_type__unique_purchase__base_item_types',
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
      ),
      queryInterface.createTable(
        'base_item_type__vendor_recipe__achievement_items',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          pet_file1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          pet_file2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          pet_file3: {
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
          pet_file4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          pet_file5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          pet_file6: {
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
          keys0: {
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
          pet_file7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          pet_file8: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          pet_file9: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          min_zone_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          max_zone_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown8: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown11: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown20: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          keys2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag1: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'bloodline__item_weight__tags',
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
      ),
      queryInterface.createTable(
        'bloodline__mods',
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
      ),
      queryInterface.createTable(
        'bloodline__spawn_weight__tags',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          invisible: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          removable: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown2: {
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
          unknown5: {
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
          unknown7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag6: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag8: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag9: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          buff_limit: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag10: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_recovery: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'buff_definition__stats',
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          buff_dds_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          epk_file1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          epk_file2: {
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
      ),
      queryInterface.createTable(
        'buff_visual__preload_groups',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          act_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          base_max_life: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          base_max_mana: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          weapon_speed: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          min_damage: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          max_damage: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          max_attack_distance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          icon: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          integer_id: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          base_strength: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          base_dexterity: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          base_intelligence: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          keys0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
          character_size: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          intro_sound_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown28: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          trait_description: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          quest_state: {
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
          flag0: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'character_audio_event__duelist__character_text_audios',
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
      ),
      queryInterface.createTable(
        'character_audio_event__goddess__character_text_audios',
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
      ),
      queryInterface.createTable(
        'character_audio_event__jack_the_axe__character_text_audios',
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
      ),
      queryInterface.createTable(
        'character_audio_event__marauder__character_text_audios',
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
      ),
      queryInterface.createTable(
        'character_audio_event__ranger__character_text_audios',
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
      ),
      queryInterface.createTable(
        'character_audio_event__scion__character_text_audios',
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
      ),
      queryInterface.createTable(
        'character_audio_event__shadow__character_text_audios',
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
      ),
      queryInterface.createTable(
        'character_audio_event__templar__character_text_audios',
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
      ),
      queryInterface.createTable(
        'character_audio_event__witch__character_text_audios',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          format_string_positive: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          format_string_negative: {
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
      ),
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
            type: Sequelize.BOOLEAN,
          },
          data4: {
            allowNull: true,
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
      ),
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
      ),
      queryInterface.createTable(
        'character_panel_stat__stats1s',
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
      ),
      queryInterface.createTable(
        'character_panel_stat__stats2s',
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
      ),
      queryInterface.createTable(
        'character_panel_stat__stats3s',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          sockets: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          inventory_index: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          slot_x: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          slot_y: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stack_size: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          links: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          skill_gem_levels: {
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
          data0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
      queryInterface.createTable(
        'character_start_item__mods',
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
      ),
      queryInterface.createTable(
        'character_start_item__socketed__skill_gems',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          quest_states: {
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
          keys1: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'character_start_quest_state__map_pins',
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
      ),
      queryInterface.createTable(
        'character_start_quest_state__quests',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_pvp: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          key1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          bool0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          info_text: {
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
          _passive_skills_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _character_start_quest_state_cache: {
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
      ),
      queryInterface.createTable(
        'character_start_state__character_start_quest_states',
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
      ),
      queryInterface.createTable(
        'character_start_state__passive_skills',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          sound_file: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ao_file: {
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
          unknown4: {
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
          unknown5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown_keys: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown_values: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          min_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown19: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          max_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          key4: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data1: {
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
      ),
      queryInterface.createTable(
        'chest_cluster__chests',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          normal_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          normal_closed_ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          normal_open_ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          magic_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unique_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          rare_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          magic_closed_ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unique_closed_ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          rare_closed_ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          magic_open_ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unique_open_ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          rare_open_ao_file: {
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
      ),
      queryInterface.createTable(
        'chest__mods',
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
      ),
      queryInterface.createTable(
        'chest__tags',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          x_box_text: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          command: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          command2: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          evasion: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          energy_shield: {
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
            type: Sequelize.TEXT,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          req_dex: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          req_int: {
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
            type: Sequelize.TEXT,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          per_charge: {
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
            type: Sequelize.TEXT,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          master_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          crafting_bench_custom_action: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          sockets: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          socket_colours: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          links: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          item_quantity: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_disabled: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'crafting_bench_option__cost__base_item_types',
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
      ),
      queryInterface.createTable(
        'crafting_bench_option__item_classes',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          currency_use_type: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          action: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          directions: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          cosmetic_type_name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          keys0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown17: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          currency_tab_stack_size: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          abbreviation: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          x_box_directions: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'currency_item__usage__achievement_items',
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
      ),
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
      ),
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
      ),
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
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown8: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'daily_mission__characters',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          pet_file: {
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
      ),
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
      ),
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
          flag_unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag_unknown2: {
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
          unknown6: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag_unknown3: {
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          damage: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          evasion: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          accuracy: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          life: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          experience: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          ally_life: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          difficulty: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          damage2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
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
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types1s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types10s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types11s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types12s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types13s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types14s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types2s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types3s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types4s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types5s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types6s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types7s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types8s',
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
      ),
      queryInterface.createTable(
        'descent_reward_chest__base_item_types9s',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          socket_colours: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          kill_target: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          fail_if_target_killed: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          kill_guards: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          fail_if_guards_killed: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          time_limit: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          chest_flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          chest_flag1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          fail_if_no_guards_left: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          timer: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag7: {
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
          key1: {
            allowNull: true,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
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
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
      queryInterface.createTable(
        'dex_int_mission__achievement_items',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          magic_chance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          rare_chance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unique_monster_count: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          rare_monster_count: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          magic_monster_pack_count: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'dex_mission_monster__monster_packs',
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
      ),
      queryInterface.createTable(
        'dex_mission_monster__monster_varieties',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.createTable(
        'drop_modifiers',
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
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          weight: {
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
      ),
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
          is_prefix: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'eclipse_mod__spawn_weight__tags',
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
      ),
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
      ),
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
          id: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          multiplier: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          socket_colour: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'endless_ledge_chest__base_item_types',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          base_ambient_sound_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          base_env_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ambient_sound_file: {
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
            type: Sequelize.TEXT,
          },
          ambient_bank_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          _music_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _corrupted_music_cache: {
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
          environment_transitions_key: {
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
      ),
      queryInterface.createTable(
        'environment__corrupted__musics',
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
          env_file: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ambient_sound_file: {
            allowNull: false,
            autoIncrement: false,
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
          environment_row: {
            allowNull: true,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          music_row: {
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
      ),
      queryInterface.createTable(
        'environment__musics',
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
          environment_row: {
            allowNull: true,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          music_row: {
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
      ),
      queryInterface.createTable(
        'environment_transitions',
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
          ot_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data0: {
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
      ),
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
          unknown4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          unknown5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          unknown6: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          unknown7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          unknown8: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          unknown9: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          unknown10: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          unknown11: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          unknown23: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          drop_level_minimum: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          drop_level_maximum: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          tier: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown31: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          item_level_restriction: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_screaming_essence: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'essence__monster__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          x: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          y: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          int_id: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          slot_width: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          slot_height: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_upgradable_essence_slot: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          essence_type: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_corrupted_essence: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          reward_command: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          reward_command: {
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
      ),
      queryInterface.createTable(
        'evergreen_achievements',
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
      ),
      queryInterface.createTable(
        'evergreen_achievement_types',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          experience: {
            allowNull: true,
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
      ),
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
          stat_values: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          data1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
          unknown25: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_only_spawning_near_player: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          group: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          life_per_use: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          mana_per_use: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          recovery_time: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          buff_stat_values: {
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'flavour_text_images',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          active_ao_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          idle_ao_files: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          value: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          tag: {
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          value: {
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
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          gm_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ais_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          character_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag0: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'grandmaster__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_support: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          data0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          multiplier1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          multiplier2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          support_gem_letter: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          unknown2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
          cast_time: {
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat1_float: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          stat2_float: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          stat3_float: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          stat4_float: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          stat5_float: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          stat6_float: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          stat7_float: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          stat8_float: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          stat1_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat2_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat3_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat4_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat5_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat6_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat7_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat8_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          level_requirement: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          mana_multiplier: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          level_requirement2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          level_requirement3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          critical_strike_chance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          mana_cost: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          damage_effectiveness: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stored_uses: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          cooldown: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          cooldown_bypass_type: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown30a: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          vaal_souls: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          vaal_stored_uses: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          cooldown_group: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          mana_reservation_override: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown37: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          damage_multiplier: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown45: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown46: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat_data: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          _stats_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _effectiveness_cost_constants_cache: {
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
      ),
      queryInterface.createTable(
        'granted_effects_per_level__effectiveness_cost_constants',
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
          effectiveness_cost_constant_row: {
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
      ),
      queryInterface.createTable(
        'granted_effects_per_level__quality__stats',
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
      ),
      queryInterface.createTable(
        'granted_effects_per_level__stats',
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
      ),
      queryInterface.createTable(
        'granted_effects_per_level__stats2s',
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
      ),
      queryInterface.createTable(
        'harbingers',
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
      ),
      queryInterface.createTable(
        'harbinger_maps',
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
          integer_id: {
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          favour_cost: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          master_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_non_master_doodad: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
          inherits_from: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_crafting_bench: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          sound: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown6: {
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
          unknown8: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          monster_per_spawn_count: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          objective_count: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag6: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag8: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag9: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag10: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          keys0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          data2: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'int_mission_mod__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'int_mission_monster__achievement_items',
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
      ),
      queryInterface.createTable(
        'int_mission_monster__objective__monster_varieties',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data0: {
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
      ),
      queryInterface.createTable(
        'invasion_monster_restriction__monster_varieties',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          data0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
      queryInterface.createTable(
        'invasion_monsters_per_area__monster_varieties1s',
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
      ),
      queryInterface.createTable(
        'invasion_monsters_per_area__monster_varieties2s',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          category: {
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
      ),
      queryInterface.createTable(
        'item_class_categories',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          experience: {
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          dagger_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          bow_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          one_handed_mace_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          one_handed_sword_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          index5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          two_handed_sword_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          two_handed_staff_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          two_handed_mace_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          one_handed_axe_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          two_handed_axe_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          claw_epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          pet_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          dds_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown_unique_int: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          ao_file2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          marauder_sm_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ranger_sm_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          witch_sm_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          duelist_dex_sm_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          templar_sm_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          shadow_sm_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          scion_sm_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          marauder_shape: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ranger_shape: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          witch_shape: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          duelist_shape: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          templar_shape: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          shadow_shape: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          scion_shape: {
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
          sm_files: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          epk_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_alternate_art: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag2: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'item_visual_identity__corrupt__achievement_items',
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
      ),
      queryInterface.createTable(
        'item_visual_identity__identify__achievement_items',
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
      ),
      queryInterface.createTable(
        'item_visual_identity__pickup__achievement_items',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          keys2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          data3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data4: {
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
      ),
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
      ),
      queryInterface.createTable(
        'labyrinths',
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
          quest_state: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          keys0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          area_level: {
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
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'labyrinth_area__cruel__world_areas',
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
      ),
      queryInterface.createTable(
        'labyrinth_area__endgame__world_areas',
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
      ),
      queryInterface.createTable(
        'labyrinth_area__merciless__world_areas',
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
      ),
      queryInterface.createTable(
        'labyrinth_area__normal__world_areas',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          min_labyrinth_tier: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          max_labyrinth_tier: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          id2: {
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
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          min_labyrinth_tier: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          max_labyrinth_tier: {
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
          labyrinth_reward_types_key: {
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
      ),
      queryInterface.createTable(
        'labyrinth_reward_types',
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
          object_path: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          id2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data0: {
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
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          flag1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          flag3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          flag4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          labyrinth_tier_minimum: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          labyrinth_tier_maximum: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          buff_values: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ot_file: {
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
      ),
      queryInterface.createTable(
        'labyrinth_secret__labyrinth_secret_effects0s',
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
      ),
      queryInterface.createTable(
        'labyrinth_secret__labyrinth_secret_effects1s',
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
      ),
      queryInterface.createTable(
        'labyrinth_secret__labyrinth_secret_effects2s',
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
      ),
      queryInterface.createTable(
        'labyrinth_secret__labyrinth_secret_effects3s',
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          float0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          float1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.FLOAT,
          },
          _labyrinth_section_layout_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _labyrinth_node_overrides_cache: {
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
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
      queryInterface.createTable(
        'labyrinth_section_layout__labyrinth_node_overrides',
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
          labyrinth_section_layout_row: {
            allowNull: true,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          labyrinth_node_override_row: {
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
      ),
      queryInterface.createTable(
        'labyrinth_section_layout__labyrinth_section_layouts',
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
      ),
      queryInterface.createTable(
        'labyrinth_trials',
        {
          row: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          world_areas: {
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
          unknown7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown8: {
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          image: {
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          regular_guild_character: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unique_guild_character: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          tier: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          shaped_area_level: {
            allowNull: true,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          restricted_area_text: {
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
      ),
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
          area_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'map_device_recipe__base_item_types',
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
      ),
      queryInterface.createTable(
        'map__higher_tier_maps__base_item_types',
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
      ),
      queryInterface.createTable(
        'map__monster_packs',
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
      ),
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
      ),
      queryInterface.createTable(
        'map_inhabitant__monster_packs',
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
          map_inhabitant_row: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          position_x: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          position_y: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flavour_text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          act: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown_id: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown13: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          data0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown16: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          waypoint_world_areas_key: {
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
      ),
      queryInterface.createTable(
        'map_pin__world_areas',
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
      ),
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
      ),
      queryInterface.createTable(
        'master_act_weights',
        {
          row: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          act1_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          act2_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          act3_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          act4_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          act5_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          act6_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          act7_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          act8_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          act9_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          act10_weight: {
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          map_ao_file: {
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'misc_animated__preload_groups',
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
      ),
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
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown1: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'misc_beam__preload_groups',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          effect_virtual_path: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown_unique: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown1: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'misc_object__preload_groups',
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
      ),
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
      ),
      queryInterface.createTable(
        'mission_tile_map__world_areas',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          tdt_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          domain: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          generation_type: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          correct_group: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          stat1_min: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat1_max: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat2_min: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat2_max: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat3_min: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat3_max: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat4_min: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat4_max: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          buff_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          monster_metadata: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data4: {
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
          stat5_min: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat5_max: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          keys0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_essence_only_modifier: {
            allowNull: true,
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.createTable(
        'mod__generation_weight__tags',
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
      ),
      queryInterface.createTable(
        'mod__spawn_weight__tags',
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
      ),
      queryInterface.createTable(
        'mod__tags',
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
      ),
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
      ),
      queryInterface.createTable(
        'mod_sell_price__base_item_types',
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
      ),
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
      ),
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
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'mod_type__mod_sell_prices',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          art_string_sm_file: {
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          monster_group_names_id: {
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat1_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat2_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat3_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat4_value: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat1_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat2_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat3_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat4_value: {
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
      ),
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
          boss_monster_spawn_chance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          boss_monster_count: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown11: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          data1: {
            allowNull: true,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
      ),
      queryInterface.createTable(
        'monster_pack__boss_monster__monster_varieties',
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
      ),
      queryInterface.createTable(
        'monster_pack__tags',
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
      ),
      queryInterface.createTable(
        'monster_pack__world_areas',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          fire_normal: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          cold_normal: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          lightning_normal: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          chaos_normal: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          fire_cruel: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          cold_cruel: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          lightning_cruel: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          chaos_cruel: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          fire_merciless: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          cold_merciless: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          lightning_merciless: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          chaos_merciless: {
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          shapes: {
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
      ),
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
      ),
      queryInterface.createTable(
        'monster_spawner_overrides',
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
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          base_monster_varieties_key: {
            allowNull: true,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          override_monster_varieties_key: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_summoned: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          armour: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          evasion: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          energy_shield_from_life: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          damage_spread: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'monster_type__tags',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          object_size: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          minimum_attack_distance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          maximum_attack_distance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          act_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          base_monster_type_index: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown_index0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown_index1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          model_size_multiplier: {
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
          experience_multiplier: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
          critical_strike_chance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown11: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          ais_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          stance: {
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
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          damage_multiplier: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          life_multiplier: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          attack_speed: {
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
          unknown13: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
          unknown21: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown70: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown71: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown14: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          unknown72: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown87: {
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
          unknown99: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown100: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          keys0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          keys1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
          _kill_specific_monster_count_achievement_items_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _special_mods_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _kill_rare_achievement_items_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _monster_level80_achievement_items_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _part1_mods_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _part2_mods_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _endgame_mods_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _kill_rare_in_part2_achievement_items_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _kill_rare_in_endgame_achievement_items_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _kill_specific_monster_count2_achievement_items_cache: {
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
          kill_while_onslaught_is_active_achievement_items_key: {
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
          kill_while_talisman_is_active_achievement_items_key: {
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
      ),
      queryInterface.createTable(
        'monster_variety__endgame__mods',
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
      ),
      queryInterface.createTable(
        'monster_variety__granted_effects',
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
      ),
      queryInterface.createTable(
        'monster_variety__kill_rare__achievement_items',
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
      ),
      queryInterface.createTable(
        'monster_variety__kill_rare_in_endgame__achievement_items',
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
      ),
      queryInterface.createTable(
        'monster_variety__kill_rare_in_part2__achievement_items',
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
      ),
      queryInterface.createTable(
        'monster_variety__kill_specific_monster_count2__achievement_items',
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
      ),
      queryInterface.createTable(
        'monster_variety__kill_specific_monster_count__achievement_items',
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
      ),
      queryInterface.createTable(
        'monster_variety__mods',
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
      ),
      queryInterface.createTable(
        'monster_variety__mods2s',
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
      ),
      queryInterface.createTable(
        'monster_variety__monster_level80__achievement_items',
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
      ),
      queryInterface.createTable(
        'monster_variety__part1__mods',
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
      ),
      queryInterface.createTable(
        'monster_variety__part2__mods',
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
      ),
      queryInterface.createTable(
        'monster_variety__special__mods',
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
      ),
      queryInterface.createTable(
        'monster_variety__tags',
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
      ),
      queryInterface.createTable(
        'monster_variety__weapon1__item_visual_identities',
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
      ),
      queryInterface.createTable(
        'monster_variety__weapon2__item_visual_identities',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          sound_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          bank_file: {
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
      ),
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          metadata: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          short_name: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          volume_percentage: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_str_master: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_dex_master: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_int_master: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          hideout: {
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
          _achievement_items_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          experience: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          item_level: {
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
      ),
      queryInterface.createTable(
        'n_p_c_master__achievement_items',
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
      ),
      queryInterface.createTable(
        'n_p_c_master__master_level5__achievement_items',
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
      ),
      queryInterface.createTable(
        'n_p_c_master__signature_mod_spawn_weight__tags',
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
      ),
      queryInterface.createTable(
        'n_p_c_master__unknown_weight__tags',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown_keys0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown_values: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown10: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown11: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'n_p_c_shop__sold_item__tags',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          dialogue_option: {
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
          script: {
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
          unknown15: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          script2: {
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
          data5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data6: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown25: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          flag2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown25c: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown26: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown27: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          data7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown30: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          _npc_text_audio_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _prophecies_cache: {
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
      ),
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
      ),
      queryInterface.createTable(
        'n_p_c_talk__n_p_c_text_audios',
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
      ),
      queryInterface.createTable(
        'n_p_c_talk__prophecies',
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
          prophecy_row: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          mono_audio_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          stereo_audio_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          has_stereo: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown0: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          message: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.createTable(
        'pantheon_panel_layouts',
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
          is_major_god: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          cover_image: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          god_name2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          god_name3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          god_name4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          god_name1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          quest_state1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          quest_state2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          quest_state3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          quest_state4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_enabled: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          _effect1_stats_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _effect2_stats_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _effect3_stats_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _effect4_stats_cache: {
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
      ),
      queryInterface.createTable(
        'pantheon_panel_layout__effect1__stats',
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
          pantheon_panel_layout_row: {
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
      ),
      queryInterface.createTable(
        'pantheon_panel_layout__effect2__stats',
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
          pantheon_panel_layout_row: {
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
      ),
      queryInterface.createTable(
        'pantheon_panel_layout__effect3__stats',
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
          pantheon_panel_layout_row: {
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
      ),
      queryInterface.createTable(
        'pantheon_panel_layout__effect4__stats',
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
          pantheon_panel_layout_row: {
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
      ),
      queryInterface.createTable(
        'pantheon_souls',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          icon_dds_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          stat1_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat2_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat3_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat4_value: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          passive_skill_graph_id: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_keystone: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_notable: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flavour_text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_just_icon: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_jewel_socket: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          key2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          buff_related_unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          buff_related_unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_ascendancy_starting_node: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          skill_points_granted: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_multiple_choice: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_multiple_choice_option: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'passive_skill__characters',
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
      ),
      queryInterface.createTable(
        'passive_skill__reminder__client_strings',
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
      ),
      queryInterface.createTable(
        'passive_skill__stats',
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
      ),
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
      ),
      queryInterface.createTable(
        'path_of_endurance__mods',
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
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
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          unknown5: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'perandus_guard__monster_packs',
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
      ),
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          loop_animation_id: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          impact_animation_id: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          projectile_speed: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          index4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          prediction_text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown_unique: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flavour_text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ogg_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          prophecy_chain_position: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_enabled: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          seal_cost: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
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
            type: Sequelize.TEXT,
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
      ),
      queryInterface.createTable(
        'prophecy__quest_tracker__client_strings',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown_unique: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          act: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          quest_state: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          icon_dds_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          quest_id: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_hardcore_achievement: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_standard_achievement: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
      ),
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
      ),
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
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          item_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          rarity: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown9: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          socket_gems: {
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
          unknown2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown5: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          quest_states: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data0: {
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
            type: Sequelize.BOOLEAN,
          },
          message: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          map_pins_texts: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          keys2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          quest_finished_ogg_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
      ),
      queryInterface.createTable(
        'quest_state__map_pins1s',
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
      ),
      queryInterface.createTable(
        'quest_state__map_pins2s',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          stat_values: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
          quest_key: {
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
      ),
      queryInterface.createTable(
        'quest_static_reward__stats',
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
          quest_static_reward_row: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          quest_state: {
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
          unique_items_keys: {
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
          unknown4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'quest_vendor_reward__base_item_types',
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
      ),
      queryInterface.createTable(
        'quest_vendor_reward__characters',
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
      ),
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
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          keys1: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'race_area__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          start_unix_time: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          end_unix_time: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT,
          },
          data0: {
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          server: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          is_enabled: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          server2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          short_name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data0: {
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
          is_gamma_realm: {
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
      ),
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
      ),
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
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          client_text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          client_jpg_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          website_text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          website_jpg_file: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          country: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          currency_sign: {
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
      ),
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
          account_upgrade_id_or_base_item_types_key: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          small_art_jpg_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          youtube_video: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          large_art_jpg_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          description2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          daily_deal_art_jpg_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown15: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_tencent_item: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_tradeable: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown_art_png_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
      queryInterface.createTable(
        'shop_item__package__shop_items',
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
      ),
      queryInterface.createTable(
        'shop_item__shop_categories',
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
      ),
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
      ),
      queryInterface.createTable(
        'shop_package_platforms',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          coins: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          available_flag: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          contains_beta_key: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          data0: {
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
          background_image: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          physical_item_points: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown0: {
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          type_id: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          charges_shared: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
          description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
          unknown14: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_pvp_only: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown17: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_lesser_shrine: {
            allowNull: true,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          buff_stat_values: {
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
      ),
      queryInterface.createTable(
        'shrine__achievement_items',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          stereo_sound_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          mono_sound_file: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          dex: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          int: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          description: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
      queryInterface.createTable(
        'skill_gem__gem_tags',
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          sound_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          sound_file_2_d: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown3: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_local: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_weapon_local: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          flag3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag6: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          flag7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown0: {
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
      ),
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
      ),
      queryInterface.createTable(
        'stat_interpolation_types',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          has_objective_boss_kill: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          has_objective_full_clear: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
          has_objective_kill_exiles: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          has_objective_find_unique: {
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
          has_objective_complete_master_mission: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          object_count_required: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          object_count_total: {
            allowNull: true,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          time_limit: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          has_time_bonus_per_kill: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          has_time_bonus_per_object_tagged: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          has_limited_portals: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          time_limit_bonus_from_objective: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          object_count: {
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
      ),
      queryInterface.createTable(
        'str_dex_int_mission__achievement_items',
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
      ),
      queryInterface.createTable(
        'str_dex_int_mission__extra__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'str_dex_int_mission_map__map_boss__monster_varieties',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          is_unique_map: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'str_dex_int_mission_mod__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'str_dex_int_mission_unique_map__map_boss__monster_varieties',
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
      ),
      queryInterface.createTable(
        'str_dex_int_mission_unique_map__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          time_limit: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          dummy_count: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          dummy_spawn_timer: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown12: {
            allowNull: true,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'str_dex_mission__allies__monster_varieties',
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
      ),
      queryInterface.createTable(
        'str_dex_mission__mods',
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
      ),
      queryInterface.createTable(
        'str_dex_mission__traps__monster_varieties',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'str_dex_mission_mod__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'str_dex_mission_special_mod__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          f9: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          has_time_limit: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          time_limit: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_destroy_relic1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_destroy_relic2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          feed_required: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          f12: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'str_int_mission__achievement_items',
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
      ),
      queryInterface.createTable(
        'str_int_mission__relic_mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          wave_count: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          pack_timer: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          time_limit: {
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
          unknown13: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unique_count: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'str_int_mission_monster_wave__unique__monster_varieties',
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
      ),
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
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'str_int_mission_relic_mod__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ally_relic_count: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_enemy_relic: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_ally_relic: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          enemy_relic_count: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'str_int_mission_relic_pattern__relic__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          f7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          f10: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          f11: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          f12: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          f13: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          b1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          b2: {
            allowNull: true,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
      queryInterface.createTable(
        'str_mission__mods',
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
      ),
      queryInterface.createTable(
        'str_mission_map_mods',
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
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          key0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT,
          },
          data1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ground_effect_unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          ground_effect_unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          key3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT,
          },
          b1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          b2: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          key0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          f7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          f8: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_cartographer_box: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
      ),
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
          unknown3: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown2: {
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
          unknown4: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown7: {
            allowNull: true,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          format_title: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          background: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          time0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          time1: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          tier: {
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
          unknown11: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown2: {
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
      ),
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
      ),
      queryInterface.createTable(
        'talisman_pack__monster_packs',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown_unique: {
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          dgr_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          max_zone_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown13: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'torment_spirit__mods0s',
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
      ),
      queryInterface.createTable(
        'torment_spirit__mods1s',
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
      ),
      queryInterface.createTable(
        'torment_spirit__possessed__mods',
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
      ),
      queryInterface.createTable(
        'torment_spirit__spirit__mods',
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
      ),
      queryInterface.createTable(
        'torment_spirit__touched__mods',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          data0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          data1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
      queryInterface.createTable(
        'tutorials',
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
          ui_file: {
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
          is_enabled: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          min_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          spawn_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          data1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          ao_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          data2: {
            allowNull: true,
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
          appearance_chests_key: {
            allowNull: true,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
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
      ),
      queryInterface.createTable(
        'unique_chest__mods',
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
      ),
      queryInterface.createTable(
        'unique_fragments',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          limit: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          accept_text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          reject_text: {
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
      ),
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown1: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BIGINT,
          },
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          tier1_name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          tier2_name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          tier3_name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          tier4_name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          tier1_art: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          tier2_art: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          tier3_art: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          tier4_art: {
            allowNull: true,
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
      ),
      queryInterface.createTable(
        'warbands_pack_monster__tier1__monster_varieties',
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
      ),
      queryInterface.createTable(
        'warbands_pack_monster__tier2__monster_varieties',
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
      ),
      queryInterface.createTable(
        'warbands_pack_monster__tier3__monster_varieties',
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
      ),
      queryInterface.createTable(
        'warbands_pack_monster__tier4__monster_varieties',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          spawn_chance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
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
          tier4_number: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown5: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          tier3_number: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown7: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          tier2_number: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown9: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          tier1_number: {
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
      ),
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
      ),
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
      ),
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
      ),
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
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
          engine: 'MYISAM',
        },
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          speed: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          damage_min: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          damage_max: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          range_max: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          null6: {
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          text: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown6: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          text2: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown8: {
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
      ),
      queryInterface.createTable(
        'word__spawn_weight__tags',
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
      ),
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          name: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          act: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_town: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          has_waypoint: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          area_level: {
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
          loading_screen_dds_file: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown10: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          data0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          unknown13: {
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
          is_map_area: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown32: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown33: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown38: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown39: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          strongbox_spawn_chance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          strongbox_max_count: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          strongbox_rarity_weight: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
          },
          flag0: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          unknown46: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          max_level: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown50: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown51: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_hideout: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown52: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown53: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown54: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown55: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown56: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown57: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown58: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown59: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_vaal_area: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown62: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown63: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown64: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_labyrinth_airlock: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_labyrinth_area: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown69: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown70: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown71: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          tsi_file: {
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
          unknown75: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown76: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown77: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_unique_map_area: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          is_labyrinth_boss_area: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          unknown80: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown81: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown89: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown90: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown91: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown92: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          unknown93: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          is_master_daily_area: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.BOOLEAN,
          },
          harbinger_spawn_chance: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          harbinger_count: {
            allowNull: true,
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
          _waypoint_activation_achievement_items_cache: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          _completion_achievement_items_cache: {
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
          first_entry_npc_text_audio_key: {
            allowNull: true,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          first_entry_sound_effects_key: {
            allowNull: true,
            type: Sequelize.BIGINT({
              unsigned: true,
            }),
          },
          first_entry_np_cs_key: {
            allowNull: true,
            type: Sequelize.TEXT,
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
      ),
      queryInterface.createTable(
        'world_area__area_type__tags',
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
      ),
      queryInterface.createTable(
        'world_area__bosses__monster_varieties',
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
      ),
      queryInterface.createTable(
        'world_area__completion__achievement_items',
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
      ),
    ]);
    await Promise.all([
      queryInterface.createTable(
        'world_area__connections__world_areas',
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
      ),
      queryInterface.createTable(
        'world_area__full_clear__achievement_items',
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
      ),
      queryInterface.createTable(
        'world_area__mods',
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
      ),
      queryInterface.createTable(
        'world_area__monsters__monster_varieties',
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
      ),
      queryInterface.createTable(
        'world_area__spawn_weight__tags',
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
      ),
      queryInterface.createTable(
        'world_area__tags',
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
      ),
      queryInterface.createTable(
        'world_area__topologies',
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
      ),
      queryInterface.createTable(
        'world_area__vaal_area__world_areas',
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
      ),
      queryInterface.createTable(
        'world_area__waypoint_activation__achievement_items',
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
      ),
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
            allowNull: true,
            primaryKey: false,
            type: Sequelize.INTEGER,
          },
          experience: {
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
      ),
      queryInterface.createTable(
        'zana_quests',
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
          unknown3: {
            allowNull: true,
            primaryKey: false,
            type: Sequelize.TEXT,
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
            type: Sequelize.INTEGER({
              unsigned: true,
            }),
          },
          unknown9: {
            allowNull: true,
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'active_skill__input__stats',
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
      ),
      queryInterface.addIndex(
        'active_skill__output__stats',
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
      ),
      queryInterface.addIndex(
        'active_skill__weapon_restriction__item_classes',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'atlas_node__atlas_nodes',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'base_item_type__implicit__mods',
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
      ),
      queryInterface.addIndex(
        'base_item_type__magic_purchase__base_item_types',
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
      ),
      queryInterface.addIndex(
        'base_item_type__normal_purchase__base_item_types',
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
      ),
      queryInterface.addIndex(
        'base_item_type__rare_purchase__base_item_types',
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
      ),
      queryInterface.addIndex(
        'base_item_type__tags',
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
      ),
      queryInterface.addIndex(
        'base_item_type__unique_purchase__base_item_types',
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
      ),
      queryInterface.addIndex(
        'base_item_type__vendor_recipe__achievement_items',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'bloodline__item_weight__tags',
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
      ),
      queryInterface.addIndex(
        'bloodline__mods',
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
      ),
      queryInterface.addIndex(
        'bloodline__spawn_weight__tags',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'buff_definition__stats',
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'buff_visual__preload_groups',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'character_audio_event__duelist__character_text_audios',
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
      ),
      queryInterface.addIndex(
        'character_audio_event__goddess__character_text_audios',
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
      ),
      queryInterface.addIndex(
        'character_audio_event__jack_the_axe__character_text_audios',
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
      ),
      queryInterface.addIndex(
        'character_audio_event__marauder__character_text_audios',
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
      ),
      queryInterface.addIndex(
        'character_audio_event__ranger__character_text_audios',
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
      ),
      queryInterface.addIndex(
        'character_audio_event__scion__character_text_audios',
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
      ),
      queryInterface.addIndex(
        'character_audio_event__shadow__character_text_audios',
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
      ),
      queryInterface.addIndex(
        'character_audio_event__templar__character_text_audios',
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
      ),
      queryInterface.addIndex(
        'character_audio_event__witch__character_text_audios',
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
      ),
      queryInterface.addIndex(
        'character_panel_stat__stats1s',
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
      ),
      queryInterface.addIndex(
        'character_panel_stat__stats2s',
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
      ),
      queryInterface.addIndex(
        'character_panel_stat__stats3s',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'character_start_item__mods',
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
      ),
      queryInterface.addIndex(
        'character_start_item__socketed__skill_gems',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'character_start_quest_state__map_pins',
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
      ),
      queryInterface.addIndex(
        'character_start_quest_state__quests',
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
      ),
      queryInterface.addIndex(
        'character_start_state__character_start_quest_states',
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
      ),
      queryInterface.addIndex(
        'character_start_state__passive_skills',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'chest__mods',
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
      ),
      queryInterface.addIndex(
        'chest__tags',
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
      ),
      queryInterface.addIndex(
        'chest_cluster__chests',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'crafting_bench_option__cost__base_item_types',
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
      ),
      queryInterface.addIndex(
        'crafting_bench_option__item_classes',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'currency_item__usage__achievement_items',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'daily_mission__characters',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types10s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types11s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types12s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types13s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types14s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types1s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types2s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types3s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types4s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types5s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types6s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types7s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types8s',
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
      ),
      queryInterface.addIndex(
        'descent_reward_chest__base_item_types9s',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'dex_int_mission__achievement_items',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'dex_mission_monster__monster_packs',
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
      ),
      queryInterface.addIndex(
        'dex_mission_monster__monster_varieties',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'eclipse_mod__spawn_weight__tags',
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
      ),
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
      ),
      queryInterface.addIndex(
        'endless_ledge_chest__base_item_types',
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
      ),
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
      ),
      queryInterface.addIndex(
        'environment__corrupted__musics',
        [
          {
            attribute: 'environment_row',
          },
          {
            attribute: 'music_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
      queryInterface.addIndex(
        'environment__musics',
        [
          {
            attribute: 'environment_row',
          },
          {
            attribute: 'music_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
      queryInterface.addIndex(
        'environments',
        [
          {
            attribute: 'environment_transitions_key',
          },
        ],
        {
          indexName: 'index_environment_transitions_key',
        },
      ),
      queryInterface.addIndex(
        'essence__monster__mods',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'grandmaster__mods',
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
      ),
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
      ),
      queryInterface.addIndex(
        'granted_effects_per_level__effectiveness_cost_constants',
        [
          {
            attribute: 'granted_effects_per_level_row',
          },
          {
            attribute: 'effectiveness_cost_constant_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
      queryInterface.addIndex(
        'granted_effects_per_level__quality__stats',
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
      ),
      queryInterface.addIndex(
        'granted_effects_per_level__stats',
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
      ),
      queryInterface.addIndex(
        'granted_effects_per_level__stats2s',
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
      ),
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
      ),
      queryInterface.addIndex(
        'harbinger_maps',
        [
          {
            attribute: 'base_item_types_key',
          },
        ],
        {
          indexName: 'index_base_item_types_key',
        },
      ),
      queryInterface.addIndex(
        'harbingers',
        [
          {
            attribute: 'monster_varieties_key',
          },
        ],
        {
          indexName: 'index_monster_varieties_key',
        },
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'int_mission_mod__mods',
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
      ),
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
      ),
      queryInterface.addIndex(
        'int_mission_monster__achievement_items',
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
      ),
      queryInterface.addIndex(
        'int_mission_monster__objective__monster_varieties',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'invasion_monster_restriction__monster_varieties',
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
      ),
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
      ),
      queryInterface.addIndex(
        'invasion_monsters_per_area__monster_varieties1s',
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
      ),
      queryInterface.addIndex(
        'invasion_monsters_per_area__monster_varieties2s',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'item_visual_identity__corrupt__achievement_items',
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
      ),
      queryInterface.addIndex(
        'item_visual_identity__identify__achievement_items',
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
      ),
      queryInterface.addIndex(
        'item_visual_identity__pickup__achievement_items',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'labyrinth_area__cruel__world_areas',
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
      ),
      queryInterface.addIndex(
        'labyrinth_area__endgame__world_areas',
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
      ),
      queryInterface.addIndex(
        'labyrinth_area__merciless__world_areas',
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
      ),
      queryInterface.addIndex(
        'labyrinth_area__normal__world_areas',
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
      ),
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
      ),
      queryInterface.addIndex(
        'labyrinth_rewards',
        [
          {
            attribute: 'chests_key',
          },
        ],
        {
          indexName: 'index_chests_key',
        },
      ),
      queryInterface.addIndex(
        'labyrinth_rewards',
        [
          {
            attribute: 'labyrinth_reward_types_key',
          },
        ],
        {
          indexName: 'index_labyrinth_reward_types_key',
        },
      ),
      queryInterface.addIndex(
        'labyrinth_secret__labyrinth_secret_effects0s',
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
      ),
      queryInterface.addIndex(
        'labyrinth_secret__labyrinth_secret_effects1s',
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
      ),
      queryInterface.addIndex(
        'labyrinth_secret__labyrinth_secret_effects2s',
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
      ),
      queryInterface.addIndex(
        'labyrinth_secret__labyrinth_secret_effects3s',
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'labyrinth_section_layout__labyrinth_node_overrides',
        [
          {
            attribute: 'labyrinth_section_layout_row',
          },
          {
            attribute: 'labyrinth_node_override_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
      queryInterface.addIndex(
        'labyrinth_section_layout__labyrinth_section_layouts',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'labyrinth_trials',
        [
          {
            attribute: 'npc_text_audio_key',
          },
        ],
        {
          indexName: 'index_npc_text_audio_key',
        },
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'map__higher_tier_maps__base_item_types',
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
      ),
      queryInterface.addIndex(
        'map__monster_packs',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'map_device_recipe__base_item_types',
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
      ),
      queryInterface.addIndex(
        'map_device_recipes',
        [
          {
            attribute: 'world_areas_key',
          },
        ],
        {
          indexName: 'index_world_areas_key',
        },
      ),
      queryInterface.addIndex(
        'map_inhabitant__monster_packs',
        [
          {
            attribute: 'map_inhabitant_row',
          },
          {
            attribute: 'monster_pack_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
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
      ),
      queryInterface.addIndex(
        'map_pin__world_areas',
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
      ),
      queryInterface.addIndex(
        'map_pins',
        [
          {
            attribute: 'waypoint_world_areas_key',
          },
        ],
        {
          indexName: 'index_waypoint_world_areas_key',
        },
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'master_act_weights',
        [
          {
            attribute: 'npc_master_key',
          },
        ],
        {
          indexName: 'index_npc_master_key',
        },
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'misc_animated__preload_groups',
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
      ),
      queryInterface.addIndex(
        'misc_beam__preload_groups',
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
      ),
      queryInterface.addIndex(
        'misc_object__preload_groups',
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
      ),
      queryInterface.addIndex(
        'mission_tile_map__world_areas',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'mod__generation_weight__tags',
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
      ),
      queryInterface.addIndex(
        'mod__spawn_weight__tags',
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
      ),
      queryInterface.addIndex(
        'mod__tags',
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
      ),
      queryInterface.addIndex(
        'mod_sell_price__base_item_types',
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
      ),
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
      ),
      queryInterface.addIndex(
        'mod_type__mod_sell_prices',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'monster_pack__boss_monster__monster_varieties',
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
      ),
      queryInterface.addIndex(
        'monster_pack__tags',
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
      ),
      queryInterface.addIndex(
        'monster_pack__world_areas',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'monster_spawner_overrides',
        [
          {
            attribute: 'base_monster_varieties_key',
          },
        ],
        {
          indexName: 'index_base_monster_varieties_key',
        },
      ),
      queryInterface.addIndex(
        'monster_spawner_overrides',
        [
          {
            attribute: 'override_monster_varieties_key',
          },
        ],
        {
          indexName: 'index_override_monster_varieties_key',
        },
      ),
      queryInterface.addIndex(
        'monster_type__tags',
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'monster_varieties',
        [
          {
            attribute: 'kill_while_onslaught_is_active_achievement_items_key',
          },
        ],
        {
          indexName:
            'index_kill_while_onslaught_is_active_achievement_items_key',
        },
      ),
      queryInterface.addIndex(
        'monster_varieties',
        [
          {
            attribute: 'kill_while_talisman_is_active_achievement_items_key',
          },
        ],
        {
          indexName:
            'index_kill_while_talisman_is_active_achievement_items_key',
        },
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'monster_variety__endgame__mods',
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
      ),
      queryInterface.addIndex(
        'monster_variety__granted_effects',
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
      ),
      queryInterface.addIndex(
        'monster_variety__kill_rare__achievement_items',
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
      ),
      queryInterface.addIndex(
        'monster_variety__kill_rare_in_endgame__achievement_items',
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
      ),
      queryInterface.addIndex(
        'monster_variety__kill_rare_in_part2__achievement_items',
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
      ),
      queryInterface.addIndex(
        'monster_variety__kill_specific_monster_count__achievement_items',
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
      ),
      queryInterface.addIndex(
        'monster_variety__kill_specific_monster_count2__achievement_items',
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
      ),
      queryInterface.addIndex(
        'monster_variety__mods',
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
      ),
      queryInterface.addIndex(
        'monster_variety__mods2s',
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
      ),
      queryInterface.addIndex(
        'monster_variety__monster_level80__achievement_items',
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
      ),
      queryInterface.addIndex(
        'monster_variety__part1__mods',
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
      ),
      queryInterface.addIndex(
        'monster_variety__part2__mods',
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
      ),
      queryInterface.addIndex(
        'monster_variety__special__mods',
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
      ),
      queryInterface.addIndex(
        'monster_variety__tags',
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
      ),
      queryInterface.addIndex(
        'monster_variety__weapon1__item_visual_identities',
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
      ),
      queryInterface.addIndex(
        'monster_variety__weapon2__item_visual_identities',
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
      ),
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
      ),
      queryInterface.addIndex(
        'n_p_c_master__achievement_items',
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
      ),
      queryInterface.addIndex(
        'n_p_c_master__master_level5__achievement_items',
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
      ),
      queryInterface.addIndex(
        'n_p_c_master__signature_mod_spawn_weight__tags',
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
      ),
      queryInterface.addIndex(
        'n_p_c_master__unknown_weight__tags',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'n_p_c_shop__sold_item__tags',
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
      ),
      queryInterface.addIndex(
        'n_p_c_talk__n_p_c_text_audios',
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
      ),
      queryInterface.addIndex(
        'n_p_c_talk__prophecies',
        [
          {
            attribute: 'npc_talk_row',
          },
          {
            attribute: 'prophecy_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
      queryInterface.addIndex(
        'n_p_c_talks',
        [
          {
            attribute: 'base_item_types_key',
          },
        ],
        {
          indexName: 'index_base_item_types_key',
        },
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'pantheon_panel_layout__effect1__stats',
        [
          {
            attribute: 'pantheon_panel_layout_row',
          },
          {
            attribute: 'stat_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
      queryInterface.addIndex(
        'pantheon_panel_layout__effect2__stats',
        [
          {
            attribute: 'pantheon_panel_layout_row',
          },
          {
            attribute: 'stat_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
      queryInterface.addIndex(
        'pantheon_panel_layout__effect3__stats',
        [
          {
            attribute: 'pantheon_panel_layout_row',
          },
          {
            attribute: 'stat_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
      queryInterface.addIndex(
        'pantheon_panel_layout__effect4__stats',
        [
          {
            attribute: 'pantheon_panel_layout_row',
          },
          {
            attribute: 'stat_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
      queryInterface.addIndex(
        'pantheon_souls',
        [
          {
            attribute: 'base_item_types_key',
          },
        ],
        {
          indexName: 'index_base_item_types_key',
        },
      ),
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
      ),
      queryInterface.addIndex(
        'passive_skill__characters',
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
      ),
      queryInterface.addIndex(
        'passive_skill__reminder__client_strings',
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
      ),
      queryInterface.addIndex(
        'passive_skill__stats',
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'path_of_endurance__mods',
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'perandus_guard__monster_packs',
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'prophecy__quest_tracker__client_strings',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'quest_state__map_pins1s',
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
      ),
      queryInterface.addIndex(
        'quest_state__map_pins2s',
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
      ),
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
      ),
      queryInterface.addIndex(
        'quest_static_reward__stats',
        [
          {
            attribute: 'quest_static_reward_row',
          },
          {
            attribute: 'stat_row',
          },
        ],
        {
          indexName: 'composite primary_alias',
        },
      ),
      queryInterface.addIndex(
        'quest_static_rewards',
        [
          {
            attribute: 'client_strings_key',
          },
        ],
        {
          indexName: 'index_client_strings_key',
        },
      ),
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
      ),
      queryInterface.addIndex(
        'quest_vendor_reward__base_item_types',
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
      ),
      queryInterface.addIndex(
        'quest_vendor_reward__characters',
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
      ),
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
      ),
      queryInterface.addIndex(
        'race_area__mods',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'shop_item__package__shop_items',
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
      ),
      queryInterface.addIndex(
        'shop_item__shop_categories',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'shrine__achievement_items',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'skill_gem__gem_tags',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'str_dex_int_mission__achievement_items',
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
      ),
      queryInterface.addIndex(
        'str_dex_int_mission__extra__mods',
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
      ),
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
      ),
      queryInterface.addIndex(
        'str_dex_int_mission_map__map_boss__monster_varieties',
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
      ),
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
      ),
      queryInterface.addIndex(
        'str_dex_int_mission_mod__mods',
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
      ),
      queryInterface.addIndex(
        'str_dex_int_mission_unique_map__map_boss__monster_varieties',
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
      ),
      queryInterface.addIndex(
        'str_dex_int_mission_unique_map__mods',
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'str_dex_mission__allies__monster_varieties',
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
      ),
      queryInterface.addIndex(
        'str_dex_mission__mods',
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
      ),
      queryInterface.addIndex(
        'str_dex_mission__traps__monster_varieties',
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
      ),
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
      ),
      queryInterface.addIndex(
        'str_dex_mission_mod__mods',
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
      ),
      queryInterface.addIndex(
        'str_dex_mission_special_mod__mods',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'str_int_mission__achievement_items',
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
      ),
      queryInterface.addIndex(
        'str_int_mission__relic_mods',
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
      ),
      queryInterface.addIndex(
        'str_int_mission_monster_wave__unique__monster_varieties',
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
      ),
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
      ),
      queryInterface.addIndex(
        'str_int_mission_relic_mod__mods',
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
      ),
      queryInterface.addIndex(
        'str_int_mission_relic_pattern__relic__mods',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'str_mission__mods',
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
      ),
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
      ),
      queryInterface.addIndex(
        'str_mission_map_mods',
        [
          {
            attribute: 'mods_key',
          },
        ],
        {
          indexName: 'index_mods_key',
        },
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'talisman_pack__monster_packs',
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
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'torment_spirit__mods0s',
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
      ),
      queryInterface.addIndex(
        'torment_spirit__mods1s',
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
      ),
      queryInterface.addIndex(
        'torment_spirit__possessed__mods',
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
      ),
      queryInterface.addIndex(
        'torment_spirit__spirit__mods',
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
      ),
      queryInterface.addIndex(
        'torment_spirit__touched__mods',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'unique_chest__mods',
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
      ),
      queryInterface.addIndex(
        'unique_chests',
        [
          {
            attribute: 'appearance_chests_key',
          },
        ],
        {
          indexName: 'index_appearance_chests_key',
        },
      ),
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
      ),
      queryInterface.addIndex(
        'unique_chests',
        [
          {
            attribute: 'flavour_text_key',
          },
        ],
        {
          indexName: 'index_flavour_text_key',
        },
      ),
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
      ),
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'warbands_pack_monster__tier1__monster_varieties',
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
      ),
      queryInterface.addIndex(
        'warbands_pack_monster__tier2__monster_varieties',
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
      ),
      queryInterface.addIndex(
        'warbands_pack_monster__tier3__monster_varieties',
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
      ),
    ]);
    await Promise.all([
      queryInterface.addIndex(
        'warbands_pack_monster__tier4__monster_varieties',
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
      ),
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
      ),
      queryInterface.addIndex(
        'word__spawn_weight__tags',
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
      ),
      queryInterface.addIndex(
        'world_area__area_type__tags',
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
      ),
      queryInterface.addIndex(
        'world_area__bosses__monster_varieties',
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
      ),
      queryInterface.addIndex(
        'world_area__completion__achievement_items',
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
      ),
      queryInterface.addIndex(
        'world_area__connections__world_areas',
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
      ),
      queryInterface.addIndex(
        'world_area__full_clear__achievement_items',
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
      ),
      queryInterface.addIndex(
        'world_area__mods',
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
      ),
      queryInterface.addIndex(
        'world_area__monsters__monster_varieties',
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
      ),
      queryInterface.addIndex(
        'world_area__spawn_weight__tags',
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
      ),
      queryInterface.addIndex(
        'world_area__tags',
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
      ),
      queryInterface.addIndex(
        'world_area__topologies',
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
      ),
      queryInterface.addIndex(
        'world_area__vaal_area__world_areas',
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
      ),
      queryInterface.addIndex(
        'world_area__waypoint_activation__achievement_items',
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
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'world_areas',
        [
          {
            attribute: 'environments_key',
          },
        ],
        {
          indexName: 'index_environments_key',
        },
      ),
      queryInterface.addIndex(
        'world_areas',
        [
          {
            attribute: 'first_entry_np_cs_key',
            length: 250,
          },
        ],
        {
          indexName: 'index_first_entry_np_cs_key',
        },
      ),
      queryInterface.addIndex(
        'world_areas',
        [
          {
            attribute: 'first_entry_npc_text_audio_key',
          },
        ],
        {
          indexName: 'index_first_entry_npc_text_audio_key',
        },
      ),
      queryInterface.addIndex(
        'world_areas',
        [
          {
            attribute: 'first_entry_sound_effects_key',
          },
        ],
        {
          indexName: 'index_first_entry_sound_effects_key',
        },
      ),
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
      ),
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
      ),
      queryInterface.addIndex(
        'zana_quests',
        [
          {
            attribute: 'quest_key',
          },
        ],
        {
          indexName: 'index_quest_key',
        },
      ),
    ]);
  },
  down: async queryInterface => {
    await Promise.all([
      queryInterface.removeIndex('zana_quests', 'index_quest_key'),
      queryInterface.removeIndex(
        'world_areas',
        'index_twinned_full_clear_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'world_areas',
        'index_parent_town_world_areas_key',
      ),
      queryInterface.removeIndex(
        'world_areas',
        'index_first_entry_sound_effects_key',
      ),
      queryInterface.removeIndex(
        'world_areas',
        'index_first_entry_npc_text_audio_key',
      ),
      queryInterface.removeIndex('world_areas', 'index_first_entry_np_cs_key'),
      queryInterface.removeIndex('world_areas', 'index_environments_key'),
      queryInterface.removeIndex(
        'world_areas',
        'index_enter_achievement_items_key',
      ),
      queryInterface.removeIndex('world_areas', 'index_achievement_items_key'),
      queryInterface.removeIndex(
        'world_area__waypoint_activation__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'world_area__vaal_area__world_areas',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'world_area__topologies',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('world_area__tags', 'composite primary_alias'),
      queryInterface.removeIndex(
        'world_area__spawn_weight__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'world_area__monsters__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('world_area__mods', 'composite primary_alias'),
      queryInterface.removeIndex(
        'world_area__full_clear__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'world_area__connections__world_areas',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'world_area__completion__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'world_area__bosses__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'world_area__area_type__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'word__spawn_weight__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('weapon_types', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'warbands_pack_monster__tier4__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'warbands_pack_monster__tier3__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'warbands_pack_monster__tier2__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'warbands_pack_monster__tier1__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'warbands_map_graphs',
        'index_world_areas_key',
      ),
      queryInterface.removeIndex('warbands_graphs', 'index_world_areas_key'),
      queryInterface.removeIndex('unique_sets', 'index_words_key'),
      queryInterface.removeIndex('unique_chests', 'index_words_key'),
      queryInterface.removeIndex('unique_chests', 'index_flavour_text_key'),
      queryInterface.removeIndex('unique_chests', 'index_chests_key'),
      queryInterface.removeIndex(
        'unique_chests',
        'index_appearance_chests_key',
      ),
      queryInterface.removeIndex(
        'unique_chest__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'torment_spirits',
        'index_summoned_monster_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'torment_spirits',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'torment_spirit__touched__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'torment_spirit__spirit__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'torment_spirit__possessed__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'torment_spirit__mods1s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'torment_spirit__mods0s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('talismans', 'index_mods_key'),
      queryInterface.removeIndex('talismans', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'talisman_packs',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex('talisman_packs', 'index_monster_packs_key'),
      queryInterface.removeIndex(
        'talisman_pack__monster_packs',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'summoned_specific_monsters_on_deaths',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'summoned_specific_monsters',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'summoned_specific_barrels',
        'index_chests_key',
      ),
      queryInterface.removeIndex('strongboxes', 'index_chests_key'),
      queryInterface.removeIndex('str_missions', 'index_npc_talk_key'),
      queryInterface.removeIndex(
        'str_mission_spirit_secondary_effects',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'str_mission_spirit_effects',
        'index_summon_monster_varieties_keys',
      ),
      queryInterface.removeIndex(
        'str_mission_spirit_effects',
        'index_ground_effect_monster_varieties_keys',
      ),
      queryInterface.removeIndex('str_mission_map_mods', 'index_mods_key'),
      queryInterface.removeIndex(
        'str_mission_bosses',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'str_mission__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_int_missions',
        'index_relic_monster_varieties_key',
      ),
      queryInterface.removeIndex('str_int_missions', 'index_npc_talk_key'),
      queryInterface.removeIndex(
        'str_int_mission_relic_pattern__relic__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_int_mission_relic_mod__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_int_mission_monster_waves',
        'index_monster_packs_key',
      ),
      queryInterface.removeIndex(
        'str_int_mission_monster_wave__unique__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_int_mission__relic_mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_int_mission__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('str_dex_missions', 'index_npc_talk_key'),
      queryInterface.removeIndex(
        'str_dex_missions',
        'index_dummy_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'str_dex_mission_special_mod__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_dex_mission_mod__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_dex_mission_archetypes',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'str_dex_mission__traps__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_dex_mission__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_dex_mission__allies__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('str_dex_int_missions', 'index_npc_talk_key'),
      queryInterface.removeIndex(
        'str_dex_int_missions',
        'index_monster_packs_key',
      ),
      queryInterface.removeIndex(
        'str_dex_int_mission_unique_maps',
        'index_world_areas_key',
      ),
      queryInterface.removeIndex(
        'str_dex_int_mission_unique_map__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_dex_int_mission_unique_map__map_boss__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_dex_int_mission_mod__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_dex_int_mission_maps',
        'index_world_areas_key',
      ),
      queryInterface.removeIndex(
        'str_dex_int_mission_map__map_boss__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_dex_int_mission_extra_requirements',
        'index_npc_talk_key',
      ),
      queryInterface.removeIndex(
        'str_dex_int_mission__extra__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'str_dex_int_mission__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('stats', 'index_off_hand_alias_stats_key'),
      queryInterface.removeIndex('stats', 'index_main_hand_alias_stats_key'),
      queryInterface.removeIndex(
        'skill_totem_variations',
        'index_skill_totems_key',
      ),
      queryInterface.removeIndex(
        'skill_totem_variations',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'skill_gems',
        'index_vaal_variant_base_item_types_key',
      ),
      queryInterface.removeIndex('skill_gems', 'index_granted_effects_key'),
      queryInterface.removeIndex('skill_gems', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'skill_gem__gem_tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'shrines',
        'index_summon_player_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'shrines',
        'index_summon_monster_monster_varieties_key',
      ),
      queryInterface.removeIndex('shrines', 'index_shrine_sounds_key'),
      queryInterface.removeIndex('shrines', 'index_player_shrine_buffs_key'),
      queryInterface.removeIndex('shrines', 'index_monster_shrine_buffs_key'),
      queryInterface.removeIndex('shrine_buffs', 'index_buff_definitions_key'),
      queryInterface.removeIndex(
        'shrine__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'shop_payment_packages',
        'index_upgrade_shop_payment_package_key',
      ),
      queryInterface.removeIndex(
        'shop_payment_package_prices',
        'index_shop_payment_package_key',
      ),
      queryInterface.removeIndex(
        'shop_payment_package_prices',
        'index_shop_country_key',
      ),
      queryInterface.removeIndex(
        'shop_payment_package_items',
        'index_shop_token_key',
      ),
      queryInterface.removeIndex(
        'shop_payment_package_items',
        'index_shop_payment_package_key',
      ),
      queryInterface.removeIndex(
        'shop_payment_package_items',
        'index_shop_item_key',
      ),
      queryInterface.removeIndex('shop_item_prices', 'index_shop_region_key'),
      queryInterface.removeIndex('shop_item_prices', 'index_shop_item_key'),
      queryInterface.removeIndex(
        'shop_item__shop_categories',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'shop_item__package__shop_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('shop_countries', 'index_shop_currency_key'),
      queryInterface.removeIndex(
        'shop_categories',
        'index_applied_to_base_item_types_key',
      ),
      queryInterface.removeIndex('shield_types', 'index_base_item_types_key'),
      queryInterface.removeIndex('rogue_exiles', 'index_monster_varieties_key'),
      queryInterface.removeIndex('race_times', 'index_races_key'),
      queryInterface.removeIndex('race_areas', 'index_world_areas_key'),
      queryInterface.removeIndex('race_areas', 'index_races_key'),
      queryInterface.removeIndex('race_area__mods', 'composite primary_alias'),
      queryInterface.removeIndex('quest_vendor_rewards', 'index_npc_key'),
      queryInterface.removeIndex(
        'quest_vendor_reward__characters',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'quest_vendor_reward__base_item_types',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('quest_static_rewards', 'index_quest_key'),
      queryInterface.removeIndex(
        'quest_static_rewards',
        'index_client_strings_key',
      ),
      queryInterface.removeIndex(
        'quest_static_reward__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('quest_states', 'index_quest_key'),
      queryInterface.removeIndex(
        'quest_state__map_pins2s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'quest_state__map_pins1s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('quest_rewards', 'index_quest_key'),
      queryInterface.removeIndex('quest_rewards', 'index_characters_key'),
      queryInterface.removeIndex('quest_rewards', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'quest_achievements',
        'index_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'prophecy__quest_tracker__client_strings',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('prophecies', 'index_prophecy_chain_key'),
      queryInterface.removeIndex(
        'projectile_variations',
        'index_projectile_key',
      ),
      queryInterface.removeIndex('pets', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'perandus_guard__monster_packs',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'perandus_daemons',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex('perandus_chests', 'index_chests_key'),
      queryInterface.removeIndex(
        'perandus_bosses',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'path_of_endurance__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'passive_skills',
        'index_granted_buff_buff_definitions_key',
      ),
      queryInterface.removeIndex('passive_skills', 'index_ascendancy_key'),
      queryInterface.removeIndex(
        'passive_skills',
        'index_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'passive_skill__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'passive_skill__reminder__client_strings',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'passive_skill__characters',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'passive_jewel_slots',
        'index_passive_skills_key',
      ),
      queryInterface.removeIndex('pantheon_souls', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'pantheon_panel_layout__effect4__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'pantheon_panel_layout__effect3__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'pantheon_panel_layout__effect2__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'pantheon_panel_layout__effect1__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('n_p_cs', 'index_npc_shop_key'),
      queryInterface.removeIndex('n_p_cs', 'index_npc_master_key'),
      queryInterface.removeIndex('n_p_cs', 'index_npc_audio_key2'),
      queryInterface.removeIndex('n_p_cs', 'index_npc_audio_key1'),
      queryInterface.removeIndex('n_p_c_text_audios', 'index_characters_key'),
      queryInterface.removeIndex('n_p_c_talks', 'index_quest_key'),
      queryInterface.removeIndex('n_p_c_talks', 'index_npc_key'),
      queryInterface.removeIndex('n_p_c_talks', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'n_p_c_talk__prophecies',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'n_p_c_talk__n_p_c_text_audios',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'n_p_c_shop__sold_item__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'n_p_c_masters',
        'index_talisman_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'n_p_c_masters',
        'index_signature_mod_mods_key',
      ),
      queryInterface.removeIndex('n_p_c_masters', 'index_np_cs_key'),
      queryInterface.removeIndex(
        'n_p_c_master_experience_per_levels',
        'index_npc_master_key',
      ),
      queryInterface.removeIndex(
        'n_p_c_master__unknown_weight__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'n_p_c_master__signature_mod_spawn_weight__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'n_p_c_master__master_level5__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'n_p_c_master__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('mystery_boxes', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'monster_variety__weapon2__item_visual_identities',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__weapon1__item_visual_identities',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__special__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__part2__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__part1__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__monster_level80__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__mods2s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__kill_specific_monster_count2__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__kill_specific_monster_count__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__kill_rare_in_part2__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__kill_rare_in_endgame__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__kill_rare__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__granted_effects',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_variety__endgame__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_varieties',
        'index_off_hand_item_classes_key',
      ),
      queryInterface.removeIndex(
        'monster_varieties',
        'index_monster_types_key',
      ),
      queryInterface.removeIndex(
        'monster_varieties',
        'index_monster_segments_key',
      ),
      queryInterface.removeIndex(
        'monster_varieties',
        'index_monster_armours_key',
      ),
      queryInterface.removeIndex(
        'monster_varieties',
        'index_main_hand_item_classes_key',
      ),
      queryInterface.removeIndex(
        'monster_varieties',
        'index_kill_while_talisman_is_active_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'monster_varieties',
        'index_kill_while_onslaught_is_active_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'monster_varieties',
        'index_helmet_item_visual_identity_key',
      ),
      queryInterface.removeIndex(
        'monster_varieties',
        'index_back_item_visual_identity_key',
      ),
      queryInterface.removeIndex(
        'monster_types',
        'index_monster_resistances_key',
      ),
      queryInterface.removeIndex(
        'monster_type__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_spawner_overrides',
        'index_override_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'monster_spawner_overrides',
        'index_base_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'monster_pack_entries',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'monster_pack_entries',
        'index_monster_packs_key',
      ),
      queryInterface.removeIndex(
        'monster_pack__world_areas',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_pack__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_pack__boss_monster__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'monster_map_difficulties',
        'index_stats_key4',
      ),
      queryInterface.removeIndex(
        'monster_map_difficulties',
        'index_stats_key3',
      ),
      queryInterface.removeIndex(
        'monster_map_difficulties',
        'index_stats_key2',
      ),
      queryInterface.removeIndex(
        'monster_map_difficulties',
        'index_stats_key1',
      ),
      queryInterface.removeIndex(
        'monster_map_boss_difficulties',
        'index_stats_key4',
      ),
      queryInterface.removeIndex(
        'monster_map_boss_difficulties',
        'index_stats_key3',
      ),
      queryInterface.removeIndex(
        'monster_map_boss_difficulties',
        'index_stats_key2',
      ),
      queryInterface.removeIndex(
        'monster_map_boss_difficulties',
        'index_stats_key1',
      ),
      queryInterface.removeIndex(
        'monster_group_entries',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'monster_additional_monster_drops',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex('mods', 'index_stats_key5'),
      queryInterface.removeIndex('mods', 'index_stats_key4'),
      queryInterface.removeIndex('mods', 'index_stats_key3'),
      queryInterface.removeIndex('mods', 'index_stats_key2'),
      queryInterface.removeIndex('mods', 'index_stats_key1'),
      queryInterface.removeIndex('mods', 'index_mod_type_key'),
      queryInterface.removeIndex('mods', 'index_granted_effects_per_level_key'),
      queryInterface.removeIndex('mods', 'index_buff_definitions_key'),
      queryInterface.removeIndex('mods', 'index_achievement_items_key'),
      queryInterface.removeIndex(
        'mod_type__mod_sell_prices',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'mod_sell_prices',
        'index_mod_sell_price_types_key',
      ),
      queryInterface.removeIndex(
        'mod_sell_price__base_item_types',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('mod__tags', 'composite primary_alias'),
      queryInterface.removeIndex(
        'mod__spawn_weight__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'mod__generation_weight__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('mission_tile_maps', 'index_npc_master_key'),
      queryInterface.removeIndex(
        'mission_tile_maps',
        'index_mission_transition_tiles_key',
      ),
      queryInterface.removeIndex(
        'mission_tile_map__world_areas',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'misc_object__preload_groups',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'misc_beam__preload_groups',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'misc_animated__preload_groups',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'microtransaction_social_frame_variations',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'microtransaction_portal_variations',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'microtransaction_fireworks_variations',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'micro_migration_data',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex('master_act_weights', 'index_npc_master_key'),
      queryInterface.removeIndex('maps', 'index_unique_world_areas_key'),
      queryInterface.removeIndex('maps', 'index_shaped_base_maps_key'),
      queryInterface.removeIndex('maps', 'index_regular_world_areas_key'),
      queryInterface.removeIndex('maps', 'index_maps_key3'),
      queryInterface.removeIndex('maps', 'index_maps_key2'),
      queryInterface.removeIndex('maps', 'index_maps_key1'),
      queryInterface.removeIndex(
        'maps',
        'index_map_upgrade_base_item_types_key',
      ),
      queryInterface.removeIndex('maps', 'index_base_item_types_key'),
      queryInterface.removeIndex('map_pins', 'index_waypoint_world_areas_key'),
      queryInterface.removeIndex(
        'map_pin__world_areas',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('map_inhabitants', 'index_stats_key'),
      queryInterface.removeIndex(
        'map_inhabitant__monster_packs',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('map_device_recipes', 'index_world_areas_key'),
      queryInterface.removeIndex(
        'map_device_recipe__base_item_types',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('map_connections', 'index_map_pins_key1'),
      queryInterface.removeIndex('map_connections', 'index_map_pins_key0'),
      queryInterface.removeIndex(
        'map__monster_packs',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'map__higher_tier_maps__base_item_types',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'labyrinth_trinkets',
        'index_labyrinth_secrets_key',
      ),
      queryInterface.removeIndex(
        'labyrinth_trinkets',
        'index_buff_buff_definitions_key',
      ),
      queryInterface.removeIndex(
        'labyrinth_trinkets',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'labyrinth_trials',
        'index_npc_text_audio_key',
      ),
      queryInterface.removeIndex(
        'labyrinth_section_layouts',
        'index_labyrinth_section_key',
      ),
      queryInterface.removeIndex(
        'labyrinth_section_layouts',
        'index_labyrinth_secrets_key1',
      ),
      queryInterface.removeIndex(
        'labyrinth_section_layouts',
        'index_labyrinth_secrets_key0',
      ),
      queryInterface.removeIndex(
        'labyrinth_section_layouts',
        'index_labyrinth_areas_key',
      ),
      queryInterface.removeIndex(
        'labyrinth_section_layout__labyrinth_section_layouts',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'labyrinth_section_layout__labyrinth_node_overrides',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'labyrinth_secrets',
        'index_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'labyrinth_secret_effects',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'labyrinth_secret_effects',
        'index_buff_buff_definitions_key',
      ),
      queryInterface.removeIndex(
        'labyrinth_secret__labyrinth_secret_effects3s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'labyrinth_secret__labyrinth_secret_effects2s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'labyrinth_secret__labyrinth_secret_effects1s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'labyrinth_secret__labyrinth_secret_effects0s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'labyrinth_rewards',
        'index_labyrinth_reward_types_key',
      ),
      queryInterface.removeIndex('labyrinth_rewards', 'index_chests_key'),
      queryInterface.removeIndex('labyrinth_izaro_chests', 'index_chests_key'),
      queryInterface.removeIndex(
        'labyrinth_area__normal__world_areas',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'labyrinth_area__merciless__world_areas',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'labyrinth_area__endgame__world_areas',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'labyrinth_area__cruel__world_areas',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'killstreak_thresholds',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'killstreak_thresholds',
        'index_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'itemised_visual_effects',
        'index_item_visual_identity_key2',
      ),
      queryInterface.removeIndex(
        'itemised_visual_effects',
        'index_item_visual_identity_key1',
      ),
      queryInterface.removeIndex(
        'itemised_visual_effects',
        'index_item_visual_effect_key',
      ),
      queryInterface.removeIndex(
        'itemised_visual_effects',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'item_visual_identity__pickup__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'item_visual_identity__identify__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'item_visual_identity__corrupt__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'item_visual_identities',
        'index_sound_effects_key',
      ),
      queryInterface.removeIndex(
        'item_visual_identities',
        'index_create_corrupted_jewel_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'item_experience_per_levels',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'invasion_monsters_per_areas',
        'index_world_areas_key',
      ),
      queryInterface.removeIndex(
        'invasion_monsters_per_area__monster_varieties2s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'invasion_monsters_per_area__monster_varieties1s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'invasion_monster_restrictions',
        'index_world_areas_key',
      ),
      queryInterface.removeIndex(
        'invasion_monster_restriction__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('int_missions', 'index_npc_talk_key'),
      queryInterface.removeIndex('int_missions', 'index_monster_varieties_key'),
      queryInterface.removeIndex(
        'int_mission_monster__objective__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'int_mission_monster__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'int_mission_mods',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'int_mission_mod__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('hideouts', 'index_small_world_areas_key'),
      queryInterface.removeIndex('hideouts', 'index_npc_master_key'),
      queryInterface.removeIndex('hideouts', 'index_medium_world_areas_key'),
      queryInterface.removeIndex('hideouts', 'index_large_world_areas_key'),
      queryInterface.removeIndex('hideout_doodads', 'index_npc_master_key'),
      queryInterface.removeIndex(
        'hideout_doodads',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex('harbingers', 'index_monster_varieties_key'),
      queryInterface.removeIndex('harbinger_maps', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'granted_effects_per_levels',
        'index_granted_effects_key',
      ),
      queryInterface.removeIndex(
        'granted_effects_per_level__stats2s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'granted_effects_per_level__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'granted_effects_per_level__quality__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'granted_effects_per_level__effectiveness_cost_constants',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('granted_effects', 'index_active_skills_key'),
      queryInterface.removeIndex(
        'grandmaster__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('flasks', 'index_buff_definitions_key'),
      queryInterface.removeIndex('flasks', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'exploding_storm_buffs',
        'index_misc_objects_key',
      ),
      queryInterface.removeIndex(
        'exploding_storm_buffs',
        'index_misc_animated_key',
      ),
      queryInterface.removeIndex(
        'exploding_storm_buffs',
        'index_friendly_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'exploding_storm_buffs',
        'index_enemy_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'exploding_storm_buffs',
        'index_buff_visuals_key',
      ),
      queryInterface.removeIndex(
        'exploding_storm_buffs',
        'index_buff_definitions_key2',
      ),
      queryInterface.removeIndex(
        'exploding_storm_buffs',
        'index_buff_definitions_key1',
      ),
      queryInterface.removeIndex(
        'event_season_rewards',
        'index_event_season_key',
      ),
      queryInterface.removeIndex('essences', 'index_wand_mods_key'),
      queryInterface.removeIndex('essences', 'index_shield2_mods_key'),
      queryInterface.removeIndex('essences', 'index_shield1_mods_key'),
      queryInterface.removeIndex('essences', 'index_ring_mods_key'),
      queryInterface.removeIndex('essences', 'index_ranged_mods_key'),
      queryInterface.removeIndex('essences', 'index_quiver_mods_key'),
      queryInterface.removeIndex('essences', 'index_mods_key43'),
      queryInterface.removeIndex('essences', 'index_mods_key41'),
      queryInterface.removeIndex('essences', 'index_mods_key2'),
      queryInterface.removeIndex('essences', 'index_mods_key15'),
      queryInterface.removeIndex('essences', 'index_mods_key14'),
      queryInterface.removeIndex('essences', 'index_mods_key13'),
      queryInterface.removeIndex('essences', 'index_mods_key1'),
      queryInterface.removeIndex('essences', 'index_helmet2_mods_key'),
      queryInterface.removeIndex('essences', 'index_helmet1_mods_key'),
      queryInterface.removeIndex('essences', 'index_gloves2_mods_key'),
      queryInterface.removeIndex('essences', 'index_gloves1_mods_key'),
      queryInterface.removeIndex('essences', 'index_essence_type_key'),
      queryInterface.removeIndex('essences', 'index_bow_mods_key'),
      queryInterface.removeIndex('essences', 'index_boots3_mods_key'),
      queryInterface.removeIndex('essences', 'index_boots2_mods_key'),
      queryInterface.removeIndex('essences', 'index_boots1_mods_key'),
      queryInterface.removeIndex('essences', 'index_body_armour2_mods_key'),
      queryInterface.removeIndex('essences', 'index_body_armour1_mods_key'),
      queryInterface.removeIndex('essences', 'index_belt3_mods_key'),
      queryInterface.removeIndex('essences', 'index_belt2_mods_key'),
      queryInterface.removeIndex('essences', 'index_belt1_mods_key'),
      queryInterface.removeIndex('essences', 'index_base_item_types_key'),
      queryInterface.removeIndex('essences', 'index_amulet2_mods_key'),
      queryInterface.removeIndex('essences', 'index_amulet1_mods_key'),
      queryInterface.removeIndex('essences', 'index_2_hand_mods_key5'),
      queryInterface.removeIndex('essences', 'index_2_hand_mods_key4'),
      queryInterface.removeIndex('essences', 'index_2_hand_mods_key3'),
      queryInterface.removeIndex('essences', 'index_2_hand_mods_key2'),
      queryInterface.removeIndex('essences', 'index_2_hand_mods_key1'),
      queryInterface.removeIndex('essences', 'index_1_hand_mods_key9'),
      queryInterface.removeIndex('essences', 'index_1_hand_mods_key8'),
      queryInterface.removeIndex('essences', 'index_1_hand_mods_key7'),
      queryInterface.removeIndex('essences', 'index_1_hand_mods_key6'),
      queryInterface.removeIndex('essences', 'index_1_hand_mods_key5'),
      queryInterface.removeIndex('essences', 'index_1_hand_mods_key4'),
      queryInterface.removeIndex('essences', 'index_1_hand_mods_key3'),
      queryInterface.removeIndex('essences', 'index_1_hand_mods_key2'),
      queryInterface.removeIndex('essences', 'index_1_hand_mods_key1'),
      queryInterface.removeIndex('essence_types', 'index_words_key'),
      queryInterface.removeIndex(
        'essence_stash_tab_layouts',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'essence__monster__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'environments',
        'index_environment_transitions_key',
      ),
      queryInterface.removeIndex(
        'environment__musics',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'environment__corrupted__musics',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'endless_ledge_chests',
        'index_world_areas_key',
      ),
      queryInterface.removeIndex(
        'endless_ledge_chest__base_item_types',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('eclipse_mods', 'index_mods_key'),
      queryInterface.removeIndex(
        'eclipse_mod__spawn_weight__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'divination_card_stash_tab_layouts',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'divination_card_arts',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'display_minion_monster_types',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex('dex_mission_trackings', 'index_npc_talk_key'),
      queryInterface.removeIndex(
        'dex_mission_monsters',
        'index_boss_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'dex_mission_monster__monster_varieties',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'dex_mission_monster__monster_packs',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('dex_mission_mods', 'index_mods_key'),
      queryInterface.removeIndex('dex_int_missions', 'index_npc_talk_key'),
      queryInterface.removeIndex(
        'dex_int_missions',
        'index_hostage_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'dex_int_mission_targets',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'dex_int_mission_guards',
        'index_monster_packs_key',
      ),
      queryInterface.removeIndex(
        'dex_int_mission__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_starter_chests',
        'index_world_areas_key',
      ),
      queryInterface.removeIndex(
        'descent_starter_chests',
        'index_characters_key',
      ),
      queryInterface.removeIndex(
        'descent_starter_chests',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'descent_reward_chests',
        'index_world_areas_key',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types9s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types8s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types7s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types6s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types5s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types4s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types3s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types2s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types1s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types14s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types13s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types12s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types11s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'descent_reward_chest__base_item_types10s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('descent_exiles', 'index_world_areas_key'),
      queryInterface.removeIndex(
        'descent_exiles',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex('descent_exiles', 'index_characters_key'),
      queryInterface.removeIndex('dances', 'index_characters_key'),
      queryInterface.removeIndex('dances', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'daily_overrides',
        'index_daily_missions_keys',
      ),
      queryInterface.removeIndex('daily_missions', 'index_pvp_types_key'),
      queryInterface.removeIndex('daily_missions', 'index_npc_talk_key'),
      queryInterface.removeIndex(
        'daily_mission__characters',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'currency_stash_tab_layouts',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'currency_items',
        'index_possession_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'currency_items',
        'index_full_stack_base_item_types_key',
      ),
      queryInterface.removeIndex('currency_items', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'currency_item__usage__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'crafting_bench_options',
        'index_npc_master_key',
      ),
      queryInterface.removeIndex('crafting_bench_options', 'index_mods_key'),
      queryInterface.removeIndex(
        'crafting_bench_option__item_classes',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'crafting_bench_option__cost__base_item_types',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'component_charges',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'component_attribute_requirements',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'component_armours',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'clone_shot_variations',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex(
        'chests',
        'index_encounter_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'chests',
        'index_currency_use_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'chests',
        'index_corrupt_achievement_items_key',
      ),
      queryInterface.removeIndex('chests', 'index_chest_effects_key'),
      queryInterface.removeIndex('chests', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'chest_cluster__chests',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('chest__tags', 'composite primary_alias'),
      queryInterface.removeIndex('chest__mods', 'composite primary_alias'),
      queryInterface.removeIndex(
        'characters',
        'index_start_weapon_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'characters',
        'index_start_skill_gem_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'character_start_states',
        'index_characters_key',
      ),
      queryInterface.removeIndex(
        'character_start_states',
        'index_character_start_state_set_key',
      ),
      queryInterface.removeIndex(
        'character_start_state__passive_skills',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_start_state__character_start_quest_states',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_start_quest_state__quests',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_start_quest_state__map_pins',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_start_items',
        'index_character_start_states_key',
      ),
      queryInterface.removeIndex(
        'character_start_items',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'character_start_item__socketed__skill_gems',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_start_item__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_panel_stats',
        'index_character_panel_tabs_key',
      ),
      queryInterface.removeIndex(
        'character_panel_stats',
        'index_character_panel_description_modes_key',
      ),
      queryInterface.removeIndex(
        'character_panel_stat__stats3s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_panel_stat__stats2s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_panel_stat__stats1s',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_audio_event__witch__character_text_audios',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_audio_event__templar__character_text_audios',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_audio_event__shadow__character_text_audios',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_audio_event__scion__character_text_audios',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_audio_event__ranger__character_text_audios',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_audio_event__marauder__character_text_audios',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_audio_event__jack_the_axe__character_text_audios',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_audio_event__goddess__character_text_audios',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'character_audio_event__duelist__character_text_audios',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('buff_visuals', 'index_misc_animated_key2'),
      queryInterface.removeIndex('buff_visuals', 'index_misc_animated_key'),
      queryInterface.removeIndex(
        'buff_visual__preload_groups',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('buff_definitions', 'index_maximum_stats_key'),
      queryInterface.removeIndex('buff_definitions', 'index_current_stats_key'),
      queryInterface.removeIndex('buff_definitions', 'index_buff_visuals_key'),
      queryInterface.removeIndex(
        'buff_definition__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('bloodlines', 'index_monster_varieties_key'),
      queryInterface.removeIndex('bloodlines', 'index_buff_definitions_key'),
      queryInterface.removeIndex(
        'bloodline__spawn_weight__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('bloodline__mods', 'composite primary_alias'),
      queryInterface.removeIndex(
        'bloodline__item_weight__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'beyond_demons',
        'index_monster_varieties_key',
      ),
      queryInterface.removeIndex('base_item_types', 'index_sound_effects_key'),
      queryInterface.removeIndex(
        'base_item_types',
        'index_item_visual_identity_key',
      ),
      queryInterface.removeIndex('base_item_types', 'index_item_classes_key'),
      queryInterface.removeIndex('base_item_types', 'index_flavour_text_key'),
      queryInterface.removeIndex(
        'base_item_types',
        'index_equip_achievement_items_key',
      ),
      queryInterface.removeIndex(
        'base_item_type__vendor_recipe__achievement_items',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'base_item_type__unique_purchase__base_item_types',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'base_item_type__tags',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'base_item_type__rare_purchase__base_item_types',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'base_item_type__normal_purchase__base_item_types',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'base_item_type__magic_purchase__base_item_types',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'base_item_type__implicit__mods',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('atlas_quest_items', 'index_world_areas_key'),
      queryInterface.removeIndex(
        'atlas_quest_items',
        'index_base_item_types_key',
      ),
    ]);
    await Promise.all([
      queryInterface.removeIndex('atlas_nodes', 'index_world_areas_key'),
      queryInterface.removeIndex(
        'atlas_nodes',
        'index_shaped_item_visual_identity_key',
      ),
      queryInterface.removeIndex(
        'atlas_nodes',
        'index_default_item_visual_identity_key',
      ),
      queryInterface.removeIndex(
        'atlas_node__atlas_nodes',
        'composite primary_alias',
      ),
      queryInterface.removeIndex('ascendancies', 'index_characters_key'),
      queryInterface.removeIndex('armour_types', 'index_base_item_types_key'),
      queryInterface.removeIndex(
        'active_skill__weapon_restriction__item_classes',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'active_skill__output__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'active_skill__input__stats',
        'composite primary_alias',
      ),
      queryInterface.removeIndex(
        'achievements',
        'index_achievement_sets_display_key',
      ),
      queryInterface.removeIndex(
        'achievement_set_rewards',
        'index_base_item_types_key',
      ),
      queryInterface.removeIndex(
        'achievement_set_rewards',
        'index_achievement_sets_display_key',
      ),
      queryInterface.removeIndex('achievement_items', 'index_achievements_key'),
      queryInterface.dropTable('zana_quests'),
      queryInterface.dropTable('x_p_per_level_for_missions'),
      queryInterface.dropTable(
        'world_area__waypoint_activation__achievement_items',
      ),
      queryInterface.dropTable('world_area__vaal_area__world_areas'),
      queryInterface.dropTable('world_area__topologies'),
      queryInterface.dropTable('world_area__tags'),
      queryInterface.dropTable('world_area__spawn_weight__tags'),
      queryInterface.dropTable('world_area__monsters__monster_varieties'),
      queryInterface.dropTable('world_area__mods'),
      queryInterface.dropTable('world_area__full_clear__achievement_items'),
      queryInterface.dropTable('world_area__connections__world_areas'),
      queryInterface.dropTable('world_area__completion__achievement_items'),
      queryInterface.dropTable('world_area__bosses__monster_varieties'),
      queryInterface.dropTable('world_area__area_type__tags'),
      queryInterface.dropTable('world_areas'),
      queryInterface.dropTable('wordlists'),
      queryInterface.dropTable('word__spawn_weight__tags'),
      queryInterface.dropTable('words'),
      queryInterface.dropTable('weapon_types'),
      queryInterface.dropTable('weapon_sound_types'),
      queryInterface.dropTable('weapon_impact_sound_data'),
      queryInterface.dropTable('weapon_damage_scalings'),
      queryInterface.dropTable('weapon_classes'),
      queryInterface.dropTable('weapon_armour_commons'),
      queryInterface.dropTable('warbands_pack_numbers'),
      queryInterface.dropTable(
        'warbands_pack_monster__tier4__monster_varieties',
      ),
      queryInterface.dropTable(
        'warbands_pack_monster__tier3__monster_varieties',
      ),
      queryInterface.dropTable(
        'warbands_pack_monster__tier2__monster_varieties',
      ),
      queryInterface.dropTable(
        'warbands_pack_monster__tier1__monster_varieties',
      ),
      queryInterface.dropTable('warbands_pack_monsters'),
      queryInterface.dropTable('warbands_map_graphs'),
      queryInterface.dropTable('warbands_graphs'),
      queryInterface.dropTable('vote_types'),
      queryInterface.dropTable('vote_states'),
      queryInterface.dropTable('unique_set_names'),
      queryInterface.dropTable('unique_sets'),
      queryInterface.dropTable('unique_jewel_limits'),
      queryInterface.dropTable('unique_fragments'),
      queryInterface.dropTable('unique_chest__mods'),
      queryInterface.dropTable('unique_chests'),
      queryInterface.dropTable('tutorials'),
      queryInterface.dropTable('trigger_spawners'),
      queryInterface.dropTable('torment_spirit__touched__mods'),
      queryInterface.dropTable('torment_spirit__spirit__mods'),
      queryInterface.dropTable('torment_spirit__possessed__mods'),
      queryInterface.dropTable('torment_spirit__mods1s'),
      queryInterface.dropTable('torment_spirit__mods0s'),
      queryInterface.dropTable('torment_spirits'),
      queryInterface.dropTable('topologies'),
      queryInterface.dropTable('tips'),
      queryInterface.dropTable('terrain_plugins'),
      queryInterface.dropTable('talisman_pack__monster_packs'),
      queryInterface.dropTable('talisman_packs'),
      queryInterface.dropTable('talisman_monster_mods'),
      queryInterface.dropTable('talismans'),
      queryInterface.dropTable('tags'),
      queryInterface.dropTable('supporter_pack_sets'),
      queryInterface.dropTable('summoned_specific_monsters_on_deaths'),
      queryInterface.dropTable('summoned_specific_monsters'),
      queryInterface.dropTable('summoned_specific_barrels'),
      queryInterface.dropTable('strongboxes'),
      queryInterface.dropTable('str_mission_spirit_secondary_effects'),
      queryInterface.dropTable('str_mission_spirit_effects'),
      queryInterface.dropTable('str_mission_map_mod_numbers'),
      queryInterface.dropTable('str_mission_map_mods'),
      queryInterface.dropTable('str_mission__mods'),
      queryInterface.dropTable('str_mission_bosses'),
      queryInterface.dropTable('str_missions'),
      queryInterface.dropTable('str_int_mission_relic_pattern__relic__mods'),
      queryInterface.dropTable('str_int_mission_relic_patterns'),
      queryInterface.dropTable('str_int_mission_relic_mod__mods'),
      queryInterface.dropTable('str_int_mission_relic_mods'),
      queryInterface.dropTable(
        'str_int_mission_monster_wave__unique__monster_varieties',
      ),
      queryInterface.dropTable('str_int_mission_monster_waves'),
      queryInterface.dropTable('str_int_mission__relic_mods'),
      queryInterface.dropTable('str_int_mission__achievement_items'),
      queryInterface.dropTable('str_int_missions'),
      queryInterface.dropTable('str_dex_mission_special_mod__mods'),
      queryInterface.dropTable('str_dex_mission_special_mods'),
      queryInterface.dropTable('str_dex_mission_mod__mods'),
      queryInterface.dropTable('str_dex_mission_mods'),
      queryInterface.dropTable('str_dex_mission__traps__monster_varieties'),
      queryInterface.dropTable('str_dex_mission__mods'),
      queryInterface.dropTable('str_dex_mission__allies__monster_varieties'),
      queryInterface.dropTable('str_dex_mission_archetypes'),
      queryInterface.dropTable('str_dex_missions'),
      queryInterface.dropTable('str_dex_int_mission_unique_map__mods'),
      queryInterface.dropTable(
        'str_dex_int_mission_unique_map__map_boss__monster_varieties',
      ),
      queryInterface.dropTable('str_dex_int_mission_unique_maps'),
      queryInterface.dropTable('str_dex_int_mission_mod__mods'),
      queryInterface.dropTable('str_dex_int_mission_mods'),
      queryInterface.dropTable(
        'str_dex_int_mission_map__map_boss__monster_varieties',
      ),
      queryInterface.dropTable('str_dex_int_mission_maps'),
      queryInterface.dropTable('str_dex_int_mission__extra__mods'),
      queryInterface.dropTable('str_dex_int_mission__achievement_items'),
      queryInterface.dropTable('str_dex_int_mission_extra_requirements'),
      queryInterface.dropTable('str_dex_int_missions'),
      queryInterface.dropTable('stat_semantics'),
      queryInterface.dropTable('stat_interpolation_types'),
      queryInterface.dropTable('stat_description_functions'),
      queryInterface.dropTable('stats'),
      queryInterface.dropTable('sound_effects'),
      queryInterface.dropTable('skill_totem_variations'),
      queryInterface.dropTable('skill_totems'),
      queryInterface.dropTable('skill_gem__gem_tags'),
      queryInterface.dropTable('skill_gems'),
      queryInterface.dropTable('shrine_sounds'),
      queryInterface.dropTable('shrine__achievement_items'),
      queryInterface.dropTable('shrine_buffs'),
      queryInterface.dropTable('shrines'),
      queryInterface.dropTable('shop_tokens'),
      queryInterface.dropTable('shop_regions'),
      queryInterface.dropTable('shop_payment_package_prices'),
      queryInterface.dropTable('shop_payment_package_items'),
      queryInterface.dropTable('shop_payment_packages'),
      queryInterface.dropTable('shop_package_platforms'),
      queryInterface.dropTable('shop_item_prices'),
      queryInterface.dropTable('shop_item__shop_categories'),
      queryInterface.dropTable('shop_item__package__shop_items'),
      queryInterface.dropTable('shop_items'),
      queryInterface.dropTable('shop_currencies'),
      queryInterface.dropTable('shop_countries'),
      queryInterface.dropTable('shop_categories'),
      queryInterface.dropTable('shield_types'),
      queryInterface.dropTable('runic_circles'),
      queryInterface.dropTable('rogue_exiles'),
      queryInterface.dropTable('relative_importance_constants'),
      queryInterface.dropTable('realms'),
      queryInterface.dropTable('rarities'),
      queryInterface.dropTable('random_unique_monsters'),
      queryInterface.dropTable('race_times'),
      queryInterface.dropTable('race_area__mods'),
      queryInterface.dropTable('race_areas'),
      queryInterface.dropTable('races'),
      queryInterface.dropTable('quest_vendor_reward__characters'),
      queryInterface.dropTable('quest_vendor_reward__base_item_types'),
      queryInterface.dropTable('quest_vendor_rewards'),
      queryInterface.dropTable('quest_static_reward__stats'),
      queryInterface.dropTable('quest_static_rewards'),
      queryInterface.dropTable('quest_state__map_pins2s'),
      queryInterface.dropTable('quest_state__map_pins1s'),
      queryInterface.dropTable('quest_states'),
      queryInterface.dropTable('quest_rewards'),
      queryInterface.dropTable('quest_flags'),
      queryInterface.dropTable('quest_achievements'),
      queryInterface.dropTable('quests'),
      queryInterface.dropTable('prophecy_types'),
      queryInterface.dropTable('prophecy__quest_tracker__client_strings'),
      queryInterface.dropTable('prophecy_chains'),
      queryInterface.dropTable('prophecies'),
      queryInterface.dropTable('projectile_variations'),
      queryInterface.dropTable('projectiles'),
      queryInterface.dropTable('preload_priorities'),
      queryInterface.dropTable('preload_groups'),
      queryInterface.dropTable('pets'),
      queryInterface.dropTable('perandus_guard__monster_packs'),
      queryInterface.dropTable('perandus_guards'),
      queryInterface.dropTable('perandus_daemons'),
      queryInterface.dropTable('perandus_chests'),
      queryInterface.dropTable('perandus_bosses'),
      queryInterface.dropTable('per_level_values'),
      queryInterface.dropTable('path_of_endurance__mods'),
      queryInterface.dropTable('path_of_endurances'),
      queryInterface.dropTable('passive_skill__stats'),
      queryInterface.dropTable('passive_skill__reminder__client_strings'),
      queryInterface.dropTable('passive_skill__characters'),
      queryInterface.dropTable('passive_skills'),
      queryInterface.dropTable('passive_jewel_slots'),
      queryInterface.dropTable('pantheon_souls'),
      queryInterface.dropTable('pantheon_panel_layout__effect4__stats'),
      queryInterface.dropTable('pantheon_panel_layout__effect3__stats'),
      queryInterface.dropTable('pantheon_panel_layout__effect2__stats'),
      queryInterface.dropTable('pantheon_panel_layout__effect1__stats'),
      queryInterface.dropTable('pantheon_panel_layouts'),
      queryInterface.dropTable('p_v_p_types'),
      queryInterface.dropTable('orientations'),
      queryInterface.dropTable('old_map_stash_tab_layouts'),
      queryInterface.dropTable('notifications'),
      queryInterface.dropTable('n_p_c_text_audios'),
      queryInterface.dropTable('n_p_c_talk__prophecies'),
      queryInterface.dropTable('n_p_c_talk__n_p_c_text_audios'),
      queryInterface.dropTable('n_p_c_talk_categories'),
      queryInterface.dropTable('n_p_c_talks'),
      queryInterface.dropTable('n_p_c_shop__sold_item__tags'),
      queryInterface.dropTable('n_p_c_shops'),
      queryInterface.dropTable('n_p_c_master__unknown_weight__tags'),
      queryInterface.dropTable(
        'n_p_c_master__signature_mod_spawn_weight__tags',
      ),
      queryInterface.dropTable(
        'n_p_c_master__master_level5__achievement_items',
      ),
      queryInterface.dropTable('n_p_c_master__achievement_items'),
      queryInterface.dropTable('n_p_c_master_experience_per_levels'),
      queryInterface.dropTable('n_p_c_masters'),
      queryInterface.dropTable('n_p_c_audios'),
      queryInterface.dropTable('n_p_cs'),
      queryInterface.dropTable('mystery_pack_items'),
      queryInterface.dropTable('mystery_packs'),
      queryInterface.dropTable('mystery_boxes'),
      queryInterface.dropTable('music'),
      queryInterface.dropTable(
        'monster_variety__weapon2__item_visual_identities',
      ),
      queryInterface.dropTable(
        'monster_variety__weapon1__item_visual_identities',
      ),
      queryInterface.dropTable('monster_variety__tags'),
      queryInterface.dropTable('monster_variety__special__mods'),
      queryInterface.dropTable('monster_variety__part2__mods'),
      queryInterface.dropTable('monster_variety__part1__mods'),
      queryInterface.dropTable(
        'monster_variety__monster_level80__achievement_items',
      ),
      queryInterface.dropTable('monster_variety__mods2s'),
      queryInterface.dropTable('monster_variety__mods'),
      queryInterface.dropTable(
        'monster_variety__kill_specific_monster_count__achievement_items',
      ),
      queryInterface.dropTable(
        'monster_variety__kill_specific_monster_count2__achievement_items',
      ),
      queryInterface.dropTable(
        'monster_variety__kill_rare_in_part2__achievement_items',
      ),
      queryInterface.dropTable(
        'monster_variety__kill_rare_in_endgame__achievement_items',
      ),
      queryInterface.dropTable('monster_variety__kill_rare__achievement_items'),
      queryInterface.dropTable('monster_variety__granted_effects'),
      queryInterface.dropTable('monster_variety__endgame__mods'),
      queryInterface.dropTable('monster_varieties'),
      queryInterface.dropTable('monster_type__tags'),
      queryInterface.dropTable('monster_types'),
      queryInterface.dropTable('monster_spawner_overrides'),
      queryInterface.dropTable('monster_sizes'),
      queryInterface.dropTable('monster_segments'),
      queryInterface.dropTable('monster_scaling_by_levels'),
      queryInterface.dropTable('monster_resistances'),
      queryInterface.dropTable('monster_pack__world_areas'),
      queryInterface.dropTable('monster_pack__tags'),
      queryInterface.dropTable('monster_pack__boss_monster__monster_varieties'),
      queryInterface.dropTable('monster_pack_entries'),
      queryInterface.dropTable('monster_packs'),
      queryInterface.dropTable('monster_map_difficulties'),
      queryInterface.dropTable('monster_map_boss_difficulties'),
      queryInterface.dropTable('monster_group_names'),
      queryInterface.dropTable('monster_group_entries'),
      queryInterface.dropTable('monster_flee_conditions'),
      queryInterface.dropTable('monster_behaviors'),
      queryInterface.dropTable('monster_armours'),
      queryInterface.dropTable('monster_additional_monster_drops'),
      queryInterface.dropTable('mod_type__mod_sell_prices'),
      queryInterface.dropTable('mod_types'),
      queryInterface.dropTable('mod_sell_price_types'),
      queryInterface.dropTable('mod_sell_price__base_item_types'),
      queryInterface.dropTable('mod_sell_prices'),
      queryInterface.dropTable('mod__tags'),
      queryInterface.dropTable('mod__spawn_weight__tags'),
      queryInterface.dropTable('mod__generation_weight__tags'),
      queryInterface.dropTable('mod_generation_types'),
      queryInterface.dropTable('mod_families'),
      queryInterface.dropTable('mod_domains'),
      queryInterface.dropTable('mod_aura_flags'),
      queryInterface.dropTable('mods'),
      queryInterface.dropTable('mission_transition_tiles'),
      queryInterface.dropTable('mission_tile_map__world_areas'),
      queryInterface.dropTable('mission_tile_maps'),
      queryInterface.dropTable('misc_object__preload_groups'),
      queryInterface.dropTable('misc_objects'),
      queryInterface.dropTable('misc_beam__preload_groups'),
      queryInterface.dropTable('misc_beams'),
      queryInterface.dropTable('misc_animated__preload_groups'),
      queryInterface.dropTable('misc_animateds'),
      queryInterface.dropTable('minimap_icons'),
      queryInterface.dropTable('microtransaction_social_frame_variations'),
      queryInterface.dropTable('microtransaction_slot_ids'),
      queryInterface.dropTable('microtransaction_portal_variations'),
      queryInterface.dropTable('microtransaction_fireworks_variations'),
      queryInterface.dropTable(
        'microtransaction_character_portrait_variations',
      ),
      queryInterface.dropTable('micro_migration_data'),
      queryInterface.dropTable('master_act_weights'),
      queryInterface.dropTable('map_stash_tab_layouts'),
      queryInterface.dropTable('map_pin__world_areas'),
      queryInterface.dropTable('map_pins'),
      queryInterface.dropTable('map_inhabitant__monster_packs'),
      queryInterface.dropTable('map_inhabitants'),
      queryInterface.dropTable('map__monster_packs'),
      queryInterface.dropTable('map__higher_tier_maps__base_item_types'),
      queryInterface.dropTable('map_device_recipe__base_item_types'),
      queryInterface.dropTable('map_device_recipes'),
      queryInterface.dropTable('map_connections'),
      queryInterface.dropTable('maps'),
      queryInterface.dropTable('league_trophies'),
      queryInterface.dropTable('league_quest_flags'),
      queryInterface.dropTable('league_flags'),
      queryInterface.dropTable('league_categories'),
      queryInterface.dropTable('labyrinth_trinkets'),
      queryInterface.dropTable('labyrinth_trials'),
      queryInterface.dropTable(
        'labyrinth_section_layout__labyrinth_section_layouts',
      ),
      queryInterface.dropTable(
        'labyrinth_section_layout__labyrinth_node_overrides',
      ),
      queryInterface.dropTable('labyrinth_section_layouts'),
      queryInterface.dropTable('labyrinth_sections'),
      queryInterface.dropTable('labyrinth_secret_locations'),
      queryInterface.dropTable('labyrinth_secret__labyrinth_secret_effects3s'),
      queryInterface.dropTable('labyrinth_secret__labyrinth_secret_effects2s'),
      queryInterface.dropTable('labyrinth_secret__labyrinth_secret_effects1s'),
      queryInterface.dropTable('labyrinth_secret__labyrinth_secret_effects0s'),
      queryInterface.dropTable('labyrinth_secret_effects'),
      queryInterface.dropTable('labyrinth_secrets'),
      queryInterface.dropTable('labyrinth_reward_types'),
      queryInterface.dropTable('labyrinth_rewards'),
      queryInterface.dropTable('labyrinth_node_overrides'),
      queryInterface.dropTable('labyrinth_izaro_chests'),
      queryInterface.dropTable('labyrinth_exclusion_groups'),
      queryInterface.dropTable('labyrinth_area__normal__world_areas'),
      queryInterface.dropTable('labyrinth_area__merciless__world_areas'),
      queryInterface.dropTable('labyrinth_area__endgame__world_areas'),
      queryInterface.dropTable('labyrinth_area__cruel__world_areas'),
      queryInterface.dropTable('labyrinth_areas'),
      queryInterface.dropTable('labyrinths'),
      queryInterface.dropTable('killstreak_thresholds'),
      queryInterface.dropTable('itemised_visual_effects'),
      queryInterface.dropTable(
        'item_visual_identity__pickup__achievement_items',
      ),
      queryInterface.dropTable(
        'item_visual_identity__identify__achievement_items',
      ),
      queryInterface.dropTable(
        'item_visual_identity__corrupt__achievement_items',
      ),
      queryInterface.dropTable('item_visual_identities'),
      queryInterface.dropTable('item_visual_effects'),
      queryInterface.dropTable('item_themes'),
      queryInterface.dropTable('item_experience_per_levels'),
      queryInterface.dropTable('item_class_categories'),
      queryInterface.dropTable('item_classes'),
      queryInterface.dropTable(
        'invasion_monsters_per_area__monster_varieties2s',
      ),
      queryInterface.dropTable(
        'invasion_monsters_per_area__monster_varieties1s',
      ),
      queryInterface.dropTable('invasion_monsters_per_areas'),
      queryInterface.dropTable('invasion_monster_roles'),
      queryInterface.dropTable(
        'invasion_monster_restriction__monster_varieties',
      ),
      queryInterface.dropTable('invasion_monster_restrictions'),
      queryInterface.dropTable('invasion_monster_groups'),
      queryInterface.dropTable(
        'int_mission_monster__objective__monster_varieties',
      ),
      queryInterface.dropTable('int_mission_monster__achievement_items'),
      queryInterface.dropTable('int_mission_monsters'),
      queryInterface.dropTable('int_mission_mod__mods'),
      queryInterface.dropTable('int_mission_mods'),
      queryInterface.dropTable('int_missions'),
      queryInterface.dropTable('impact_sound_data'),
      queryInterface.dropTable('hideout_doodads'),
      queryInterface.dropTable('hideouts'),
      queryInterface.dropTable('harbinger_maps'),
      queryInterface.dropTable('harbingers'),
      queryInterface.dropTable('granted_effects_per_level__stats2s'),
      queryInterface.dropTable('granted_effects_per_level__stats'),
      queryInterface.dropTable('granted_effects_per_level__quality__stats'),
      queryInterface.dropTable(
        'granted_effects_per_level__effectiveness_cost_constants',
      ),
      queryInterface.dropTable('granted_effects_per_levels'),
      queryInterface.dropTable('granted_effect_groups'),
      queryInterface.dropTable('granted_effects'),
      queryInterface.dropTable('grandmaster__mods'),
      queryInterface.dropTable('grandmasters'),
      queryInterface.dropTable('global_audio_configs'),
      queryInterface.dropTable('gem_types'),
      queryInterface.dropTable('gem_tags'),
      queryInterface.dropTable('game_constants'),
      queryInterface.dropTable('footprints'),
      queryInterface.dropTable('flavour_text_images'),
      queryInterface.dropTable('flavour_texts'),
      queryInterface.dropTable('flask_types'),
      queryInterface.dropTable('flasks'),
      queryInterface.dropTable('extra_terrain_feature_families'),
      queryInterface.dropTable('extra_terrain_features'),
      queryInterface.dropTable('exploding_storm_buffs'),
      queryInterface.dropTable('experience_levels'),
      queryInterface.dropTable('evergreen_achievement_types'),
      queryInterface.dropTable('evergreen_achievements'),
      queryInterface.dropTable('event_season_rewards'),
      queryInterface.dropTable('event_seasons'),
      queryInterface.dropTable('essence_types'),
      queryInterface.dropTable('essence_stash_tab_layouts'),
      queryInterface.dropTable('essence__monster__mods'),
      queryInterface.dropTable('essences'),
      queryInterface.dropTable('environment_transitions'),
      queryInterface.dropTable('environment__musics'),
      queryInterface.dropTable('environment__corrupted__musics'),
      queryInterface.dropTable('environments'),
      queryInterface.dropTable('endless_ledge_chest__base_item_types'),
      queryInterface.dropTable('endless_ledge_chests'),
      queryInterface.dropTable('effectiveness_cost_constants'),
      queryInterface.dropTable('effectivenesses'),
      queryInterface.dropTable('eclipse_mod__spawn_weight__tags'),
      queryInterface.dropTable('eclipse_mods'),
      queryInterface.dropTable('drop_pools'),
      queryInterface.dropTable('drop_modifiers'),
      queryInterface.dropTable('divination_card_stash_tab_layouts'),
      queryInterface.dropTable('divination_card_arts'),
      queryInterface.dropTable('display_minion_monster_types'),
      queryInterface.dropTable('dex_mission_trackings'),
      queryInterface.dropTable('dex_mission_monster__monster_varieties'),
      queryInterface.dropTable('dex_mission_monster__monster_packs'),
      queryInterface.dropTable('dex_mission_monsters'),
      queryInterface.dropTable('dex_mission_mods'),
      queryInterface.dropTable('dex_missions'),
      queryInterface.dropTable('dex_int_mission_targets'),
      queryInterface.dropTable('dex_int_mission__achievement_items'),
      queryInterface.dropTable('dex_int_mission_guard_mods'),
      queryInterface.dropTable('dex_int_mission_guards'),
      queryInterface.dropTable('dex_int_missions'),
      queryInterface.dropTable('descent_starter_chests'),
      queryInterface.dropTable('descent_reward_chest__base_item_types9s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types8s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types7s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types6s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types5s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types4s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types3s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types2s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types14s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types13s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types12s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types11s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types10s'),
      queryInterface.dropTable('descent_reward_chest__base_item_types1s'),
      queryInterface.dropTable('descent_reward_chests'),
      queryInterface.dropTable('descent_exiles'),
      queryInterface.dropTable('default_monster_stats'),
      queryInterface.dropTable('defaults'),
      queryInterface.dropTable('daresso_pit_fights'),
      queryInterface.dropTable('dances'),
      queryInterface.dropTable('damage_particle_effects'),
      queryInterface.dropTable('daily_overrides'),
      queryInterface.dropTable('daily_mission__characters'),
      queryInterface.dropTable('daily_missions'),
      queryInterface.dropTable('currency_use_types'),
      queryInterface.dropTable('currency_stash_tab_layouts'),
      queryInterface.dropTable('currency_item__usage__achievement_items'),
      queryInterface.dropTable('currency_items'),
      queryInterface.dropTable('crafting_bench_option__item_classes'),
      queryInterface.dropTable('crafting_bench_option__cost__base_item_types'),
      queryInterface.dropTable('crafting_bench_options'),
      queryInterface.dropTable('crafting_bench_custom_actions'),
      queryInterface.dropTable('cooldown_groups'),
      queryInterface.dropTable('cooldown_bypass_types'),
      queryInterface.dropTable('component_charges'),
      queryInterface.dropTable('component_attribute_requirements'),
      queryInterface.dropTable('component_armours'),
      queryInterface.dropTable('commands'),
      queryInterface.dropTable('clone_shot_variations'),
      queryInterface.dropTable('client_strings'),
      queryInterface.dropTable('chest__tags'),
      queryInterface.dropTable('chest__mods'),
      queryInterface.dropTable('chest_effects'),
      queryInterface.dropTable('chest_cluster__chests'),
      queryInterface.dropTable('chest_clusters'),
      queryInterface.dropTable('chests'),
      queryInterface.dropTable('character_text_audios'),
      queryInterface.dropTable('character_start_state_sets'),
      queryInterface.dropTable('character_start_state__passive_skills'),
      queryInterface.dropTable(
        'character_start_state__character_start_quest_states',
      ),
      queryInterface.dropTable('character_start_states'),
      queryInterface.dropTable('character_start_quest_state__quests'),
      queryInterface.dropTable('character_start_quest_state__map_pins'),
      queryInterface.dropTable('character_start_quest_states'),
      queryInterface.dropTable('character_start_item__socketed__skill_gems'),
      queryInterface.dropTable('character_start_item__mods'),
      queryInterface.dropTable('character_start_items'),
      queryInterface.dropTable('character_panel_tabs'),
      queryInterface.dropTable('character_panel_stat__stats3s'),
      queryInterface.dropTable('character_panel_stat__stats2s'),
      queryInterface.dropTable('character_panel_stat__stats1s'),
      queryInterface.dropTable('character_panel_stat_contexts'),
      queryInterface.dropTable('character_panel_stats'),
      queryInterface.dropTable('character_panel_description_modes'),
      queryInterface.dropTable(
        'character_audio_event__witch__character_text_audios',
      ),
      queryInterface.dropTable(
        'character_audio_event__templar__character_text_audios',
      ),
      queryInterface.dropTable(
        'character_audio_event__shadow__character_text_audios',
      ),
      queryInterface.dropTable(
        'character_audio_event__scion__character_text_audios',
      ),
      queryInterface.dropTable(
        'character_audio_event__ranger__character_text_audios',
      ),
      queryInterface.dropTable(
        'character_audio_event__marauder__character_text_audios',
      ),
      queryInterface.dropTable(
        'character_audio_event__jack_the_axe__character_text_audios',
      ),
      queryInterface.dropTable(
        'character_audio_event__goddess__character_text_audios',
      ),
      queryInterface.dropTable(
        'character_audio_event__duelist__character_text_audios',
      ),
      queryInterface.dropTable('character_audio_events'),
      queryInterface.dropTable('characters'),
      queryInterface.dropTable('buff_visual_orb_types'),
      queryInterface.dropTable('buff_visual__preload_groups'),
      queryInterface.dropTable('buff_visuals'),
      queryInterface.dropTable('buff_merge_modes'),
      queryInterface.dropTable('buff_groups'),
      queryInterface.dropTable('buff_definition__stats'),
      queryInterface.dropTable('buff_definitions'),
      queryInterface.dropTable('buff_categories'),
      queryInterface.dropTable('bloodline__spawn_weight__tags'),
      queryInterface.dropTable('bloodline__mods'),
      queryInterface.dropTable('bloodline__item_weight__tags'),
      queryInterface.dropTable('bloodlines'),
      queryInterface.dropTable('blood_types'),
      queryInterface.dropTable('bindable_virtual_keys'),
      queryInterface.dropTable('beyond_demons'),
      queryInterface.dropTable(
        'base_item_type__vendor_recipe__achievement_items',
      ),
      queryInterface.dropTable(
        'base_item_type__unique_purchase__base_item_types',
      ),
      queryInterface.dropTable('base_item_type__tags'),
      queryInterface.dropTable(
        'base_item_type__rare_purchase__base_item_types',
      ),
      queryInterface.dropTable(
        'base_item_type__normal_purchase__base_item_types',
      ),
      queryInterface.dropTable(
        'base_item_type__magic_purchase__base_item_types',
      ),
      queryInterface.dropTable('base_item_type__implicit__mods'),
      queryInterface.dropTable('base_item_types'),
    ]);
    await Promise.all([
      queryInterface.dropTable('backend_errors'),
      queryInterface.dropTable('attributes'),
      queryInterface.dropTable('atlas_quest_items'),
      queryInterface.dropTable('atlas_node__atlas_nodes'),
      queryInterface.dropTable('atlas_nodes'),
      queryInterface.dropTable('ascendancies'),
      queryInterface.dropTable('armour_types'),
      queryInterface.dropTable('armour_surface_types'),
      queryInterface.dropTable('armour_classes'),
      queryInterface.dropTable('area_types'),
      queryInterface.dropTable('area_transition_infos'),
      queryInterface.dropTable('area_transition_animation_types'),
      queryInterface.dropTable('area_transition_animations'),
      queryInterface.dropTable('active_skill_types'),
      queryInterface.dropTable('active_skill_target_types'),
      queryInterface.dropTable(
        'active_skill__weapon_restriction__item_classes',
      ),
      queryInterface.dropTable('active_skill__output__stats'),
      queryInterface.dropTable('active_skill__input__stats'),
      queryInterface.dropTable('active_skills'),
      queryInterface.dropTable('achievement_sets_displays'),
      queryInterface.dropTable('achievement_set_rewards'),
      queryInterface.dropTable('achievement_sets'),
      queryInterface.dropTable('achievement_items'),
      queryInterface.dropTable('achievements'),
    ]);
  },
};
