const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PassiveSkills',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      icon_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      stat1_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat2_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat3_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stat4_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      passive_skill_graph_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      is_keystone: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_notable: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      flavour_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      is_just_icon: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_jewel_socket: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      buff_related_unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      buff_related_unknown1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      is_ascendancy_starting_node: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      skill_points_granted: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_multiple_choice: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_multiple_choice_option: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
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
      foreignKey: 'achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinitions, {
      foreignKey: 'granted_buff_buff_definitions_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Ascendancy, {
      foreignKey: 'ascendancy_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stats, {
      as: 'stats',
      through: 'PassiveSkillsStats',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Characters, {
      as: 'characters',
      through: 'PassiveSkillsCharacters',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ClientStrings, {
      as: 'reminder_client_strings',
      through: 'ReminderClientStrings',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
