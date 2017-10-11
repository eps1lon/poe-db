module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PassiveSkill',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      icon_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      stat1_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      stat2_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      stat3_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      stat4_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      passive_skill_graph_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      is_keystone: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      is_notable: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      flavour_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      is_just_icon: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      is_jewel_socket: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      buff_related_unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      buff_related_unknown1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 19,
      },
      is_ascendancy_starting_node: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 21,
      },
      skill_points_granted: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 23,
      },
      is_multiple_choice: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 24,
      },
      is_multiple_choice_option: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 25,
      },
      stat5_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 26,
      },
      _stats_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
      _characters_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 9,
      },
      _reminder_client_strings_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 22,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'achievement_items_key',
            },
          ],
          name: 'index_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'granted_buff_buff_definitions_key',
            },
          ],
          name: 'index_granted_buff_buff_definitions_key',
        },
        {
          fields: [
            {
              attribute: 'ascendancy_key',
            },
          ],
          name: 'index_ascendancy_key',
        },
      ],
      tableName: 'passive_skills',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_item',
      $inverse: 'passive_skills',
      $col_order: 14,
      foreignKey: {
        name: 'achievement_items_key',
        $type: 'ulong',
        $col_order: 14,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinition, {
      as: 'granted_buff_buff_definition',
      $inverse: 'passive_skills',
      $col_order: 16,
      foreignKey: {
        name: 'granted_buff_buff_definitions_key',
        $type: 'ulong',
        $col_order: 16,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Ascendancy, {
      as: 'ascendancy',
      $inverse: 'passive_skills',
      $col_order: 20,
      foreignKey: {
        name: 'ascendancy_key',
        $type: 'ulong',
        $col_order: 20,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'stats',
      through: {
        model: models.PassiveSkillHabtmStat,
        unique: false,
      },
      foreignKey: 'passive_skill_row',
      otherKey: 'stat_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Character, {
      as: 'characters',
      through: {
        model: models.PassiveSkillHabtmCharacter,
        unique: false,
      },
      foreignKey: 'passive_skill_row',
      otherKey: 'character_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ClientString, {
      as: 'reminder_client_strings',
      through: {
        model: models.PassiveSkillHabtmReminderClientstring,
        unique: false,
      },
      foreignKey: 'passive_skill_row',
      otherKey: 'client_string_row',
      $col_order: 22,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'PassiveSkills.dat';
  return model;
};
