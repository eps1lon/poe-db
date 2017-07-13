module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PassiveSkills',
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
        allowNull: false,
        $col_order: 0,
      },
      icon_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      stat1_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      stat2_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      stat3_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      stat4_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      passive_skill_graph_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      is_keystone: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      is_notable: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      flavour_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      is_just_icon: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      is_jewel_socket: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 17,
      },
      buff_related_unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 18,
      },
      buff_related_unknown1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 19,
      },
      is_ascendancy_starting_node: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 21,
      },
      skill_points_granted: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 23,
      },
      is_multiple_choice: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 24,
      },
      is_multiple_choice_option: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 25,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementItems, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 14,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItems.hasMany(model, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 14,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.BuffDefinitions, {
      foreignKey: {
        name: 'granted_buff_buff_definitions_key',
        $col_order: 16,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BuffDefinitions.hasMany(model, {
      foreignKey: {
        name: 'granted_buff_buff_definitions_key',
        $col_order: 16,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Ascendancy, {
      foreignKey: {
        name: 'ascendancy_key',
        $col_order: 20,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Ascendancy.hasMany(model, {
      foreignKey: {
        name: 'ascendancy_key',
        $col_order: 20,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Stats, {
      as: 'stats',
      through: 'PassiveSkillsStats',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Characters, {
      as: 'characters',
      through: 'PassiveSkillsCharacters',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ClientStrings, {
      as: 'reminder_client_strings',
      through: 'PassiveSkillsReminderClientStrings',
      $col_order: 22,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'PassiveSkills.dat';
  return model;
};
